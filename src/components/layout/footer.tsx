'use client';

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "@/components/data/content";
import { useToast } from "@/hooks/use-toast";
import { triggerCelebrationFrom } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", icon: Github, url: personalInfo.socialLinks.github },
  { name: "LinkedIn", icon: Linkedin, url: personalInfo.socialLinks.linkedin },
  { name: "Twitter", icon: Twitter, url: personalInfo.socialLinks.twitter },
  { name: "Email", icon: Mail, url: `mailto:${personalInfo.email}`, email: true },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Tutorials", path: "/tutorials" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, email: string) => {
    e.preventDefault();
    
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
      const target = e.currentTarget;
      
      // Trigger celebration
      triggerCelebrationFrom(target, { intensity: 'low' });
      
      // Show success toast
      toast({
        variant: "success",
        title: "Email copied! ✨",
        description: `${email} is ready to paste`,
        duration: 3000,
      });
    }).catch(() => {
      toast({
        variant: "destructive",
        title: "Couldn't copy email",
        description: "Please try again",
        duration: 3000,
      });
    });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="text-xl font-display font-semibold text-foreground"
            >
              Tsholofelo<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.email ? undefined : "_blank"}
                  rel={social.email ? undefined : "noopener noreferrer"}
                  onClick={social.email ? (e) => handleEmailClick(e, personalInfo.email) : undefined}
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
