"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
          <span className="text-white font-bold text-lg">BB</span>
        </div>
        <span className="text-xl font-bold text-foreground">
          {siteConfig.name}
        </span>
      </motion.div>
    </Link>
  );
}
