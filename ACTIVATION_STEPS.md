# 🚀 Activation Steps - Your Storage is Almost Ready!

## Current Status ✅

I've successfully pulled your environment variables from Vercel. Here's what's configured:

### ✅ Already Connected:
- **Blob Storage** - `BLOB_READ_WRITE_TOKEN` is configured
- **Edge Config** - `EDGE_CONFIG` is configured  
- **OpenAI API** - `OPENAI_API_KEY` is configured
- **Grants.gov API** - `GRANTS_GOV_API_BASE` is configured

### ⚠️ Missing:
- **Postgres Database** - Environment variables not detected yet

## Next Steps

### Step 1: Verify Postgres Connection in Vercel Dashboard

1. Go to: https://vercel.com/albertmusic102-4703s-projects/grant-scope/stores
2. Check if you see a **Postgres** database listed
3. If you see it, click on it and verify it's connected to your project

### Step 2A: If Postgres Shows as Connected

The environment variables might just need a moment to propagate. Try:

```bash
cd grant-scope

# Wait a minute, then pull again
npx vercel env pull .env.local --environment=development

# Check if POSTGRES_URL is now present
cat .env.local | grep POSTGRES
```

### Step 2B: If Postgres is NOT Connected Yet

You need to connect it in the Vercel dashboard:

1. Go to: https://vercel.com/albertmusic102-4703s-projects/grant-scope
2. Click **Storage** tab
3. Click **Connect Store**
4. Select your Postgres database
5. Click **Connect**
6. Wait for the connection to complete (usually 10-30 seconds)
7. Pull environment variables again:
   ```bash
   npx vercel env pull .env.local --environment=development
   ```

### Step 2C: If No Postgres Database Exists

Create one first:

1. Go to: https://vercel.com/albertmusic102-4703s-projects/grant-scope/stores
2. Click **Create Database**
3. Select **Postgres**
4. Choose a region (closest to your users)
5. Click **Create**
6. Once created, it should auto-connect to your project
7. Pull environment variables:
   ```bash
   npx vercel env pull .env.local --environment=development
   ```

## Step 3: Verify Environment Variables

After connecting Postgres, verify you have these variables:

```bash
cd grant-scope
cat .env.local | grep -E "^(POSTGRES|BLOB|OPENAI)"
```

You should see something like:
```
POSTGRES_URL=***
POSTGRES_PRISMA_URL=***
POSTGRES_URL_NON_POOLING=***
BLOB_READ_WRITE_TOKEN=***
OPENAI_API_KEY=***
```

## Step 4: Start Development Server

```bash
cd grant-scope
npm run dev
```

Server will start at: http://localhost:3000

## Step 5: Seed the Database

### Option A: Web Interface (Recommended)
1. Visit: http://localhost:3000/admin/seed
2. Click **"Seed Database"** button
3. Wait for success message (should take 5-10 seconds)

### Option B: Command Line
```bash
curl -X POST http://localhost:3000/api/seed
```

You should see:
```json
{
  "success": true,
  "message": "Successfully seeded 16 grants",
  "total": 16
}
```

## Step 6: Verify Everything Works

### ✓ Test 1: Homepage
Visit: http://localhost:3000

You should see:
- "Browse Grants by Category" section
- Category tabs (Education, Health, Environment, etc.)
- Grant cards with details

### ✓ Test 2: Search
Visit: http://localhost:3000/search

1. Click "Search" button (no filters)
2. Should see all 16 grants
3. Try searching "education"
4. Should see 2 education grants

### ✓ Test 3: Grant Details
1. Click any grant card
2. Should see full grant information
3. Check all tabs work (Overview, Eligibility, Funding, Documents, Checklist)

## Troubleshooting

### Issue: "Missing connection string" error when seeding

**Cause**: Postgres environment variables not loaded

**Solution**:
1. Make sure Postgres is connected in Vercel dashboard
2. Pull environment variables again:
   ```bash
   npx vercel env pull .env.local --environment=development
   ```
3. Restart your dev server:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Issue: Blob storage errors

**Cause**: Blob token might be for wrong environment

**Solution**: This is optional - the app works fine without Blob storage using database JSONB storage instead. Errors can be ignored.

### Issue: No grants showing after seeding

**Solution**:
1. Check browser console for errors (F12 → Console)
2. Check if seed was successful (should see success message)
3. Refresh the page (Cmd+R or Ctrl+R)
4. Try seeding again

### Issue: Port 3000 already in use

**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

## Quick Reference Commands

```bash
# Pull latest environment variables from Vercel
npx vercel env pull .env.local --environment=development

# Start development server
npm run dev

# Seed database (after server is running)
curl -X POST http://localhost:3000/api/seed

# Check environment variables
cat .env.local | grep -E "^(POSTGRES|BLOB)"

# View server logs
# (Server logs show in terminal where you ran npm run dev)
```

## What You'll Have After Completion

- ✅ **16 sample grants** across 9 categories
- ✅ **Categorized homepage** with tabs
- ✅ **Working search** with filters
- ✅ **Detailed grant pages** with all information
- ✅ **Cart functionality** to save grants
- ✅ **AI application generator** (with OpenAI key)
- ✅ **PDF checklist downloads**

## Production Deployment

Your storage is already connected in production! When you deploy:

1. Environment variables are automatically available
2. Seed the production database:
   ```bash
   curl -X POST https://grant-scope.vercel.app/api/seed
   ```
3. Or visit: https://grant-scope.vercel.app/admin/seed

## Need Help?

If you're stuck on any step:

1. **Check Vercel Dashboard**: https://vercel.com/albertmusic102-4703s-projects/grant-scope/stores
2. **Check Server Logs**: Look at terminal where `npm run dev` is running
3. **Check Browser Console**: Press F12 → Console tab
4. **Re-pull Environment Variables**: `npx vercel env pull .env.local --environment=development`

## Summary

**What's Working Now:**
- ✅ Blob Storage connected
- ✅ OpenAI API configured
- ✅ Project deployed to Vercel

**What You Need to Do:**
1. ⏳ Verify/Connect Postgres in Vercel dashboard
2. ⏳ Pull environment variables
3. ⏳ Seed the database
4. ✅ Start using the app!

The app is ready to go once Postgres is connected! 🎉

