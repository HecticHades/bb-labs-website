import { Metadata } from "next";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of successful projects across various industries including fintech, healthcare, e-commerce, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4 sm:mb-6">
              Our Portfolio
            </span>
            <h1 className="font-display text-display font-semibold text-foreground mb-4 sm:mb-6">
              Projects That{" "}
              <span className="gradient-text">Make an Impact</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              Discover how we&apos;ve helped businesses across industries achieve
              their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      <ProjectShowcase showAll showFilter />
      <ContactCTA />
    </div>
  );
}
