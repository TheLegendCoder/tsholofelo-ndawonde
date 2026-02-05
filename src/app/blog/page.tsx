import { Layout } from "@/components/layout/layout";
import { BlogCard } from "@/components/blog/blogcard";
import { getAllBlogPosts } from "@/lib/blog";
import { EmptyState } from "@/components/ui/empty-state";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and insights about software development, React, TypeScript, and web technologies.",
};

async function BlogPage() {
  const posts = await getAllBlogPosts();

  if (posts.length === 0) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                Blog
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughts, tutorials, and insights about software development.
              </p>
            </div>
            <EmptyState
              icon={<BookOpen className="h-12 w-12 text-primary" />}
              title="Blog posts coming soon"
              description="I'm working on some insightful articles about web development, design patterns, and best practices. Check back soon for in-depth tutorials and technical insights."
              actionText="Check back soon"
            />
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development, React, and modern web
              technologies.
            </p>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-20">
              {posts[0] && (
                <BlogCard
                  id={posts[0].slug}
                  title={posts[0].title}
                  excerpt={posts[0].description}
                  image={posts[0].image}
                  date={posts[0].date}
                  readTime={posts[0].readTime}
                  category={posts[0].tags[0] || "Article"}
                  featured
                />
              )}
            </div>
          )}

          {/* Blog Grid */}
          {posts.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
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
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
