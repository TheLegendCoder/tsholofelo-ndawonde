'use client';

import { useState, useCallback } from 'react';

interface UseLoadingReturn {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  withLoading: (fn: () => Promise<any>) => Promise<any>;
}

export function useLoading(initialState = false): UseLoadingReturn {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const withLoading = useCallback(async (fn: () => Promise<any>) => {
    try {
      setIsLoading(true);
      const result = await fn();
      return result;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  };
}
