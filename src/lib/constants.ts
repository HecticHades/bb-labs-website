export const siteConfig = {
  name: "BB Labs",
  description: "Custom software engineering solutions that transform your ideas into powerful, scalable applications.",
  url: "https://bblabs.dev",
  email: "hello@bblabs.dev",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: "Globe",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and serverless architectures.",
    icon: "Cloud",
    features: ["AWS & Azure", "Kubernetes", "Microservices", "CI/CD Pipelines"],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions.",
    icon: "Brain",
    features: ["OpenAI & LLMs", "Computer Vision", "NLP", "Predictive Analytics"],
  },
  {
    id: "api-development",
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs that power your applications.",
    icon: "Code",
    features: ["REST & GraphQL", "Authentication", "Rate Limiting", "Documentation"],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Expert guidance on architecture, technology choices, and best practices.",
    icon: "Users",
    features: ["Architecture Review", "Code Audits", "Tech Strategy", "Team Training"],
  },
];

export const projects = [
  {
    id: "fintech-platform",
    title: "FinTech Trading Platform",
    description: "Real-time trading platform handling millions of transactions daily.",
    image: "/projects/fintech.jpg",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    category: "fintech",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management and telemedicine platform.",
    image: "/projects/healthcare.jpg",
    tags: ["Next.js", "Python", "AI", "AWS"],
    category: "healthcare",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Marketplace",
    description: "Multi-vendor marketplace with advanced inventory management.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "ElasticSearch", "Redis"],
    category: "ecommerce",
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform with customizable dashboards.",
    image: "/projects/analytics.jpg",
    tags: ["React", "D3.js", "GraphQL", "TimescaleDB"],
    category: "saas",
  },
  {
    id: "logistics-system",
    title: "Logistics & Fleet Management",
    description: "IoT-powered fleet tracking and route optimization system.",
    image: "/projects/logistics.jpg",
    tags: ["React Native", "IoT", "Maps API", "MongoDB"],
    category: "logistics",
  },
  {
    id: "education-platform",
    title: "Online Learning Platform",
    description: "Interactive e-learning platform with live streaming capabilities.",
    image: "/projects/education.jpg",
    tags: ["Next.js", "WebRTC", "AI", "PostgreSQL"],
    category: "education",
  },
];

export const values = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to deliver solutions that keep you ahead of the curve.",
    icon: "Lightbulb",
  },
  {
    title: "Quality Obsessed",
    description: "Every line of code is crafted with precision, tested thoroughly, and optimized for performance.",
    icon: "Shield",
  },
  {
    title: "Client Partnership",
    description: "We work as an extension of your team, fully invested in your success and growth.",
    icon: "Handshake",
  },
  {
    title: "Transparent Process",
    description: "Clear communication, honest timelines, and no surprises throughout your project.",
    icon: "Eye",
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/bblabs", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/company/bblabs", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com/bblabs", icon: "Twitter" },
];
