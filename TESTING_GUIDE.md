# Testing Guide - Federal Grants Application

## Prerequisites

Before testing, ensure you have:

1. **Environment Variables Set Up**
   ```bash
   cp .env.example .env.local
   ```
   
   Required variables:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `POSTGRES_URL` - Vercel Postgres connection string
   - `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token
   - `GRANTS_GOV_API_BASE` - Grants.gov API base URL (default: https://api.grants.gov/v1/api)

2. **Dependencies Installed**
   ```bash
   npm install
   ```

3. **Development Server Running**
   ```bash
   npm run dev
   ```

## Test Scenarios

### 1. Search Functionality Test

**Objective:** Verify that the search API properly fetches and displays grants from Grants.gov

**Steps:**
1. Navigate to http://localhost:3000/search
2. Click "Search" without any filters (should show posted grants)
3. Verify results are displayed with:
   - Grant title
   - Agency name
   - Open and close dates
   - Status badge
   - "View Details" button

**Expected Results:**
- Results load within 2-5 seconds
- At least 1-25 grants displayed
- No error messages
- Source indicator shows "live" or "cache"

**Test with Filters:**
1. Enter keyword: "education"
2. Select status: "Posted"
3. Click "Search"
4. Verify filtered results

### 2. Grant Detail Page Test

**Objective:** Verify comprehensive grant information is displayed

**Steps:**
1. From search results, click "View Details" on any grant
2. Verify the following information is displayed:
   - Grant title and agency
   - Opportunity number
   - CFDA number (if available)
   - Open and close dates
   - Status badge
   - Synopsis/description

3. Navigate through all tabs:
   - **Overview Tab:**
     - Synopsis text
     - Grant details (funding instrument, category)
     - Cost sharing information
   
   - **Eligibility Tab:**
     - List of eligible applicants
     - Eligibility codes and descriptions
   
   - **Funding Tab:**
     - Total program funding
     - Expected number of awards
     - Award ceiling
     - Award floor
     - Cost sharing requirements
   
   - **Documents Tab:**
     - Related documents (if available)
     - Link to Grants.gov
   
   - **Checklist Tab:**
     - Step-by-step checklist preview
     - Download button

**Expected Results:**
- All tabs load without errors
- Information is properly formatted
- No "undefined" or "null" values displayed
- Action buttons are visible and enabled

### 3. Checklist Generation Test

**Objective:** Verify grant-specific checklist PDF generation

**Steps:**
1. On a grant detail page, click "Download Checklist"
2. Wait for generation (should take 1-3 seconds)
3. Verify PDF downloads automatically
4. Open the PDF and verify:
   - Header with "Grant Application Checklist"
   - Grant information section with:
     - Title, agency, opportunity ID
     - Deadline date
     - Days remaining (if applicable)
     - CFDA number
     - Funding details
   - Eligibility requirements (if available)
   - Pre-Application Phase checklist
   - Planning Phase checklist
   - Writing Phase checklist
   - Required Documents checklist
   - Review Phase checklist
   - Submission Phase checklist
   - Post-Submission checklist
   - Important Reminders section
   - Footer with page numbers and date

**Expected Results:**
- PDF generates successfully
- All grant-specific information is included
- Checkboxes are visible and printable
- Professional formatting
- Multiple pages if needed
- No text overflow or formatting issues

### 4. AI Grant Generation Test

**Objective:** Verify AI-powered grant application generation

**Steps:**
1. On a grant detail page, click "Generate Application"
2. Fill in the form:
   - Organization Name: "Test University"
   - Organization Type: "Public University"
   - Project Title: "STEM Education Enhancement Program"
   - Project Summary: "A comprehensive program to enhance STEM education for underserved communities through innovative teaching methods and technology integration."
   - Requested Amount: "$500,000"
   - Project Duration: "24 months"
   - Contact Name: "Dr. Jane Smith"
   - Contact Email: "jane.smith@testuniversity.edu"

3. Click "Generate Application"
4. Wait for generation (30-60 seconds)
5. Verify generated content includes:
   - **Executive Summary:**
     - Statement of Need
     - Project Goals
     - Target Population
     - Organizational Capacity
     - Expected Impact
   
   - **Goals and Objectives:**
     - 5 SMART goals
     - Specific objectives with timelines
     - Measurable outcomes
   
   - **Project Narrative:**
     - Statement of Need section
     - Project Design section
     - Organizational Capacity section
     - Evaluation Plan section
     - Sustainability section
   
   - **Budget Narrative:**
     - Personnel justification
     - Fringe benefits
     - Travel
     - Equipment
     - Supplies
     - Contractual
     - Other direct costs
     - Indirect costs

6. Click "Export" button
7. Verify text file downloads with:
   - Professional formatting
   - Section dividers
   - Grant reference information
   - Applicant information
   - All generated sections
   - Disclaimer

**Expected Results:**
- Generation completes within 60 seconds
- All sections are populated with relevant content
- Content is professional and formal
- Content references the specific grant
- Export file is properly formatted
- No errors during generation

### 5. End-to-End Workflow Test

**Objective:** Verify complete user journey from search to application

**Steps:**
1. **Search Phase:**
   - Navigate to /search
   - Search for "health" grants
   - Select a grant with good funding

2. **Review Phase:**
   - View grant details
   - Review all tabs
   - Check eligibility requirements
   - Note deadline and funding amounts

3. **Checklist Phase:**
   - Download checklist
   - Verify grant-specific information
   - Save PDF for reference

4. **Generation Phase:**
   - Click "Generate Application"
   - Fill in organization details
   - Generate application
   - Review all sections
   - Export to text file

5. **Verification:**
   - Open exported text file
   - Verify grant reference matches
   - Verify all sections are complete
   - Check for consistency

**Expected Results:**
- Smooth flow between all steps
- No errors or broken links
- All data persists correctly
- Generated content references correct grant
- Export includes all information

## API Testing

### Test Search API Directly

```bash
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{
    "keyword": "education",
    "status": "posted",
    "rows": 10,
    "page": 1
  }'
```

**Expected Response:**
```json
{
  "source": "live",
  "results": {
    "oppHits": [...],
    "oppHitNumber": 1234
  }
}
```

### Test Opportunity API Directly

```bash
# Replace GRANT_ID with actual opportunity ID
curl http://localhost:3000/api/opportunity/GRANT_ID
```

**Expected Response:**
```json
{
  "source": "live",
  "opportunity": {
    "id": "...",
    "title": "...",
    "agency": "...",
    "status": "posted",
    "openDate": "...",
    "closeDate": "...",
    "cfda": "...",
    "synopsis": {...},
    "eligibility": [...],
    "fundingInstrument": "...",
    "estimatedTotalProgramFunding": 1000000,
    ...
  }
}
```

### Test Generate API Directly

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "organizationName": "Test Organization",
    "projectTitle": "Test Project",
    "projectSummary": "This is a test project summary.",
    "requestedAmount": "$100,000",
    "projectDuration": "12 months"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "content": {
    "executiveSummary": "...",
    "goalsAndObjectives": "...",
    "projectNarrative": "...",
    "budgetNarrative": "..."
  },
  "metadata": {
    "organizationName": "Test Organization",
    "projectTitle": "Test Project",
    ...
  }
}
```

## Performance Testing

### Load Time Benchmarks

- **Search Results:** < 5 seconds
- **Grant Details:** < 3 seconds
- **Checklist Generation:** < 3 seconds
- **AI Generation:** 30-60 seconds
- **Export:** < 1 second

### Caching Verification

1. Search for grants
2. Note the "source" indicator (should be "live")
3. Search again with same criteria
4. Note the "source" indicator (should be "cache")
5. Verify results are identical

## Error Handling Tests

### Test Missing OpenAI Key

1. Remove `OPENAI_API_KEY` from environment
2. Try to generate application
3. Verify error message: "OpenAI API key not configured"

### Test Invalid Grant ID

1. Navigate to /opportunity/INVALID_ID
2. Verify error message is displayed
3. Verify "Back" button works

### Test Network Failure

1. Disconnect from internet
2. Try to search for grants
3. Verify error message is displayed
4. Reconnect and verify recovery

## Browser Compatibility

Test in the following browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Mobile Responsiveness

Test on different screen sizes:
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

## Accessibility Testing

- ✅ Keyboard navigation works
- ✅ Screen reader compatible
- ✅ Proper ARIA labels
- ✅ Color contrast meets WCAG standards

## Common Issues and Solutions

### Issue: Search returns no results
**Solution:** Check Grants.gov API status, verify network connection

### Issue: Generation takes too long
**Solution:** Check OpenAI API status, verify API key is valid

### Issue: PDF doesn't download
**Solution:** Check browser download settings, try different browser

### Issue: Cached data is stale
**Solution:** Wait 24 hours for cache expiration or clear database cache

## Test Data

### Sample Grant IDs for Testing
(Note: These are examples - use actual grant IDs from search results)

- Education grants: Search "education"
- Health grants: Search "health"
- Technology grants: Search "technology"

### Sample Organization Data

```json
{
  "organizationName": "Community Development Institute",
  "organizationType": "501(c)(3) Nonprofit",
  "projectTitle": "Youth Empowerment Through Technology",
  "projectSummary": "A comprehensive program to provide technology training and mentorship to underserved youth, preparing them for careers in STEM fields.",
  "requestedAmount": "$250,000",
  "projectDuration": "18 months",
  "contactName": "Sarah Johnson",
  "contactEmail": "sjohnson@cdi.org"
}
```

## Reporting Issues

When reporting issues, include:
1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Screenshots (if applicable)
5. Browser and version
6. Console error messages

## Success Criteria

All tests pass if:
- ✅ Search returns results from Grants.gov API
- ✅ Grant details display all available information
- ✅ Checklist PDF generates with grant-specific data
- ✅ AI generation produces structured legal documents
- ✅ Export functionality works correctly
- ✅ No console errors
- ✅ Responsive design works on all devices
- ✅ Error handling works properly

