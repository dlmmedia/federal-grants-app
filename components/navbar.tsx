'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavbarProps {}

const platformItems = [
  { href: '/search', label: 'Search Grants' },
  { href: '/generate', label: 'AI Generator' },
  { href: '/docs', label: 'Grant Tracker' },
];

const resourceItems = [
  { href: '/learn', label: 'Learning Center' },
  { href: '/learn/eligibility', label: 'Eligibility Guide' },
  { href: '/learn/applicant-guide', label: 'Applicant Guide' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar({}: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            GS
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">GrantScope</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Platform Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
              <span>Platform</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {platformItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="w-full cursor-pointer">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pricing Link */}
          <Link
            href="/pricing"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
              <span>Resources</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {resourceItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="w-full cursor-pointer">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          <Link href="/login" className="hidden md:block">
            <Button variant="outline" size="default" className="gap-2">
              <User className="h-4 w-4" />
              Log In
            </Button>
          </Link>
          <Link href="/search">
            <Button size="default" className="bg-primary hover:bg-primary/90">
              Try 14 days free
            </Button>
          </Link>
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Platform</p>
                  {platformItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-medium text-foreground hover:text-primary transition-colors pl-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Resources</p>
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-medium text-foreground hover:text-primary transition-colors pl-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

