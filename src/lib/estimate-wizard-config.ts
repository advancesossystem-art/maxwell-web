import type { LeadBudget, LeadIndustry, LeadProjectType, LeadTimeline, LeadUserCount } from "@/lib/leads-data";

export const WIZARD_STEPS = [
  {
    step: 1,
    key: "industry",
    navLabel: "Industry",
    title: "Your industry",
    subtitle: "We tailor compliance, integrations, and modules to your sector — not a generic template.",
  },
  {
    step: 2,
    key: "projectType",
    navLabel: "Project type",
    title: "What are you building?",
    subtitle: "ERP, CRM, mobile, AI, or custom software — each follows a different delivery playbook.",
  },
  {
    step: 3,
    key: "users",
    navLabel: "Team size",
    title: "How many people will use it?",
    subtitle: "Daily active users drive licensing, infrastructure, and rollout complexity.",
  },
  {
    step: 4,
    key: "features",
    navLabel: "Features",
    title: "Expected capabilities",
    subtitle: "Select what matters now — we phase the rest so you go live faster.",
  },
  {
    step: 5,
    key: "budget",
    navLabel: "Budget",
    title: "Investment range",
    subtitle: "Indicative only. Final quote follows a scoped discovery call.",
  },
  {
    step: 6,
    key: "timeline",
    navLabel: "Timeline",
    title: "Target go-live",
    subtitle: "Aggressive timelines need phased delivery or a reduced MVP scope.",
  },
  {
    step: 7,
    key: "estimate",
    navLabel: "Estimate",
    title: "Your instant estimate",
    subtitle: "Ballpark range from 50+ similar engagements — refined after discovery.",
  },
  {
    step: 8,
    key: "contact",
    navLabel: "Contact",
    title: "Get your detailed estimate",
    subtitle: "A senior engineer reviews your inputs and responds within one business day.",
  },
] as const;

export type WizardStepKey = (typeof WIZARD_STEPS)[number]["key"];

export type IndustryWizardMeta = {
  tagline: string;
  compliance: string;
  modules: string[];
  deliveryNote: string;
};

export const industryWizardMeta: Record<LeadIndustry, IndustryWizardMeta> = {
  Manufacturing: {
    tagline: "Shop-floor, inventory, and GST-first delivery",
    compliance: "GST · e-invoice · Tally sync · batch traceability",
    modules: ["Multi-plant inventory", "Work orders & BOM", "Mobile GRN", "Quality checks"],
    deliveryNote: "Typical manufacturing ERP engagements run 14–24 weeks with phased plant rollout.",
  },
  Healthcare: {
    tagline: "Patient workflows with privacy built in",
    compliance: "HIPAA-aware · encrypted records · audit trails",
    modules: ["Patient portal", "Appointments", "Telehealth", "Billing integration"],
    deliveryNote: "Healthcare platforms often need 12–20 weeks including compliance review.",
  },
  Education: {
    tagline: "Campus ops, LMS, and parent-facing portals",
    compliance: "DPDP Act · student data privacy · role-based access",
    modules: ["LMS", "Fee automation", "Exam platforms", "Parent communication"],
    deliveryNote: "EdTech builds usually launch core LMS in 10–16 weeks.",
  },
  Logistics: {
    tagline: "Fleet, warehouse, and dispatch visibility",
    compliance: "e-way bill · POD capture · GST invoicing",
    modules: ["Fleet tracking", "Route planning", "Warehouse WMS", "Dealer portals"],
    deliveryNote: "Logistics systems with GPS and offline POD typically need 12–18 weeks.",
  },
  Retail: {
    tagline: "Omnichannel stock and distributor visibility",
    compliance: "GST · POS integration · scheme management",
    modules: ["POS sync", "Van sales app", "Beat planning", "Inventory across stores"],
    deliveryNote: "Retail ERP + mobile field apps often phase in 10–16 weeks.",
  },
  Construction: {
    tagline: "Site progress, materials, and subcontractor billing",
    compliance: "RERA workflows · material tracking · progress dashboards",
    modules: ["Site reporting", "Material issue", "Subcontractor billing", "Project costing"],
    deliveryNote: "Construction ERP projects commonly run 16–24 weeks across sites.",
  },
  Other: {
    tagline: "Custom scope from your operational workflow",
    compliance: "Scoped during discovery — finance, ops, and field requirements",
    modules: ["Workflow automation", "Dashboards", "Integrations", "Mobile access"],
    deliveryNote: "We start every engagement with a process walk, regardless of industry.",
  },
};

export const projectTypeWizardMeta: Record<
  LeadProjectType,
  { tagline: string; startingFrom: string; typicalTimeline: string }
> = {
  Website: {
    tagline: "Next.js marketing sites built for SEO and conversion",
    startingFrom: "₹75K",
    typicalTimeline: "4–8 weeks",
  },
  "Mobile App": {
    tagline: "iOS & Android with offline-ready field workflows",
    startingFrom: "₹3L",
    typicalTimeline: "10–16 weeks",
  },
  ERP: {
    tagline: "GST-ready ERP with Tally sync and shop-floor screens",
    startingFrom: "₹2L",
    typicalTimeline: "14–24 weeks",
  },
  CRM: {
    tagline: "B2B pipeline software without per-seat licensing",
    startingFrom: "₹2.5L",
    typicalTimeline: "10–16 weeks",
  },
  AI: {
    tagline: "Focused AI on operational decisions — not slide-deck pilots",
    startingFrom: "₹1.5L",
    typicalTimeline: "8–14 weeks",
  },
  SaaS: {
    tagline: "Multi-tenant MVP through subscription billing",
    startingFrom: "₹4L",
    typicalTimeline: "12–20 weeks",
  },
  "Custom Software": {
    tagline: "Internal tools and platforms mapped to your process",
    startingFrom: "₹1L",
    typicalTimeline: "8–18 weeks",
  },
};

export const userCountMeta: Record<LeadUserCount, string> = {
  "1–10 users": "Single team or pilot rollout",
  "11–30 users": "Department-wide adoption",
  "31–75 users": "Multi-branch operations",
  "76–150 users": "Regional rollout with training plan",
  "150+ users": "Enterprise rollout — phased go-live recommended",
};

export const budgetMeta: Record<LeadBudget, string> = {
  "₹50K–₹1L": "Focused MVP or single-module build",
  "₹1L–₹5L": "Core platform for one location or team",
  "₹5L–₹10L": "Multi-module with integrations",
  "₹10L+": "Enterprise scope — multi-site or multi-product",
};

export const timelineMeta: Record<LeadTimeline, string> = {
  ASAP: "Requires reduced MVP scope or dedicated squad",
  "1 Month": "Single module or landing MVP only",
  "3 Months": "Standard phased delivery window",
  "6 Months": "Full platform with integrations",
  Flexible: "We align milestones to your procurement cycle",
};
