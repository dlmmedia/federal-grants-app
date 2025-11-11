# Setup Instructions for GrantScope

## Prerequisites

You need a PostgreSQL database. The easiest option is Vercel Postgres.

## Step 1: Set Up Database

### Option A: Vercel Postgres (Recommended)

1. Go to https://vercel.com
2. Create a new project or select existing one
3. Go to Storage tab
4. Create a new Postgres database
5. Copy the `POSTGRES_URL` from the `.env.local` tab
6. Create a `.env.local` file in the `grant-scope` directory
7. Add: `POSTGRES_URL="your-connection-string-here"`

### Option B: Local PostgreSQL

1. Install PostgreSQL on your machine
2. Create a database: `createdb grantscope`
3. Create `.env.local` file in `grant-scope` directory
4. Add: `POSTGRES_URL="postgresql://username:password@localhost:5432/grantscope"`

## Step 2: Install Dependencies

```bash
cd grant-scope
npm install
```

## Step 3: Start Development Server

```bash
npm run dev
```

Server will start at http://localhost:3000

## Step 4: Seed the Database

Choose one of these methods:

### Method 1: Web Interface (Easiest)
1. Visit: http://localhost:3000/admin/seed
2. Click "Seed Database" button
3. Wait for success message

### Method 2: Command Line
```bash
curl -X POST http://localhost:3000/api/seed
```

### Method 3: From Homepage
1. Visit: http://localhost:3000
2. If no grants found, click "Seed Database" button

## Step 5: Verify Everything Works

1. **Homepage**: http://localhost:3000
   - Should see grants organized by categories
   - Try switching between category tabs

2. **Search Page**: http://localhost:3000/search
   - Click "Search" to see all grants
   - Try searching for "education"
   - Try different filters

3. **Grant Details**: Click any grant card
   - Should see full grant information
   - Try different tabs (Overview, Eligibility, Funding, etc.)

## Troubleshooting

### Issue: "Missing connection string" error
**Solution**: Make sure `POSTGRES_URL` is set in `.env.local`

### Issue: No grants showing
**Solution**: 
1. Make sure you ran the seed process
2. Check browser console for errors
3. Refresh the page

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

## What's Included

After seeding, you'll have:
- **16 sample grants** across 9 categories
- Education, Health, Environment, Energy, Community Development, Science & Technology, Agriculture, Arts, Transportation
- Full grant details including eligibility, funding, deadlines
- Working search and filter functionality
- Grant detail pages with all information

## Optional: Set Up Vercel Blob (for production)

For production deployments, you can optionally set up Vercel Blob for storing large grant data:

1. In Vercel dashboard, go to Storage
2. Create a new Blob store
3. Copy the `BLOB_READ_WRITE_TOKEN`
4. Add to `.env.local` or Vercel environment variables

Note: This is optional - grants work fine without it using database JSONB storage.

## Next Steps

1. ✅ Explore the categorized grants on homepage
2. ✅ Try searching and filtering
3. ✅ View grant details
4. ✅ Test the cart functionality
5. ✅ Try the AI application generator (requires OpenAI API key)

## Need More Help?

- See `README_SEED.md` for detailed seeding information
- See `SEEDING_GUIDE.md` for troubleshooting
- Check server console for backend errors
- Check browser console for frontend errors

## Environment Variables Summary

Required:
- `POSTGRES_URL` - PostgreSQL connection string

Optional:
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob token (for production)
- `OPENAI_API_KEY` - For AI application generation feature
- `GRANTS_GOV_API_BASE` - Custom Grants.gov API endpoint (defaults to official API)

## Quick Reference

```bash
# Start dev server
npm run dev

# Seed database
curl -X POST http://localhost:3000/api/seed

# Build for production
npm run build

# Start production server
npm start
```

That's it! You should now have a fully functional grant discovery application with sample data.

