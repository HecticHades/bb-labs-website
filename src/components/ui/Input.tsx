"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full h-11 sm:h-12 px-4 sm:px-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:border-accent-primary/50",
            "hover:border-border/80",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-error focus-visible:ring-error/50 focus-visible:border-error/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-error flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-error" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full min-h-[120px] sm:min-h-[140px] px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground",
            "transition-all duration-200 resize-y",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:border-accent-primary/50",
            "hover:border-border/80",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-error focus-visible:ring-error/50 focus-visible:border-error/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-error flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-error" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
