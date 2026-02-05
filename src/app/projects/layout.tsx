import { generateSEOMetadata, getCanonicalUrl } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata({
  title: "Projects",
  description: "A collection of professional work and personal projects showcasing skills in web development, React, TypeScript, and modern software engineering.",
  canonicalUrl: getCanonicalUrl('/projects'),
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
