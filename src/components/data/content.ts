// Portfolio content data - easily editable

export const personalInfo = {
  name: "Tsholofelo Ndawonde",
  title: "Software Engineer",
  tagline: "Crafting elegant solutions through code",
  bio: "I document what I learn while building real-world software — from scalable web apps to thoughtful product decisions. This is where I share my experiments, lessons, and projects as I grow as an engineer.",
  email: "",
  location: "",
  availability: "Open to opportunities",
  socialLinks: {
    github: "https://github.com/TheLegendCoder",
    linkedin: "https://www.linkedin.com/in/ndawonde/",
    twitter: "https://x.com/tsholofelo_dev",
  },
};


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [];



export const aboutContent = {
  intro: "Hi, I’m Tsholofelo Ndawonde — a software engineer.",
  story: "This website is my personal knowledge hub. It’s where I document what I’m learning, share insights from projects I’m building, and reflect on my growth as an engineer working in the real world.",
  approach: `My journey into software development started with a simple curiosity about how websites work. Over time, that curiosity turned into a habit of building, experimenting, breaking things, and learning by doing. What began as exploration gradually became a craft — and eventually, a career.\n\nIn my professional work, I primarily use C# and the .NET ecosystem, which has played a major role in shaping how I think about software design, performance, and maintainability. I’m a big fan of the ecosystem and the discipline it encourages around building reliable, long-lived systems.\n\nAlongside that foundation, I’ve been intentionally expanding my expertise into the JavaScript ecosystem, particularly Node.js and TypeScript. Learning across stacks has helped me see familiar problems from new angles and build more flexible, end-to-end solutions — from APIs and backend systems to modern web interfaces.\n\nI care deeply about clean code, thoughtful architecture, and creating software that is both scalable and pleasant to use. I’m especially interested in how systems evolve over time and how small design decisions compound as applications grow.\n\nI believe learning is most powerful when it’s shared. Writing helps me think clearly, and building projects helps me test ideas in the real world. Every post and project here represents something I’ve learned — whether it worked perfectly or failed in an interesting way.\n\nIf you’re learning, building, or figuring things out as you go, you’re in the right place.`
};
