import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Figma, Server, Database } from 'lucide-react';
import Link from 'next/link';

const skills = [
  { name: 'Frontend', icon: Code, description: 'React, Next.js, TypeScript, TailwindCSS' },
  { name: 'Backend', icon: Server, description: 'Node.js, Express, Firebase' },
  { name: 'Database', icon: Database, description: 'MongoDB, PostgreSQL, Firestore' },
  { name: 'UI/UX Design', icon: Figma, description: 'Figma, Prototyping, User Research' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-headline leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tsholofelo<br />Ndawonde</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">A Passionate Software Engineer</h2>
              <div className="space-y-6 text-lg text-muted-foreground max-w-2xl">
                <p>
                  Welcome to my personal space on the web! I specialize in building robust and scalable web applications. With a keen eye for detail and a love for clean, efficient code, I strive to create impactful digital experiences. My journey in tech has been driven by curiosity and a constant desire to learn and innovate.
                </p>
                <p>
                  Here, you'll find insights into my professional work, my side projects where I experiment with new technologies, and a collection of articles and tutorials sharing what I've learned along the way.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">
                    About Me
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right: Image/Card Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-[400px] h-[533px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl text-muted-foreground select-none">
                600 x 800
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Blog Section */}
    <section id="blog" className="w-full py-20 bg-background border-t border-primary/20">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center font-headline mb-4 mt-2">Blog</h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Insights, experiences, and thoughts on software engineering, technology trends, and development best practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Team working" className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full text-sm">Architecture</span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Building Scalable Microservices with .NET</h3>
              <p className="text-muted-foreground flex-1">A practical guide to designing and deploying microservices for modern cloud applications.</p>
            </div>
          </div>
          {/* Blog Card 2 */}
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Code on screen" className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-sm">Best Practices</span>
                <span className="text-muted-foreground text-sm">8 min read</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Clean Code Principles Every Developer Should Know</h3>
              <p className="text-muted-foreground flex-1">Improve your code quality and maintainability with these essential clean code tips.</p>
            </div>
          </div>
          {/* Blog Card 3 */}
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Server racks" className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-purple-200 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm">Cloud</span>
                <span className="text-muted-foreground text-sm">12 min read</span>
              </div>
              <h3 className="font-bold text-xl mb-2">DevOps Automation: From Code to Production</h3>
              <p className="text-muted-foreground flex-1">How to automate your deployment pipeline and deliver software faster and safer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="skills" className="w-full py-16 md:py-24 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skillset</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                I have a diverse range of skills, from design to development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader className="p-0">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <skill.icon className="h-10 w-10 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <CardTitle className="text-xl font-bold">{skill.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
