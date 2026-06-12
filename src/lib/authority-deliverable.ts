/** Phase 3 authority deliverable scores — updated after GEO / statistics / case study sprint. */

export interface AuthorityScorecard {
  geo: number;
  eeat: number;
  aiSearchReadiness: number;
  authority: number;
  trust: number;
  conversion: number;
  assessedAt: string;
}

export const authorityScorecard: AuthorityScorecard = {
  geo: 7.8,
  eeat: 8.2,
  aiSearchReadiness: 7.6,
  authority: 8.0,
  trust: 8.4,
  conversion: 7.5,
  assessedAt: "2026-06-09",
};

export const priorityTasks = {
  priority1: [
    "Publish real Clutch / Google Business / GoodFirms profiles with verified URLs — ProofSignalsBar will auto-display",
    "Add client-approved project screenshots to /public and set src in project screenshot slots",
    "Refresh Maxwell research statistics quarterly with dated sources",
  ],
  priority2: [
    "Expand Maxwell Answers with 10+ additional question pages from sales discovery calls",
    "Add founder long-form articles (not just hub links) for ERP failures and CRM mistakes",
    "Cross-link Knowledge Center pillars from every service and industry hero",
  ],
  priority3: [
    "Industry-specific GEO comparison tables on extended industry pages",
    "Per-author LinkedIn URLs in company-data for full Person schema sameAs",
    "Automated E-E-A-T regression checks in verify:seo script",
  ],
} as const;

export interface PageTypeEeatAudit {
  pageType: string;
  samplePath: string;
  experience: number;
  expertise: number;
  authority: number;
  trust: number;
  weaknesses: string[];
  recommendations: string[];
}

export const pageTypeEeatAudits: PageTypeEeatAudit[] = [
  {
    pageType: "Homepage",
    samplePath: "/",
    experience: 8,
    expertise: 7.5,
    authority: 7.8,
    trust: 8.2,
    weaknesses: ["Hero is conversion-focused; add quick-answer strip for AI extraction"],
    recommendations: ["Link Knowledge Center above fold", "Surface 2 sourced statistics on homepage"],
  },
  {
    pageType: "Service Pages",
    samplePath: "/services/erp-development",
    experience: 8.5,
    expertise: 9,
    authority: 8.5,
    trust: 8.5,
    weaknesses: ["Need more vertical-specific proof when screenshots available"],
    recommendations: ["GEO blocks added — maintain quarterly FAQ refresh", "Keep case study cross-links current"],
  },
  {
    pageType: "Compare Pages",
    samplePath: "/compare/erp-vs-crm",
    experience: 8,
    expertise: 8.5,
    authority: 8.5,
    trust: 8.5,
    weaknesses: ["Verdict must stay independent — no reseller bias"],
    recommendations: ["Quick answer + comparison matrix optimized for AI citation", "Link to Maxwell Answers"],
  },
  {
    pageType: "Cost Pages",
    samplePath: "/cost/erp-development-cost-india",
    experience: 8.5,
    expertise: 8.5,
    authority: 8,
    trust: 8.8,
    weaknesses: ["Ranges are indicative — must align with live estimates"],
    recommendations: ["Quick answer states range upfront", "Pricing table is speakable"],
  },
  {
    pageType: "Industry Pages",
    samplePath: "/industries/manufacturing",
    experience: 8.5,
    expertise: 9,
    authority: 8.5,
    trust: 8.5,
    weaknesses: ["Extended industries thinner than core six"],
    recommendations: ["GEO + statistics on all industry hubs", "Resource center cross-links"],
  },
  {
    pageType: "Knowledge Center",
    samplePath: "/knowledge-center",
    experience: 8.5,
    expertise: 9,
    authority: 9,
    trust: 8.5,
    weaknesses: ["Needs continuous new research entries"],
    recommendations: ["Central hub for AI crawlers — keep pillar links updated"],
  },
  {
    pageType: "Answers",
    samplePath: "/answers/best-erp-for-manufacturing",
    experience: 9,
    expertise: 9,
    authority: 8.8,
    trust: 9,
    weaknesses: ["Library size still limited"],
    recommendations: ["QAPage schema on all answers", "Expand from sales FAQs"],
  },
  {
    pageType: "Resources",
    samplePath: "/resources/erp-readiness-checklist",
    experience: 8,
    expertise: 8.5,
    authority: 8,
    trust: 8.5,
    weaknesses: ["Gated downloads limit full content crawl"],
    recommendations: ["Trust block + author on all resources", "Preview sections speakable"],
  },
  {
    pageType: "Reports",
    samplePath: "/reports/erp-adoption-manufacturing",
    experience: 8.5,
    expertise: 9,
    authority: 9,
    trust: 8.8,
    weaknesses: ["Some reports gated"],
    recommendations: ["Key findings visible without gate", "Statistics sourced with dates"],
  },
  {
    pageType: "Case Studies",
    samplePath: "/case-studies/manufacturing-erp",
    experience: 9.5,
    expertise: 9,
    authority: 9.2,
    trust: 9,
    weaknesses: ["Anonymized clients limit named logos"],
    recommendations: ["GEO sections: key results, FAQs, related links", "Screenshot slots when approved"],
  },
];

export function averagePageTypeScore(
  audit: PageTypeEeatAudit,
  key: "experience" | "expertise" | "authority" | "trust",
): number {
  return audit[key];
}

export function overallPageTypeEeat(audit: PageTypeEeatAudit): number {
  return Math.round(((audit.experience + audit.expertise + audit.authority + audit.trust) / 4) * 10) / 10;
}
