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
    <nav
      className={cn(
        "flex",
        vertical ? "flex-col gap-1" : "items-center gap-1",
        className
      )}
    >
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg",
              vertical ? "w-full text-base" : "",
              isActive
                ? "text-accent-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
            )}
          >
            {item.name}
            {isActive && (
              <motion.div
                layoutId={vertical ? "nav-indicator-mobile" : "nav-indicator"}
                className={cn(
                  "absolute bg-accent-primary",
                  vertical
                    ? "left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full"
                    : "bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                )}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
