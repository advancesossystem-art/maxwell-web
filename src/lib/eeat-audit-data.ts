export interface EeatPageAudit {
  path: string;
  title: string;
  experience: number;
  expertise: number;
  authority: number;
  trust: number;
  weaknesses: string[];
  fixes: string[];
}

function score(avg: number): number {
  return Math.round(avg * 10) / 10;
}

/** E-E-A-T audit snapshot for key pages — updated with authority implementation. */
export const eeatAudits: EeatPageAudit[] = [
  {
    path: "/knowledge-center",
    title: "Knowledge Center",
    experience: 8.5,
    expertise: 9,
    authority: 8.5,
    trust: 8,
    weaknesses: ["Expand answer library beyond six topics"],
    fixes: ["GEO and statistics panels added", "Link new case studies as published"],
  },
  {
    path: "/answers/best-erp-for-manufacturing",
    title: "Best ERP for Manufacturing",
    experience: 9,
    expertise: 9,
    authority: 8.5,
    trust: 9,
    weaknesses: ["Add more vertical-specific examples (pharma, textile)"],
    fixes: ["Cross-link industry resource centers", "Refresh statistics annually"],
  },
  {
    path: "/guides/complete-erp-development-guide",
    title: "Complete ERP Development Guide",
    experience: 9,
    expertise: 9.5,
    authority: 9,
    trust: 8.5,
    weaknesses: ["Author now resolved to specialist — verify byline on all guides"],
    fixes: ["Trust block added", "FAQ schema via existing faqs"],
  },
  {
    path: "/reports/erp-adoption-manufacturing",
    title: "ERP Adoption in Manufacturing",
    experience: 8.5,
    expertise: 9,
    authority: 9,
    trust: 8.5,
    weaknesses: ["Gated download may limit full crawl of PDF"],
    fixes: ["Key findings visible on page", "Research hub cross-links"],
  },
  {
    path: "/case-studies/manufacturing-erp",
    title: "Manufacturing ERP Case Study",
    experience: 9.5,
    expertise: 9,
    authority: 9,
    trust: 9,
    weaknesses: ["Client anonymization limits named logos"],
    fixes: ["ROI metrics and timeline documented", "Authority block present"],
  },
  {
    path: "/reviews",
    title: "Reviews & Social Proof",
    experience: 7,
    expertise: 7,
    authority: 6.5,
    trust: 8,
    weaknesses: ["No fabricated Clutch/G2 scores — profiles in progress"],
    fixes: ["Honest status labels", "Client testimonials from delivery"],
  },
  {
    path: "/founder-insights",
    title: "Founder Insights Hub",
    experience: 9,
    expertise: 8.5,
    authority: 8.5,
    trust: 8.5,
    weaknesses: ["Articles link to existing content — long-form founder posts optional"],
    fixes: ["Linked to founder author profile", "Topic taxonomy clear"],
  },
  {
    path: "/services/erp-development",
    title: "ERP Development Service",
    experience: 8.5,
    expertise: 9,
    authority: 8,
    trust: 8,
    weaknesses: ["Service page vs guide depth"],
    fixes: ["GEO blocks and statistics on service pages", "Case study proof blocks"],
  },
];

export function getEeatOverallScore(audit: EeatPageAudit): number {
  return score((audit.experience + audit.expertise + audit.authority + audit.trust) / 4);
}
