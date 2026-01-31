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

export function ProjectShowcase({
  showAll = false,
  showFilter = false,
}: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-32 bg-card/30 relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          subtitle="Explore our portfolio of successful projects across various industries."
        />

        {/* Filter buttons */}
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  activeCategory === category.id
                    ? "gradient-bg text-background shadow-lg shadow-accent-primary/20"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card-elevated border border-border"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all button */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <Button href="/projects" variant="outline" size="lg">
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
