import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProjectShowcase />
      <ValueProposition />
      <ContactCTA />
    </>
  );
}
