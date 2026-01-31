"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { MousePosition } from "@/types";

interface UseMousePositionOptions {
  includeTouch?: boolean;
  fps?: number;
}

export function useMousePosition(options: UseMousePositionOptions = {}) {
  const { includeTouch = true, fps = 60 } = options;
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isInViewport, setIsInViewport] = useState(false);
  const frameRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);
  const frameInterval = 1000 / fps;

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      const now = performance.now();
      if (now - lastUpdateRef.current < frameInterval) return;

      lastUpdateRef.current = now;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
      });
    },
    [frameInterval]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsInViewport(true);
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      setIsInViewport(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!includeTouch || e.touches.length === 0) return;
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    if (includeTouch) {
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (includeTouch) {
        window.removeEventListener("touchmove", handleTouchMove);
      }

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [includeTouch, updatePosition]);

  return { ...position, isInViewport };
}

export function useRelativeMousePosition(
  ref: React.RefObject<HTMLElement | null>,
  options: UseMousePositionOptions = {}
) {
  const { x, y, isInViewport } = useMousePosition(options);
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0, percentX: 0, percentY: 0 });

  useEffect(() => {
    if (!ref.current || !isInViewport) return;

    const rect = ref.current.getBoundingClientRect();
    const relX = x - rect.left;
    const relY = y - rect.top;
    const percentX = (relX / rect.width) * 100;
    const percentY = (relY / rect.height) * 100;

    setRelativePosition({
      x: relX,
      y: relY,
      percentX: Math.max(0, Math.min(100, percentX)),
      percentY: Math.max(0, Math.min(100, percentY)),
    });
  }, [x, y, isInViewport, ref]);

  return { ...relativePosition, isInViewport };
}
