import { Layout } from "@/components/layout/layout";
import { BlogCard } from "@/components/blog/blogcard";
import { blogPosts } from "@/components/data/content";

const Blog = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
