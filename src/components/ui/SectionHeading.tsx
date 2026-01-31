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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-block px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-sm lg:text-base font-medium gradient-bg text-white mb-4 lg:mb-6"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 lg:mt-6 text-base md:text-lg xl:text-xl text-muted-foreground max-w-xl md:max-w-2xl xl:max-w-3xl",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
