"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface ParallaxContainerProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export function ParallaxContainer({
  children,
  intensity = 1,
  className,
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { percentX, percentY, isInViewport } = useRelativeMousePosition(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  const calculateOffset = (percent: number) => {
    return (percent - 50) * 0.2 * intensity;
  };

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        animate={
          prefersReducedMotion || !isInViewport
            ? {}
            : {
                x: calculateOffset(percentX),
                y: calculateOffset(percentY),
              }
        }
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  depth = 1,
  className,
}: ParallaxLayerProps) {
  return (
    <ParallaxContainer intensity={depth} className={className}>
      {children}
    </ParallaxContainer>
  );
}
