import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Platform */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                  Search Grants
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Generator
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/learn/eligibility" className="text-muted-foreground hover:text-foreground transition-colors">
                  Eligibility Guide
                </Link>
              </li>
              <li>
                <Link href="/learn/applicant-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Applicant Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Why GrantScope */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Why GrantScope</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search?category=ED" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nonprofits
                </Link>
              </li>
              <li>
                <Link href="/search?category=HL" className="text-muted-foreground hover:text-foreground transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/search?category=ENV" className="text-muted-foreground hover:text-foreground transition-colors">
                  Environment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://grants.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Grants.gov ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              GS
            </div>
            <span className="font-bold text-lg">GrantScope</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/images/social-media/linkedin.svg"
                  alt="LinkedIn"
                  fill
                  sizes="20px"
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/images/social-media/facebook.svg"
                  alt="Facebook"
                  fill
                  sizes="20px"
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/images/social-media/x.svg"
                  alt="X"
                  fill
                  sizes="20px"
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/images/social-media/youtube.svg"
                  alt="YouTube"
                  fill
                  sizes="20px"
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} GrantScope. All rights reserved.
          </p>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Data sourced from{' '}
          <a 
            href="https://grants.gov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Grants.gov
          </a>
          . Not affiliated with the U.S. government.
        </p>
      </div>
    </footer>
  );
}
