"use client";

import { EmptyState } from "@/components/ui/empty-state";
import { Lightbulb } from "lucide-react";

export default function TutorialsPage() {
  return (
    <div className="container max-w-6xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Tutorials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Step-by-step guides to help you learn and grow as a developer.
        </p>
      </div>

      <EmptyState
        icon={<Lightbulb className="h-12 w-12 text-primary" />}
        title="Tutorials on the way"
        description="I'm creating comprehensive step-by-step guides on web development, best practices, and advanced techniques. These tutorials will help you level up your skills as a developer."
        actionText="Check back soon"
      />
    </div>
  );
}
