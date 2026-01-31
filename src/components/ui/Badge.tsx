"use client";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gradient" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  gradient: "gradient-bg text-white",
  outline: "border border-border bg-transparent text-foreground",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
