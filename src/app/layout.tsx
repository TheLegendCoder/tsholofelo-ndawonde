
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

// Validate and sanitize Google Analytics ID
// Moved outside component to avoid recreation on every render
function validateGAId(gaId: string | undefined): string | null {
  if (!gaId) return null;
  
  // Google Analytics ID format: G-XXXXXXXXXX (GA4) or UA-XXXXXXXXX-X (Universal Analytics)
  // GA4 IDs can contain alphanumeric characters of variable length, case-insensitive
  const gaIdPattern = /^(G-[A-Z0-9]+|UA-\d{4,10}-\d{1,4})$/i;
  
  // Validate format and ensure no special characters that could lead to XSS
  if (gaIdPattern.test(gaId.trim())) {
    return gaId.trim();
  }
  
  // Log warning in development but don't expose in production
  if (process.env.NODE_ENV === 'development') {
    console.warn('Invalid Google Analytics ID format. Expected G-XXXXXXXXXX or UA-XXXXXXXXX-X');
  }
  
  return null;
}

export default function Layout({ children }: LayoutProps) {
  const siteUrl = getSiteUrl();
  const validGAId = validateGAId(process.env.NEXT_PUBLIC_GA_ID);
  
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
        {/* Google Analytics - Only render if valid GA ID is present */}
        {validGAId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${validGAId}`}
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
                  gtag('config', '${validGAId}');
                `,
              }}
            />
          </>
        )}
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
