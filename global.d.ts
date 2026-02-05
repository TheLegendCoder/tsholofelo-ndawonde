declare module '*.css';

declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  export default function MDXContent(props: MDXProps): JSX.Element;
  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    readTime: string;
    published: boolean;
    featured: boolean;
    image: string;
    imageHint?: string;
  };
}
