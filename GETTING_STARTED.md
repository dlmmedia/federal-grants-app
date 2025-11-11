# Getting Started with GrantScope

This guide will walk you through setting up and running GrantScope for the first time.

## Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- A Vercel account (for database)

## Step 1: Clone and Install

```bash
# Navigate to the project directory
cd grant-scope

# Install dependencies
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required: Vercel Postgres Database
POSTGRES_URL="your-postgres-connection-string"
POSTGRES_PRISMA_URL="your-postgres-prisma-url"
POSTGRES_URL_NON_POOLING="your-postgres-non-pooling-url"
POSTGRES_USER="your-postgres-user"
POSTGRES_HOST="your-postgres-host"
POSTGRES_PASSWORD="your-postgres-password"
POSTGRES_DATABASE="your-postgres-database"

# Optional: Vercel Blob Storage
BLOB_READ_WRITE_TOKEN="your-blob-token"

# Optional: OpenAI API (for AI features)
OPENAI_API_KEY="your-openai-api-key"

# Optional: Grants.gov API
GRANTS_GOV_API_BASE="https://api.grants.gov/v1/api"
```

### Getting Vercel Postgres Credentials

1. Go to [vercel.com](https://vercel.com) and sign in
2. Create a new project or select an existing one
3. Go to the "Storage" tab
4. Click "Create Database" and select "Postgres"
5. Once created, click "Connect" and copy the environment variables
6. Paste them into your `.env.local` file

## Step 3: Start the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## Step 4: Initialize the Database

When you first visit the application, you'll see a welcome screen. You have three options to initialize the database:

### Option A: Via Homepage (Recommended)

1. Visit `http://localhost:3000`
2. Click the "Initialize Database & Load Sample Grants" button
3. Wait for the process to complete (usually 10-30 seconds)
4. The page will reload automatically with sample grants

### Option B: Via Admin Panel

1. Visit `http://localhost:3000/admin/seed`
2. Click "Initialize & Seed Database"
3. View the detailed results
4. Click "View Grants on Homepage" when complete

### Option C: Via API

```bash
curl -X POST http://localhost:3000/api/init-db
```

## Step 5: Explore the Application

Once initialized, you can:

### Browse Grants
- **Homepage**: View featured grants organized by category
- **Search Page**: Search and filter through all available grants
- **Grant Details**: Click on any grant to view full details

### Use AI Features
- **Generate Applications**: Create AI-powered grant applications
- **Create Checklists**: Generate submission checklists

### Manage Your Work
- **Cart**: Add grants to your cart for later review
- **Docs**: View documentation and guides

## What's Included

After initialization, you'll have:

- **16 Sample Grants** across 9 categories:
  - Education (2)
  - Health (2)
  - Environment (2)
  - Energy (2)
  - Community Development (2)
  - Science & Technology (2)
  - Agriculture (2)
  - Arts (1)
  - Transportation (1)

- **5 Database Tables**:
  - opportunities (grant data)
  - search_cache (API caching)
  - carts (user carts)
  - generated_drafts (AI-generated content)
  - recently_viewed (browsing history)

## Common Issues and Solutions

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

### Database Connection Failed

1. Verify your `.env.local` file has the correct credentials
2. Check that your Vercel Postgres database is active
3. Ensure your IP is whitelisted in Vercel's database settings
4. Try restarting the development server

### No Grants Showing

1. Check the browser console for errors (F12)
2. Visit `/admin/seed` to see initialization status
3. Try reinitializing via the admin panel
4. Check server logs in your terminal

### Environment Variables Not Loading

1. Make sure the file is named `.env.local` (not `.env`)
2. Restart the development server after adding variables
3. Ensure there are no spaces around the `=` sign

## Next Steps

Now that you're set up, explore these features:

1. **Search for Grants**: Use the advanced search with filters
2. **View Grant Details**: Click on any grant to see full information
3. **Generate Content**: Try the AI-powered application generator
4. **Add to Cart**: Save grants you're interested in
5. **Customize**: Modify the seed data or add your own grants

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npm run type-check
```

## Project Structure

```
grant-scope/
├── app/                    # Next.js app directory
│   ├── (main)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                   # Utility functions
│   ├── db.ts             # Database utilities
│   ├── seed-data.ts      # Sample grant data
│   └── types.ts          # TypeScript types
├── public/               # Static assets
└── sql/                  # SQL schema files
```

## Additional Resources

- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Detailed database setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment guide
- [TESTING_GUIDE.md](./TESTING_GUIDE.md) - Testing instructions
- [README.md](./README.md) - Project overview

## Getting Help

If you encounter issues:

1. Check the documentation files listed above
2. Review the browser console for errors
3. Check server logs in your terminal
4. Visit `/admin/seed` for detailed error messages

## Ready to Deploy?

Once you're comfortable with local development, see [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on deploying to Vercel.

