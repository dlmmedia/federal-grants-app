'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, X, Building2, Calendar, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

interface Grant {
  id: string;
  number: string;
  title: string;
  agency: string;
  status: string;
  openDate: string;
  closeDate: string;
  cfda?: string;
  synopsis?: {
    synopsisDesc?: string;
  };
}

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState('posted');
  const [agency, setAgency] = useState('');
  const [category, setCategory] = useState('all');
  const [eligibility, setEligibility] = useState('all');
  const [fundingInstrument, setFundingInstrument] = useState('all');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Grant[]>([]);
  const [totalHits, setTotalHits] = useState(0);
  const [source, setSource] = useState<'cache' | 'live' | null>(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleSearch = async (newPage: number = 1) => {
    setLoading(true);
    setError(null);
    setPage(newPage);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword || undefined,
          status,
          agency: agency || undefined,
          category: category && category !== 'all' ? category : undefined,
          eligibility: eligibility && eligibility !== 'all' ? eligibility : undefined,
          fundingInstrument: fundingInstrument && fundingInstrument !== 'all' ? fundingInstrument : undefined,
          page: newPage,
          rows: 25,
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setSource(data.source);
      
      const opportunities = data.results?.oppHits || data.results?.opportunities || [];
      setResults(opportunities);
      setTotalHits(data.results?.oppHitNumber || data.results?.hits || opportunities.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search grants');
      setResults([]);
      setTotalHits(0);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setKeyword('');
    setStatus('posted');
    setAgency('');
    setCategory('all');
    setEligibility('all');
    setFundingInstrument('all');
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const totalPages = Math.ceil(totalHits / 25);
  const activeFiltersCount = [
    agency,
    category !== 'all' ? category : '',
    eligibility !== 'all' ? eligibility : '',
    fundingInstrument !== 'all' ? fundingInstrument : ''
  ].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="posted">Posted</SelectItem>
            <SelectItem value="forecasted">Forecasted</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
            <SelectItem value="forecasted|posted">Forecasted & Posted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Agency</label>
        <Input
          placeholder="e.g., HHS, DOE, NSF"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Category</label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="AG">Agriculture</SelectItem>
            <SelectItem value="AR">Arts</SelectItem>
            <SelectItem value="BC">Business and Commerce</SelectItem>
            <SelectItem value="CD">Community Development</SelectItem>
            <SelectItem value="CP">Consumer Protection</SelectItem>
            <SelectItem value="DPR">Disaster Prevention and Relief</SelectItem>
            <SelectItem value="ED">Education</SelectItem>
            <SelectItem value="ELT">Employment, Labor and Training</SelectItem>
            <SelectItem value="EN">Energy</SelectItem>
            <SelectItem value="ENV">Environment</SelectItem>
            <SelectItem value="FN">Food and Nutrition</SelectItem>
            <SelectItem value="HL">Health</SelectItem>
            <SelectItem value="HO">Housing</SelectItem>
            <SelectItem value="HU">Humanities</SelectItem>
            <SelectItem value="IIJ">Income Security and Social Services</SelectItem>
            <SelectItem value="IS">Information and Statistics</SelectItem>
            <SelectItem value="LJL">Law, Justice and Legal Services</SelectItem>
            <SelectItem value="NR">Natural Resources</SelectItem>
            <SelectItem value="RA">Recovery Act</SelectItem>
            <SelectItem value="RD">Regional Development</SelectItem>
            <SelectItem value="ST">Science and Technology</SelectItem>
            <SelectItem value="T">Transportation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Eligibility</label>
        <Select value={eligibility} onValueChange={setEligibility}>
          <SelectTrigger>
            <SelectValue placeholder="Select eligibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Eligible</SelectItem>
            <SelectItem value="00">State governments</SelectItem>
            <SelectItem value="01">County governments</SelectItem>
            <SelectItem value="02">City or township governments</SelectItem>
            <SelectItem value="04">Special district governments</SelectItem>
            <SelectItem value="05">Independent school districts</SelectItem>
            <SelectItem value="06">Public and State controlled institutions of higher education</SelectItem>
            <SelectItem value="07">Native American tribal governments (Federally recognized)</SelectItem>
            <SelectItem value="08">Public housing authorities/Indian housing authorities</SelectItem>
            <SelectItem value="11">Native American tribal organizations (other than Federally recognized)</SelectItem>
            <SelectItem value="12">Nonprofits having a 501(c)(3) status with the IRS</SelectItem>
            <SelectItem value="13">Nonprofits that do not have a 501(c)(3) status with the IRS</SelectItem>
            <SelectItem value="20">Private institutions of higher education</SelectItem>
            <SelectItem value="21">Individuals</SelectItem>
            <SelectItem value="22">For profit organizations other than small businesses</SelectItem>
            <SelectItem value="23">Small businesses</SelectItem>
            <SelectItem value="25">Others</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Funding Instrument</label>
        <Select value={fundingInstrument} onValueChange={setFundingInstrument}>
          <SelectTrigger>
            <SelectValue placeholder="Select funding type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="CA">Cooperative Agreement</SelectItem>
            <SelectItem value="G">Grant</SelectItem>
            <SelectItem value="PC">Procurement Contract</SelectItem>
            <SelectItem value="O">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <Button variant="outline" className="w-full" onClick={clearFilters}>
        <X className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  );

  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Search Federal Grants</h1>
        <p className="text-lg text-muted-foreground">
          Explore thousands of grant opportunities from federal agencies
        </p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FilterContent />
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Search Bar */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Search by keywords (e.g., education, health, technology)..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(1)}
                    className="h-12"
                  />
                </div>
                <Button onClick={() => handleSearch(1)} disabled={loading} size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>

                {/* Mobile Filters Button */}
                <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="lg" className="relative">
                      <Filter className="h-5 w-5" />
                      {activeFiltersCount > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                        >
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Refine your grant search
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Active Filters Display */}
              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {agency && (
                    <Badge variant="secondary">
                      Agency: {agency}
                      <button
                        onClick={() => setAgency('')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {category && category !== 'all' && (
                    <Badge variant="secondary">
                      Category: {category}
                      <button
                        onClick={() => setCategory('all')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {eligibility && eligibility !== 'all' && (
                    <Badge variant="secondary">
                      Eligibility: {eligibility}
                      <button
                        onClick={() => setEligibility('all')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {fundingInstrument && fundingInstrument !== 'all' && (
                    <Badge variant="secondary">
                      Type: {fundingInstrument}
                      <button
                        onClick={() => setFundingInstrument('all')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Info */}
          {source && (
            <div className="flex items-center justify-between text-sm">
              <div className="text-muted-foreground">
                Found <span className="font-semibold text-foreground">{totalHits.toLocaleString()}</span> opportunities
                {source === 'cache' && ' (from cache)'}
              </div>
              {totalPages > 1 && (
                <div className="text-muted-foreground">
                  Page {page} of {totalPages}
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <Card className="border-destructive/50 bg-destructive/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading Skeleton */}
          {loading && (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Results List */}
          {!loading && results.length > 0 && (
            <>
              <div className="space-y-4">
                {results.map((grant) => (
                  <Card key={grant.id || grant.number} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 line-clamp-2">
                            {grant.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 flex-wrap">
                            <span className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {grant.agency}
                            </span>
                            {grant.cfda && (
                              <span className="text-xs">CFDA: {grant.cfda}</span>
                            )}
                          </CardDescription>
                        </div>
                        <Badge variant={grant.status === 'posted' ? 'default' : 'secondary'}>
                          {grant.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground mr-2">Open:</span>
                          <span className="font-medium">{formatDate(grant.openDate)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground mr-2">Close:</span>
                          <span className="font-medium">{formatDate(grant.closeDate)}</span>
                        </div>
                      </div>

                      {grant.synopsis?.synopsisDesc && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {grant.synopsis.synopsisDesc}
                        </p>
                      )}

                      <div className="flex gap-2">
                        <Link href={`/opportunity/${grant.id || grant.number}`} className="flex-1">
                          <Button className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={() => handleSearch(page - 1)}
                        disabled={page === 1 || loading}
                        variant="outline"
                      >
                        Previous
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Page {page} of {totalPages}
                      </div>
                      <Button
                        onClick={() => handleSearch(page + 1)}
                        disabled={page === totalPages || loading}
                        variant="outline"
                      >
                        Next
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {/* No Results */}
          {!loading && results.length === 0 && source && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No grants found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Initial State */}
          {!loading && !source && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Start Your Search</h3>
                <p className="text-muted-foreground mb-4">
                  Enter keywords or use filters to find federal grant opportunities
                </p>
                <Button onClick={() => handleSearch(1)} size="lg">
                  Load Available Grants
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

