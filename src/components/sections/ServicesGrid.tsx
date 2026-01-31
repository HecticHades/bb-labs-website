"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/constants";

interface ServicesGridProps {
  showAll?: boolean;
}

export function ServicesGrid({ showAll = false }: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/3 h-1/3 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          badge="What We Do"
          title="Services That Drive Results"
          subtitle="We offer comprehensive software development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
