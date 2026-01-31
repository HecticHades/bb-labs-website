"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "./GradientMesh";
import { InteractiveBackground } from "./InteractiveBackground";
import { ParallaxContainer } from "./ParallaxContainer";
import { ScrollIndicator } from "@/components/shared/ScrollIndicator";
import { stats } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />
      <InteractiveBackground />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ParallaxContainer intensity={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-border bg-card/50 text-muted-foreground">
                Custom Software Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              We Build{" "}
              <span className="gradient-text">Digital Products</span>
              <span className="hidden md:inline"><br /></span>
              <span className="md:hidden"> </span>
              That Drive Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Transform your ideas into powerful, scalable applications.
              From web and mobile development to cloud solutions and AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button href="/contact" variant="gradient" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </ParallaxContainer>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator targetId="services" />
      </div>
    </section>
  );
}
