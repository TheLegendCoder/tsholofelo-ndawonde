import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';

const tutorials = [
  {
    title: "Build a REST API with Node.js and Express",
    description: "A step-by-step tutorial on creating a complete REST API from scratch using Node.js, Express, and MongoDB for the database.",
    image: "https://placehold.co/600x400.png",
    level: "Intermediate",
    duration: "2 hours",
    tags: ["Node.js", "Express", "API", "Backend"],
    slug: "/tutorials/node-rest-api",
    imageHint: "database schema"
  },
  {
    title: "Deploying a Next.js App to Vercel",
    description: "Learn how to deploy your Next.js application to Vercel in just a few clicks. We'll cover environment variables and custom domains.",
    image: "https://placehold.co/600x400.png",
    level: "Beginner",
    duration: "30 minutes",
    tags: ["Next.js", "Deployment", "Vercel"],
    slug: "/tutorials/deploy-nextjs-vercel",
    imageHint: "cloud servers"
  },
  {
    title: "Creating Animations with Framer Motion in React",
    description: "Add life to your React applications with beautiful animations using Framer Motion. This tutorial covers page transitions, gestures, and more.",
    image: "https://placehold.co/600x400.png",
    level: "Intermediate",
    duration: "1.5 hours",
    tags: ["React", "Animation", "Framer Motion"],
    slug: "/tutorials/framer-motion-react",
    imageHint: "abstract shapes"
  },
];

export default function TutorialsPage() {
  return (
    <div className="container max-w-6xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Tutorials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Step-by-step guides to help you learn and grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card">
            <CardHeader className="p-0">
               <Image 
                src={tutorial.image}
                alt={tutorial.title}
                width={600}
                height={400}
                data-ai-hint={tutorial.imageHint}
                className="object-cover w-full h-auto"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="default" className="bg-accent text-accent-foreground">{tutorial.level}</Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{tutorial.duration}</span>
                </div>
              </div>
              <CardTitle className="text-xl font-bold mb-3">{tutorial.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{tutorial.description}</p>
            </CardContent>
            <CardFooter className="p-6 bg-card/50">
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={tutorial.slug}>
                  Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
