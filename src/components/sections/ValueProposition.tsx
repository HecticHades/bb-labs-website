"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Handshake, Eye, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Shield,
  Handshake,
  Eye,
};

export function ValueProposition() {
  return (
    <section className="py-20 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Built on Strong Values"
          subtitle="We're more than just developers. We're partners committed to your success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon] || Lightbulb;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg gradient-bg flex items-center justify-center">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 lg:mt-20 p-8 lg:p-10 xl:p-12 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Let&apos;s discuss how we can help bring your vision to life.
                Our team is ready to tackle your most challenging projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg gradient-bg text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
