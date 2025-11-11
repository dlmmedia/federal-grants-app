# Vercel Deployment Setup Guide

## Project Information

- **Project Name:** grant-scope
- **Project ID:** prj_3cRETrgaaXGksb80qGZQ1pPeQdUx
- **Team ID:** team_XLS4r1tfJ0Myv7zfinX8fJmo
- **Production URL:** https://grant-scope.vercel.app
- **Framework:** Next.js 15.1.6

## Environment Variables Configured

The following environment variables have been configured for all environments (production, preview, development):

1. **OPENAI_API_KEY** - OpenAI API key for AI-powered grant application generation
2. **GRANTS_GOV_API_BASE** - Grants.gov API base URL (https://api.grants.gov/v1/api)

## Required Storage Setup

To complete the setup, you need to add the following Vercel storage integrations:

### 1. Vercel Postgres

1. Go to your project dashboard: https://vercel.com/albertmusic102-4703s-projects/grant-scope
2. Click on the "Storage" tab
3. Click "Create Database" and select "Postgres"
4. Follow the prompts to create a new Postgres database
5. The following environment variables will be automatically added:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

### 2. Vercel Blob Storage

1. Go to your project dashboard: https://vercel.com/albertmusic102-4703s-projects/grant-scope
2. Click on the "Storage" tab
3. Click "Create Store" and select "Blob"
4. Follow the prompts to create a new Blob store
5. The following environment variable will be automatically added:
   - `BLOB_READ_WRITE_TOKEN`

## Database Initialization

After setting up Vercel Postgres, initialize the database tables by visiting:

```
https://grant-scope.vercel.app/api/init-db
```

This will create the following tables:
- `opportunities` - Stores grant opportunity data
- `search_cache` - Caches search results
- `carts` - Stores user cart data
- `generated_drafts` - Stores AI-generated grant applications
- `recently_viewed` - Tracks recently viewed grants

## Local Development

To pull the environment variables to your local development environment:

```bash
cd grant-scope
npx vercel env pull
```

This will create a `.env.local` file with all the environment variables from Vercel.

## Deployment Commands

- **Deploy to production:** `npx vercel deploy --prod`
- **Deploy to preview:** `npx vercel deploy`
- **Check deployment status:** `npx vercel ls`
- **View logs:** `npx vercel logs <deployment-url>`

## Next Steps

1. Add Vercel Postgres database via the Vercel dashboard
2. Add Vercel Blob storage via the Vercel dashboard
3. Visit the init-db endpoint to initialize database tables
4. Test the application functionality
5. Verify featured grants are showing correctly

## Troubleshooting

If you encounter issues:

1. Check environment variables: `npx vercel env ls`
2. View deployment logs: `npx vercel logs`
3. Redeploy: `npx vercel deploy --prod --force`
4. Check build logs in the Vercel dashboard

## Support

For issues with:
- **Vercel platform:** https://vercel.com/support
- **Next.js:** https://nextjs.org/docs
- **OpenAI API:** https://platform.openai.com/docs
- **Grants.gov API:** https://www.grants.gov/help/html/help/api/api.htm

