import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { seedGrants } from '@/lib/seed-data';

export const runtime = 'nodejs';

// Try to import blob storage, but make it optional
let put: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const blobModule = require('@vercel/blob');
  put = blobModule.put;
} catch (e) {
  console.warn('Vercel Blob not available, will store data in database only');
}

export async function POST() {
  try {
    // First, ensure tables exist with full_data JSONB column
    await sql`
      CREATE TABLE IF NOT EXISTS opportunities (
        id SERIAL PRIMARY KEY,
        grantsgov_id TEXT UNIQUE NOT NULL,
        title TEXT,
        agency TEXT,
        status TEXT,
        open_date DATE,
        close_date DATE,
        cfda TEXT,
        summary TEXT,
        payload_blob_url TEXT,
        full_data JSONB,
        last_fetched TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_grantsgov_id ON opportunities(grantsgov_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_last_fetched ON opportunities(last_fetched)`;

    let seededCount = 0;
    const errors: string[] = [];

    // Seed each grant
    for (const grant of seedGrants) {
      try {
        // Store full payload in Vercel Blob if available
        let blobUrl = null;
        if (put) {
          try {
            const blob = await put(`opportunity-${grant.id}.json`, JSON.stringify(grant), {
              access: 'public',
            });
            blobUrl = blob.url;
          } catch (storageError) {
            console.warn(`Failed to store blob for ${grant.id}:`, storageError);
          }
        }

        // Insert into database with full data as JSONB
        await sql`
          INSERT INTO opportunities (
            grantsgov_id, title, agency, status, open_date, close_date, cfda, summary, payload_blob_url, full_data, last_fetched
          )
          VALUES (
            ${grant.id},
            ${grant.title},
            ${grant.agency},
            ${grant.status},
            ${grant.openDate},
            ${grant.closeDate},
            ${grant.cfda},
            ${grant.synopsis.synopsisDesc},
            ${blobUrl},
            ${JSON.stringify(grant)}::jsonb,
            NOW()
          )
          ON CONFLICT (grantsgov_id)
          DO UPDATE SET
            title = ${grant.title},
            agency = ${grant.agency},
            status = ${grant.status},
            open_date = ${grant.openDate},
            close_date = ${grant.closeDate},
            cfda = ${grant.cfda},
            summary = ${grant.synopsis.synopsisDesc},
            payload_blob_url = ${blobUrl},
            full_data = ${JSON.stringify(grant)}::jsonb,
            last_fetched = NOW()
        `;

        seededCount++;
      } catch (error) {
        const errorMsg = `Failed to seed ${grant.id}: ${error instanceof Error ? error.message : 'Unknown error'}`;
        console.error(errorMsg);
        errors.push(errorMsg);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${seededCount} grants`,
      total: seedGrants.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Seed API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to seed database',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST to seed the database with sample grants',
    available_grants: seedGrants.length,
  });
}

