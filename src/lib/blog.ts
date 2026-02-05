import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToHtml } from '@/lib/markdown';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  published: boolean;
  featured: boolean;
  image: string;
  imageHint: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Check for both .mdx and .md files
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const htmlContent = await markdownToHtml(content);
    
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      readTime: data.readTime,
      published: data.published || false,
      featured: data.featured || false,
      image: data.image,
      imageHint: data.imageHint,
      content: htmlContent,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.(md|mdx)$/, '');
          return await getBlogPost(slug);
        })
    );
    
    return allPostsData
      .filter((post): post is BlogPost => post !== null && post.published)
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}
