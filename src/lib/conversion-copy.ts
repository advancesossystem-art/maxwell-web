/**
 * Maxwell Electrodeal — single source of truth for conversion CTA language & routes.
 * All conversion components must use this module (no ad-hoc button copy).
 */

export const CTA_LABELS = {
  primary: "Book Strategy Consultation",
  secondary: "Get Free Project Estimate",
  tertiary: "Explore Services",
  exploreProcess: "Our Process",
  howWeWork: "How We Work",
  requestProposal: "Request Proposal",
  similarProject: "Start Similar Project",
  getProposal: "Get Proposal",
  industryAudit: "Request Industry Audit",
  discoveryCall: "Book Discovery Call",
  freeStrategySession: "Free Strategy Session",
  instantEstimate: "Get Instant Project Estimate",
  freeErpAssessment: "Get Free ERP Assessment",
  calculateCost: "Calculate Project Cost",
  customRoadmap: "Get Custom Roadmap",
  strategyCall: "Book Strategy Call",
} as const;

export const CONVERSION_ROUTES = {
  consultation: "/book-consultation",
  estimate: "/get-estimate",
  caseStudies: "/case-studies",
  discovery: "/discovery-call",
  contact: "/contact",
  work: "/work",
  services: "/services",
  industries: "/industries",
  process: "/process",
  whyMaxwell: "/why-maxwell",
} as const;

export type ConversionContext = {
  service?: string;
  industry?: string;
  project?: string;
  source?: string;
};

function buildQuery(context?: ConversionContext): string {
  if (!context) return "";
  const params = new URLSearchParams();
  if (context.service) params.set("service", context.service);
  if (context.industry) params.set("industry", context.industry);
  if (context.project) params.set("project", context.project);
  if (context.source) params.set("source", context.source);
  const q = params.toString();
  return q ? `?${q}` : "";
}

export function consultationHref(context?: ConversionContext): string {
  return `${CONVERSION_ROUTES.consultation}${buildQuery(context)}`;
}

export function estimateHref(context?: ConversionContext): string {
  return `${CONVERSION_ROUTES.estimate}${buildQuery(context)}`;
}

export function discoveryHref(context?: ConversionContext): string {
  return `${CONVERSION_ROUTES.discovery}${buildQuery(context)}`;
}

export function contactHref(context?: ConversionContext): string {
  return `${CONVERSION_ROUTES.contact}${buildQuery(context)}`;
}

/** Standard response expectation copy for forms & CTAs */
export const CONVERSION_EXPECTATIONS = {
  responseTime: "We respond within one business day",
  estimateTimeline: "Detailed estimate within 24–48 hours",
  consultationLength: "30-minute executive strategy session",
  privacyNote:
    "Your information is confidential. We never sell your data. NDA available on request.",
  successConsultation:
    "You'll receive a calendar invite and preparation checklist within 24 hours.",
  successEstimate:
    "Our solutions team will review your scope and send a phased estimate with timeline options.",
  successContact: "A project lead will reach out within 24 hours to discuss next steps.",
} as const;
