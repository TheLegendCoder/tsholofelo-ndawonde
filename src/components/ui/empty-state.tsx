"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionText?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionText = "Check back soon",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-20 space-y-6 animate-fade-in">
      <div className="rounded-full bg-primary/10 p-4">
        {icon}
      </div>
      <div className="text-center space-y-3 max-w-md">
        <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <Button
        asChild
        variant="outline"
        disabled
        className="cursor-not-allowed opacity-60"
      >
        <Link href="/">{actionText}</Link>
      </Button>
    </div>
  );
}
