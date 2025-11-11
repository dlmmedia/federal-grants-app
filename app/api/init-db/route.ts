import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { seedGrants } from '@/lib/seed-data';

export const runtime = 'nodejs';

// Try to import blob storage, but make it optional
let put: any = null;
try {
  const blobModule = require('@vercel/blob');
  put = blobModule.put;
} catch (e) {
  console.warn('Vercel Blob not available, will store data in database only');
}

/**
 * Database initialization and seeding endpoint
 * Call this once after deployment to set up tables and populate with sample data
 */
export async function GET() {
  try {
    console.log('Starting database initialization...');
    
    // Create opportunities table with full_data JSONB column
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
    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_status ON opportunities(status)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_agency ON opportunities(agency)`;

    console.log('Opportunities table created');

    // Create search_cache table
    await sql`
      CREATE TABLE IF NOT EXISTS search_cache (
        id SERIAL PRIMARY KEY,
        query_hash TEXT UNIQUE NOT NULL,
        result_blob_url TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_search_cache_query_hash ON search_cache(query_hash)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_search_cache_created_at ON search_cache(created_at)`;

    console.log('Search cache table created');

    // Create carts table
    await sql`
      CREATE TABLE IF NOT EXISTS carts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT DEFAULT 'My Cart',
        data JSONB DEFAULT '[]'::jsonb,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_carts_created_at ON carts(created_at)`;

    console.log('Carts table created');

    // Create generated_drafts table
    await sql`
      CREATE TABLE IF NOT EXISTS generated_drafts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        grant_id TEXT,
        organization_name TEXT,
        project_title TEXT,
        content JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_generated_drafts_grant_id ON generated_drafts(grant_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_generated_drafts_created_at ON generated_drafts(created_at)`;

    console.log('Generated drafts table created');

    // Create recently_viewed table
    await sql`
      CREATE TABLE IF NOT EXISTS recently_viewed (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id TEXT,
        grant_id TEXT,
        grant_data JSONB,
        viewed_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_recently_viewed_session_id ON recently_viewed(session_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_recently_viewed_viewed_at ON recently_viewed(viewed_at)`;

    console.log('Recently viewed table created');

    // Now seed the database with sample grants
    console.log('Starting database seeding...');
    let seededCount = 0;
    const errors: string[] = [];

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

    console.log(`Seeded ${seededCount} grants`);

    // Check the count
    const { rows } = await sql`SELECT COUNT(*) as count FROM opportunities`;
    const totalGrants = rows[0]?.count || 0;

    return NextResponse.json({
      success: true,
      message: 'Database initialized and seeded successfully',
      details: {
        tablesCreated: ['opportunities', 'search_cache', 'carts', 'generated_drafts', 'recently_viewed'],
        grantsSeeded: seededCount,
        totalGrants: parseInt(totalGrants),
        errors: errors.length > 0 ? errors : undefined,
      }
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to initialize database',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
}

