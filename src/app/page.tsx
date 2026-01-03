
import { Hero } from '@/components/home/hero';
import { FeaturedProjects } from '@/components/home/featuredprojects';
import { LatestPosts } from '@/components/home/latestposts';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </div>
  );
}
