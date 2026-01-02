import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blogcard";
import { blogPosts } from "@/components/data/content";

export function LatestPosts() {
	const latestPosts = blogPosts.slice(0, 3);

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

				{/* Posts Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{latestPosts.map((post) => (
						<BlogCard key={post.id} {...post} />
					))}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<Button asChild variant="outline" size="lg" className="group">
						<Link href="/blog">
							View All Posts
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
