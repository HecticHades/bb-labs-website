import { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive software development services including web development, mobile apps, cloud solutions, and AI integration.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium gradient-bg text-white mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Development Services</span>
            </h1>
            <p className="text-lg xl:text-xl text-muted-foreground">
              From concept to deployment, we provide end-to-end software development
              solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid showAll />
      <ContactCTA />
    </div>
  );
}
