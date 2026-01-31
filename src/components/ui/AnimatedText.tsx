"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerChildren: number; delay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.05,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-1", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={{ staggerChildren, delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          custom={{ duration }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface AnimatedHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  children,
  as: Component = "h2",
  className,
  delay = 0,
}: AnimatedHeadingProps) {
  return (
    <Component className={className}>
      <AnimatedText text={children} delay={delay} />
    </Component>
  );
}
