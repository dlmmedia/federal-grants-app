# Getting Started with Grant Data

This application comes with sample grant data that you can easily populate into your database.

## Quick Start

### Option 1: Web Interface (Easiest)

1. Make sure your database is configured (see below)
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit: http://localhost:3000/admin/seed
4. Click "Seed Database"
5. Wait for confirmation
6. Go to homepage to see grants organized by category!

### Option 2: API Call

```bash
curl -X POST http://localhost:3000/api/seed
```

### Option 3: From Homepage

If no grants are found, the homepage will show a "Seed Database" button you can click.

## Database Configuration

You need a PostgreSQL database. Here are your options:

### Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database
3. Add to `.env.local`:
   ```
   POSTGRES_URL="postgresql://username:password@localhost:5432/grantscope"
   ```

### Vercel Postgres (Recommended for Production)

1. Create a Vercel account
2. Create a new Postgres database in your Vercel dashboard
3. Copy the connection string
4. Add to `.env.local` for local development
5. Environment variables are automatically set in production

### Other PostgreSQL Providers

Any PostgreSQL provider works (Supabase, Railway, Neon, etc.)
Just set the `POSTGRES_URL` environment variable.

## What Gets Seeded

The seeding process populates **16 sample grants** across **9 categories**:

### Categories & Grants

1. **Education** (2 grants)
   - STEM Education Innovation Program ($50M total)
   - Adult Literacy and Workforce Development ($30M total)

2. **Health** (2 grants)
   - Community Health Centers Expansion ($75M total)
   - Mental Health Crisis Response Program ($60M total)

3. **Environment** (2 grants)
   - Clean Water Infrastructure Grants ($100M total)
   - Environmental Justice Community Grants ($40M total)

4. **Energy** (2 grants)
   - Renewable Energy Innovation Program ($80M total)
   - Energy Efficiency in Low-Income Communities ($45M total)

5. **Community Development** (2 grants)
   - Community Development Block Grants ($120M total)
   - Homeless Prevention and Rapid Re-Housing ($55M total)

6. **Science & Technology** (2 grants)
   - Advanced Computing Infrastructure ($90M total)
   - Research Experiences for Undergraduates ($35M total)

7. **Agriculture** (2 grants)
   - Sustainable Agriculture Research and Education ($40M total)
   - Rural Business Development Grants ($28M total)

8. **Arts** (1 grant)
   - Arts Education Programs ($25M total)

9. **Transportation** (1 grant)
   - Safe Streets and Roads for All ($85M total)

### Grant Details Include

Each grant has comprehensive information:
- Unique ID and opportunity number
- Title and federal agency
- Status (all set to "posted")
- Open and close dates
- CFDA number
- Detailed synopsis/description
- Eligibility requirements
- Funding instrument type
- Category of funding activity
- Estimated total program funding
- Expected number of awards
- Award ceiling and floor amounts
- Cost sharing requirements

## Features After Seeding

Once seeded, you can:

### 1. Browse by Category (Homepage)
- View grants organized by 9 different categories
- Switch between category tabs
- See all categories at once in "All Categories" view
- Each grant displayed in a card with key information

### 2. Search & Filter (Search Page)
- Search by keywords
- Filter by agency (e.g., "Education", "Health")
- Filter by status
- Filter by category
- Filter by eligibility
- Filter by funding instrument
- Pagination support

### 3. View Grant Details (Detail Page)
- Complete grant information
- Tabbed interface with:
  - Overview
  - Eligibility requirements
  - Funding information
  - Documents (when available)
  - Application checklist
- Add to cart functionality
- Generate application with AI
- Download checklist as PDF

## Testing the Application

After seeding, try these workflows:

### Test 1: Browse Categories
1. Go to homepage
2. See grants organized by category
3. Click category tabs to filter
4. Click "View Details" on any grant

### Test 2: Search
1. Go to /search
2. Click "Search" (no filters) to see all grants
3. Try searching for "education"
4. Try filtering by agency "Department of Education"
5. Try different category filters

### Test 3: View Details
1. Click on any grant card
2. Explore all tabs (Overview, Eligibility, Funding, etc.)
3. Try "Add to Cart"
4. Try "Generate Application"
5. Try "Download Checklist"

## Troubleshooting

### "Missing connection string" error
**Problem**: No database configured
**Solution**: Set `POSTGRES_URL` in `.env.local`

### No grants showing after seeding
**Problem**: Frontend not fetching data
**Solution**: 
1. Check browser console for errors
2. Refresh the page
3. Check that seed was successful (should see success message)
4. Verify database has data

### Seed fails silently
**Problem**: Database connection or permission issues
**Solution**:
1. Check database connection string
2. Verify database user has CREATE TABLE permissions
3. Check server logs for detailed errors

### Grants show but no details
**Problem**: Full data not loading
**Solution**: This is expected - full data is stored in JSONB column and should load automatically

## Re-seeding

You can run the seed process multiple times safely:
- Existing grants will be updated (not duplicated)
- Uses `ON CONFLICT` to handle duplicates
- Safe to run in production

## Custom Data

Want to add your own grants?

1. Edit `/lib/seed-data.ts`
2. Add new grant objects to `seedGrants` array
3. Follow the existing structure
4. Run seed process again

Example:
```typescript
{
  id: 'CUSTOM-2024-001',
  number: 'CUSTOM-2024-001',
  title: 'My Custom Grant',
  agency: 'My Agency',
  status: 'posted',
  openDate: '2024-01-01',
  closeDate: '2025-12-31',
  // ... rest of fields
}
```

## Production Deployment

When deploying to Vercel:

1. Set up Vercel Postgres in your project
2. Environment variables are automatically configured
3. After first deployment, seed the database:
   ```bash
   curl -X POST https://your-app.vercel.app/api/seed
   ```
4. Or visit: https://your-app.vercel.app/admin/seed

## Next Steps

After seeding:
1. ✅ Browse grants by category on homepage
2. ✅ Search and filter grants
3. ✅ View detailed grant information
4. ✅ Test the cart functionality
5. ✅ Try the AI application generator
6. ✅ Download checklists

## Need Help?

- Check `SEEDING_GUIDE.md` for detailed instructions
- Review server logs for errors
- Check browser console for frontend issues
- Verify database connection and permissions

