# GrantScope Deployment Guide

This guide walks you through deploying GrantScope to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed locally

## Step 1: Prepare Your Repository

1. Initialize git repository (if not already done):
```bash
cd grant-scope
git init
git add .
git commit -m "Initial commit: GrantScope application"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New Project"

3. Import your GitHub repository

4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or leave as default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Click "Deploy"

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to link your project

5. For production deployment:
```bash
vercel --prod
```

## Step 3: Set Up Vercel Postgres

1. In your Vercel project dashboard, go to the "Storage" tab

2. Click "Create Database"

3. Select "Postgres"

4. Choose a database name (e.g., `grantscope-db`)

5. Select a region (preferably close to your users)

6. Click "Create"

7. Vercel will automatically add the following environment variables to your project:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NO_SSL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

## Step 4: Set Up Vercel Blob Storage

1. In your Vercel project dashboard, go to the "Storage" tab

2. Click "Create Database" (or "Add Store")

3. Select "Blob"

4. Choose a store name (e.g., `grantscope-blob`)

5. Click "Create"

6. Vercel will automatically add the `BLOB_READ_WRITE_TOKEN` environment variable

## Step 5: Add Additional Environment Variables

1. Go to your project settings in Vercel

2. Navigate to "Environment Variables"

3. Add the following variable:
   - **Name**: `GRANTS_GOV_API_BASE`
   - **Value**: `https://api.grants.gov/v1/api`
   - **Environment**: Production, Preview, Development (select all)

4. Click "Save"

## Step 6: Initialize the Database

1. After deployment completes, visit your deployed application URL

2. Navigate to `/api/init-db`:
   ```
   https://your-app.vercel.app/api/init-db
   ```

3. You should see a success message:
   ```json
   {
     "success": true,
     "message": "Database initialized successfully"
   }
   ```

4. This creates all necessary database tables

## Step 7: Test Your Application

1. Visit your application homepage:
   ```
   https://your-app.vercel.app
   ```

2. Try searching for grants (e.g., keyword: "education")

3. Click on a grant to view details

4. Add grants to your cart

5. Export cart data

## Troubleshooting

### Database Connection Errors

If you see database connection errors:

1. Check that all Postgres environment variables are set correctly
2. Verify the database is in the same region as your deployment
3. Check Vercel logs for detailed error messages

### Blob Storage Errors

If blob storage fails:

1. Verify `BLOB_READ_WRITE_TOKEN` is set
2. Check that the token has read/write permissions
3. Review Vercel logs for specific errors

### API Errors

If Grants.gov API calls fail:

1. Verify `GRANTS_GOV_API_BASE` is set correctly
2. Check that the Grants.gov API is accessible (no firewall issues)
3. Review the API response in browser developer tools

### Build Errors

If the build fails:

1. Check that all dependencies are listed in `package.json`
2. Verify TypeScript types are correct
3. Review build logs in Vercel dashboard

## Monitoring and Maintenance

### View Logs

1. Go to your project in Vercel dashboard
2. Click on a deployment
3. Navigate to "Functions" or "Runtime Logs"
4. Filter by time range and log level

### Monitor Performance

1. Use Vercel Analytics (enable in project settings)
2. Monitor API response times
3. Check database query performance in Vercel Postgres dashboard

### Update Cache TTL

To change the cache duration (default: 24 hours):

1. Edit the API routes:
   - `/app/api/search/route.ts`
   - `/app/api/opportunity/[id]/route.ts`

2. Modify the SQL query interval:
   ```typescript
   // Change from:
   AND created_at > NOW() - INTERVAL '1 day'
   
   // To (for example, 12 hours):
   AND created_at > NOW() - INTERVAL '12 hours'
   ```

3. Commit and push changes
4. Vercel will automatically redeploy

## Scaling Considerations

### Database

- Vercel Postgres scales automatically
- Monitor usage in the Vercel dashboard
- Upgrade plan if needed for higher limits

### Blob Storage

- Blob storage scales automatically
- Monitor storage usage
- Consider cleanup jobs for old cached data

### API Rate Limits

- Grants.gov API has rate limits
- Caching helps reduce API calls
- Monitor usage to stay within limits

## Security Best Practices

1. **Never commit `.env.local`** - it's in `.gitignore` by default
2. **Rotate tokens periodically** - regenerate blob tokens regularly
3. **Monitor access logs** - check for unusual activity
4. **Use environment-specific variables** - separate dev/prod credentials

## Custom Domain (Optional)

1. Go to project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

To disable auto-deployment:
1. Go to project settings
2. Navigate to "Git"
3. Configure deployment settings

## Support

For issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check [Grants.gov API Documentation](https://www.grants.gov/web/grants/support/technical-support/grantor-technical-support/web-services.html)

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Project deployed to Vercel
- [ ] Postgres database created and connected
- [ ] Blob storage created and connected
- [ ] Environment variables configured
- [ ] Database initialized via `/api/init-db`
- [ ] Search functionality tested
- [ ] Opportunity details loading correctly
- [ ] Cart functionality working
- [ ] Export features functional

Congratulations! Your GrantScope application is now live! 🎉

