import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function EligibilityPage() {
  return (
    <div className="container px-4 py-8 max-w-4xl">
      <Link href="/learn">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Grants 101
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Eligibility Guide</h1>
        <p className="text-xl text-muted-foreground">
          Understanding who can apply for federal grants
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Eligible Applicant Types</CardTitle>
            <CardDescription>
              Federal grants are available to various types of organizations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">State Governments</h4>
                <p className="text-sm text-muted-foreground">
                  State agencies and departments are eligible for many federal grant programs.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Local Governments</h4>
                <p className="text-sm text-muted-foreground">
                  County, city, township, and special district governments.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Educational Institutions</h4>
                <p className="text-sm text-muted-foreground">
                  Public and private colleges, universities, community colleges, and independent school districts.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Nonprofit Organizations</h4>
                <p className="text-sm text-muted-foreground">
                  501(c)(3) organizations and other nonprofits with tax-exempt status.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Tribal Governments</h4>
                <p className="text-sm text-muted-foreground">
                  Federally recognized Native American tribal governments and organizations.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">For-Profit Organizations</h4>
                <p className="text-sm text-muted-foreground">
                  Small businesses and other for-profit entities (eligibility varies by program).
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Individuals</h4>
                <p className="text-sm text-muted-foreground">
                  Some programs allow individual applicants (primarily for research and arts).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">General Eligibility Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              To be eligible for federal grants, organizations typically must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be registered in SAM.gov (System for Award Management)</li>
              <li>Have a valid UEI (Unique Entity Identifier)</li>
              <li>Be registered with Grants.gov</li>
              <li>Have an Authorized Organization Representative (AOR)</li>
              <li>Meet the specific eligibility criteria for each grant program</li>
              <li>Have the organizational capacity to manage federal funds</li>
              <li>Comply with federal regulations and reporting requirements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Who Is NOT Eligible?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Unregistered Organizations</h4>
                <p className="text-sm text-muted-foreground">
                  Organizations not registered in SAM.gov cannot receive federal grants.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Debarred Entities</h4>
                <p className="text-sm text-muted-foreground">
                  Organizations or individuals excluded from federal contracting and grants.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Foreign Entities (Usually)</h4>
                <p className="text-sm text-muted-foreground">
                  Most federal grants are limited to U.S.-based organizations, though some exceptions exist.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Registration Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Step 1: Register with SAM.gov</h4>
              <p className="text-sm text-muted-foreground mb-2">
                All organizations must register in the System for Award Management. This process includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-muted-foreground">
                <li>Obtaining a UEI (Unique Entity Identifier)</li>
                <li>Providing organizational information</li>
                <li>Designating points of contact</li>
                <li>Completing financial and banking information</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Timeline:</strong> Allow 2-4 weeks for registration approval
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Step 2: Register with Grants.gov</h4>
              <p className="text-sm text-muted-foreground mb-2">
                After SAM.gov registration is complete:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-muted-foreground">
                <li>Create a Grants.gov account</li>
                <li>Designate an Authorized Organization Representative (AOR)</li>
                <li>Complete E-Business Point of Contact (E-Biz POC) authorization</li>
                <li>Set up workspace for application submissions</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Timeline:</strong> 1-2 days after SAM.gov approval
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Program-Specific Eligibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Beyond general eligibility, each grant program has specific requirements that may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Geographic restrictions:</strong> Some grants are limited to specific states, regions, or communities</li>
              <li><strong>Organization size:</strong> Certain programs target small organizations or specific revenue thresholds</li>
              <li><strong>Project focus:</strong> Activities must align with program priorities and objectives</li>
              <li><strong>Matching requirements:</strong> Ability to provide cost-sharing or matching funds</li>
              <li><strong>Previous performance:</strong> Track record with similar projects or federal grants</li>
              <li><strong>Accreditation:</strong> Educational institutions may need specific accreditations</li>
            </ul>
            <p className="mt-4">
              Always carefully review the Notice of Funding Opportunity (NOFO) for complete eligibility requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Check Your Eligibility</h3>
            <p className="mb-6 opacity-90">
              Search for grants that match your organization's profile
            </p>
            <Link href="/search">
              <Button size="lg" variant="secondary">
                Search Grants
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

