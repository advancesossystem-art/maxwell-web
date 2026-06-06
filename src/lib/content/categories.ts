import type { ContentCategorySlug } from "./schema";

export interface ContentCategory {
  slug: ContentCategorySlug;
  name: string;
  description: string;
  accent: string;
}

export const contentCategories: ContentCategory[] = [
  { slug: "web-development", name: "Web Development", description: "Next.js, performance, SEO, and conversion-focused web engineering.", accent: "#06B6D4" },
  { slug: "software-development", name: "Software Development", description: "Architecture, APIs, custom platforms, and engineering best practices.", accent: "#2563EB" },
  { slug: "ai", name: "AI", description: "LLMs, computer vision, automation, and responsible AI deployment.", accent: "#6366F1" },
  { slug: "erp", name: "ERP", description: "Enterprise resource planning, manufacturing ops, and Tally integration.", accent: "#F59E0B" },
  { slug: "crm", name: "CRM", description: "Sales pipelines, customer data, and B2B relationship platforms.", accent: "#8B5CF6" },
  { slug: "cloud", name: "Cloud", description: "AWS, Azure, migration, DevOps, and infrastructure at scale.", accent: "#10B981" },
  { slug: "saas", name: "SaaS", description: "Multi-tenant products, billing, and startup MVP velocity.", accent: "#06B6D4" },
  { slug: "mobile-apps", name: "Mobile Apps", description: "iOS, Android, React Native, and field-ready mobile UX.", accent: "#10B981" },
  { slug: "digital-transformation", name: "Digital Transformation", description: "Strategy, change management, and enterprise modernization.", accent: "#1A4B8C" },
];

export function getCategoryBySlug(slug: ContentCategorySlug): ContentCategory | undefined {
  return contentCategories.find((c) => c.slug === slug);
}
