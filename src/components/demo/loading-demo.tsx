'use client';

import { useLoading } from '@/hooks/use-loading';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LoadingDemo() {
  const { isLoading, startLoading, stopLoading, withLoading } = useLoading();

  const handleAsyncOperation = async () => {
    await withLoading(async () => {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
  };

  const handleManualLoading = () => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Loading State Demo
          {isLoading && <LoadingSpinner size="sm" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleAsyncOperation}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Loading...' : 'Test Async Operation'}
          </Button>
          
          <Button 
            onClick={handleManualLoading}
            disabled={isLoading}
            variant="outline"
            className="w-full"
          >
            {isLoading ? 'Loading...' : 'Manual Loading'}
          </Button>
        </div>
        
        {isLoading && (
          <div className="text-center text-sm text-muted-foreground">
            Operation in progress...
          </div>
        )}
      </CardContent>
    </Card>
  );
}
