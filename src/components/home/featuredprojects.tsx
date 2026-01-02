import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/projectcards";
import { projects } from "@/components/data/content";

export function FeaturedProjects() {
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section className="py-20 bg-secondary/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
						Featured Projects
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A selection of projects that showcase my skills and passion for building great software.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{featuredProjects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<Button asChild variant="outline" size="lg" className="group">
						<Link href="/projects">
							View All Projects
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
