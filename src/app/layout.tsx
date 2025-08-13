import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { NavigationProgress } from '@/components/ui/navigation-progress';

export const metadata: Metadata = {
  title: 'Tsholofelo Ndawonde | Portfolio',
  description: 'Portfolio of Tsholofelo Ndawonde, a full-stack developer and designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden">
        <NavigationProgress />
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
