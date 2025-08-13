'use client';

import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const startProgress = () => {
      setIsVisible(true);
      setProgress(0);

      // Quick initial progress
      setTimeout(() => setProgress(20), 50);
      
      // Gradual progress simulation
      let currentProgress = 20;
      interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress < 85) {
          setProgress(currentProgress);
        }
      }, 100);

      // Complete after a short delay to show the loading state
      timeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsVisible(false);
          setProgress(0);
        }, 200);
      }, 800);
    };

    // Start progress on route change
    startProgress();

    // Cleanup
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [pathname]);

  // Create dynamic class name using Tailwind's arbitrary value syntax
  const progressTransform = useMemo(() => {
    const scaleX = progress / 100;
    return `scale-x-[${scaleX.toFixed(3)}]`;
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent overflow-hidden"
      role="progressbar"
      aria-label="Page loading progress"
    >
      <div
        className={`h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-200 ease-out origin-left ${progressTransform}`}
      />
    </div>
  );
}
