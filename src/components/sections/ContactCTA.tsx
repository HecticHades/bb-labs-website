"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl lg:max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg shadow-accent-primary/20"
          >
            <Sparkles
              className="w-7 h-7 sm:w-8 sm:h-8 text-background"
              aria-hidden="true"
            />
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-display font-semibold text-foreground mb-4 sm:mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text text-glow">Amazing</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Get in
            touch and let&apos;s create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button href="/contact" variant="gradient" size="lg">
              Start a Conversation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="outline"
              size="lg"
              external
            >
              <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
              <span className="sm:hidden">Email Us</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
