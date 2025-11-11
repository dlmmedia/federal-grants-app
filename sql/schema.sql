-- GrantScope Database Schema for Vercel Postgres

-- Table: opportunities
-- Stores cached grant opportunity data
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
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_opportunities_grantsgov_id ON opportunities(grantsgov_id);
CREATE INDEX IF NOT EXISTS idx_opportunities_last_fetched ON opportunities(last_fetched);

-- Table: search_cache
-- Stores cached search results
CREATE TABLE IF NOT EXISTS search_cache (
  id SERIAL PRIMARY KEY,
  query_hash TEXT UNIQUE NOT NULL,
  result_blob_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster cache lookups
CREATE INDEX IF NOT EXISTS idx_search_cache_query_hash ON search_cache(query_hash);
CREATE INDEX IF NOT EXISTS idx_search_cache_created_at ON search_cache(created_at);

-- Table: carts
-- Stores user carts (anonymous, identified by UUID)
CREATE TABLE IF NOT EXISTS carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT DEFAULT 'My Cart',
  data JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster cart lookups
CREATE INDEX IF NOT EXISTS idx_carts_created_at ON carts(created_at);

