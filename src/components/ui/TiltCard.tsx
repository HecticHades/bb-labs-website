"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 8,
  glareEnabled = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltAmount;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltAmount;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-2xl bg-card border border-border overflow-hidden",
        "transform-gpu transition-all duration-300",
        "hover:border-accent-primary/20",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 158, 11, 0.12), transparent 60%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(245, 158, 11, 0.1)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div
        className="relative h-full"
        style={{ transform: "translateZ(10px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
