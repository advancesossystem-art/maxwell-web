export type ProgrammaticPageType = "compare" | "cost" | "industry-service" | "city-service";

export interface PricingTableRow {
  tier: string;
  scope: string;
  priceRange: string;
  timeline: string;
  bestFor: string;
}

export interface PricingTableBlock {
  title: string;
  rows: PricingTableRow[];
  footnote: string;
}

export interface ComparisonMatrixRow {
  criterion: string;
  left: string;
  right: string;
}

export interface ComparisonMatrixBlock {
  title: string;
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonMatrixRow[];
  summary: string;
}

export interface LocalStatsBlock {
  title: string;
  subtitle?: string;
  stats: { value: string; label: string }[];
}

export interface IntentRedirectBlock {
  message: string;
  links: { label: string; href: string }[];
}

export interface ProgrammaticPageData {
  slug: string;
  path: string;
  pageType: ProgrammaticPageType;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  headline: string;
  subheadline: string;
  intro: string;
  sections: { title: string; content: string; bullets?: string[] }[];
  challenges: { title: string; description: string }[];
  approach: string[];
  faqs: { question: string; answer: string }[];
  internalLinks: { label: string; href: string; description?: string }[];
  accent: string;
  breadcrumb: { label: string; href?: string }[];
  noIndex?: boolean;
  pricingTable?: PricingTableBlock;
  comparisonMatrix?: ComparisonMatrixBlock;
  localStats?: LocalStatsBlock;
  intentRedirect?: IntentRedirectBlock;
}

export interface ServiceCatalogEntry {
  key: string;
  slug: string;
  label: string;
  shortLabel: string;
  solutionSlug: string;
  serviceHref: string;
  description: string;
  costRangeInr: string;
  costRangeUsd: string;
  technologies: string[];
}

export interface IndustryCatalogEntry {
  slug: string;
  name: string;
  focus: string;
  painPoints: string[];
  compliance: string;
  icon: "factory" | "health" | "education" | "logistics" | "retail" | "construction";
}

export interface CityCatalogEntry {
  slug: string;
  name: string;
  state: string;
  insight: string;
  industries: string[];
}

export interface CountryCatalogEntry {
  slug: string;
  name: string;
  currency: "INR" | "USD" | "GBP" | "AED" | "CAD" | "AUD";
}

export interface CompareTemplate {
  slug: string;
  title: string;
  left: string;
  right: string;
  category: "erp" | "crm" | "strategy" | "delivery" | "automation" | "website";
  verdict: string;
  leftPros: string[];
  rightPros: string[];
  chooseLeft: string;
  chooseRight: string;
}
