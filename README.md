# GrantScope

A comprehensive Next.js application for discovering, understanding, and applying for U.S. federal grant opportunities from Grants.gov, powered by AI.

## Features

- 🔍 **Search Federal Grants**: Search through thousands of federal grant opportunities using the Grants.gov API
- 📄 **Detailed Grant Information**: View comprehensive grant details including eligibility, funding, and requirements
- 🤖 **AI-Powered Application Generation**: Generate structured, professional grant applications using OpenAI
- ✅ **Grant-Specific Checklists**: Download customized PDF checklists for each grant opportunity
- 💾 **Smart Caching**: Automatic caching of search results and opportunity details using Vercel Blob and Postgres
- 📋 **Save to Cart**: Save interesting opportunities to a local cart for later review
- 📊 **Export Applications**: Export generated applications as formatted text documents
- 🚀 **Serverless**: Fully serverless architecture deployed on Vercel
- ⚡ **Fast**: Edge-optimized with intelligent caching (24-hour cache TTL)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Database**: Vercel Postgres
- **Storage**: Vercel Blob
- **AI**: OpenAI GPT-4o-mini
- **PDF Generation**: jsPDF
- **Deployment**: Vercel

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file with your Vercel Postgres credentials:

```env
POSTGRES_URL="your-postgres-connection-string"
# ... other Postgres variables
```

See [GETTING_STARTED.md](./GETTING_STARTED.md) for detailed setup instructions.

### 3. Start Development Server

```bash
npm run dev
```

### 4. Initialize Database

Visit `http://localhost:3000` and click "Initialize Database & Load Sample Grants"

That's it! You now have 16 sample grants to explore.

## Full Documentation

- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Complete setup guide for new users
- **[DATABASE_SETUP.md](./DATABASE_SETUP.md)** - Database initialization and seeding
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment instructions
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Testing and quality assurance

## Detailed Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for Postgres database)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Grants.gov API (no key required)
GRANTS_GOV_API_BASE=https://api.grants.gov/v1/api

# OpenAI API (Required for AI generation)
OPENAI_API_KEY=your_openai_api_key_here

# Vercel Postgres
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NO_SSL=your_postgres_url_no_ssl
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_database

# Vercel Blob
BLOB_READ_WRITE_TOKEN=your_blob_token

# Application URL (for API calls)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Note:** You can copy `.env.example` to `.env.local` and fill in your values.

4. Initialize the database:

After deploying or running locally with database credentials, visit:
```
http://localhost:3000/api/init-db
```

This will create the necessary database tables.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
grant-scope/
├── app/
│   ├── (main)/
│   │   ├── opportunity/[id]/ # Grant detail page with tabs
│   │   ├── search/           # Search page with filters
│   │   ├── generate/         # AI application generator
│   │   ├── cart/             # Saved grants cart
│   │   ├── learn/            # Educational resources
│   │   └── page.tsx          # Home page
│   ├── api/
│   │   ├── search/           # Search endpoint with caching
│   │   ├── opportunity/[id]/ # Opportunity details endpoint
│   │   ├── generate/         # AI generation endpoint
│   │   ├── checklist/        # PDF checklist generator
│   │   ├── cart/             # Cart CRUD operations
│   │   └── init-db/          # Database initialization
│   └── layout.tsx            # Root layout
├── components/
│   ├── ui/                   # ShadCN UI components
│   ├── navbar.tsx            # Main navigation
│   └── footer.tsx            # Footer component
├── lib/
│   ├── db.ts                 # Database utilities
│   ├── types.ts              # TypeScript types
│   └── utils.ts              # Utility functions
└── sql/
    └── schema.sql            # Database schema
```

## Database Schema

### opportunities
Stores cached grant opportunity data:
- `id`: Serial primary key
- `grantsgov_id`: Unique Grants.gov opportunity ID
- `title`: Grant title
- `agency`: Funding agency
- `status`: Current status (posted, forecasted, closed, archived)
- `open_date`: Opening date
- `close_date`: Closing date
- `cfda`: CFDA number
- `summary`: Brief description
- `payload_blob_url`: URL to full data in Vercel Blob
- `last_fetched`: Last cache update timestamp

### search_cache
Stores cached search results:
- `id`: Serial primary key
- `query_hash`: SHA-256 hash of search parameters
- `result_blob_url`: URL to cached results in Vercel Blob
- `created_at`: Cache creation timestamp

### carts
Stores user carts (anonymous):
- `id`: UUID primary key
- `name`: Cart name
- `data`: JSONB array of saved opportunities
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## API Endpoints

### POST /api/search
Search for grant opportunities with caching.

**Request Body:**
```json
{
  "keyword": "education",
  "status": "posted",
  "agency": "ED",
  "category": "ED",
  "eligibility": "06",
  "fundingInstrument": "G",
  "page": 1,
  "rows": 25
}
```

### GET /api/opportunity/[id]
Fetch detailed information about a specific opportunity including eligibility, funding details, and full grant data.

**Response includes:**
- Basic grant information
- Synopsis and description
- Eligibility requirements
- Funding details (ceiling, floor, total funding)
- Cost sharing requirements
- Full API payload

### POST /api/generate
Generate AI-powered grant application using OpenAI.

**Request Body:**
```json
{
  "grantId": "GRANT-123",
  "organizationName": "Your Organization",
  "organizationType": "Nonprofit",
  "projectTitle": "Project Title",
  "projectSummary": "Detailed project description",
  "requestedAmount": "$500,000",
  "projectDuration": "24 months",
  "contactName": "John Doe",
  "contactEmail": "john@example.com"
}
```

**Response includes:**
- Executive Summary
- Goals and Objectives
- Project Narrative (with all required sections)
- Budget Narrative and Justification
- Metadata

### POST /api/checklist
Generate grant-specific PDF checklist.

**Request Body:**
```json
{
  "grantId": "GRANT-123",
  "grant": { /* grant object */ }
}
```

**Response:** PDF file download

### GET /api/cart?id=[uuid]
Retrieve a cart by ID.

### POST /api/cart
Create a new cart.

### PUT /api/cart
Update an existing cart.

### DELETE /api/cart?id=[uuid]
Delete a cart.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import the project in Vercel

3. Add environment variables in Vercel dashboard:
   - Add Vercel Postgres database
   - Add Vercel Blob storage
   - Set `GRANTS_GOV_API_BASE` environment variable

4. Deploy!

5. After deployment, visit `/api/init-db` to initialize the database tables

## Caching Strategy

- **Search Results**: Cached for 24 hours using query parameter hash
- **Opportunity Details**: Cached for 24 hours per opportunity
- **Storage**: Large payloads stored in Vercel Blob, metadata in Postgres
- **Cart**: Stored in browser localStorage (client-side only)

## Key Features in Detail

### 1. Grant Search and Discovery
- Advanced search with multiple filters (agency, category, eligibility, funding type)
- Real-time results from Grants.gov API
- Smart caching for improved performance
- Detailed grant cards with key information

### 2. Comprehensive Grant Details
- Organized in tabs: Overview, Eligibility, Funding, Documents, Checklist
- Complete grant information including:
  - Synopsis and description
  - Eligibility requirements with codes
  - Funding details (total, ceiling, floor)
  - Cost sharing requirements
  - Important dates and deadlines
- Direct links to Grants.gov for additional resources

### 3. AI-Powered Application Generation
- Uses OpenAI GPT-4o-mini for intelligent generation
- Grant-aware: Uses specific grant details as context
- Generates structured legal documents with:
  - **Executive Summary** (250-300 words)
  - **Goals and Objectives** (5 SMART goals with objectives)
  - **Project Narrative** (800-1000 words with required sections)
  - **Budget Narrative** (comprehensive justification by federal categories)
- Professional formatting suitable for federal reviewers
- Export to formatted text file

### 4. Grant-Specific Checklists
- Automatically generated PDF checklists
- Includes grant-specific information:
  - Grant details and deadline
  - Days remaining calculation
  - Funding information
  - Eligibility requirements
- Comprehensive checklist items organized by phase:
  - Pre-Application (4-6 weeks)
  - Planning (3-4 weeks)
  - Writing (2-3 weeks)
  - Review (1 week)
  - Submission (48 hours early)
  - Post-Submission
- Professional PDF format with checkboxes
- Printable and shareable

## User Workflow

1. **Search** → Find grants using keywords and filters
2. **Review** → View comprehensive grant details
3. **Checklist** → Download grant-specific checklist
4. **Generate** → Create AI-powered application draft
5. **Export** → Download formatted application document
6. **Apply** → Submit through Grants.gov

## Documentation

- **[IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md)** - Detailed technical implementation
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Comprehensive testing instructions
- **[BRAND_GUIDE.txt](./BRAND_GUIDE.txt)** - Design system and branding

## Features Roadmap

- [x] AI-powered grant application generation
- [x] Grant-specific PDF checklists
- [x] Comprehensive grant details display
- [x] Export functionality
- [ ] User authentication
- [ ] Server-side cart persistence
- [ ] Email notifications for closing deadlines
- [ ] Budget calculator tool
- [ ] Application templates
- [ ] Collaboration features
- [ ] Deadline calendar view

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Testing

See [TESTING_GUIDE.md](./TESTING_GUIDE.md) for comprehensive testing instructions.

Quick test:
```bash
npm run dev
# Navigate to http://localhost:3000
# Search for grants
# View grant details
# Generate application
# Download checklist
```

## Troubleshooting

### OpenAI API Errors
- Verify `OPENAI_API_KEY` is set correctly
- Check API usage limits and billing
- Ensure API key has proper permissions

### Grants.gov API Issues
- API is public and doesn't require authentication
- Check network connectivity
- Verify `GRANTS_GOV_API_BASE` URL is correct

### Database Connection Issues
- Verify all Postgres environment variables are set
- Check Vercel Postgres dashboard for connection details
- Run `/api/init-db` to initialize tables

### Caching Issues
- Cache expires after 24 hours automatically
- Clear database cache manually if needed
- Check Vercel Blob storage quota

## Performance

- **Search:** < 5 seconds (first request), < 1 second (cached)
- **Grant Details:** < 3 seconds (first request), < 1 second (cached)
- **AI Generation:** 30-60 seconds
- **Checklist PDF:** < 3 seconds
- **Export:** < 1 second

## Security

- No user authentication required (public data)
- API keys stored securely in environment variables
- No sensitive data stored in database
- CORS enabled for API endpoints
- Rate limiting recommended for production

## Acknowledgments

- Grant data provided by [Grants.gov](https://www.grants.gov/)
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- AI powered by [OpenAI](https://openai.com/)
- PDF generation by [jsPDF](https://github.com/parallax/jsPDF)
