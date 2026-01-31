"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("group", className)}>
      <motion.div
        className="flex items-center gap-2.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Logo mark */}
        <div className="relative">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-bg flex items-center justify-center overflow-hidden shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/30 transition-shadow duration-300">
            <span className="text-background font-display font-bold text-sm sm:text-base tracking-tight">
              BB
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl gradient-bg opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
        </div>

        {/* Wordmark */}
        <span className="font-display text-lg sm:text-xl font-semibold text-foreground tracking-tight">
          {siteConfig.name}
        </span>
      </motion.div>
    </Link>
  );
}
