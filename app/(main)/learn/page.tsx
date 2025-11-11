import Link from 'next/link';
import { BookOpen, CheckCircle, Users, FileText, Award, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function LearnPage() {
  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Grants 101</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about federal grants and the application process
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link href="/learn/eligibility">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Eligibility Guide</CardTitle>
              <CardDescription>
                Learn who can apply for federal grants
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/learn/applicant-guide">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Applicant Guide</CardTitle>
              <CardDescription>
                Step-by-step application instructions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/docs">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>FAQs</CardTitle>
              <CardDescription>
                Common questions and answers
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* What Are Federal Grants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What Are Federal Grants?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Federal grants are financial awards provided by the U.S. government to support projects 
              and programs that benefit the public. Unlike loans, grants do not need to be repaid.
            </p>
            <p>
              The federal government awards over <strong>$500 billion</strong> in grants annually 
              across 26 federal agencies to support various initiatives including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Education and research</li>
              <li>Healthcare and public health</li>
              <li>Community development</li>
              <li>Environmental protection</li>
              <li>Arts and culture</li>
              <li>Science and technology</li>
              <li>Social services</li>
            </ul>
          </CardContent>
        </Card>

        {/* Types of Grants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Types of Federal Grants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Discretionary Grants
              </h3>
              <p className="text-muted-foreground">
                Competitive grants awarded based on merit review. Applicants must submit detailed 
                proposals that are evaluated against specific criteria.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Formula Grants
              </h3>
              <p className="text-muted-foreground">
                Non-competitive grants distributed according to a formula specified in legislation. 
                Typically awarded to state and local governments.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Continuation Grants
              </h3>
              <p className="text-muted-foreground">
                Renewal of funding for existing projects that have demonstrated success and met 
                performance requirements.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Pass-Through Grants
              </h3>
              <p className="text-muted-foreground">
                Grants awarded to state or local governments that then distribute funds to other 
                organizations (sub-recipients).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Grant Application Process */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">The Grant Application Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Find Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Search Grants.gov or use GrantScope to find federal grant opportunities that 
                    match your organization's mission and capabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Register</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete registration with SAM.gov (System for Award Management) and Grants.gov. 
                    This process can take 2-4 weeks, so start early.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Review Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    Carefully read the Notice of Funding Opportunity (NOFO) or Request for Proposals 
                    (RFP). Note all eligibility requirements, deadlines, and submission instructions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Prepare Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop your project proposal, budget, and all required documents. Consider using 
                    GrantScope's AI generator to help draft your application.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">5</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Submit</h4>
                  <p className="text-sm text-muted-foreground">
                    Submit your complete application through Grants.gov before the deadline. 
                    Submit at least 48 hours early to address any technical issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">6</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Track & Follow Up</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your application status and respond promptly to any requests from the 
                    funding agency. Award decisions typically take 3-6 months.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Terms to Know</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">CFDA (Catalog of Federal Domestic Assistance)</h4>
              <p className="text-sm text-muted-foreground">
                A unique number assigned to each federal program. Now called Assistance Listings.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">UEI (Unique Entity Identifier)</h4>
              <p className="text-sm text-muted-foreground">
                A 12-character alphanumeric ID assigned to organizations in SAM.gov. Required for grant applications.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">NOFO (Notice of Funding Opportunity)</h4>
              <p className="text-sm text-muted-foreground">
                The official announcement of a grant competition, including requirements and instructions.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">AOR (Authorized Organization Representative)</h4>
              <p className="text-sm text-muted-foreground">
                The person authorized to submit grant applications on behalf of your organization.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Indirect Costs</h4>
              <p className="text-sm text-muted-foreground">
                Overhead expenses that support the project but aren't directly attributable to it (e.g., utilities, administrative salaries).
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Match/Cost Sharing</h4>
              <p className="text-sm text-muted-foreground">
                The portion of project costs not paid by the federal grant, which the recipient must cover.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Additional Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="https://www.grants.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">Grants.gov</span>
              <span className="text-sm text-muted-foreground">Official federal grants portal</span>
            </a>
            <a
              href="https://sam.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">SAM.gov</span>
              <span className="text-sm text-muted-foreground">System for Award Management</span>
            </a>
            <a
              href="https://www.cfda.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">Assistance Listings</span>
              <span className="text-sm text-muted-foreground">Federal program database</span>
            </a>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Grant Search?</h3>
            <p className="mb-6 opacity-90">
              Use GrantScope to find and apply for federal grant opportunities
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" variant="secondary">
                  Search Grants
                </Button>
              </Link>
              <Link href="/generate">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Generate Application
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

