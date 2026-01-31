"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 sm:mb-16 lg:mb-20",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4 sm:mb-6"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="font-display text-display font-semibold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl lg:max-w-3xl",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
