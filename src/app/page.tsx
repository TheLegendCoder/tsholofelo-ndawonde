import { Hero } from '@/components/home/hero';
import { FeaturedProjects } from '@/components/home/featuredprojects';
import { LatestPosts } from '@/components/home/latestposts';
import { ScrollCelebrationWrapper } from '@/components/home/scroll-celebration-wrapper';

export default function Home() {
  return (
    <ScrollCelebrationWrapper>
      <div className="flex flex-col items-center w-full overflow-x-hidden">
        <Hero />
        <FeaturedProjects />
        <LatestPosts />
      </div>
    </ScrollCelebrationWrapper>
  );
}

