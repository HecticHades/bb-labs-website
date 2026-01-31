"use client";

import { useState, useEffect, useRef, useCallback, startTransition } from "react";

interface UseScrollProgressOptions {
  threshold?: number;
  fps?: number;
}

export function useScrollProgress(options: UseScrollProgressOptions = {}) {
  const { threshold = 0, fps = 60 } = options;
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);
  const frameRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);
  const frameInterval = 1000 / fps;

  const updateProgress = useCallback(() => {
    const now = performance.now();
    if (now - lastUpdateRef.current < frameInterval) return;

    lastUpdateRef.current = now;

    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const newProgress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      startTransition(() => {
        setProgress(Math.min(100, Math.max(0, newProgress)));

        if (Math.abs(scrollY - lastScrollY.current) > threshold) {
          setDirection(scrollY > lastScrollY.current ? "down" : "up");
          lastScrollY.current = scrollY;
        }
      });
    });
  }, [frameInterval, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateProgress]);

  return { progress, direction };
}

export function useElementScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  options: { offset?: number } = {}
) {
  const { offset = 0 } = options;
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top - offset;
      const elementHeight = rect.height;

      const visibleStart = windowHeight;
      const visibleEnd = -elementHeight;
      const totalDistance = visibleStart - visibleEnd;
      const currentPosition = visibleStart - elementTop;
      const newProgress = (currentPosition / totalDistance) * 100;

      startTransition(() => {
        setProgress(Math.min(100, Math.max(0, newProgress)));
        setIsInView(rect.top < windowHeight && rect.bottom > 0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, offset]);

  return { progress, isInView };
}
