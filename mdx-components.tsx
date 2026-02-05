import type { MDXComponents } from 'mdx/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

/**
 * MDX Components Configuration
 * 
 * This file defines custom components that can be used in MDX files.
 * It maps HTML elements to styled components and exposes UI components.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements with styled versions
    h1: ({ children }) => (
      <h1 className="text-4xl font-display font-bold text-foreground mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-display font-bold text-foreground mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-display font-bold text-foreground mb-3 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-display font-semibold text-foreground mb-2 mt-6">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base text-foreground/90 leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-primary hover:text-primary/80 underline transition-colors"
      >
        {children}
      </Link>
    ),
    code: ({ children }) => (
      <code className="bg-muted text-foreground px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-6">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-foreground/90">
        {children}
      </li>
    ),
    hr: () => <Separator className="my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 bg-muted text-left text-sm font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm text-foreground/90 border-t border-border">
        {children}
      </td>
    ),
    
    // Custom UI components available in MDX
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Badge,
    Alert,
    AlertTitle,
    AlertDescription,
    Separator,
    
    // Pass through any additional components
    ...components,
  };
}
