import Link from 'next/link';
import { FileText, BookOpen, Code, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DocsPage() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Guides, resources, and FAQs to help you make the most of GrantScope
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/learn">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Grants 101</CardTitle>
                <CardDescription>
                  Learn the basics of federal grants and the application process
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/learn/eligibility">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Eligibility Guide</CardTitle>
                <CardDescription>
                  Understand who can apply for federal grants
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
                  Step-by-step instructions for submitting grant applications
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Coming soon: Technical documentation for developers
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How do I register for Grants.gov?</h4>
              <p className="text-sm text-muted-foreground">
                First, register your organization with SAM.gov to obtain a UEI number. After SAM.gov 
                registration is approved (2-4 weeks), you can register with Grants.gov. Visit our 
                Eligibility Guide for detailed instructions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How does the AI grant generator work?</h4>
              <p className="text-sm text-muted-foreground">
                Our AI generator uses OpenAI's GPT-4 to create tailored grant applications based on 
                your project information. It generates project narratives, goals, budget justifications, 
                and more. The output is a draft that you should review and customize.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Is GrantScope affiliated with Grants.gov?</h4>
              <p className="text-sm text-muted-foreground">
                No, GrantScope is an independent platform. We use publicly available data from Grants.gov 
                to help users search and apply for federal grants, but we are not affiliated with or 
                endorsed by the U.S. government.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How often is grant data updated?</h4>
              <p className="text-sm text-muted-foreground">
                We cache grant data to improve performance, but regularly sync with Grants.gov to ensure 
                you have access to the latest opportunities. Always verify critical information on the 
                official Grants.gov website before submitting.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Can I submit applications through GrantScope?</h4>
              <p className="text-sm text-muted-foreground">
                No, all grant applications must be submitted through the official Grants.gov portal. 
                GrantScope helps you search for opportunities, generate application content, and organize 
                your grants, but final submission happens on Grants.gov.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How much does GrantScope cost?</h4>
              <p className="text-sm text-muted-foreground">
                GrantScope is currently free to use. We may introduce premium features in the future, 
                but core functionality including search and basic tools will remain free.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Contact our support team
            </p>
            <Link href="/contact">
              <Button size="lg">
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

