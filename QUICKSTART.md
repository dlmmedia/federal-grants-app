# GrantScope - Quick Start Guide

Get GrantScope up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Vercel account (free tier works)
- Git installed

## Local Development (Without Database)

Want to test the UI without setting up a database? Follow these steps:

1. **Clone and install**:
```bash
cd grant-scope
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
```
http://localhost:3000
```

**Note**: Search and opportunity details won't work without database credentials, but you can see the UI and cart functionality (localStorage-based).

## Full Setup (With Database)

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Storage**:
   - In Vercel dashboard, go to "Storage" tab
   - Create Postgres database
   - Create Blob storage
   - Environment variables auto-populate

4. **Add Environment Variable**:
   - Go to Settings → Environment Variables
   - Add: `GRANTS_GOV_API_BASE` = `https://api.grants.gov/v1/api`

5. **Initialize Database**:
   - Visit: `https://your-app.vercel.app/api/init-db`
   - You should see: `{"success": true, "message": "Database initialized successfully"}`

6. **Done!** Visit your app and start searching for grants! 🎉

### Option 2: Local Development (With Vercel Storage)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Link project**:
```bash
vercel link
```

4. **Pull environment variables**:
```bash
vercel env pull .env.local
```

5. **Run development server**:
```bash
npm run dev
```

6. **Initialize database**:
```
http://localhost:3000/api/init-db
```

7. **Start searching!** 🚀

## Quick Test

Once set up, try these searches:

1. **Education grants**:
   - Keyword: "education"
   - Status: "Posted"
   - Click Search

2. **Health grants**:
   - Keyword: "health"
   - Agency: "HHS"
   - Click Search

3. **View details**:
   - Click "View Details" on any grant
   - Explore the three tabs

4. **Test cart**:
   - Add grants to cart
   - Click "View Cart"
   - Export to JSON or CSV

## Troubleshooting

### "Database connection failed"
- Verify environment variables are set
- Check Vercel Postgres is created
- Run `/api/init-db` endpoint

### "Blob storage error"
- Verify `BLOB_READ_WRITE_TOKEN` is set
- Check Vercel Blob storage is created

### "Search returns no results"
- Grants.gov API might be down (rare)
- Try different keywords
- Check browser console for errors

### "Build failed"
- Run `npm install` again
- Check Node.js version (18+)
- Review build logs in Vercel

## Next Steps

- Read [README.md](README.md) for full documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guide
- Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for architecture details
- See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

## Support

Having issues? 

1. Check the troubleshooting section above
2. Review error messages in browser console
3. Check Vercel logs (if deployed)
4. Open an issue on GitHub

## Success Checklist

- [ ] Project installed locally
- [ ] Development server running
- [ ] Deployed to Vercel (optional)
- [ ] Database initialized
- [ ] Search works
- [ ] Opportunity details load
- [ ] Cart functionality works
- [ ] Export works

**Congratulations!** You're now running GrantScope! 🎊

---

**Estimated Setup Time**: 5-10 minutes

**Difficulty**: Easy

**Cost**: Free (Vercel free tier)

