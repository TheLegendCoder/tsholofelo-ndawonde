import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blogcard";
import { getAllBlogPosts } from "@/lib/blog";
import { StaggerContainer } from "@/components/ui/stagger";
import { EmptyState } from "@/components/ui/empty-state";

export async function LatestPosts() {
  const allPosts = await getAllBlogPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Latest from the Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about software development and technology.
          </p>
        </div>

        {latestPosts.length === 0 ? (
          <EmptyState
            icon={<BookOpen className="h-12 w-12 text-primary" />}
            title="Blog posts coming soon"
            description="I'm working on insightful articles about web development, design patterns, and best practices. Check back soon for in-depth tutorials and technical insights."
            actionText="Check back soon"
          />
        ) : (
          <>
            {/* Posts Grid with Stagger Animation */}
            <StaggerContainer
              variant="slide-up"
              delayChildren={100}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  id={post.slug}
                  title={post.title}
                  excerpt={post.description}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.tags[0] || "Article"}
                />
              ))}
            </StaggerContainer>

            {/* View All Button */}
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
