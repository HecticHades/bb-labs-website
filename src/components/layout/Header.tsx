"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "../shared/Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass border-b border-border/30"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            {/* Desktop Navigation */}
            <Navigation className="hidden lg:flex" />

            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                href="/contact"
                variant="gradient"
                size="sm"
                className="hidden lg:inline-flex"
              >
                Get Started
              </Button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2.5 text-muted-foreground hover:text-foreground transition-colors lg:hidden rounded-lg hover:bg-card"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress bar on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary origin-left"
          style={{
            scaleX: isScrolled ? 1 : 0,
            opacity: isScrolled ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
