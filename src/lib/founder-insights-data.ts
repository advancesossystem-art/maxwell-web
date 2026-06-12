import type { ContentCategorySlug } from "./content/schema";

export interface FounderInsight {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  category: ContentCategorySlug;
  publishedAt: string;
  href: string;
}

/** Founder-linked authority articles — mapped to existing guides, blog, and answers. */
export const founderInsights: FounderInsight[] = [
  {
    slug: "erp-failures",
    title: "Why ERP Projects Fail — And How to Avoid It",
    excerpt: "The top failure modes we see in mid-market ERP: scope without shop-floor reality, missing Tally sync, and weak sponsorship.",
    topic: "ERP Failures",
    category: "erp",
    publishedAt: "2026-01-01",
    href: "/guides/complete-erp-development-guide",
  },
  {
    slug: "crm-mistakes",
    title: "CRM Mistakes B2B Teams Repeat",
    excerpt: "Per-seat SaaS without workflow fit, duplicate customer data, and field teams stuck on WhatsApp instead of pipeline discipline.",
    topic: "CRM Mistakes",
    category: "crm",
    publishedAt: "2026-02-20",
    href: "/reports/crm-trends-sme",
  },
  {
    slug: "manufacturing-automation",
    title: "Manufacturing Automation Without the Hype",
    excerpt: "Start with inventory accuracy and dispatch — not full lights-out automation. Phased wins beat big-bang transformation.",
    topic: "Manufacturing Automation",
    category: "digital-transformation",
    publishedAt: "2026-02-01",
    href: "/case-studies/inventory-automation",
  },
  {
    slug: "ai-implementation",
    title: "AI Implementation That Pays Back",
    excerpt: "Vision AI and document processing deliver measurable ROI faster than generic chatbot pilots — if data quality is addressed first.",
    topic: "AI Implementation",
    category: "ai",
    publishedAt: "2025-12-20",
    href: "/reports/ai-adoption-industry",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation for Operators, Not Slide Decks",
    excerpt: "Transformation is process change with software enablement — weekly demos, milestone billing, and one painful workflow fixed at a time.",
    topic: "Digital Transformation",
    category: "digital-transformation",
    publishedAt: "2026-02-01",
    href: "/resources/digital-transformation-roadmap-template",
  },
  {
    slug: "technology-strategy",
    title: "Technology Strategy When You Outgrow Excel",
    excerpt: "Signals, sequencing, and build-vs-buy framing for leaders between ₹5Cr and ₹100Cr revenue.",
    topic: "Technology Strategy",
    category: "digital-transformation",
    publishedAt: "2026-03-01",
    href: "/answers/when-to-move-beyond-excel",
  },
];
