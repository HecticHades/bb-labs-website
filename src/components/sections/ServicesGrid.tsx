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
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="What We Do"
          title="Services That Drive Results"
          subtitle="We offer comprehensive software development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
