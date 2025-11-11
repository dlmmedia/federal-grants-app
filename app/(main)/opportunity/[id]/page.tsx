'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Building2, Calendar, DollarSign, FileText, Download, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface OpportunityDetail {
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
  eligibility?: {
    code?: string;
    description?: string;
  }[];
  fundingInstrument?: string;
  categoryOfFundingActivity?: string;
  estimatedTotalProgramFunding?: number;
  expectedNumberOfAwards?: number;
  awardCeiling?: number;
  awardFloor?: number;
  costSharing?: string;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
}

export default function OpportunityPage() {
  const params = useParams();
  const router = useRouter();
  const [opportunity, setOpportunity] = useState<OpportunityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await fetch(`/api/opportunity/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch opportunity');
        }

        const data = await response.json();
        // Handle both cached and live responses
        const opportunityData = data.opportunity || data;
        setOpportunity(opportunityData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load opportunity');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchOpportunity();
    }
  }, [params.id]);

  const handleGenerateChecklist = async () => {
    if (!opportunity) return;

    toast.info('Generating checklist...');

    try {
      const response = await fetch('/api/checklist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grantId: opportunity.id || opportunity.number || opportunity.grantsgov_id,
          grant: opportunity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate checklist');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const filename = `grant-checklist-${opportunity.number || opportunity.id || 'application'}.pdf`;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success('Checklist downloaded successfully!');
    } catch (err) {
      console.error('Checklist generation error:', err);
      toast.error('Failed to generate checklist');
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="container px-4 py-8">
        <Skeleton className="h-8 w-32 mb-8" />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-32 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !opportunity) {
    return (
      <div className="container px-4 py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Card className="border-destructive/50 bg-destructive/10">
          <CardContent className="pt-6">
            <p className="text-destructive">{error || 'Opportunity not found'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Search
      </Button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{opportunity.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                {opportunity.agency}
              </span>
              {opportunity.number && (
                <span className="text-sm">Opportunity #: {opportunity.number}</span>
              )}
              {opportunity.cfda && (
                <span className="text-sm">CFDA: {opportunity.cfda}</span>
              )}
            </div>
          </div>
          <Badge variant={opportunity.status === 'posted' ? 'default' : 'secondary'} className="text-base px-4 py-2">
            {opportunity.status}
          </Badge>
        </div>

        {/* Key Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Open Date
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{formatDate(opportunity.openDate)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Close Date
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-destructive">{formatDate(opportunity.closeDate)}</p>
            </CardContent>
          </Card>

          {opportunity.estimatedTotalProgramFunding && (
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Total Funding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{formatCurrency(opportunity.estimatedTotalProgramFunding)}</p>
              </CardContent>
            </Card>
          )}

          {opportunity.expectedNumberOfAwards && (
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Expected Awards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{opportunity.expectedNumberOfAwards}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Button size="lg" onClick={() => router.push(`/generate?grantId=${opportunity.id || opportunity.number}`)}>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Application
          </Button>
          <Button size="lg" variant="outline" onClick={handleGenerateChecklist}>
            <Download className="mr-2 h-5 w-5" />
            Download Checklist
          </Button>
          {opportunity.number && (
            <Button size="lg" variant="outline" asChild>
              <a
                href={`https://www.grants.gov/search-results-detail/${opportunity.number}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View on Grants.gov
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Synopsis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {opportunity.synopsis?.synopsisDesc || 'No synopsis available.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grant Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {opportunity.fundingInstrument && (
                <div>
                  <h4 className="font-semibold mb-2">Funding Instrument</h4>
                  <p className="text-muted-foreground">{opportunity.fundingInstrument}</p>
                </div>
              )}
              {opportunity.categoryOfFundingActivity && (
                <div>
                  <h4 className="font-semibold mb-2">Category of Funding Activity</h4>
                  <p className="text-muted-foreground">{opportunity.categoryOfFundingActivity}</p>
                </div>
              )}
              {opportunity.costSharing && (
                <div>
                  <h4 className="font-semibold mb-2">Cost Sharing</h4>
                  <p className="text-muted-foreground">{opportunity.costSharing}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eligibility Tab */}
        <TabsContent value="eligibility" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Eligible Applicants</CardTitle>
              <CardDescription>
                Organizations and entities eligible to apply for this grant
              </CardDescription>
            </CardHeader>
            <CardContent>
              {opportunity.eligibility && opportunity.eligibility.length > 0 ? (
                <ul className="space-y-3">
                  {opportunity.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        {item.code && <span className="font-semibold mr-2">{item.code}:</span>}
                        <span className="text-muted-foreground">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  Eligibility information not available. Please check the full opportunity details on Grants.gov.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Funding Tab */}
        <TabsContent value="funding" className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {opportunity.estimatedTotalProgramFunding && (
              <Card>
                <CardHeader>
                  <CardTitle>Total Program Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(opportunity.estimatedTotalProgramFunding)}
                  </p>
                </CardContent>
              </Card>
            )}

            {opportunity.expectedNumberOfAwards && (
              <Card>
                <CardHeader>
                  <CardTitle>Expected Number of Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">
                    {opportunity.expectedNumberOfAwards}
                  </p>
                </CardContent>
              </Card>
            )}

            {opportunity.awardCeiling && (
              <Card>
                <CardHeader>
                  <CardTitle>Award Ceiling</CardTitle>
                  <CardDescription>Maximum award amount</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {formatCurrency(opportunity.awardCeiling)}
                  </p>
                </CardContent>
              </Card>
            )}

            {opportunity.awardFloor && (
              <Card>
                <CardHeader>
                  <CardTitle>Award Floor</CardTitle>
                  <CardDescription>Minimum award amount</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {formatCurrency(opportunity.awardFloor)}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {opportunity.costSharing && (
            <Card>
              <CardHeader>
                <CardTitle>Cost Sharing or Matching Requirement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{opportunity.costSharing}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Documents</CardTitle>
              <CardDescription>
                Download application packages, forms, and additional materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              {opportunity.attachments && opportunity.attachments.length > 0 ? (
                <div className="space-y-3">
                  {opportunity.attachments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">{doc.type}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No documents available. Visit Grants.gov for the full application package.
                  </p>
                  {opportunity.number && (
                    <Button variant="outline" className="mt-4" asChild>
                      <a
                        href={`https://www.grants.gov/search-results-detail/${opportunity.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Grants.gov
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Checklist Tab */}
        <TabsContent value="checklist" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Checklist</CardTitle>
              <CardDescription>
                Essential steps and requirements for submitting your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Review Eligibility Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure your organization meets all eligibility criteria listed in the Eligibility tab.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Register with Grants.gov</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete SAM.gov registration and obtain a UEI number (can take 2-4 weeks).
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download Application Package</h4>
                    <p className="text-sm text-muted-foreground">
                      Get all required forms and instructions from the Documents tab or Grants.gov.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Prepare Required Documents</h4>
                    <p className="text-sm text-muted-foreground">
                      Gather all supporting materials, budget justifications, and organizational documents.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Application Forms</h4>
                    <p className="text-sm text-muted-foreground">
                      Fill out all required forms accurately and completely. Consider using our AI generator for assistance.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Review and Submit</h4>
                    <p className="text-sm text-muted-foreground">
                      Review your complete application and submit through Grants.gov before the deadline: {formatDate(opportunity.closeDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleGenerateChecklist} className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Checklist
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

