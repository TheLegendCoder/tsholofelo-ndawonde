"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { StaggerContainer } from '@/components/ui/stagger';
import { CelebrationButton } from '@/components/ui/celebration-button';
import { useToast } from '@/hooks/use-toast';

const projects = [ 
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with Next.js and Stripe integration.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "React", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "online store",
    type: "professional"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool that helps teams organize their work, track progress, and meet deadlines. Features real-time updates.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Firebase", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "project management",
    type: "professional"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio site (the one you're on right now!) to showcase my skills and projects. Designed in Figma and built with Next.js.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "Figma", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "personal website",
    type: "pet"
  },
  {
    title: "Weather App",
    description: "A simple and elegant weather application that provides real-time weather data for any location, using a third-party weather API.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "weather forecast",
    type: "pet"
  }
] as const;

const FILTERS = [
  { label: 'Professional', value: 'professional' },
  { label: 'Pet Projects', value: 'pet' },
] as const;

type ProjectType = 'professional' | 'pet';

export default function ProjectsPage() {
  const [showPersonal, setShowPersonal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  
  const filteredProjects = projects.filter(project => 
    showPersonal ? project.type === 'pet' : project.type === 'professional'
  );

  const handleFilterChange = (value: boolean) => {
    if (value !== showPersonal) {
      setIsTransitioning(true);
      
      // Show loading toast
      toast({
        title: value ? "Switching to personal projects..." : "Switching to professional work...",
        duration: 1500,
      });

      // Delay state change for smooth animation
      setTimeout(() => {
        setShowPersonal(value);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary mb-4 animate-fade-in">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-in">
              A collection of my professional work and personal projects showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <div className="inline-flex bg-card rounded-full p-1 gap-2 shadow-lg">
              <CelebrationButton
                type="button"
                onClick={() => handleFilterChange(false)}
                celebrateOnClick={true}
                celebrationIntensity="low"
                className={`px-6 sm:px-8 lg:px-10 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  !showPersonal
                    ? 'bg-background text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="Show professional projects"
              >
                Professional
              </CelebrationButton>
              <CelebrationButton
                type="button"
                onClick={() => handleFilterChange(true)}
                celebrateOnClick={true}
                celebrationIntensity="low"
                className={`px-6 sm:px-8 lg:px-10 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  showPersonal
                    ? 'bg-background text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="Show personal projects"
              >
                Personal
              </CelebrationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 lg:py-16 space-y-4 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground">Nothing here yet</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Check out my {showPersonal ? 'professional' : 'personal'} work instead! More exciting projects coming soon.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => handleFilterChange(!showPersonal)}
                  variant="outline"
                  size="lg"
                >
                  View {showPersonal ? 'Professional' : 'Personal'} Projects
                </Button>
              </div>
            </div>
          ) : (
            <StaggerContainer
              variant="slide-up"
              delayChildren={0}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {filteredProjects.map((project) => (
                <article key={project.title}>
                  <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card group">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          data-ai-hint={project.imageHint}
                          className="object-cover w-full h-48 sm:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-4 sm:p-6 flex-grow">
                      <CardTitle className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="p-4 sm:p-6 bg-card/50">
                      <div className="flex flex-col sm:flex-row justify-between w-full gap-3 sm:gap-4">
                        <Button asChild variant="outline" className="w-full sm:w-auto">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full sm:w-auto">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Source Code
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </article>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}
