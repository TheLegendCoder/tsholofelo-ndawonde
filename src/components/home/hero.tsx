'use client';

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, skills, projects } from "@/components/data/content";
import { StaggerContainer } from "@/components/ui/stagger";
import { ProjectCard } from "@/components/projects/projectcards";
import { useState, useEffect } from "react";

export function Hero() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (isHovering) {
				const nameElement = document.getElementById('hero-name');
				if (nameElement) {
					const rect = nameElement.getBoundingClientRect();
					const centerX = rect.left + rect.width / 2;
					const centerY = rect.top + rect.height / 2;
					const deltaX = (e.clientX - centerX) / 20;
					const deltaY = (e.clientY - centerY) / 20;
					setMousePosition({ x: deltaX, y: deltaY });
				}
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [isHovering]);

	return (
		<section className="gradient-hero w-full min-h-[90vh] flex items-center py-20 px-0">
			<div className="w-full flex justify-center">
				<div className="w-full max-w-4xl text-center px-4 sm:px-6 lg:px-8 mx-auto">
					{/* Availability badge with float animation */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-up animate-float">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
						</span>
						{personalInfo.availability}
					</div>

					{/* Main heading with cursor-follow effect */}
					<h1
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up [animation-delay:0.1s]"
					>
						Hi, I'm{" "}
						<span 
							id="hero-name"
							className="text-gradient cursor-pointer transition-transform duration-200 ease-out inline-block"
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => {
								setIsHovering(false);
								setMousePosition({ x: 0, y: 0 });
							}}
							data-x={mousePosition.x}
							data-y={mousePosition.y}
						>
							{personalInfo.name.split(" ")[0]}
						</span>
						<br />
						<span className="text-muted-foreground">{personalInfo.title}</span>
					</h1>

					{/* Tagline */}
					<p
						className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:0.2s]"
					>
						{personalInfo.bio}
					</p>

					{/* CTA Buttons */}
					<div
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up [animation-delay:0.3s]"
					>
						<Button asChild size="lg" className="group">
							<Link href="/projects">
								View My Work
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/contact">Get in Touch</Link>
						</Button>
					</div>

					{/* Social Links */}
					<div
						className="flex items-center justify-center gap-4 animate-fade-up [animation-delay:0.4s]"
					>
						<a
							href={personalInfo.socialLinks.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
							aria-label="GitHub"
						>
							<Github className="h-5 w-5 text-foreground" />
						</a>
						<a
							href={personalInfo.socialLinks.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-5 w-5 text-foreground" />
						</a>
						<a
							href={personalInfo.socialLinks.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
							aria-label="Twitter"
						>
							<Twitter className="h-5 w-5 text-foreground" />
						</a>
					</div>

					{/* Skills ticker with stagger animation */}
					<div
						className="mt-16 animate-fade-up [animation-delay:0.5s]"
					>
						<p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
						<StaggerContainer
							variant="fade"
							delayChildren={600}
							className="flex flex-wrap items-center justify-center gap-3"
						>
							{skills.map((skill) => (
								<span
									key={skill}
									className="px-4 py-2 rounded-full bg-card shadow-soft text-sm font-medium text-foreground hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
								>
									{skill}
								</span>
							))}
						</StaggerContainer>
					</div>
				</div>
			</div>
		</section>
	);
}


export function FeaturedProjects() {
	const featuredProjects = projects.filter((project: typeof projects[number]) => project.featured);

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
