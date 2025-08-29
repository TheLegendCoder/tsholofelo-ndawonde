import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    title: "SQL Injection: A Comprehensive Security Guide",
    description: "Understand SQL injection attacks, learn how to identify vulnerabilities, and implement robust prevention techniques to secure your applications.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "August 13, 2025",
    tags: ["Security", "SQL", "Web Development", "Cybersecurity"],
    slug: "/blog/sql-injection-comprehensive-guide",
    imageHint: "database security shield",
    readTime: "18 min read"
  },
  {
    title: "JSON Serialization: A Complete Guide to Converting Objects and Handling Common Issues",
    description: "A comprehensive guide to JSON serialization and deserialization, covering best practices, common issues, and practical examples for modern software development.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "August 29, 2025",
    tags: ["JSON", "Serialization", "C#", ".NET", "API", "Programming"],
    slug: "/blog/json-serialization-guide",
    imageHint: "json code",
    readTime: "14 min read"
  },
  {
    title: "Mastering Flexbox: A Comprehensive Guide",
    description: "Dive deep into the world of CSS Flexbox. This guide covers everything from the basics to advanced layouts, complete with practical examples.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "July 15, 2024",
    tags: ["CSS", "Frontend", "Web Development"],
    slug: "/blog/mastering-flexbox",
    imageHint: "code lines",
    readTime: "8 min read"
  },
  {
    title: "Why Next.js is the Future of React Development",
    description: "An in-depth look at Next.js and its features like Server-Side Rendering, Static Site Generation, and API Routes that make it a powerhouse for modern web apps.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "June 28, 2024",
    tags: ["Next.js", "React", "JavaScript"],
    slug: "/blog/why-nextjs",
    imageHint: "server racks",
    readTime: "12 min read"
  },
  {
    title: "UI vs. UX Design: A Clear Distinction",
    description: "Many use these terms interchangeably, but they represent different aspects of the design process. Let's break down the key differences.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "May 10, 2024",
    tags: ["UI", "UX", "Design"],
    slug: "/blog/ui-vs-ux",
    imageHint: "design wireframe",
    readTime: "6 min read"
  },
  {
    title: "Building Scalable React Applications",
    description: "Learn the best practices for structuring and scaling React applications for enterprise-level development.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "April 22, 2024",
    tags: ["React", "Architecture", "Performance"],
    slug: "/blog/scalable-react",
    imageHint: "application structure",
    readTime: "15 min read"
  },
  {
    title: "The Complete Guide to TypeScript",
    description: "Everything you need to know about TypeScript, from basic types to advanced patterns and best practices.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "March 18, 2024",
    tags: ["TypeScript", "JavaScript", "Development"],
    slug: "/blog/typescript-guide",
    imageHint: "typescript code",
    readTime: "20 min read"
  },
  {
    title: "Modern CSS Grid Layout Techniques",
    description: "Master CSS Grid with practical examples and learn how to create complex, responsive layouts with ease.",
    image: "https://placehold.co/600x400.png",
    author: "Tsholofelo Ndawonde",
    date: "February 14, 2024",
    tags: ["CSS", "Grid", "Layout"],
    slug: "/blog/css-grid-techniques",
    imageHint: "grid layout",
    readTime: "10 min read"
  },
];

export default function BlogPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline">
              My Blog
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Articles, tutorials, and insights on web development, design, and the latest technologies shaping our digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className={`group ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        data-ai-hint={post.imageHint}
                        className="object-cover w-full h-48 sm:h-56 lg:h-48 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/90 text-foreground">
                          {post.readTime}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-lg sm:text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="p-4 sm:p-6 bg-card/50 flex flex-col items-start gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground w-full">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="link" 
                      className="p-0 h-auto text-primary font-medium hover:text-primary/80 transition-colors group"
                    >
                      <Link href={post.slug} className="flex items-center">
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 md:py-20 bg-card/50 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Get notified when I publish new articles and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Follow on Twitter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
