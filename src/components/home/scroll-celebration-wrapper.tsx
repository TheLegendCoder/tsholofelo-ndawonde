'use client';

import { useScrollCelebration } from '@/hooks/use-scroll-celebration';
import { ReactNode } from 'react';

interface ScrollCelebrationWrapperProps {
  children: ReactNode;
}

export function ScrollCelebrationWrapper({ children }: ScrollCelebrationWrapperProps) {
  // Celebrate when user scrolls 80% down the homepage
  useScrollCelebration({
    threshold: 80,
    once: false, // Allow multiple celebrations on homepage
    message: "Thanks for exploring! ✨"
  });

  return <>{children}</>;
}
