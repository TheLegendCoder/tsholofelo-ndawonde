import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

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
];


import { useState } from 'react';

const FILTERS = [
  { label: 'Professional', value: 'professional' },
  { label: 'Pet Projects', value: 'pet' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'professional' | 'pet'>('professional');
  const filteredProjects = projects.filter(p => filter === 'professional' ? p.type === 'professional' : p.type === 'pet');

  return (
    <div className="container max-w-6xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold font-headline mb-4">Projects</h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          A showcase of professional work and personal projects that demonstrate my skills and passion for technology.
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex bg-white/10 border border-white/20 rounded-full p-2 gap-2 shadow-inner">
            <button
              className={`px-8 py-3 rounded-full font-semibold text-lg focus:outline-none transition-all ${filter === 'professional' ? 'bg-white/20 shadow text-white' : 'text-white/70'}`}
              onClick={() => setFilter('professional')}
            >
              Professional
            </button>
            <button
              className={`px-8 py-3 rounded-full font-semibold text-lg focus:outline-none transition-all ${filter === 'pet' ? 'bg-white/20 shadow text-white' : 'text-white/70'}`}
              onClick={() => setFilter('pet')}
            >
              Pet Projects
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground text-xl py-12">No projects found for this category.</div>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card">
              <CardHeader className="p-0">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="object-cover w-full h-auto"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 bg-card/50">
                <div className="flex justify-between w-full">
                  <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
