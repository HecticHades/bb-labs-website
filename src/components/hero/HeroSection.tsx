"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { stats } from "@/lib/constants";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 py-20 lg:py-32 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Custom Software Engineering
            </span>
          </motion.div>

          {/* Main headline - Editorial style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-hero font-semibold text-center lg:text-left mb-6 sm:mb-8 text-balance"
          >
            We Build{" "}
            <span className="gradient-text text-glow">Digital Products</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-editorial text-foreground-muted">That Drive</span>{" "}
            Growth
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-10 sm:mb-12"
          >
            Transform your ideas into powerful, scalable applications.
            From web and mobile development to cloud solutions and AI integration.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16 sm:mb-20"
          >
            <Button href="/contact" variant="gradient" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center lg:text-left group"
              >
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 group-hover:text-glow transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-accent-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
