"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const shapes = [
  { type: "circle", size: 60, x: "10%", y: "20%", delay: 0 },
  { type: "square", size: 40, x: "85%", y: "15%", delay: 0.2 },
  { type: "triangle", size: 50, x: "75%", y: "70%", delay: 0.4 },
  { type: "circle", size: 30, x: "20%", y: "75%", delay: 0.6 },
  { type: "square", size: 25, x: "50%", y: "10%", delay: 0.8 },
  { type: "circle", size: 45, x: "90%", y: "45%", delay: 1 },
];

function Shape({ type, size, delay }: { type: string; size: number; delay: number }) {
  const baseStyles = "absolute opacity-20";

  if (type === "circle") {
    return (
      <motion.div
        className={baseStyles}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: "2px solid rgba(139, 92, 246, 0.5)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.5, delay }}
      />
    );
  }

  if (type === "square") {
    return (
      <motion.div
        className={baseStyles}
        style={{
          width: size,
          height: size,
          border: "2px solid rgba(59, 130, 246, 0.5)",
          transform: "rotate(45deg)",
        }}
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 0.2, rotate: 45 }}
        transition={{ duration: 0.5, delay }}
      />
    );
  }

  if (type === "triangle") {
    return (
      <motion.div
        className={baseStyles}
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid rgba(139, 92, 246, 0.3)`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.5, delay }}
      />
    );
  }

  return null;
}

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { percentX, percentY, isInViewport } = useRelativeMousePosition(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          animate={
            prefersReducedMotion || !isInViewport
              ? {}
              : {
                  x: (percentX - 50) * (0.1 + index * 0.05),
                  y: (percentY - 50) * (0.1 + index * 0.05),
                }
          }
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Shape type={shape.type} size={shape.size} delay={shape.delay} />
          </motion.div>
        </motion.div>
      ))}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
