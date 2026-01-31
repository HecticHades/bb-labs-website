"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
          >
            <MessageSquare className="w-8 h-8 text-white" aria-hidden="true" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it.
            Get in touch and let&apos;s create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <span className="hidden sm:inline truncate max-w-[200px]">{siteConfig.email}</span>
              <span className="sm:hidden">Email Us</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
