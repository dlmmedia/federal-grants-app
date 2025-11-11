# GrantScope Testing Checklist

Use this checklist to verify that all core functionality is working correctly.

## Initial Setup Tests

- [ ] Dependencies install without errors (`npm install`)
- [ ] Development server starts successfully (`npm run dev`)
- [ ] Application loads at `http://localhost:3000`
- [ ] No console errors on initial page load

## Database Initialization Tests

### Via Homepage
- [ ] Homepage shows "Welcome to GrantScope!" card when database is empty
- [ ] "Initialize Database & Load Sample Grants" button is visible
- [ ] Clicking the button shows "Initializing..." state
- [ ] Initialization completes successfully
- [ ] Page reloads automatically after initialization
- [ ] Sample grants are now visible on homepage

### Via Admin Panel
- [ ] `/admin/seed` page loads successfully
- [ ] "Initialize & Seed Database" button is visible
- [ ] Clicking button shows loading state
- [ ] Success message appears with grant count
- [ ] "View Grants on Homepage" button appears
- [ ] Details section shows correct information

### Via API
- [ ] `POST /api/init-db` returns success response
- [ ] Response includes `grantsSeeded` count
- [ ] Response includes `totalGrants` count
- [ ] All tables are created successfully

## Homepage Tests

- [ ] Hero section displays correctly
- [ ] Stats section shows grant counts
- [ ] "How It Works" section is visible
- [ ] Featured grants section loads
- [ ] Grants are organized by category
- [ ] Category tabs work correctly
- [ ] Grant cards display all information:
  - [ ] Title
  - [ ] Agency
  - [ ] Status badge
  - [ ] Close date
  - [ ] Funding amount (when available)
- [ ] "View Details" button works
- [ ] Features section displays
- [ ] CTA section is visible

## Search Page Tests

### Basic Search
- [ ] Search page loads at `/search`
- [ ] Search input is functional
- [ ] "Search" button works
- [ ] "Load Available Grants" button works (initial state)
- [ ] Results display after search
- [ ] Result count is accurate

### Filters
- [ ] Status filter works
- [ ] Agency filter works
- [ ] Category filter works
- [ ] Eligibility filter works
- [ ] Funding Instrument filter works
- [ ] "Clear Filters" button works
- [ ] Active filters display as badges
- [ ] Filter badges can be removed individually

### Search Results
- [ ] Grant cards display correctly
- [ ] All grant information is visible
- [ ] "View Details" button works
- [ ] "Add to Cart" button is present
- [ ] Pagination works (if >25 results)
- [ ] "Previous" button works
- [ ] "Next" button works
- [ ] Page numbers are accurate

### Mobile Filters
- [ ] Filter button shows on mobile
- [ ] Filter sheet opens
- [ ] Filters work in mobile view
- [ ] Sheet closes after applying filters

## Grant Detail Page Tests

- [ ] Detail page loads at `/opportunity/[id]`
- [ ] Grant title displays
- [ ] Agency information shows
- [ ] Status badge is visible
- [ ] Open and close dates display
- [ ] Synopsis/description shows
- [ ] Eligibility information displays
- [ ] Funding details show (when available)
- [ ] CFDA number displays (when available)
- [ ] "Add to Cart" button works
- [ ] "Generate Application" button works
- [ ] Back navigation works

## Generate Page Tests

- [ ] Generate page loads at `/generate`
- [ ] Form fields are present:
  - [ ] Grant ID input
  - [ ] Organization name input
  - [ ] Project title input
  - [ ] Additional context textarea
- [ ] "Generate Application" button works
- [ ] Loading state shows during generation
- [ ] Generated content displays
- [ ] Export functionality works
- [ ] Error handling works for invalid inputs

## Cart Tests

- [ ] Cart page loads at `/cart`
- [ ] Empty cart message shows when empty
- [ ] "Add to Cart" adds grants to cart
- [ ] Cart displays added grants
- [ ] Grant information is accurate
- [ ] "Remove" button works
- [ ] Cart persists across page reloads
- [ ] "Clear Cart" button works

## API Tests

### Search API
- [ ] `POST /api/search` returns results
- [ ] Empty search returns all grants
- [ ] Keyword search filters correctly
- [ ] Status filter works
- [ ] Agency filter works
- [ ] Category filter works
- [ ] Pagination works
- [ ] Response includes source (database/cache/live)

### Opportunity API
- [ ] `GET /api/opportunity/[id]` returns grant details
- [ ] Invalid ID returns 404
- [ ] Response includes full grant data

### Init DB API
- [ ] `GET /api/init-db` works
- [ ] `POST /api/init-db` works
- [ ] Creates all tables
- [ ] Seeds sample grants
- [ ] Returns success response

### Seed API
- [ ] `GET /api/seed` returns info
- [ ] `POST /api/seed` seeds grants
- [ ] Handles conflicts correctly
- [ ] Returns success response

## Performance Tests

- [ ] Homepage loads in < 3 seconds
- [ ] Search results load in < 2 seconds
- [ ] Grant details load in < 1 second
- [ ] No memory leaks during navigation
- [ ] Images load efficiently
- [ ] Smooth scrolling and animations

## Responsive Design Tests

### Mobile (375px)
- [ ] Homepage displays correctly
- [ ] Search page is usable
- [ ] Filters work in mobile view
- [ ] Grant cards stack properly
- [ ] Navigation menu works
- [ ] Buttons are tappable

### Tablet (768px)
- [ ] Layout adapts appropriately
- [ ] Filters sidebar shows/hides correctly
- [ ] Grid layouts adjust properly

### Desktop (1920px)
- [ ] Full layout displays correctly
- [ ] No excessive white space
- [ ] Sidebar filters visible
- [ ] Content is centered appropriately

## Accessibility Tests

- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Screen reader labels are present
- [ ] Color contrast is sufficient
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Form labels are associated

## Error Handling Tests

- [ ] Database connection errors are handled
- [ ] API errors show user-friendly messages
- [ ] Invalid routes show 404 page
- [ ] Network errors are caught
- [ ] Loading states show during async operations
- [ ] Empty states display appropriately

## Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

## Production Deployment Tests

- [ ] Build completes without errors (`npm run build`)
- [ ] Production build runs (`npm start`)
- [ ] Environment variables work in production
- [ ] Database connection works in production
- [ ] All features work in production
- [ ] No console errors in production

## Notes

- Mark each item as you test it
- Document any issues found
- Retest after fixes
- Test on multiple devices/browsers
- Test with different data scenarios

## Issue Tracking

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
|       |          |        |       |

## Test Results Summary

- **Date Tested**: ___________
- **Tested By**: ___________
- **Environment**: Development / Production
- **Pass Rate**: _____ / _____ tests passed
- **Critical Issues**: _____
- **Minor Issues**: _____
- **Status**: ✅ Ready / ⚠️ Needs Work / ❌ Blocked

