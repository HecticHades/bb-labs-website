"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Code,
  Users,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Code,
  Users,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <TiltCard className="h-full group">
        <div className="p-5 sm:p-6 lg:p-8 flex flex-col h-full">
          {/* Icon */}
          <div className="relative mb-5 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-primary/20">
              <Icon
                className="w-6 h-6 sm:w-7 sm:h-7 text-background"
                aria-hidden="true"
              />
            </div>
            {/* Decorative line */}
            <div className="absolute top-1/2 left-16 sm:left-20 right-0 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Title with arrow */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              {service.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent-primary transition-all duration-300 flex-shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 flex-1 line-clamp-3">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature) => (
              <Badge key={feature} variant="outline">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
