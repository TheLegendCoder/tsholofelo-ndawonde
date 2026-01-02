// Portfolio content data - easily editable

export const personalInfo = {
  name: "Tsholofelo Ndawonde",
  title: "Software Engineer",
  tagline: "Crafting elegant solutions through code",
  bio: "I'm a passionate software engineer with a focus on building scalable web applications and creating exceptional user experiences. With expertise in modern technologies and a love for clean code, I turn complex problems into simple, beautiful solutions.",
  email: "hello@tsholofelo.dev",
  location: "Johannesburg, South Africa",
  availability: "Open to opportunities",
  socialLinks: {
    github: "https://github.com/tsholofelo",
    linkedin: "https://linkedin.com/in/tsholofelo",
    twitter: "https://twitter.com/tsholofelo",
  },
};

export const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
  "AWS", "Docker", "GraphQL", "Next.js", "Tailwind CSS"
];

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, team workspaces, and productivity analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather visualization app with forecasts, maps, and location-based alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: "4",
    title: "Portfolio CMS",
    description: "A headless CMS designed specifically for developers to manage their portfolio content.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["TypeScript", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description: "Mobile-first fitness app with workout logging, progress charts, and social features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Charts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications: Patterns and Best Practices",
    excerpt: "Learn the architectural patterns and best practices that will help you build React applications that scale gracefully as your team and codebase grow.",
    content: `
# Building Scalable React Applications: Patterns and Best Practices

When building React applications that need to scale, architecture matters. Here are the key patterns I've found most useful.

## Component Organization

The first step to scalability is proper component organization. I recommend a feature-based folder structure:

\`\`\`
src/
  features/
    auth/
      components/
      hooks/
      utils/
    dashboard/
      components/
      hooks/
      utils/
\`\`\`

## State Management

For large applications, consider these approaches:

1. **Local state** for component-specific data
2. **Context** for theme, auth, and global UI state
3. **Server state libraries** like React Query for API data

## Performance Optimization

Key techniques include:
- Code splitting with React.lazy
- Memoization with useMemo and useCallback
- Virtual lists for large data sets

The key is to start simple and add complexity only when needed.
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Writing Clean Code: A Developer's Guide",
    excerpt: "Discover the principles and techniques that transform messy code into clean, maintainable, and elegant solutions that your future self will thank you for.",
    content: `
# The Art of Writing Clean Code

Clean code is not just about making code work—it's about making code that's a joy to read and maintain.

## Naming Matters

Good names are the foundation of clean code:

\`\`\`javascript
// Bad
const d = new Date();
const x = users.filter(u => u.a);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

## Functions Should Do One Thing

Each function should have a single responsibility:

\`\`\`javascript
// Instead of one big function
function processUserData(user) {
  // validate, transform, save, send email...
}

// Break it down
function validateUser(user) { }
function transformUserData(user) { }
function saveUser(user) { }
function sendWelcomeEmail(user) { }
\`\`\`

## Comments Are a Last Resort

If you need comments to explain what your code does, consider rewriting the code to be self-explanatory.

Remember: Code is read far more often than it's written.
    `,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Best Practices",
    featured: true,
  },
  {
    id: "3",
    title: "Getting Started with TypeScript in 2024",
    excerpt: "A comprehensive introduction to TypeScript that covers everything from basic types to advanced patterns for building type-safe applications.",
    content: `
# Getting Started with TypeScript in 2024

TypeScript has become the standard for building large-scale JavaScript applications. Here's how to get started.

## Why TypeScript?

TypeScript provides:
- Static type checking
- Better IDE support
- Self-documenting code
- Catch errors before runtime

## Basic Types

\`\`\`typescript
// Primitives
const name: string = "Tsholofelo";
const age: number = 25;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // optional
}
\`\`\`

## Advanced Patterns

Generics, utility types, and type guards will take your TypeScript to the next level.

Start small, add types gradually, and watch your code quality improve!
    `,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "TypeScript",
    featured: false,
  },
];

export const tutorials = [
  {
    id: "1",
    title: "Build a REST API with Node.js and Express",
    description: "Learn how to create a production-ready REST API from scratch, including authentication, validation, and error handling.",
    content: `
# Build a REST API with Node.js and Express

In this tutorial, we'll build a complete REST API from scratch.

## Prerequisites

- Node.js installed
- Basic JavaScript knowledge
- A code editor

## Step 1: Project Setup

First, create a new directory and initialize npm:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express cors dotenv
\`\`\`

## Step 2: Create the Server

Create an \`index.js\` file:

\`\`\`javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Step 3: Add Routes

Create a routes folder and add your endpoints:

\`\`\`javascript
// routes/users.js
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ users: [] });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  // Save to database
  res.status(201).json({ id: 1, name, email });
});

module.exports = router;
\`\`\`

## Next Steps

- Add a database (MongoDB or PostgreSQL)
- Implement authentication with JWT
- Add input validation
- Set up error handling middleware
    `,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
    duration: "45 min",
    level: "Beginner",
    category: "Backend",
  },
  {
    id: "2",
    title: "React Hooks Deep Dive: useState and useEffect",
    description: "Master the fundamental React hooks with practical examples and common patterns you'll use in every project.",
    content: `
# React Hooks Deep Dive: useState and useEffect

Understanding hooks is essential for modern React development.

## useState: Managing Component State

The useState hook lets you add state to functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

### Updating State Based on Previous State

\`\`\`jsx
// Don't do this
setCount(count + 1);
setCount(count + 1); // Both use same count value!

// Do this instead
setCount(prev => prev + 1);
setCount(prev => prev + 1); // Correctly increments twice
\`\`\`

## useEffect: Handling Side Effects

useEffect runs after render and is perfect for data fetching, subscriptions, and DOM manipulation:

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [userId]); // Re-run when userId changes

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

## Cleanup Functions

Return a function from useEffect to clean up:

\`\`\`jsx
useEffect(() => {
  const subscription = subscribe(userId);
  return () => {
    subscription.unsubscribe();
  };
}, [userId]);
\`\`\`
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    duration: "30 min",
    level: "Intermediate",
    category: "React",
  },
  {
    id: "3",
    title: "CSS Grid Layout: Complete Guide",
    description: "Everything you need to know about CSS Grid to create complex, responsive layouts with ease.",
    content: `
# CSS Grid Layout: Complete Guide

CSS Grid is a powerful layout system that makes complex layouts simple.

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

## Defining Columns and Rows

### Fixed and Flexible Sizes

\`\`\`css
/* Fixed widths */
grid-template-columns: 200px 200px 200px;

/* Fractional units */
grid-template-columns: 1fr 2fr 1fr;

/* Mixed */
grid-template-columns: 200px 1fr 1fr;

/* Repeat */
grid-template-columns: repeat(3, 1fr);

/* Auto-fit for responsive */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

## Placing Items

\`\`\`css
.item {
  grid-column: 1 / 3; /* Span from line 1 to 3 */
  grid-row: 1 / 2;
}

/* Or use span */
.item {
  grid-column: span 2;
}
\`\`\`

## Named Grid Areas

\`\`\`css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Without Media Queries

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

This creates a responsive grid that automatically adjusts columns based on available space!
    `,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
    duration: "25 min",
    level: "Beginner",
    category: "CSS",
  },
];

export const aboutContent = {
  intro: "Hi, I'm Tsholofelo Ndawonde, a software engineer based in Johannesburg, South Africa. I specialize in building modern web applications that are both beautiful and functional.",
  story: "My journey into software development started with a curiosity about how websites work. That curiosity evolved into a passion for creating digital experiences that make a difference in people's lives. Today, I focus on building scalable applications using modern technologies like React, TypeScript, and Node.js.",
  approach: "I believe in writing clean, maintainable code and creating intuitive user experiences. Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development for a SaaS platform serving thousands of users.",
    },
    {
      role: "Software Engineer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built and maintained multiple client-facing web applications.",
    },
    {
      role: "Junior Developer",
      company: "Agency XYZ",
      period: "2018 - 2020",
      description: "Developed websites and web applications for various clients.",
    },
  ],
};
