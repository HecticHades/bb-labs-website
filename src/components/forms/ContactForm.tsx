"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would send the form data to your backend
    console.log("Form submitted:", formData);

    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 sm:py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-lg shadow-accent-primary/20"
        >
          <CheckCircle
            className="w-8 h-8 sm:w-10 sm:h-10 text-background"
            aria-hidden="true"
          />
        </motion.div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
          Message Sent!
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <Input
          id="name"
          name="name"
          label="Name"
          placeholder="John Doe"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={status === "submitting"}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="john@example.com"
          autoComplete="email"
          spellCheck={false}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={status === "submitting"}
        />
      </div>

      <Input
        id="company"
        name="company"
        label="Company (Optional)"
        placeholder="Your Company"
        autoComplete="organization"
        value={formData.company}
        onChange={handleChange}
        disabled={status === "submitting"}
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        disabled={status === "submitting"}
      />

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-error text-sm p-3 rounded-xl bg-error/10 border border-error/20"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          Something went wrong. Please try again.
        </motion.div>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
