import type { ToolCategory, ToolDefinition } from "./types";

export const toolCategoryLabels: Record<ToolCategory, string> = {
  planning: "Planning & Delivery",
  sales: "Sales & Proposals",
  technical: "Technical Advisory",
  finance: "Cost & ROI",
  strategy: "Strategy & Assessment",
};

export const toolsRegistry: ToolDefinition[] = [
  {
    slug: "project-roadmap",
    name: "Project Roadmap Generator",
    shortName: "Roadmap",
    description: "Generate phased roadmaps with milestones, deliverables, and timeline based on your project constraints.",
    category: "planning",
    icon: "roadmap",
    accent: "#2563EB",
    featured: true,
    popular: true,
    recentlyUpdated: true,
    estimatedMinutes: 4,
    tags: ["roadmap", "milestones", "planning"],
  },
  {
    slug: "proposal-generator",
    name: "Proposal Generator",
    shortName: "Proposal",
    description: "Build professional client proposals with scope, stack recommendations, timeline, and investment range.",
    category: "sales",
    icon: "proposal",
    accent: "#8B5CF6",
    featured: true,
    popular: true,
    estimatedMinutes: 5,
    tags: ["proposal", "scope", "client"],
  },
  {
    slug: "rfp-builder",
    name: "RFP Builder",
    shortName: "RFP",
    description: "Create structured Request for Proposal documents with objectives, requirements, and evaluation criteria.",
    category: "sales",
    icon: "rfp",
    accent: "#06B6D4",
    recentlyUpdated: true,
    estimatedMinutes: 6,
    tags: ["RFP", "requirements", "vendor"],
  },
  {
    slug: "tech-stack-advisor",
    name: "Tech Stack Advisor",
    shortName: "Tech Stack",
    description: "Get tailored frontend, backend, database, and cloud recommendations for your scale and budget.",
    category: "technical",
    icon: "stack",
    accent: "#10B981",
    featured: true,
    estimatedMinutes: 3,
    tags: ["architecture", "stack", "cloud"],
  },
  {
    slug: "software-cost-calculator",
    name: "Software Cost Calculator",
    shortName: "Cost Calculator",
    description: "Advanced estimate including features, compliance, integrations, team composition, and timeline.",
    category: "finance",
    icon: "calculator",
    accent: "#F59E0B",
    popular: true,
    recentlyUpdated: true,
    estimatedMinutes: 5,
    tags: ["cost", "estimate", "budget"],
  },
  {
    slug: "digital-transformation-assessment",
    name: "Digital Transformation Assessment",
    shortName: "DX Assessment",
    description: "Measure digital maturity and receive improvement opportunities with a suggested modernization roadmap.",
    category: "strategy",
    icon: "assessment",
    accent: "#1A4B8C",
    featured: true,
    estimatedMinutes: 4,
    tags: ["maturity", "transformation", "assessment"],
  },
  {
    slug: "roi-calculator",
    name: "ROI Calculator",
    shortName: "ROI",
    description: "Model potential savings, productivity gains, payback period, and ROI from process automation.",
    category: "finance",
    icon: "roi",
    accent: "#6366F1",
    popular: true,
    estimatedMinutes: 3,
    tags: ["ROI", "savings", "automation"],
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
