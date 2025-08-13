'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Code } from 'lucide-react';
import { useState, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/tutorials', label: 'Tutorials' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      startTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex items-center min-w-0">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Code className="h-6 w-6 text-primary flex-shrink-0" />
            <span className="font-bold text-base sm:text-lg truncate">
              <span className="hidden sm:inline">Tsholofelo Ndawonde</span>
              <span className="sm:hidden">T. Ndawonde</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className={cn(
                'transition-colors hover:text-primary whitespace-nowrap flex items-center gap-2',
                pathname === link.href ? 'text-primary' : 'text-foreground/60'
              )}
              disabled={isPending}
            >
              {link.label}
              {isPending && <LoadingSpinner size="sm" />}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-auto">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setIsOpen(false);
                  handleNavigation(link.href);
                }}
                className={cn(
                  'w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent/10 flex items-center gap-2',
                  pathname === link.href ? 'text-primary bg-accent/20' : 'text-foreground/80'
                )}
                disabled={isPending}
              >
                {link.label}
                {isPending && <LoadingSpinner size="sm" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
