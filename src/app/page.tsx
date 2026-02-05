'use client';

import { Hero } from '@/components/home/hero';
import { FeaturedProjects } from '@/components/home/featuredprojects';
import { LatestPosts } from '@/components/home/latestposts';
import { useScrollCelebration } from '@/hooks/use-scroll-celebration';

export default function Home() {
  // Celebrate when user scrolls 80% down the homepage
  useScrollCelebration({ 
    threshold: 80, 
    once: false, // Allow multiple celebrations on homepage
    message: "Thanks for exploring! ✨"
  });

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </div>
  );
}
