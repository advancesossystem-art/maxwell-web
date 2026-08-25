import type { LeadBudget, LeadIndustry, LeadTimeline, LeadUserCount } from "@/lib/leads-data";

export const WIZARD_STEPS = [
  {
    step: 1,
    key: "industry",
    navLabel: "Industry",
    title: "Your industry",
    subtitle: "We tailor catalog structure, SEO, and enquiry paths to how your buyers search.",
  },
  {
    step: 2,
    key: "projectType",
    navLabel: "Project type",
    title: "What are you building?",
    subtitle: "Website, manufacturer catalog, SEO/AMC, or redesign — each follows a different delivery playbook.",
  },
  {
    step: 3,
    key: "users",
    navLabel: "Team size",
    title: "Who will manage the site?",
    subtitle: "Editors and stakeholders drive CMS training, content handoff, and AMC scope.",
  },
  {
    step: 4,
    key: "features",
    navLabel: "Features",
    title: "Expected capabilities",
    subtitle: "Select what matters for launch — we phase the rest so you go live faster.",
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
    subtitle: "Aggressive timelines need phased delivery or a reduced Starter scope.",
  },
  {
    step: 7,
    key: "estimate",
    navLabel: "Estimate",
    title: "Your instant estimate",
    subtitle: "Ballpark range from similar website engagements — refined after discovery.",
  },
  {
    step: 8,
    key: "contact",
    navLabel: "Contact",
    title: "Get your detailed estimate",
    subtitle: "Name and phone are required — email is optional. We respond within one business day.",
  },
] as const;

export type WizardStepKey = (typeof WIZARD_STEPS)[number]["key"];

/** Primary options shown on /get-estimate — website / manufacturer / SEO focused. */
export const wizardProjectTypes = [
  "Website",
  "Manufacturer Catalog",
  "SEO / AMC",
  "Website Redesign",
  "Ecommerce Website",
] as const;

export type WizardProjectType = (typeof wizardProjectTypes)[number];

export type IndustryWizardMeta = {
  tagline: string;
  compliance: string;
  modules: string[];
  deliveryNote: string;
};

export const industryWizardMeta: Record<LeadIndustry, IndustryWizardMeta> = {
  Manufacturing: {
    tagline: "Product catalogs, RFQ paths, and GIDC SEO",
    compliance: "Certificates · SDS/COA requests · GST invoice ready",
    modules: ["SKU / grade pages", "WhatsApp RFQ", "Plant / estate SEO", "Dealer portal option"],
    deliveryNote: "Typical manufacturer catalogs launch in 5–6 weeks with Search Console at go-live.",
  },
  Healthcare: {
    tagline: "Trust-first clinic and equipment sites",
    compliance: "Clear service pages · appointment CTAs · privacy-aware forms",
    modules: ["Service pages", "Booking / enquiry forms", "Doctor or product profiles", "Local SEO"],
    deliveryNote: "Healthcare websites often launch in 3–5 weeks including content review.",
  },
  Education: {
    tagline: "Institution sites with clear enrollment paths",
    compliance: "Course catalogs · fee enquiry · role-based CMS access",
    modules: ["Course listings", "Enquiry forms", "Event / news hub", "Multi-campus pages"],
    deliveryNote: "EdTech and campus sites usually launch core pages in 3–5 weeks.",
  },
  Logistics: {
    tagline: "Fleet, warehouse, and corridor visibility",
    compliance: "Service corridors · quote forms · tracking CTAs",
    modules: ["Service coverage pages", "Quote / RFQ forms", "Fleet or warehouse proof", "Local SEO"],
    deliveryNote: "Logistics sites with corridor SEO typically need 4–6 weeks.",
  },
  Retail: {
    tagline: "Storefront and distributor-facing sites",
    compliance: "Catalog · enquiry or cart · GST invoicing paths",
    modules: ["Product catalog", "Lead or cart checkout", "Store locator", "Campaign landing pages"],
    deliveryNote: "Retail and distributor sites often phase in 4–6 weeks.",
  },
  Construction: {
    tagline: "Project proof and tender-ready sites",
    compliance: "Project galleries · certifications · enquiry routing",
    modules: ["Project portfolio", "Capability pages", "Tender / RFQ forms", "Local SEO"],
    deliveryNote: "Construction websites commonly launch in 4–6 weeks.",
  },
  Other: {
    tagline: "Custom website scope from your buyer journey",
    compliance: "Scoped during discovery — SEO, CMS, and enquiry needs",
    modules: ["Core pages", "Lead capture", "SEO foundation", "Optional AMC"],
    deliveryNote: "We start every engagement with a discovery call, regardless of industry.",
  },
};

export const projectTypeWizardMeta: Record<
  WizardProjectType,
  { tagline: string; startingFrom: string; typicalTimeline: string; estimateKey: string }
> = {
  Website: {
    tagline: "Next.js business sites built for SEO and enquiries",
    startingFrom: "₹35K",
    typicalTimeline: "3–4 weeks",
    estimateKey: "Website",
  },
  "Manufacturer Catalog": {
    tagline: "Product catalogs with RFQ, specs, and WhatsApp paths",
    startingFrom: "₹75K",
    typicalTimeline: "5–6 weeks",
    estimateKey: "Website",
  },
  "SEO / AMC": {
    tagline: "Monthly updates, SEO reports, and two product changes",
    startingFrom: "₹15K/mo",
    typicalTimeline: "Ongoing",
    estimateKey: "Website",
  },
  "Website Redesign": {
    tagline: "Rebuild slow or outdated sites without losing SEO equity",
    startingFrom: "₹75K",
    typicalTimeline: "4–8 weeks",
    estimateKey: "Website",
  },
  "Ecommerce Website": {
    tagline: "Catalog, checkout, and payments for B2B or B2C sales",
    startingFrom: "₹1.5L",
    typicalTimeline: "6–10 weeks",
    estimateKey: "Website",
  },
};

export const wizardFeatureOptions: Record<WizardProjectType, string[]> = {
  Website: [
    "Responsive Design",
    "CMS Integration",
    "SEO Optimization",
    "Blog / Content Hub",
    "Contact Forms & Lead Capture",
    "WhatsApp Enquiry",
    "Multi-language Support",
    "Analytics Dashboard",
  ],
  "Manufacturer Catalog": [
    "Product / SKU Pages",
    "Category Filters",
    "RFQ / Enquiry Forms",
    "WhatsApp Deep Links",
    "Certificate / SDS Downloads",
    "GIDC / Local SEO Pages",
    "Dealer Portal Option",
    "Search Console Setup",
  ],
  "SEO / AMC": [
    "Weekly Content Updates",
    "Two Product Changes / Month",
    "SEO Performance Report",
    "Core Web Vitals Monitoring",
    "Two Published Articles",
    "Security / Plugin Updates",
    "Uptime Monitoring",
    "Schema / Metadata Fixes",
  ],
  "Website Redesign": [
    "URL Migration Plan",
    "Design System Refresh",
    "Performance Rebuild (Next.js)",
    "Content Migration",
    "SEO Redirect Map",
    "Lead Form Rebuild",
    "Analytics Re-instrumentation",
    "CMS Handoff Training",
  ],
  "Ecommerce Website": [
    "Product Catalog",
    "Cart & Checkout",
    "Razorpay / Stripe",
    "Inventory Sync",
    "Order Admin",
    "Customer Accounts",
    "SEO Product Pages",
    "WhatsApp Order Support",
  ],
};

export const userCountMeta: Record<LeadUserCount, string> = {
  "1–10 users": "Owner or small marketing team",
  "11–30 users": "Marketing + sales editors",
  "31–75 users": "Multi-branch content owners",
  "76–150 users": "Regional teams with training plan",
  "150+ users": "Enterprise CMS roles — phased rollout",
};

export const budgetMeta: Record<LeadBudget | "₹35K–₹75K", string> = {
  "₹35K–₹75K": "Starter business site or focused launch",
  "₹50K–₹1L": "Professional catalog or redesign band",
  "₹1L–₹5L": "Large catalog, ecommerce, or multi-language",
  "₹5L–₹10L": "Portal depth with integrations",
  "₹10L+": "Enterprise multi-site or custom program",
};

export const timelineMeta: Record<LeadTimeline, string> = {
  ASAP: "Requires Starter scope or dedicated sprint",
  "1 Month": "Starter site or landing MVP only",
  "3 Months": "Standard catalog or redesign window",
  "6 Months": "Large catalog with phased SEO",
  Flexible: "We align milestones to your go-live date",
};

/** Budgets shown in the estimate wizard (includes Starter band). */
export const wizardBudgets = [
  "₹35K–₹75K",
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
] as const;

export type WizardBudget = (typeof wizardBudgets)[number];
