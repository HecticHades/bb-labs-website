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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard className="h-full p-6">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
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
