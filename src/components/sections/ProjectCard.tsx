"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard className="group h-full overflow-hidden">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-foreground/20">
              {project.title.charAt(0)}
            </span>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full gradient-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 max-h-[56px] overflow-hidden">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
