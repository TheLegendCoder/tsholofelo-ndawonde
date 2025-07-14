import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          About Me
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A little bit about my journey and what drives me.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
            <Image 
                src="https://placehold.co/400x400.png"
                alt="Tsholofelo Ndawonde"
                width={300}
                height={300}
                data-ai-hint="professional headshot"
                className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
            />
        </div>
        <div className="w-full md:w-2/3 space-y-6 text-lg text-foreground/80">
          <p>
            Hello! I'm Tsholofelo Ndawonde, a dedicated Full-Stack Developer with a keen eye for design and a passion for creating seamless, user-centric web applications. My journey into the world of tech began with a fascination for how things work, which quickly evolved into a love for building digital products that are both intuitive and powerful.
          </p>
          <p>
            With a background in both front-end and back-end technologies, I enjoy the challenge of bringing ideas to life, from the initial concept and wireframing in Figma to deploying a full-scale application. I'm proficient in a range of technologies including React, Next.js, Node.js, and various database systems.
          </p>
          <p>
            Beyond coding, I am a firm believer in lifelong learning. I am constantly exploring new technologies, design principles, and development methodologies to stay at the forefront of this ever-evolving industry. I share my learnings through my blog and tutorials, hoping to help others on their own development journey.
          </p>
          <p>
            When I'm not at my computer, you can find me exploring the outdoors, reading a good book, or experimenting with new recipes in the kitchen. I believe that a balanced life fuels creativity and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}
