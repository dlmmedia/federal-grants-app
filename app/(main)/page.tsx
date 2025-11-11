'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, FileText, CheckCircle, TrendingUp, Clock, DollarSign, Building2, GraduationCap, Heart, Leaf, Zap, Home, Cpu, Sprout, Palette, Car, Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FeaturedGrant {
  id: string;
  title: string;
  agency: string;
  closeDate: string;
  status: string;
  estimatedFunding?: number;
  estimatedTotalProgramFunding?: number;
  category?: string;
  categoryName?: string;
}

interface CategoryData {
  code: string;
  name: string;
  icon: any;
  color: string;
  grants: FeaturedGrant[];
}

const categoryIcons: Record<string, any> = {
  'GraduationCap': GraduationCap,
  'Heart': Heart,
  'Leaf': Leaf,
  'Zap': Zap,
  'Home': Home,
  'Cpu': Cpu,
  'Sprout': Sprout,
  'Palette': Palette,
  'Car': Car,
};

const testimonials = [
  {
    quote: "GrantScope is a one-stop shop where I can research and track grants all in one place.",
    author: "Beth Kander-Dauphin",
    role: "Chief Strategy Officer",
    organization: "Community Foundation",
    image: "/images/testimonials/beth-kander-dauphin.png"
  },
  {
    quote: "GrantScope has fundamentally changed the way we work, especially finding foundations that really fit us.",
    author: "Theresa Anderson",
    role: "Director of Development",
    organization: "Educational Institute",
    image: "/images/testimonials/theresa-anderson.png"
  },
  {
    quote: "GrantScope is an all-year round platform we can track on a year-on-year basis. We got history in there, we got documents in there. It just makes everything easier.",
    author: "Beth Noble",
    role: "Senior Grant Administrator",
    organization: "Children's Foundation",
    image: "/images/testimonials/beth-noble.png"
  },
  {
    quote: "I started using GrantScope and thought, 'this is a miracle!' This is going to save me weeks!",
    author: "Dr. Bev Browning",
    role: "Executive Director",
    organization: "Foundation",
    image: "/images/testimonials/dr-bev-browning.png"
  }
];

export default function HomePage() {
  const [featuredGrants, setFeaturedGrants] = useState<FeaturedGrant[]>([]);
  const [categorizedGrants, setCategorizedGrants] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Fetch featured grants
    const fetchFeatured = async () => {
      try {
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            status: 'posted',
            rows: 50,
            page: 1,
          }),
        });
        
        if (response.ok) {
          const data = await response.json();
          const opportunities = data.results?.oppHits || data.results?.opportunities || [];
          
          if (opportunities.length > 0) {
            setFeaturedGrants(opportunities);
            
            // Organize by category
            const categories = [
              { code: 'ED', name: 'Education', icon: 'GraduationCap', color: 'blue' },
              { code: 'HL', name: 'Health', icon: 'Heart', color: 'red' },
              { code: 'ENV', name: 'Environment', icon: 'Leaf', color: 'green' },
              { code: 'EN', name: 'Energy', icon: 'Zap', color: 'yellow' },
              { code: 'CD', name: 'Community Development', icon: 'Home', color: 'purple' },
              { code: 'ST', name: 'Science & Technology', icon: 'Cpu', color: 'indigo' },
              { code: 'AG', name: 'Agriculture', icon: 'Sprout', color: 'lime' },
              { code: 'AR', name: 'Arts', icon: 'Palette', color: 'pink' },
              { code: 'T', name: 'Transportation', icon: 'Car', color: 'orange' },
            ];
            
            const categorized = categories.map(cat => ({
              ...cat,
              grants: opportunities.filter((g: FeaturedGrant) => g.category === cat.code).slice(0, 6),
            })).filter(cat => cat.grants.length > 0);
            
            setCategorizedGrants(categorized);
          }
        }
      } catch (error) {
        console.error('Failed to fetch featured grants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  Powered by Federal Grants Data
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  The complete{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">grant platform</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10C50 2 100 2 150 6C200 10 250 8 298 4" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  Discover best-fit grants, craft winning proposals, and manage your grants — all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <Link href="/search">
                    <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto">
                      Try 14 days free
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only 50 free trials left this week.
                </p>
              </div>

              {/* Right Column - Video Preview */}
              <div className="relative group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <Image
                    src="/images/features/grant-tracker.png"
                    alt="GrantScope Platform Demo"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
            Trusted by 5,000+ nonprofits
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src="/images/customer-logos/phoenix-childrens.png"
                alt="Phoenix Children's"
                fill
                sizes="(max-width: 768px) 50vw, 128px"
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src="/images/customer-logos/nyu-langone-health.png"
                alt="NYU Langone Health"
                fill
                sizes="(max-width: 768px) 50vw, 128px"
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src="/images/customer-logos/dupage-habitat-for-humanity.png"
                alt="DuPage Habitat"
                fill
                sizes="(max-width: 768px) 50vw, 128px"
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src="/images/customer-logos/marlene-meyerson-jcc.png"
                alt="Marlene Meyerson JCC"
                fill
                sizes="(max-width: 768px) 50vw, 128px"
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src="/images/customer-logos/pro-choice-nc.png"
                alt="Pro-Choice NC"
                fill
                sizes="(max-width: 768px) 50vw, 128px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You Can Do It All Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              You Can Do It All{' '}
              <span className="relative inline-block">
                <span className="relative z-10">With GrantScope</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 2 150 6C200 10 250 8 298 4" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of grant management with GrantScope.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/funders/grant-lifecycle.png"
                alt="Grant Lifecycle"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Large Format */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container px-4">
          {/* Feature 1 - Find Best-Fit Funders */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/features/funder-insights.png"
                  alt="Find Best-Fit Funders"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Best-Fit Funders{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">In Seconds, Not Weeks</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6C50 2 100 2 150 4C200 6 250 5 298 3" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Discover relevant funding instantly, explore over 20,000 expert-curated grants, and find best-fit funders from a database of over 400,000. See who is supporting your peers with Peer Prospecting.
              </p>
              <Link href="/search">
                <Button size="lg" variant="outline">
                  Explore Grants
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature 2 - Streamline Grant Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Streamline Grant Management{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">And Meet Every Deadline</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6C50 2 100 2 150 4C200 6 250 5 298 3" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Streamline your workflow with automated deadlines, task tracking, and portfolio overviews. Boost teamwork with shared docs, reminders, and calendar integration. Tailor the platform to fit your needs.
              </p>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/features/grant-tracker.png"
                  alt="Grant Management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - AI Writing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/features/apply1.webp"
                  alt="AI Grant Writing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Craft high-quality proposal drafts{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">in 5 minutes</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6C40 2 80 2 120 4C160 6 180 5 198 3" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enhance grant writing with AI that learns from past applications, resurfacing your best ideas. Centralize documents securely and access active grant applications with one click.
              </p>
              <Link href="/generate">
                <Button size="lg" variant="outline">
                  Try AI Writer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container px-4">
          <div className="text-center mb-12">
            {/* Star Rating Display */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Teams of 1 to 100{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Win More with GrantScope</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C80 2 160 2 240 6C320 10 360 8 398 4" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative min-h-[350px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <Card className="border-2 shadow-xl bg-card/50 backdrop-blur">
                    <CardContent className="pt-12 pb-12 px-8">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              sizes="112px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <p className="text-lg md:text-xl mb-6 text-foreground/90 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <p className="font-bold text-lg text-foreground">{testimonial.author}</p>
                            <p className="text-muted-foreground font-medium">{testimonial.role}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grants by Category Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Browse Grants by Category</h2>
              <p className="text-muted-foreground">Explore opportunities organized by funding area</p>
            </div>
            <Link href="/search">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : categorizedGrants.length > 0 ? (
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                {categorizedGrants.slice(0, 4).map((cat) => (
                  <TabsTrigger key={cat.code} value={cat.code}>
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-12">
                {categorizedGrants.map((category) => {
                  const IconComponent = categoryIcons[category.icon] || FileText;
                  return (
                    <div key={category.code}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.grants.length} opportunities available</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.grants.map((grant) => (
                          <Card key={grant.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <Badge variant="secondary">{grant.status}</Badge>
                                <Clock className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <CardTitle className="line-clamp-2 text-lg">{grant.title}</CardTitle>
                              <CardDescription className="flex items-center">
                                <Building2 className="h-3 w-3 mr-1" />
                                {grant.agency}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2 text-sm mb-4">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Deadline:</span>
                                  <span className="font-medium">
                                    {new Date(grant.closeDate).toLocaleDateString()}
                                  </span>
                                </div>
                                {(grant.estimatedFunding || grant.estimatedTotalProgramFunding) && (
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Funding:</span>
                                    <span className="font-medium flex items-center">
                                      <DollarSign className="h-3 w-3" />
                                      {(grant.estimatedFunding || grant.estimatedTotalProgramFunding || 0).toLocaleString()}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <Link href={`/opportunity/${grant.id}`}>
                                <Button className="w-full" variant="outline">
                                  View Details
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </TabsContent>

              {categorizedGrants.map((category) => {
                const IconComponent = categoryIcons[category.icon] || FileText;
                return (
                  <TabsContent key={category.code} value={category.code}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.grants.length} opportunities available</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.grants.map((grant) => (
                        <Card key={grant.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <Badge variant="secondary">{grant.status}</Badge>
                              <Clock className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="line-clamp-2 text-lg">{grant.title}</CardTitle>
                            <CardDescription className="flex items-center">
                              <Building2 className="h-3 w-3 mr-1" />
                              {grant.agency}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm mb-4">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Deadline:</span>
                                <span className="font-medium">
                                  {new Date(grant.closeDate).toLocaleDateString()}
                                </span>
                              </div>
                              {(grant.estimatedFunding || grant.estimatedTotalProgramFunding) && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Funding:</span>
                                  <span className="font-medium flex items-center">
                                    <DollarSign className="h-3 w-3" />
                                    {(grant.estimatedFunding || grant.estimatedTotalProgramFunding || 0).toLocaleString()}
                                  </span>
                                </div>
                              )}
                            </div>
                            <Link href={`/opportunity/${grant.id}`}>
                              <Button className="w-full" variant="outline">
                                View Details
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          ) : (
            <Card className="border-2 border-dashed">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Welcome to GrantScope!</h3>
                  <p className="text-muted-foreground mb-6">
                    To get started, initialize the database with sample federal grant opportunities. 
                    This will create all necessary tables and populate them with diverse grant examples.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      size="lg"
                      onClick={async () => {
                        setLoading(true);
                        try {
                          const response = await fetch('/api/init-db', { method: 'POST' });
                          const data = await response.json();
                          if (data.success) {
                            window.location.reload();
                          } else {
                            alert('Failed to initialize database: ' + (data.message || 'Unknown error'));
                          }
                        } catch (error) {
                          alert('Failed to initialize database: ' + (error instanceof Error ? error.message : 'Unknown error'));
                        } finally {
                          setLoading(false);
                        }
                      }}
                      disabled={loading}
                    >
                      {loading ? 'Initializing...' : 'Initialize Database & Load Sample Grants'}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      This will create tables and seed with 15+ sample grants across multiple categories
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Funders Section */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-8">
              Over $1 billion in active grants from funders like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-5xl mx-auto">
              <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src="/images/funders/amazon.png"
                  alt="Amazon"
                  fill
                  sizes="(max-width: 768px) 50vw, 128px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src="/images/funders/kresge-foundation.png"
                  alt="Kresge Foundation"
                  fill
                  sizes="(max-width: 768px) 50vw, 128px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src="/images/funders/macarthur-foundation.png"
                  alt="MacArthur Foundation"
                  fill
                  sizes="(max-width: 768px) 50vw, 128px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src="/images/funders/patagonia.png"
                  alt="Patagonia"
                  fill
                  sizes="(max-width: 768px) 50vw, 128px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src="/images/funders/usda.png"
                  alt="USDA"
                  fill
                  sizes="(max-width: 768px) 50vw, 128px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0">
          <Image
            src="/images/backgrounds/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-foreground border-border/50">
              Try 14 days for free
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              The only complete{' '}
              <span className="relative inline-block">
                <span className="relative z-10">grant solution</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 2 150 6C200 10 250 8 298 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-3xl mx-auto">
              Since 2015, over 4,000 organizations have used GrantScope to find and win more grant funding, empowering them to expand their impact on critical missions such as educating children, protecting endangered species, and restoring natural habitats.
            </p>
            <Link href="/search">
              <Button size="lg" className="text-base px-8 py-6 h-auto bg-primary hover:bg-primary/90">
                Start your free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <Image
            src="/images/backgrounds/wave.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </section>
    </div>
  );
}

