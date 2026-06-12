import type { CaseStudyData } from "@/lib/case-studies-data";
import type { ContentFAQ } from "@/lib/content/schema";

export interface CaseStudyGeoLinks {
  resources: { label: string; href: string }[];
  services: { label: string; href: string }[];
  industries: { label: string; href: string }[];
}

const serviceHrefMap: Record<string, string> = {
  "ERP Development": "/services/erp-development",
  "CRM Development": "/services/crm-development",
  "Custom Software Development": "/services/custom-software-development",
  "Mobile App Development": "/services/mobile-app-development",
  "AI Solutions": "/services/ai-solutions",
  "SaaS Development": "/services/saas-development",
  "Cloud Solutions": "/services/cloud-solutions",
};

const industryHrefMap: Record<string, string> = {
  Manufacturing: "/industries/manufacturing",
  Healthcare: "/industries/healthcare",
  Education: "/industries/education",
  Logistics: "/industries/logistics",
  Retail: "/industries/retail",
  Construction: "/industries/construction",
};

export function buildCaseStudyFaqs(study: CaseStudyData): ContentFAQ[] {
  return [
    {
      question: `What was the main challenge for this ${study.trust.industry.toLowerCase()} engagement?`,
      answer: study.challenges[0] ?? study.initialSituation,
    },
    {
      question: "What was the implementation timeline?",
      answer: `${study.trust.timeline} — ${study.timeline.map((t) => `${t.phase} (${t.duration})`).join("; ")}.`,
    },
    {
      question: "What ROI or business outcomes were achieved?",
      answer: `${study.results[0]?.metric ?? ""} ${study.results[0]?.label ?? ""} — ${study.results[0]?.description ?? study.roiMetrics[0]?.description ?? ""}`.trim(),
    },
    {
      question: "What technology stack was used?",
      answer: study.technologyStack.slice(0, 6).join(", "),
    },
  ];
}

export function buildCaseStudyRelatedLinks(study: CaseStudyData): CaseStudyGeoLinks {
  const serviceHref = serviceHrefMap[study.filters.service] ?? "/services";
  const industryHref = industryHrefMap[study.trust.industry] ?? "/industries";

  return {
    resources: study.similarSolutions.slice(0, 3).map((s) => ({ label: s.title, href: s.href })),
    services: [
      { label: study.filters.service, href: serviceHref },
      { label: "All services", href: "/services" },
    ],
    industries: [
      { label: `${study.trust.industry} industry`, href: industryHref },
      { label: "Case studies", href: "/case-studies" },
    ],
  };
}

export function buildCaseStudyStrategicInsights(study: CaseStudyData): string[] {
  return study.lessonsLearned.length > 0
    ? study.lessonsLearned
    : [
        "Phased rollout reduced adoption risk versus big-bang go-live.",
        "Shop-floor buy-in required weekly demos and role-based training.",
        "Tally/finance sync was scheduled in phase one, not deferred.",
      ];
}
