'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!apiKey) {
      console.warn(
        'PostHog API key is missing. Set NEXT_PUBLIC_POSTHOG_KEY environment variable to enable analytics.'
      );
      return;
    }

    // Initialize PostHog
    posthog.init(apiKey, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      autocapture: true,
      capture_pageleave: true,
      persistence: 'localStorage',
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog loaded successfully');
    }
  }, []);

  return <>{children}</>;
}
