import { Metadata } from "next";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BB Labs - our mission, values, and the team behind your next digital success story.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium gradient-bg text-white mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building the{" "}
              <span className="gradient-text">Future of Software</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;re a team of passionate engineers dedicated to creating
              exceptional digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to transform how businesses leverage technology,
                  BB Labs has grown from a small team of developers into a full-service
                  software engineering company.
                </p>
                <p>
                  We believe that great software is more than just code—it&apos;s about
                  understanding your business, your users, and creating solutions that
                  make a real difference.
                </p>
                <p>
                  Our approach combines technical excellence with a deep commitment to
                  partnership. We don&apos;t just build software; we build relationships
                  that last well beyond project completion.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text mb-4">BB</div>
                  <div className="text-xl text-muted-foreground">Labs</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-bg rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <ContactCTA />
    </div>
  );
}
