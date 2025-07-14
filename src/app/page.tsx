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
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
              Tsholofelo Ndawonde
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A passionate Full-Stack Developer and UI/UX enthusiast, crafting beautiful and functional web experiences. I turn complex problems into simple, elegant solutions.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
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
