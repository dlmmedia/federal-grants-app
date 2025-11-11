# 🚀 Quick Start - Get Grants Showing in 3 Steps

## Step 1: Configure Database (2 minutes)

Create a `.env.local` file in the `grant-scope` directory:

```bash
# For Vercel Postgres (recommended)
POSTGRES_URL="your-vercel-postgres-connection-string"

# OR for local PostgreSQL
POSTGRES_URL="postgresql://username:password@localhost:5432/grantscope"
```

**Where to get Vercel Postgres connection string:**
1. Go to https://vercel.com
2. Create/select project → Storage → Create Database → Postgres
3. Copy connection string from `.env.local` tab

## Step 2: Start the Server (1 minute)

```bash
cd grant-scope
npm install  # if you haven't already
npm run dev
```

Server starts at: http://localhost:3000

## Step 3: Seed the Database (30 seconds)

**Option A - Web Interface:**
1. Visit: http://localhost:3000/admin/seed
2. Click "Seed Database"
3. Done! ✅

**Option B - Command Line:**
```bash
curl -X POST http://localhost:3000/api/seed
```

**Option C - From Homepage:**
1. Visit: http://localhost:3000
2. Click "Seed Database" button (if shown)

## ✅ You're Done!

Now visit http://localhost:3000 and you'll see:

### Homepage Features:
- **Browse Grants by Category** section
- **9 different categories** with tabs:
  - Education
  - Health
  - Environment
  - Energy
  - Community Development
  - Science & Technology
  - Agriculture
  - Arts
  - Transportation
- **16 sample grants** with full details
- Click any grant to see complete information

### What You Can Do:
1. **Browse by Category** - Switch between tabs to filter grants
2. **Search Grants** - Go to /search and try searching
3. **View Details** - Click any grant card to see full information
4. **Filter & Search** - Use advanced filters on search page

## Sample Grants Included

You'll have access to grants like:
- STEM Education Innovation Program ($50M)
- Community Health Centers Expansion ($75M)
- Clean Water Infrastructure Grants ($100M)
- Renewable Energy Innovation Program ($80M)
- Advanced Computing Infrastructure ($90M)
- And 11 more...

## Verify Everything Works

### ✓ Homepage Test
- Visit http://localhost:3000
- See "Browse Grants by Category"
- See category tabs
- See grant cards

### ✓ Search Test
- Go to http://localhost:3000/search
- Click "Search" button
- See all 16 grants
- Try searching "education"

### ✓ Detail Test
- Click any grant card
- See full grant information
- Check all tabs (Overview, Eligibility, Funding, etc.)

## Troubleshooting

### "Missing connection string" error
→ Make sure `.env.local` has `POSTGRES_URL` set

### No grants showing
→ Run the seed process again
→ Check browser console for errors
→ Refresh the page

### Port 3000 in use
```bash
lsof -ti:3000 | xargs kill -9  # Kill process
npm run dev -- -p 3001          # Or use different port
```

## Next Steps

After you have grants showing:

1. ✅ **Explore Categories** - Try different category tabs
2. ✅ **Test Search** - Search for keywords like "health", "education"
3. ✅ **View Details** - Click grants to see full information
4. ✅ **Try Filters** - Use agency, category, eligibility filters
5. ✅ **Test Cart** - Add grants to cart
6. ✅ **Generate Application** - Try AI application generator (needs OpenAI key)

## Need More Help?

- **SETUP_INSTRUCTIONS.md** - Detailed setup guide
- **README_SEED.md** - Complete seeding documentation
- **SEEDING_GUIDE.md** - Troubleshooting guide

## That's It! 🎉

You now have a fully functional grant discovery application with:
- 16 sample grants
- 9 categories
- Full search functionality
- Detailed grant pages
- Working filters

Start exploring grants at: http://localhost:3000

