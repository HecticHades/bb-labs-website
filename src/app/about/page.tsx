import { Metadata } from "next";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BB Labs - our mission, values, and the team behind your next digital success story.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4 sm:mb-6">
              About Us
            </span>
            <h1 className="font-display text-display font-semibold text-foreground mb-4 sm:mb-6">
              Building the{" "}
              <span className="gradient-text">Future of Software</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              We&apos;re a team of passionate engineers dedicated to creating
              exceptional digital experiences that drive business growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-2xl bg-card/50 border border-border"
              >
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Content */}
            <div>
              <h2 className="font-display text-heading font-semibold text-foreground mb-5 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base lg:text-lg">
                <p>
                  Founded with a vision to transform how businesses leverage
                  technology, BB Labs has grown from a small team of developers
                  into a full-service software engineering company.
                </p>
                <p>
                  We believe that great software is more than just code—it&apos;s
                  about understanding your business, your users, and creating
                  solutions that make a real difference.
                </p>
                <p>
                  Our approach combines technical excellence with a deep
                  commitment to partnership. We don&apos;t just build software; we
                  build relationships that last well beyond project completion.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden relative">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />

                {/* Logo display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text mb-3 sm:mb-4">
                    BB
                  </div>
                  <div className="text-lg sm:text-xl text-muted-foreground font-medium">
                    Labs
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 border border-accent-primary/20 rounded-xl" />
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-accent-primary/10 rounded-lg" />
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 gradient-bg rounded-2xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <ContactCTA />
    </div>
  );
}
