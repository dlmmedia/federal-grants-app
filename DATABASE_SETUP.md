# Database Setup Guide

This guide will help you initialize and populate the GrantScope database with sample federal grant data.

## Quick Start

### Option 1: Via Homepage (Easiest)

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit the homepage at `http://localhost:3000`

3. If the database is empty, you'll see a welcome screen with an "Initialize Database & Load Sample Grants" button

4. Click the button and wait for the process to complete

5. The page will automatically reload and display the sample grants

### Option 2: Via Admin Panel

1. Navigate to `/admin/seed` in your browser

2. Click "Initialize & Seed Database" for first-time setup

3. Or click "Reseed Grants" if tables already exist

### Option 3: Via API Endpoint

You can also initialize the database directly via the API:

```bash
# Initialize database and seed grants
curl -X POST http://localhost:3000/api/init-db

# Or just seed grants (if tables exist)
curl -X POST http://localhost:3000/api/seed
```

## What Gets Created

### Database Tables

1. **opportunities** - Stores grant opportunities with full data
   - Indexed on: grantsgov_id, status, agency, last_fetched
   - Includes JSONB column for full grant data

2. **search_cache** - Caches search results from Grants.gov API
   - Indexed on: query_hash, created_at

3. **carts** - Stores user grant carts
   - Indexed on: created_at

4. **generated_drafts** - Stores AI-generated grant applications
   - Indexed on: grant_id, created_at

5. **recently_viewed** - Tracks recently viewed grants
   - Indexed on: session_id, viewed_at

### Sample Grants

The initialization process seeds **16 sample grants** across **9 categories**:

- **Education** (2 grants)
  - STEM Education Innovation Program
  - Adult Literacy and Workforce Development

- **Health** (2 grants)
  - Community Health Centers Expansion
  - Mental Health Crisis Response Program

- **Environment** (2 grants)
  - Clean Water Infrastructure Grants
  - Environmental Justice Community Grants

- **Energy** (2 grants)
  - Renewable Energy Innovation Program
  - Energy Efficiency in Low-Income Communities

- **Community Development** (2 grants)
  - Community Development Block Grants
  - Homeless Prevention and Rapid Re-Housing

- **Science & Technology** (2 grants)
  - Advanced Computing Infrastructure
  - Research Experiences for Undergraduates

- **Agriculture** (2 grants)
  - Sustainable Agriculture Research and Education
  - Rural Business Development Grants

- **Arts** (1 grant)
  - Arts Education Programs

- **Transportation** (1 grant)
  - Safe Streets and Roads for All

## Environment Variables

Make sure you have the following environment variables configured in your `.env.local` file:

```env
# Required: Vercel Postgres connection string
POSTGRES_URL="your-postgres-connection-string"
POSTGRES_PRISMA_URL="your-postgres-prisma-url"
POSTGRES_URL_NON_POOLING="your-postgres-non-pooling-url"
POSTGRES_USER="your-postgres-user"
POSTGRES_HOST="your-postgres-host"
POSTGRES_PASSWORD="your-postgres-password"
POSTGRES_DATABASE="your-postgres-database"

# Optional: Vercel Blob storage (for caching large payloads)
BLOB_READ_WRITE_TOKEN="your-blob-token"

# Optional: Grants.gov API (for live data fetching)
GRANTS_GOV_API_BASE="https://api.grants.gov/v1/api"
```

## Troubleshooting

### Database Connection Errors

If you see database connection errors:

1. Verify your `POSTGRES_URL` environment variable is set correctly
2. Check that your Vercel Postgres database is active
3. Ensure your IP is whitelisted in Vercel's database settings

### No Grants Showing Up

If grants aren't displaying after initialization:

1. Check the browser console for errors
2. Visit `/admin/seed` to see detailed initialization results
3. Try running the initialization again
4. Check that the database tables were created successfully

### Blob Storage Errors

If you see blob storage errors (these are non-critical):

1. The app will still work without blob storage
2. Full grant data will be stored in the database JSONB column instead
3. To fix, add a `BLOB_READ_WRITE_TOKEN` to your `.env.local`

## Production Deployment

When deploying to Vercel:

1. Set up a Vercel Postgres database in your project settings
2. Add all required environment variables
3. Deploy your application
4. Visit your production URL and initialize the database via the homepage or `/admin/seed`

## API Endpoints

- `GET /api/init-db` - Initialize database and seed grants
- `POST /api/init-db` - Same as GET
- `GET /api/seed` - Get seed information
- `POST /api/seed` - Seed grants only (requires existing tables)
- `POST /api/search` - Search for grants

## Database Schema

For the complete database schema, see `sql/schema.sql` or check the initialization code in `app/api/init-db/route.ts`.

## Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Check the server logs in your terminal
3. Visit the `/admin/seed` page for detailed error messages
4. Ensure all environment variables are set correctly

