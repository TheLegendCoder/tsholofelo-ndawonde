---
title: Getting Started with Next.js 15 and Turbopack
description: A comprehensive guide to setting up a modern Next.js 15 project with Turbopack, TypeScript, and Tailwind CSS for optimal developer experience.
date: 2026-02-05
author: Tsholofelo Ndawonde
tags: [Next.js, React, TypeScript, Web Development, Turbopack]
readTime: 8 min
published: true
featured: true
image: https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=630&fit=crop
imageHint: Next.js logo with modern web development setup
---

# Getting Started with Next.js 15 and Turbopack

Next.js 15 brings significant performance improvements and developer experience enhancements, especially with the new Turbopack bundler. In this guide, we'll explore the essentials to get your project up and running efficiently.

## Why Next.js 15?

Next.js continues to evolve as the leading React framework for production applications. The latest version includes:

- **Turbopack**: A faster build system written in Rust
- **App Router**: Modern file-based routing system
- **Server Components**: Improved performance with built-in optimization
- **Enhanced TypeScript Support**: Stricter type checking and better developer experience

## Project Setup

### 1. Create a New Next.js Project

```bash
npx create-next-app@latest my-project --typescript --tailwind
cd my-project
npm run dev
```

The development server will start on `http://localhost:3000` with hot module reloading enabled.

### 2. Verify Turbopack Configuration

Your `next.config.ts` should leverage Turbopack for faster builds:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopack: true,
  },
};

export default nextConfig;
```

### 3. TypeScript Configuration

Ensure `tsconfig.json` has strict mode enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitAny": true,
    "jsx": "preserve"
  }
}
```

## Key Architectural Patterns

### Server Components (Default)

Components are server components by default in the App Router. This reduces JavaScript shipped to the browser:

```typescript
// app/dashboard/page.tsx (Server Component)
import { getUser } from '@/lib/db';

export default async function Dashboard() {
  const user = await getUser();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}
```

### Client Components

Mark interactive components with `"use client"`:

```typescript
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Custom Hooks

Create reusable hooks in the `src/hooks` directory:

```typescript
// hooks/useResponsive.ts
'use client';

import { useEffect, useState } from 'react';

export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile };
}
```

## Styling Strategy

### Tailwind CSS

Use Tailwind utilities for responsive design:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

### Class Variance Authority (CVA)

For component variants, use CVA:

```typescript
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        lg: 'px-6 py-3 text-lg',
      },
    },
  }
);

export function Button({ variant = 'primary', size = 'sm' }) {
  return <button className={buttonVariants({ variant, size })}>Click me</button>;
}
```

## Best Practices

### 1. File Organization

```
src/
├── app/                    # Pages and routes
├── components/
│   ├── ui/                # Radix UI primitives
│   ├── layout/            # Layout components
│   └── features/          # Feature-specific components
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
├── contexts/              # Context providers
└── styles/                # Global styles and animations
```

### 2. Performance Optimization

- Use `React.memo` for expensive components
- Implement `useCallback` for stable function references
- Lazy load routes with dynamic imports
- Optimize images with Next.js `Image` component

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  loading: () => <div>Loading...</div>,
});
```

### 3. Error Handling

Create error boundaries for graceful error handling:

```typescript
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button onClick={() => reset()} className="px-4 py-2 bg-blue-600 text-white rounded">
        Try again
      </button>
    </div>
  );
}
```

## Environment Variables

Create a `.env.local` file for sensitive configuration:

```bash
# API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Private secrets
DATABASE_URL=postgresql://...
API_SECRET_KEY=your_secret_key
```

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Deployment

### Firebase Hosting

Next.js projects can be deployed to Firebase with `apphosting.yaml`:

```yaml
apiVersion: apphosting.googleapis.com/v1
runtime: nodejs20
env: gen2

buildConfig:
  nodeVersion: 20

runtimeConfig:
  runtime: nodejs20
  envs:
    - NODE_ENV=production
```

Run `firebase deploy` to deploy your project.

### Vercel

For seamless Next.js deployment:

```bash
vercel deploy
```

Vercel automatically detects Next.js projects and optimizes build and serving.

## Common Gotchas

1. **Async Server Components**: Always await promises in server components
2. **Context in Server Components**: Context cannot be used in server components
3. **Dynamic Imports**: Required for code splitting in the App Router
4. **Image Optimization**: Use `next/image` for all images for automatic optimization

## Conclusion

Next.js 15 with Turbopack provides a solid foundation for building modern, performant web applications. Focus on leveraging server components for better performance, organize your project logically, and follow TypeScript best practices for a maintainable codebase.

Happy building! 🚀
