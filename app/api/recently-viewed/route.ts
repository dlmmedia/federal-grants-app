import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const runtime = 'nodejs';

// GET - Fetch recently viewed grants
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || 'default';
    const limit = parseInt(searchParams.get('limit') || '10');

    const { rows } = await sql`
      SELECT grant_data, viewed_at
      FROM recently_viewed
      WHERE session_id = ${sessionId}
      ORDER BY viewed_at DESC
      LIMIT ${limit}
    `;

    const grants = rows.map(row => row.grant_data);

    return NextResponse.json({
      grants,
      count: grants.length,
    });
  } catch (error) {
    console.error('Recently viewed GET error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch recently viewed grants',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Track a recently viewed grant
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { grant, sessionId = 'default' } = body;

    if (!grant) {
      return NextResponse.json(
        { error: 'Grant data is required' },
        { status: 400 }
      );
    }

    const grantId = grant.grantsgov_id || grant.id || grant.number;

    if (!grantId) {
      return NextResponse.json(
        { error: 'Grant ID is required' },
        { status: 400 }
      );
    }

    // Check if already exists
    const { rows: existing } = await sql`
      SELECT id FROM recently_viewed
      WHERE session_id = ${sessionId} AND grant_id = ${grantId}
      LIMIT 1
    `;

    if (existing.length > 0) {
      // Update viewed_at timestamp
      await sql`
        UPDATE recently_viewed
        SET viewed_at = NOW()
        WHERE id = ${existing[0].id}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO recently_viewed (session_id, grant_id, grant_data, viewed_at)
        VALUES (${sessionId}, ${grantId}, ${JSON.stringify(grant)}::jsonb, NOW())
      `;
    }

    // Clean up old records (keep only last 50 per session)
    await sql`
      DELETE FROM recently_viewed
      WHERE session_id = ${sessionId}
      AND id NOT IN (
        SELECT id FROM recently_viewed
        WHERE session_id = ${sessionId}
        ORDER BY viewed_at DESC
        LIMIT 50
      )
    `;

    return NextResponse.json({
      success: true,
      message: 'Grant tracked successfully',
    });
  } catch (error) {
    console.error('Recently viewed POST error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to track grant',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

