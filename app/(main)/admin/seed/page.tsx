'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, CheckCircle, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function SeedPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleInitAndSeed = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/init-db', {
        method: 'POST',
      });

      const data = await response.json();
      setResult(data);

      if (response.ok && data.success) {
        toast.success(`Successfully initialized database and seeded ${data.details?.grantsSeeded || 0} grants!`);
      } else {
        toast.error('Failed to initialize database');
      }
    } catch (error) {
      toast.error('Failed to initialize database');
      setResult({ error: 'Network error', message: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSeedOnly = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
      });

      const data = await response.json();
      setResult(data);

      if (response.ok && data.success) {
        toast.success(`Successfully seeded ${data.total} grants!`);
      } else {
        toast.error('Failed to seed database');
      }
    } catch (error) {
      toast.error('Failed to seed database');
      setResult({ error: 'Network error', message: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Database Management</h1>
        <p className="text-lg text-muted-foreground">
          Initialize and populate the database with sample grant data
        </p>
      </div>

      <div className="space-y-6">
        {/* Initialize & Seed */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Initialize Database & Seed Grants</CardTitle>
                <CardDescription>
                  Create all tables and populate with 16 sample grants (Recommended for first-time setup)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">This will:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Create all necessary database tables</li>
                <li>• Add indexes for optimal performance</li>
                <li>• Seed 16 sample grants across 9 categories</li>
                <li>• Education, Health, Environment, Energy, Community Development, Science & Technology, Agriculture, Arts, and Transportation</li>
              </ul>
            </div>

            <Button
              onClick={handleInitAndSeed}
              disabled={loading}
              size="lg"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Initializing & Seeding...
                </>
              ) : (
                <>
                  <Database className="mr-2 h-5 w-5" />
                  Initialize & Seed Database
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Seed Only */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Reseed Grants Only</CardTitle>
                <CardDescription>
                  Update or add sample grants without recreating tables
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Use this if:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Database tables already exist</li>
                <li>• You want to refresh sample data</li>
                <li>• You want to update existing grants</li>
              </ul>
            </div>

            <Button
              onClick={handleSeedOnly}
              disabled={loading}
              size="lg"
              variant="outline"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Seeding...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Reseed Grants
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Result Display */}
        {result && (
          <Card className={result.success ? 'border-green-500/50 bg-green-500/10' : 'border-destructive/50 bg-destructive/10'}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    {result.success ? 'Success!' : 'Error'}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {result.message || result.error}
                  </p>
                  {result.details && (
                    <div className="mt-3 p-3 bg-background rounded border">
                      <p className="text-sm font-semibold mb-2">Details:</p>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        {result.details.tablesCreated && (
                          <li>• Tables: {result.details.tablesCreated.join(', ')}</li>
                        )}
                        {result.details.grantsSeeded !== undefined && (
                          <li>• Grants seeded: {result.details.grantsSeeded}</li>
                        )}
                        {result.details.totalGrants !== undefined && (
                          <li>• Total grants in database: {result.details.totalGrants}</li>
                        )}
                      </ul>
                    </div>
                  )}
                  {result.errors && result.errors.length > 0 && (
                    <div className="mt-3 p-3 bg-background rounded border">
                      <p className="text-sm font-semibold mb-2">Errors:</p>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        {result.errors.map((error: string, i: number) => (
                          <li key={i}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.success && (
                    <div className="mt-4">
                      <Button
                        onClick={() => window.location.href = '/'}
                        size="sm"
                      >
                        View Grants on Homepage
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
          <p className="mb-2">
            <strong>Note:</strong> These operations are safe to run multiple times. Existing grants with the same ID will be updated, not duplicated.
          </p>
          <p>
            After seeding, you can view the grants on the homepage or search for them on the search page.
          </p>
        </div>
      </div>
    </div>
  );
}

