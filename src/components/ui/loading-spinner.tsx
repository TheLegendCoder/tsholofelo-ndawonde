'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'pulse' | 'bounce' | 'dots';
}

export function LoadingSpinner({ size = 'md', className, variant = 'default' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  if (variant === 'pulse') {
    return (
      <div
        className={cn(
          'rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse-glow',
          sizeClasses[size],
          className
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (variant === 'bounce') {
    return (
      <div className={cn('flex items-center gap-1.5', className)} role="status" aria-label="Loading">
        <span className={cn('rounded-full bg-primary animate-bounce', sizeClasses[size])} style={{ animationDelay: '0ms' }} />
        <span className={cn('rounded-full bg-accent animate-bounce', sizeClasses[size])} style={{ animationDelay: '150ms' }} />
        <span className={cn('rounded-full bg-primary animate-bounce', sizeClasses[size])} style={{ animationDelay: '300ms' }} />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center gap-1', className)} role="status" aria-label="Loading">
        <div className={cn('rounded-full bg-primary animate-bounce', 'h-2 w-2')} style={{ animationDelay: '0s' }} />
        <div className={cn('rounded-full bg-accent animate-bounce', 'h-2 w-2')} style={{ animationDelay: '0.15s' }} />
        <div className={cn('rounded-full bg-primary animate-bounce', 'h-2 w-2')} style={{ animationDelay: '0.3s' }} />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface PageLoadingProps {
  message?: string;
  className?: string;
  variant?: 'default' | 'pulse' | 'bounce' | 'dots';
}

export function PageLoading({ message = 'Loading...', className, variant = 'bounce' }: PageLoadingProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center min-h-[200px] space-y-4 animate-fade-in', className)}>
      <LoadingSpinner size="lg" className="text-primary" variant={variant} />
      <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
    </div>
  );
}

interface FullPageLoadingProps {
  message?: string;
  variant?: 'default' | 'pulse' | 'bounce' | 'dots';
}

export function FullPageLoading({ message = 'Loading...', variant = 'pulse' }: FullPageLoadingProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center justify-center space-y-6 rounded-lg bg-card p-12 shadow-xl border border-primary/20 animate-bounce-up">
        <LoadingSpinner size="lg" className="text-primary" variant={variant} />
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
