import { sql } from '@vercel/postgres';

/**
 * Initialize database tables
 * This should be run once during deployment or setup
 */
export async function initializeDatabase() {
  try {
    // Create opportunities table
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
        last_fetched TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_grantsgov_id ON opportunities(grantsgov_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_opportunities_last_fetched ON opportunities(last_fetched)`;

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

    return { success: true };
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

