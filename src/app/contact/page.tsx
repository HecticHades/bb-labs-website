import { Metadata } from "next";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BB Labs. Let's discuss your project and how we can help bring your vision to life.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Remote-first, worldwide",
    value: "Available Globally",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within",
    value: "24 Hours",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4 sm:mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-display font-semibold text-foreground mb-4 sm:mb-6">
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              Have a project in mind? We&apos;d love to hear about it. Fill out
              the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left column - Contact info */}
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-5 sm:space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 sm:gap-5 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-primary/20">
                          <item.icon
                            className="w-5 h-5 sm:w-6 sm:h-6 text-background"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-accent-primary transition-colors inline-flex items-center gap-1 group/link"
                          >
                            {item.value}
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span className="text-foreground">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="pt-6 sm:pt-8 border-t border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 sm:mb-5">
                  What happens next?
                </h3>
                <ol className="space-y-3 sm:space-y-4">
                  {[
                    "We'll review your message within 24 hours",
                    "Schedule a discovery call to discuss your project",
                    "Receive a detailed proposal and project roadmap",
                  ].map((step, index) => (
                    <li
                      key={index}
                      className="flex gap-3 sm:gap-4 text-sm sm:text-base text-muted-foreground"
                    >
                      <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg gradient-bg flex items-center justify-center text-background text-xs sm:text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
