import { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BB Labs. Let's discuss your project and how we can help bring your vision to life.",
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
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium gradient-bg text-white mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6">
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg xl:text-xl text-muted-foreground">
              Have a project in mind? We&apos;d love to hear about it.
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
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
                          className="text-foreground hover:gradient-text transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-medium">
                      1
                    </span>
                    <span>We&apos;ll review your message within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-medium">
                      2
                    </span>
                    <span>Schedule a discovery call to discuss your project</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-medium">
                      3
                    </span>
                    <span>Receive a detailed proposal and project roadmap</span>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 xl:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
