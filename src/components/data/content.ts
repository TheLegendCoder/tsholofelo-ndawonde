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
  story: "This website is my personal knowledge hub. I use it to document what I’m learning, share insights from projects I’m working on, and reflect on my growth as a software engineer.",
  approach: "My journey into software development started with curiosity about how websites work. Over time, that curiosity turned into a habit of building, experimenting, and learning by doing. Today, I focus on creating modern, scalable web applications using technologies like React, TypeScript, and Node.js.\n\nI believe learning is most powerful when it’s shared. Writing helps me think clearly, and building projects helps me test ideas in the real world. Every post and project here represents something I’ve learned — whether it worked perfectly or failed in an interesting way.\n\nIf you’re also learning, building, or figuring things out as you go, you’re in the right place."
};
