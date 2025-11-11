# Database Seeding Guide

This guide will help you populate your GrantScope database with sample grant data.

## Prerequisites

1. **Database Setup**: Ensure you have a PostgreSQL database configured
   - Set `POSTGRES_URL` in your `.env.local` file
   - Or configure Vercel Postgres in your Vercel project

2. **Blob Storage** (Optional): For full grant data storage
   - Set `BLOB_READ_WRITE_TOKEN` in your `.env.local` file
   - Or configure Vercel Blob in your Vercel project

## Seeding Methods

### Method 1: Using the Web Interface (Recommended)

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/admin/seed`

3. Click the "Seed Database" button

4. Wait for the confirmation message

### Method 2: Using the API Endpoint

```bash
curl -X POST http://localhost:3000/api/seed
```

### Method 3: Using the Homepage

If no grants are found on the homepage, you'll see a "Seed Database" button that you can click.

## What Gets Seeded

The seeding process will populate your database with **16 sample grants** across **9 categories**:

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

## Sample Grant Details

Each grant includes:
- Unique ID and number
- Title and agency
- Status (all set to "posted")
- Open and close dates
- CFDA number
- Detailed synopsis
- Eligibility requirements
- Funding information (total, awards, ceiling, floor)
- Cost sharing requirements

## Verifying the Seed

After seeding, you can verify the data by:

1. **Homepage**: Visit `http://localhost:3000` - you should see grants organized by category
2. **Search Page**: Visit `http://localhost:3000/search` - click "Search" to see all grants
3. **Detail Page**: Click on any grant card to view full details

## Troubleshooting

### "Missing connection string" error
- Ensure `POSTGRES_URL` is set in your `.env.local` file
- Format: `postgresql://user:password@host:port/database`

### "Failed to store blob" warning
- This is optional - grants will still be seeded without blob storage
- To enable: Set `BLOB_READ_WRITE_TOKEN` in your `.env.local` file

### No grants appearing after seeding
1. Check the API response for errors
2. Verify database connection
3. Check browser console for frontend errors
4. Try refreshing the page

## Re-seeding

You can run the seed process multiple times. The system will:
- Update existing grants with the same ID
- Not create duplicates

## Custom Data

To add your own grant data:

1. Edit `/lib/seed-data.ts`
2. Add new grant objects to the `seedGrants` array
3. Follow the existing structure
4. Run the seed process again

## Production Deployment

When deploying to Vercel:

1. Ensure environment variables are set in Vercel dashboard
2. The database will be automatically seeded on first deployment
3. Or manually trigger: `curl -X POST https://your-domain.vercel.app/api/seed`

