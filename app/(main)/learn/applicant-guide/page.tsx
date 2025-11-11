import Link from 'next/link';
import { ArrowLeft, FileText, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function ApplicantGuidePage() {
  return (
    <div className="container px-4 py-8 max-w-4xl">
      <Link href="/learn">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Grants 101
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Applicant Guide</h1>
        <p className="text-xl text-muted-foreground">
          Step-by-step instructions for applying to federal grants
        </p>
      </div>

      <div className="space-y-8">
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                  Start Early!
                </h4>
                <p className="text-sm text-orange-800 dark:text-orange-300">
                  The registration and application process can take several weeks. Begin at least 
                  4-6 weeks before the grant deadline to ensure you have time to complete all requirements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phase 1: Preparation */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="text-base px-3 py-1">Phase 1</Badge>
              <CardTitle className="text-2xl">Preparation (4-6 weeks before deadline)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">1</span>
                Find the Right Grant
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Search Grants.gov or use GrantScope to identify opportunities that align with your 
                organization's mission and capabilities. Review the NOFO carefully.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">2</span>
                Complete Registration
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                If not already registered, complete these steps:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Register with SAM.gov (2-4 weeks)</li>
                <li>Obtain UEI number</li>
                <li>Register with Grants.gov (1-2 days after SAM.gov approval)</li>
                <li>Designate Authorized Organization Representative (AOR)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">3</span>
                Assess Eligibility
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Verify that your organization meets all eligibility requirements, including 
                organization type, geographic location, and program-specific criteria.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">4</span>
                Download Application Package
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Download the complete application package from Grants.gov, including all forms, 
                instructions, and required attachments.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Phase 2: Development */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="text-base px-3 py-1">Phase 2</Badge>
              <CardTitle className="text-2xl">Application Development (2-4 weeks)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">5</span>
                Develop Project Narrative
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Write a compelling narrative that includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Project abstract/summary</li>
                <li>Statement of need or problem description</li>
                <li>Project goals and objectives (SMART goals)</li>
                <li>Detailed project activities and methodology</li>
                <li>Timeline and milestones</li>
                <li>Evaluation plan</li>
                <li>Sustainability plan</li>
              </ul>
              <div className="ml-8 mt-2 p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Tip:</strong> Use GrantScope's AI generator to help draft your narrative 
                  and ensure you address all required components.
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">6</span>
                Prepare Budget
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Create a detailed budget that includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Personnel costs (salaries, benefits)</li>
                <li>Equipment and supplies</li>
                <li>Travel expenses</li>
                <li>Contractual services</li>
                <li>Other direct costs</li>
                <li>Indirect costs (if applicable)</li>
                <li>Cost-sharing or matching funds (if required)</li>
              </ul>
              <p className="text-sm text-muted-foreground ml-8 mt-2">
                Include a detailed budget narrative justifying each line item.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">7</span>
                Gather Supporting Documents
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Collect all required attachments:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Letters of support from partners</li>
                <li>Organizational chart</li>
                <li>Resumes/CVs of key personnel</li>
                <li>Financial statements and audit reports</li>
                <li>IRS 501(c)(3) determination letter (if applicable)</li>
                <li>Evidence of organizational capacity</li>
                <li>Previous grant performance documentation</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">8</span>
                Complete Required Forms
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Fill out all standard federal forms:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>SF-424 (Application for Federal Assistance)</li>
                <li>SF-424A or SF-424B (Budget Information)</li>
                <li>Certifications and Assurances</li>
                <li>Disclosure of Lobbying Activities</li>
                <li>Agency-specific forms as required</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Phase 3: Review & Submit */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="text-base px-3 py-1">Phase 3</Badge>
              <CardTitle className="text-2xl">Review & Submission (1 week before deadline)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">9</span>
                Internal Review
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Conduct a thorough review:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Proofread all documents for errors</li>
                <li>Verify all required sections are complete</li>
                <li>Check page limits and formatting requirements</li>
                <li>Ensure all attachments are properly labeled</li>
                <li>Confirm budget calculations are accurate</li>
                <li>Have colleagues review for clarity and completeness</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">10</span>
                Upload to Grants.gov
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Upload all documents to Grants.gov workspace. Test file uploads to ensure 
                compatibility and proper formatting.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">11</span>
                Submit Application
              </h4>
              <p className="text-sm text-muted-foreground ml-8 mb-2">
                Submit your complete application through Grants.gov:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-12 text-sm text-muted-foreground">
                <li>Submit at least 48 hours before the deadline</li>
                <li>Account for potential technical issues</li>
                <li>Ensure AOR completes final submission</li>
                <li>Save confirmation email and tracking number</li>
              </ul>
              <div className="ml-8 mt-2 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">
                    <strong>Important:</strong> Grants.gov can experience high traffic near deadlines. 
                    Late submissions are typically not accepted, even if due to technical issues.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phase 4: Post-Submission */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="text-base px-3 py-1">Phase 4</Badge>
              <CardTitle className="text-2xl">Post-Submission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">12</span>
                Track Application Status
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Monitor your application status on Grants.gov. You should receive validation 
                emails confirming receipt and successful submission.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">13</span>
                Respond to Agency Requests
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Respond promptly to any requests for additional information or clarification 
                from the funding agency.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm mr-2">14</span>
                Await Award Decision
              </h4>
              <p className="text-sm text-muted-foreground ml-8">
                Award decisions typically take 3-6 months. The NOFO will specify the expected 
                timeline for announcements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Success */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tips for a Successful Application</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Follow instructions exactly:</strong> Adhere to all formatting, page limits, 
                  and submission requirements specified in the NOFO.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Address evaluation criteria:</strong> Ensure your application directly 
                  addresses all review criteria and scoring elements.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Be specific and data-driven:</strong> Use concrete examples, statistics, 
                  and evidence to support your claims.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Demonstrate organizational capacity:</strong> Show that your organization 
                  has the experience and resources to successfully implement the project.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Budget must match narrative:</strong> Ensure your budget aligns with and 
                  supports the activities described in your project narrative.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="mb-6 opacity-90">
              Use GrantScope to streamline your application process
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" variant="secondary">
                  Find Grants
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

