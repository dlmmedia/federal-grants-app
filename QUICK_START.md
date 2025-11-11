# GrantScope Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- Vercel account (for database)
- OpenAI API key

---

## Step 1: Install Dependencies

```bash
cd grant-scope
npm install
```

---

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Vercel Postgres (get from Vercel dashboard)
POSTGRES_URL="your-postgres-url"
POSTGRES_PRISMA_URL="your-postgres-prisma-url"
POSTGRES_URL_NON_POOLING="your-postgres-url-non-pooling"

# OpenAI API Key (get from platform.openai.com)
OPENAI_API_KEY="sk-your-openai-key"

# Optional: Vercel Blob for file storage
BLOB_READ_WRITE_TOKEN="your-blob-token"
```

### Getting Vercel Postgres:
1. Go to [vercel.com](https://vercel.com)
2. Create a new project or select existing
3. Go to Storage → Create Database → Postgres
4. Copy the environment variables to your `.env.local`

### Getting OpenAI API Key:
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Go to API Keys → Create new secret key
4. Copy the key to your `.env.local`

---

## Step 3: Initialize Database

Start the development server:

```bash
npm run dev
```

Then initialize the database tables:

```bash
curl http://localhost:3000/api/init-db
```

Or visit `http://localhost:3000/api/init-db` in your browser.

You should see: `{"success": true, "message": "Database initialized successfully"}`

---

## Step 4: Test the Application

Open your browser and visit:

- **Homepage**: http://localhost:3000
- **Search**: http://localhost:3000/search
- **Generate**: http://localhost:3000/generate
- **Learn**: http://localhost:3000/learn/grants-101
- **Cart**: http://localhost:3000/cart

---

## 🎯 Key Features to Test

### 1. Search for Grants
1. Go to homepage or search page
2. Enter a keyword (e.g., "education", "health", "technology")
3. Apply filters (status, agency, category)
4. Browse results and click "View Details"

### 2. View Grant Details
1. Click on any grant from search results
2. Explore tabs: Overview, Eligibility, Documents, Checklist, Generate
3. Click "Add to Cart" to save the grant
4. Click "Download Checklist" to get a PDF

### 3. Generate AI Application
1. From a grant detail page, click "Generate Draft"
2. Fill in your organization name, project title, and summary
3. Click "Generate Draft"
4. Wait for AI to generate content (30-60 seconds)
5. Copy sections or download the complete draft

### 4. Manage Cart
1. Add several grants to your cart
2. Visit `/cart` from navigation
3. View your saved grants
4. Export as JSON or CSV
5. Remove grants or clear cart

### 5. Learn About Grants
1. Visit `/learn/grants-101`
2. Read through the educational content
3. Navigate to other learn pages
4. Use the links to continue learning

---

## 🎨 Theme Toggle

Click the sun/moon icon in the navigation to switch between light and dark modes.

---

## 🐛 Troubleshooting

### Database Connection Error
- Verify your Postgres environment variables are correct
- Make sure you've run the init-db API route
- Check Vercel dashboard for database status

### OpenAI API Error
- Verify your API key is correct
- Check you have credits in your OpenAI account
- Ensure the key has proper permissions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

---

## 📦 Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Connect to Postgres database
- Set up CDN and edge functions
- Provide HTTPS and custom domain

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🔑 Environment Variables Checklist

Before deploying, ensure you have:

- [ ] `POSTGRES_URL`
- [ ] `POSTGRES_PRISMA_URL`
- [ ] `POSTGRES_URL_NON_POOLING`
- [ ] `OPENAI_API_KEY`
- [ ] `BLOB_READ_WRITE_TOKEN` (optional)

---

## 📚 Next Steps

1. **Customize Branding**:
   - Update colors in `app/globals.css`
   - Modify logo in `components/main-nav.tsx`
   - Update footer links in `components/footer.tsx`
   - See `BRAND_GUIDE.txt` for details

2. **Add Authentication**:
   - Integrate Clerk or NextAuth
   - Protect certain routes
   - Add user profiles

3. **Enhance Features**:
   - Add email notifications
   - Implement saved searches
   - Create user dashboards
   - Add collaboration features

4. **Monitor Performance**:
   - Set up Vercel Analytics
   - Monitor API usage
   - Track user behavior
   - Optimize slow queries

---

## 🆘 Need Help?

- **Documentation**: Check `IMPLEMENTATION_SUMMARY.md` for detailed info
- **Design Guide**: See `BRAND_GUIDE.txt` for styling
- **Contact**: Visit `/contact` page in the app
- **Issues**: Check console for error messages

---

## ✅ Success Checklist

After setup, you should be able to:

- [ ] View the homepage with hero section
- [ ] Search for grants with filters
- [ ] View detailed grant information
- [ ] Add grants to cart
- [ ] Export cart as JSON/CSV
- [ ] Generate AI application drafts
- [ ] Download PDF checklists
- [ ] Switch between light/dark modes
- [ ] Navigate all learn pages
- [ ] View documentation

---

## 🎉 You're All Set!

Your GrantScope application is now running. Start exploring federal grant opportunities and building amazing applications!

**Happy grant hunting! 🎯**

---

For detailed documentation, see:
- `IMPLEMENTATION_SUMMARY.md` - Complete feature list
- `BRAND_GUIDE.txt` - Design system
- `README.md` - Project overview
- `/docs` page - In-app documentation

