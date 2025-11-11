import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: opportunityId } = await params;

    if (!opportunityId) {
      return NextResponse.json(
        { error: 'Opportunity ID is required' },
        { status: 400 }
      );
    }

    // Check if we have cached data (removed time restriction for seed data)
    try {
      const { rows } = await sql`
        SELECT * FROM opportunities 
        WHERE grantsgov_id = ${opportunityId}
        LIMIT 1
      `;

      if (rows.length > 0) {
        const opportunity = rows[0];
        
        // Try to get full data from multiple sources
        let fullData = null;
        
        // First, check if we have full_data in JSONB column
        if (opportunity.full_data) {
          fullData = opportunity.full_data;
        }
        // Otherwise, fetch from blob if available
        else if (opportunity.payload_blob_url) {
          try {
            const blobResponse = await fetch(opportunity.payload_blob_url);
            fullData = await blobResponse.json();
          } catch (blobError) {
            console.warn('Failed to fetch blob data:', blobError);
          }
        }

        // Merge database data with full data
        const mergedData = {
          id: opportunity.grantsgov_id,
          number: opportunity.grantsgov_id,
          grantsgov_id: opportunity.grantsgov_id,
          title: opportunity.title,
          agency: opportunity.agency,
          status: opportunity.status,
          openDate: opportunity.open_date,
          closeDate: opportunity.close_date,
          cfda: opportunity.cfda,
          synopsis: {
            synopsisDesc: opportunity.summary,
          },
          ...(fullData || {}),
        };

        return NextResponse.json({
          source: 'database',
          opportunity: mergedData,
          cached_at: opportunity.last_fetched,
        });
      }
    } catch (cacheError) {
      console.warn('Cache lookup failed, fetching fresh data:', cacheError);
    }

    // Fetch from Grants.gov API
    const grantsGovUrl = process.env.GRANTS_GOV_API_BASE || 'https://api.grants.gov/v1/api';
    const response = await fetch(`${grantsGovUrl}/fetchOpportunity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oppId: opportunityId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Grants.gov API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Extract key fields from Grants.gov API response
    const opportunity = data.oppHit || data;
    const synopsis = opportunity.synopsis || {};
    const title = opportunity.title || opportunity.oppTitle || '';
    const agency = opportunity.agency || opportunity.agencyName || '';
    const status = opportunity.status || opportunity.oppStatus || '';
    const openDate = opportunity.openDate || opportunity.postDate || null;
    const closeDate = opportunity.closeDate || opportunity.archiveDate || null;
    const cfda = opportunity.cfda || opportunity.cfdaList || '';
    const summary = synopsis.synopsisDesc || opportunity.summary || opportunity.description || '';
    
    // Extract additional details
    const eligibility = opportunity.eligibility || synopsis.eligibility || null;
    const fundingInstrument = opportunity.fundingInstrument || synopsis.fundingInstrumentType || null;
    const categoryOfFundingActivity = opportunity.categoryOfFundingActivity || synopsis.categoryOfFundingActivity || null;
    const estimatedTotalProgramFunding = opportunity.estimatedTotalProgramFunding || synopsis.estimatedTotalProgramFunding || null;
    const expectedNumberOfAwards = opportunity.expectedNumberOfAwards || synopsis.expectedNumberOfAwards || null;
    const awardCeiling = opportunity.awardCeiling || synopsis.awardCeiling || null;
    const awardFloor = opportunity.awardFloor || synopsis.awardFloor || null;
    const costSharing = opportunity.costSharing || synopsis.costSharing || null;

    // Store full payload in Vercel Blob
    let blobUrl = null;
    try {
      const blob = await put(`opportunity-${opportunityId}.json`, JSON.stringify(data), {
        access: 'public',
      });
      blobUrl = blob.url;
    } catch (storageError) {
      console.warn('Failed to store blob:', storageError);
    }

    // Cache in database
    try {
      await sql`
        INSERT INTO opportunities (
          grantsgov_id, title, agency, status, open_date, close_date, cfda, summary, payload_blob_url, last_fetched
        )
        VALUES (
          ${opportunityId}, ${title}, ${agency}, ${status}, ${openDate}, ${closeDate}, ${cfda}, ${summary}, ${blobUrl}, NOW()
        )
        ON CONFLICT (grantsgov_id)
        DO UPDATE SET
          title = ${title},
          agency = ${agency},
          status = ${status},
          open_date = ${openDate},
          close_date = ${closeDate},
          cfda = ${cfda},
          summary = ${summary},
          payload_blob_url = ${blobUrl},
          last_fetched = NOW()
      `;
    } catch (dbError) {
      console.warn('Failed to cache in database:', dbError);
    }

    return NextResponse.json({
      source: 'live',
      opportunity: {
        grantsgov_id: opportunityId,
        id: opportunityId,
        number: opportunityId,
        title,
        agency,
        status,
        openDate,
        closeDate,
        cfda,
        synopsis: {
          synopsisDesc: summary,
        },
        eligibility,
        fundingInstrument,
        categoryOfFundingActivity,
        estimatedTotalProgramFunding,
        expectedNumberOfAwards,
        awardCeiling,
        awardFloor,
        costSharing,
        fullData: data,
      },
    });
  } catch (error) {
    console.error('Opportunity API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch opportunity',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

