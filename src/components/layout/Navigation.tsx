"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/constants";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
  vertical?: boolean;
}

export function Navigation({ className, onItemClick, vertical = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex", vertical ? "flex-col gap-2" : "items-center gap-1 xl:gap-2", className)}>
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
              vertical ? "w-full text-lg" : "",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.name}
            {isActive && (
              <motion.div
                layoutId={vertical ? "nav-indicator-mobile" : "nav-indicator"}
                className={cn(
                  "absolute gradient-bg",
                  vertical
                    ? "left-0 top-0 w-1.5 h-full rounded-r"
                    : "bottom-0 left-2 right-2 h-0.5 rounded-full"
                )}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
