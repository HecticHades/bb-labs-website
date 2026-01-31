"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Navigation } from "./Navigation";
import { Logo } from "../shared/Logo";
import { Button } from "../ui/Button";
import { siteConfig } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="fixed top-0 right-0 h-full w-full sm:w-[85%] sm:max-w-md bg-card border-l border-border z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                <Logo />
                <motion.button
                  onClick={onClose}
                  className="p-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <Navigation vertical onItemClick={onClose} />
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-border space-y-4">
                <Button
                  href="/contact"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={onClose}
                >
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Button>

                <div className="text-center">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-accent-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
