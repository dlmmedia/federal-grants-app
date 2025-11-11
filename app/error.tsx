'use client';

import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Card className="border-red-200 bg-red-50 max-w-2xl mx-auto mt-20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Something went wrong!</h2>
            <p className="text-red-800 mb-4">
              {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
            <div className="flex gap-4">
              <Button onClick={reset} variant="default">
                Try Again
              </Button>
              <Button onClick={() => (window.location.href = '/')} variant="outline">
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

