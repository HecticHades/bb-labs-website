"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fintech", label: "FinTech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "saas", label: "SaaS" },
];

interface ProjectShowcaseProps {
  showAll?: boolean;
  showFilter?: boolean;
}

export function ProjectShowcase({ showAll = false, showFilter = false }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          subtitle="Explore our portfolio of successful projects across various industries."
        />

        {showFilter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  activeCategory === category.id
                    ? "gradient-bg text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
