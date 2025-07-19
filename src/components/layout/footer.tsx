import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
          {/* Copyright Text */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Tsholofelo Ndawonde. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors hover:bg-accent/10"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors hover:bg-accent/10"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors hover:bg-accent/10"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
