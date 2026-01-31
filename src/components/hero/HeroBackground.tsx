"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { percentX, percentY } = useRelativeMousePosition(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Warm gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(217, 119, 6, 0.3) 40%, transparent 70%)",
          left: "-15%",
          top: "-20%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * 0.3,
                y: (percentY - 50) * 0.3,
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-15 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 83, 9, 0.4) 0%, rgba(217, 119, 6, 0.2) 50%, transparent 70%)",
          right: "-10%",
          bottom: "-15%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * -0.2,
                y: (percentY - 50) * -0.2,
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-10 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
          right: "15%",
          top: "5%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * 0.15,
                y: (percentY - 50) * 0.15,
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 sm:w-48 sm:h-48 border border-accent-primary/10 rounded-2xl hidden sm:block"
        style={{ left: "8%", top: "25%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: 360,
                y: [0, -20, 0],
              }
        }
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute w-20 h-20 sm:w-32 sm:h-32 border border-accent-secondary/10 rounded-full hidden sm:block"
        style={{ right: "12%", top: "35%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: -360,
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl hidden sm:block"
        style={{ left: "18%", bottom: "20%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: 180,
                y: [0, 15, 0],
              }
        }
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Grid lines - subtle */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, var(--background) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
