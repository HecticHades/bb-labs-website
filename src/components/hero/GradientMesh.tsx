"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function GradientMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { percentX, percentY } = useRelativeMousePosition(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          left: "-20%",
          top: "-20%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * 0.5,
                y: (percentY - 50) * 0.5,
              }
        }
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          right: "-10%",
          bottom: "-10%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * -0.3,
                y: (percentY - 50) * -0.3,
              }
        }
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          right: "20%",
          top: "10%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: (percentX - 50) * 0.2,
                y: (percentY - 50) * 0.2,
              }
        }
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
    </div>
  );
}
