import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    title: "Mastering Flexbox: A Comprehensive Guide",
    description: "Dive deep into the world of CSS Flexbox. This guide covers everything from the basics to advanced layouts, complete with practical examples.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "July 15, 2024",
    tags: ["CSS", "Frontend", "Web Development"],
    slug: "/blog/mastering-flexbox",
    imageHint: "code lines"
  },
  {
    title: "Why Next.js is the Future of React Development",
    description: "An in-depth look at Next.js and its features like Server-Side Rendering, Static Site Generation, and API Routes that make it a powerhouse for modern web apps.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "June 28, 2024",
    tags: ["Next.js", "React", "JavaScript"],
    slug: "/blog/why-nextjs",
    imageHint: "server racks"
  },
  {
    title: "UI vs. UX Design: A Clear Distinction",
    description: "Many use these terms interchangeably, but they represent different aspects of the design process. Let's break down the key differences.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "May 10, 2024",
    tags: ["UI", "UX", "Design"],
    slug: "/blog/ui-vs-ux",
    imageHint: "design wireframe"
  },
];

export default function BlogPage() {
  return (
    <div className="container max-w-6xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          My Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Articles, tutorials, and insights on web development and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card">
            <CardHeader className="p-0">
               <Image 
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                data-ai-hint={post.imageHint}
                className="object-cover w-full h-auto"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <CardTitle className="text-xl font-bold mb-3">{post.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{post.description}</p>
            </CardContent>
            <CardFooter className="p-6 bg-card/50 flex flex-col items-start gap-4">
               <div className="flex items-center text-xs text-muted-foreground space-x-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={post.slug}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
