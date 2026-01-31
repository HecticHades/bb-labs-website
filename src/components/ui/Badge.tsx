"use client";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gradient" | "outline" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  gradient: "gradient-bg text-background font-medium",
  outline: "border border-border bg-transparent text-foreground hover:border-accent-primary/30 transition-colors",
  accent: "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
