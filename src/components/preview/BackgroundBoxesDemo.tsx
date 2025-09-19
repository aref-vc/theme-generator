"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-card flex flex-col items-center justify-center rounded-lg border border-border">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-card to-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl font-bold text-foreground relative z-20")}>
        Interactive Theme Preview
      </h1>
      <p className="text-center mt-2 text-muted-foreground relative z-20">
        Hover over the grid to see your theme colors in action
      </p>
      <div className="mt-4 flex gap-2 relative z-20">
        <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm">Primary</span>
        <span className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm">Secondary</span>
        <span className="px-3 py-1 rounded-md bg-accent text-accent-foreground text-sm">Accent</span>
      </div>
    </div>
  );
}