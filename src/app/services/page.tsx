import { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive software development services including web development, mobile apps, cloud solutions, and AI integration.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-1/4 w-1/3 h-1/3 bg-accent-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="font-display text-display font-semibold text-foreground mb-4 sm:mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Development Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              From concept to deployment, we provide end-to-end software
              development solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid showAll />
      <ContactCTA />
    </div>
  );
}
