import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface SearchParams {
  keyword?: string;
  agency?: string;
  status?: string;
  category?: string;
  fundingInstrument?: string;
  eligibility?: string;
  sortBy?: string;
  page?: number;
  rows?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: SearchParams = await request.json();
    
    // First, try to fetch from local database
    try {
      const conditions: any[] = [];

      // Build the actual query with conditions
      let whereClause = '';
      const params: any[] = [];
      
      if (body.keyword) {
        whereClause += `(title ILIKE '%' || $${params.length + 1} || '%' OR summary ILIKE '%' || $${params.length + 1} || '%')`;
        params.push(body.keyword);
      }
      
      if (body.agency) {
        if (whereClause) whereClause += ' AND ';
        whereClause += `agency ILIKE '%' || $${params.length + 1} || '%'`;
        params.push(body.agency);
      }
      
      if (body.status) {
        if (whereClause) whereClause += ' AND ';
        const statuses = body.status.split('|');
        whereClause += `"status" = ANY($${params.length + 1})`;
        params.push(statuses);
      }

      // Execute query if there are conditions
      if (whereClause) {
        const queryText = `
          SELECT * FROM opportunities 
          WHERE ${whereClause}
          ORDER BY last_fetched DESC
          LIMIT $${params.length + 1}
          OFFSET $${params.length + 2}
        `;
        params.push(body.rows || 25);
        params.push(((body.page || 1) - 1) * (body.rows || 25));

        const { rows } = await sql.query(queryText, params);
        
        if (rows.length > 0) {
          // Transform database results to match expected format
          const opportunities = await Promise.all(rows.map(async (row: any) => {
            let fullData = null;
            
            // First try full_data JSONB column
            if (row.full_data) {
              fullData = row.full_data;
            }
            // Otherwise try blob
            else if (row.payload_blob_url) {
              try {
                const blobResponse = await fetch(row.payload_blob_url);
                fullData = await blobResponse.json();
              } catch (e) {
                console.warn('Failed to fetch blob for', row.grantsgov_id);
              }
            }
            
            return {
              id: row.grantsgov_id,
              number: row.grantsgov_id,
              title: row.title,
              agency: row.agency,
              status: row.status,
              openDate: row.open_date,
              closeDate: row.close_date,
              cfda: row.cfda,
              synopsis: {
                synopsisDesc: row.summary,
              },
              ...(fullData || {}),
            };
          }));

          return NextResponse.json({
            source: 'database',
            results: {
              oppHits: opportunities,
              oppHitNumber: opportunities.length,
            },
          });
        }
      } else {
        // No filters, get all
        const { rows } = await sql`
          SELECT * FROM opportunities 
          ORDER BY last_fetched DESC
          LIMIT ${body.rows || 25}
          OFFSET ${((body.page || 1) - 1) * (body.rows || 25)}
        `;
        
        if (rows.length > 0) {
          const opportunities = await Promise.all(rows.map(async (row: any) => {
            let fullData = null;
            
            // First try full_data JSONB column
            if (row.full_data) {
              fullData = row.full_data;
            }
            // Otherwise try blob
            else if (row.payload_blob_url) {
              try {
                const blobResponse = await fetch(row.payload_blob_url);
                fullData = await blobResponse.json();
              } catch (e) {
                console.warn('Failed to fetch blob for', row.grantsgov_id);
              }
            }
            
            return {
              id: row.grantsgov_id,
              number: row.grantsgov_id,
              title: row.title,
              agency: row.agency,
              status: row.status,
              openDate: row.open_date,
              closeDate: row.close_date,
              cfda: row.cfda,
              synopsis: {
                synopsisDesc: row.summary,
              },
              ...(fullData || {}),
            };
          }));

          return NextResponse.json({
            source: 'database',
            results: {
              oppHits: opportunities,
              oppHitNumber: opportunities.length,
            },
          });
        }
      }
    } catch (dbError) {
      console.warn('Database query failed, will try external API:', dbError);
    }
    
    // Create a hash of the query parameters for caching
    const queryHash = crypto
      .createHash('sha256')
      .update(JSON.stringify(body))
      .digest('hex');

    // Check if we have a cached result less than 24 hours old
    try {
      const { rows } = await sql`
        SELECT * FROM search_cache 
        WHERE query_hash = ${queryHash} 
        AND created_at > NOW() - INTERVAL '1 day' 
        LIMIT 1
      `;

      if (rows.length > 0) {
        // Fetch cached result from blob
        const cachedResponse = await fetch(rows[0].result_blob_url);
        const cachedData = await cachedResponse.json();
        
        return NextResponse.json({
          source: 'cache',
          results: cachedData,
          cached_at: rows[0].created_at,
        });
      }
    } catch (cacheError) {
      console.warn('Cache lookup failed, fetching fresh data:', cacheError);
    }

    // Build search parameters for Grants.gov API
    const searchParams: any = {
      keyword: body.keyword || '',
      oppStatuses: body.status || 'forecasted|posted',
      sortBy: body.sortBy || 'openDate|desc',
      rows: body.rows || 25,
      offset: ((body.page || 1) - 1) * (body.rows || 25),
    };

    if (body.agency) {
      searchParams.agencies = body.agency;
    }

    if (body.category) {
      searchParams.fundingCategories = body.category;
    }

    if (body.fundingInstrument) {
      searchParams.fundingInstruments = body.fundingInstrument;
    }

    if (body.eligibility) {
      searchParams.eligibilities = body.eligibility;
    }

    // Fetch from Grants.gov API
    const grantsGovUrl = process.env.GRANTS_GOV_API_BASE || 'https://api.grants.gov/v1/api';
    const response = await fetch(`${grantsGovUrl}/search2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchParams),
    });

    if (!response.ok) {
      throw new Error(`Grants.gov API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Store result in Vercel Blob
    try {
      const blob = await put(`search-${queryHash}.json`, JSON.stringify(data), {
        access: 'public',
      });

      // Cache the result in database
      await sql`
        INSERT INTO search_cache (query_hash, result_blob_url)
        VALUES (${queryHash}, ${blob.url})
        ON CONFLICT (query_hash)
        DO UPDATE SET result_blob_url = ${blob.url}, created_at = NOW()
      `;
    } catch (storageError) {
      console.warn('Failed to cache result:', storageError);
      // Continue even if caching fails
    }

    return NextResponse.json({
      source: 'live',
      results: data,
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to search grants',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

