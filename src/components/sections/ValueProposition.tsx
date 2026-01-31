"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Handshake, Eye, LucideIcon, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { values } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Shield,
  Handshake,
  Eye,
};

export function ValueProposition() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Choose Us"
          title="Built on Strong Values"
          subtitle="We're more than just developers. We're partners committed to your success."
        />

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto mb-16 sm:mb-20">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon] || Lightbulb;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-4 sm:gap-5 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/30 transition-shadow duration-300">
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-background"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl gradient-bg opacity-10" />
          <div className="relative p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-accent-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                  Let&apos;s discuss how we can help bring your vision to life.
                  Our team is ready to tackle your most challenging projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-end">
                <Button href="/contact" variant="gradient" size="lg">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
