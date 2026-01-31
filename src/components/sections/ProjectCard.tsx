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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <TiltCard className="group h-full overflow-hidden">
        {/* Image/Preview area */}
        <div className="aspect-[16/10] bg-card-elevated relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />

          {/* Project initial as placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl sm:text-6xl font-bold text-accent-primary/20">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Arrow button */}
          <motion.div
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-accent-primary/20"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
          </motion.div>

          {/* Category badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <Badge variant="accent" className="capitalize">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8">
          <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-5 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
