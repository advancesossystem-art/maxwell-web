import type { ToolCategory, ToolDefinition } from "./types";

export const toolCategoryLabels: Record<ToolCategory, string> = {
  planning: "Planning & Delivery",
  sales: "Sales & Proposals",
  technical: "Technical Advisory",
  finance: "Cost & ROI",
  strategy: "Strategy & Assessment",
};

/** Only one tool lives now — the industrial website RFQ estimator. All ERP/CRM tools removed. */
export const toolsRegistry: ToolDefinition[] = [
  {
    slug: "industrial-website-rfq-estimator",
    name: "Industrial Website Cost & RFQ Estimator",
    shortName: "Industrial RFQ Cost",
    description:
      "Planning ranges for industrial / manufacturer websites by SKU count, RFQ depth, catalog, GIDC SEO, and dealer portal — Starter ₹35k / Professional ₹75k anchors.",
    category: "finance",
    icon: "calculator",
    accent: "#0F766E",
    featured: true,
    popular: true,
    recentlyUpdated: true,
    estimatedMinutes: 3,
    tags: [
      "industrial website cost",
      "RFQ website price",
      "manufacturer website cost",
      "industrial catalog estimate",
      "B2B website estimator",
    ],
  },
];

export const toolSlugs = toolsRegistry.map((t) => t.slug);

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return toolsRegistry.find((t) => t.slug === slug);
}

export function getFeaturedTools(): ToolDefinition[] {
  return toolsRegistry.filter((t) => t.featured);
}

export function getPopularTools(): ToolDefinition[] {
  return toolsRegistry.filter((t) => t.popular);
}

export function getRecentlyUpdatedTools(): ToolDefinition[] {
  return toolsRegistry.filter((t) => t.recentlyUpdated);
}
