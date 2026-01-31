import { Metadata } from "next";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of successful projects across fintech, healthcare, e-commerce, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium gradient-bg text-white mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Projects That{" "}
              <span className="gradient-text">Make an Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground">
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
