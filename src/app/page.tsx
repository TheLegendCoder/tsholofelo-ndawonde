import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Figma, Server, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const skills = [
  { name: 'Frontend', icon: Code, description: 'React, Next.js, TypeScript, TailwindCSS' },
  { name: 'Backend', icon: Server, description: 'Node.js, Express, Firebase' },
  { name: 'Database', icon: Database, description: 'MongoDB, PostgreSQL, Firestore' },
  { name: 'UI/UX Design', icon: Figma, description: 'Figma, Prototyping, User Research' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tsholofelo
                  <br className="hidden sm:inline lg:hidden" />
                  <span className="sm:hidden lg:inline"> </span>
                  Ndawonde
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                A Passionate Software Engineer
              </h2>
              <div className="space-y-4 lg:space-y-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                <p>
                  Welcome to my personal space on the web! I specialize in building robust and scalable web applications. With a keen eye for detail and a love for clean, efficient code, I strive to create impactful digital experiences.
                </p>
                <p className="hidden sm:block">
                  My journey in tech has been driven by curiosity and a constant desire to learn and innovate. Here, you'll find insights into my professional work, my side projects where I experiment with new technologies, and a collection of articles and tutorials sharing what I've learned along the way.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/about">
                    About Me
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right: Image/Placeholder */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-muted-foreground select-none">
                  600 x 800
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 md:py-20 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter font-headline">
              My Skillset
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              I have a diverse range of skills, from design to development, focused on creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <Card 
                key={skill.name} 
                className="flex flex-col items-center text-center p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
              >
                <CardHeader className="p-0">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="h-10 w-10 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-4 space-y-2">
                  <CardTitle className="text-xl font-bold">{skill.name}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="w-full py-16 md:py-20 lg:py-24 bg-background border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, experiences, and thoughts on software engineering, technology trends, and development best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Blog Card 1 */}
            <article className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                  alt="Team working on software project" 
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                    Architecture
                  </span>
                  <span className="text-muted-foreground text-sm">5 min read</span>
                </div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2">
                  Building Scalable Microservices with .NET
                </h3>
                <p className="text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
                  A practical guide to designing and deploying microservices for modern cloud applications.
                </p>
                <Link 
                  href="/blog/building-scalable-microservices" 
                  className="inline-flex items-center mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            
            {/* Blog Card 2 */}
            <article className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                  alt="Clean code on computer screen" 
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-sm">
                    Best Practices
                  </span>
                  <span className="text-muted-foreground text-sm">8 min read</span>
                </div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2">
                  Clean Code Principles Every Developer Should Know
                </h3>
                <p className="text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
                  Improve your code quality and maintainability with these essential clean code tips.
                </p>
                <Link 
                  href="/blog/clean-code-principles" 
                  className="inline-flex items-center mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            
            {/* Blog Card 3 */}
            <article className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 group md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" 
                  alt="Server infrastructure and DevOps" 
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-200 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm">
                    Cloud
                  </span>
                  <span className="text-muted-foreground text-sm">12 min read</span>
                </div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2">
                  DevOps Automation: From Code to Production
                </h3>
                <p className="text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
                  How to automate your deployment pipeline and deliver software faster and safer.
                </p>
                <Link 
                  href="/blog/devops-automation" 
                  className="inline-flex items-center mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
