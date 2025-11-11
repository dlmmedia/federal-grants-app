// Type definitions for GrantScope

export interface GrantOpportunity {
  id: string;
  grantsgov_id: string;
  title: string;
  agency: string;
  status: string;
  open_date: string;
  close_date: string;
  cfda?: string;
  summary?: string;
  payload_blob_url?: string;
  last_fetched?: string;
}

export interface SearchParams {
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

export interface SearchResult {
  source: 'cache' | 'live';
  results: {
    hits: number;
    opportunities: GrantOpportunity[];
  };
  cached_at?: string;
}

export interface Cart {
  id: string;
  name: string;
  data: GrantOpportunity[];
  created_at: string;
  updated_at: string;
}

export interface OpportunityDetail extends GrantOpportunity {
  description?: string;
  eligibility?: string;
  fundingInstrument?: string;
  categoryOfFundingActivity?: string;
  expectedNumberOfAwards?: number;
  estimatedTotalProgramFunding?: number;
  awardCeiling?: number;
  awardFloor?: number;
  costSharing?: string;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
}

