
import { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { generateSEOMetadata, getSiteUrl } from "@/lib/seo/metadata";
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generatePersonSchema,
  generateJSONLD 
} from "@/lib/seo/structured-data";
import { personalInfo } from "@/components/data/content";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = generateSEOMetadata({
  title: personalInfo.name,
  description: personalInfo.bio,
  canonicalUrl: getSiteUrl(),
});

export default function Layout({ children }: LayoutProps) {
  const siteUrl = getSiteUrl();
  
  // Generate structured data schemas
  const organizationSchema = generateOrganizationSchema({
    name: personalInfo.name,
    description: personalInfo.bio,
    url: siteUrl,
    email: personalInfo.email || undefined,
    socialLinks: personalInfo.socialLinks,
  });

  const websiteSchema = generateWebsiteSchema({
    name: personalInfo.name,
    url: siteUrl,
    description: personalInfo.bio,
  });

  const personSchema = generatePersonSchema({
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: siteUrl,
    email: personalInfo.email || undefined,
    socialLinks: personalInfo.socialLinks,
  });

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJSONLD(organizationSchema) }}
        />
        
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJSONLD(websiteSchema) }}
        />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJSONLD(personSchema) }}
        />

        <PostHogProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
