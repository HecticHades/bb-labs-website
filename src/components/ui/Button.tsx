"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "gradient" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-card-elevated text-foreground hover:bg-muted border border-border",
  gradient:
    "gradient-bg text-background font-semibold shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30 hover:brightness-110",
  outline:
    "border border-border bg-transparent hover:bg-card hover:border-accent-primary/30 text-foreground",
  ghost: "bg-transparent hover:bg-card text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-10 sm:h-11 lg:h-12 px-5 sm:px-6 text-sm sm:text-base rounded-xl",
  lg: "h-12 sm:h-14 lg:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl",
};

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      href,
      external,
      children,
      className,
      disabled,
      type = "button",
      onClick,
    },
    ref
  ) => {
    const baseStyles = cn(
      "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:opacity-50 disabled:pointer-events-none",
      "active:scale-[0.98]",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
          >
            {children}
          </motion.a>
        );
      }

      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
          >
            {children}
          </motion.a>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        className={baseStyles}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={springTransition}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
