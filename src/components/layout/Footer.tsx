"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "../shared/Logo";
import { siteConfig, navigation, services } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: "https://github.com/bblabs", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/bblabs",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/bblabs", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Logo className="mb-5" />
            <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xs">
              {siteConfig.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-200"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 sm:mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-accent-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 sm:mb-5">
              Services
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-accent-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {service.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 sm:mb-5">
              Contact
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent-primary transition-colors group"
                >
                  <Mail
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base break-all">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="text-sm sm:text-base text-muted-foreground">
                Available for projects worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm order-2 sm:order-1">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-accent-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-accent-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
