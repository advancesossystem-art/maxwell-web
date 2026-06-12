/**
 * Search Console indexing & canonical audit — June 2026.
 * Live checks: apex vs www redirect, canonical tag alignment, sitemap hygiene.
 */

import { siteConfig } from "@/lib/constants";
import { serviceSlugs } from "@/lib/services-data";
import { industrySlugs } from "@/lib/industries-data";
import { caseStudySlugs } from "@/lib/case-studies-data";
import { compareSlugs, costSlugs } from "@/lib/seo/programmatic/build-pages";
import { answerSlugs } from "@/lib/answers-data";
import { toolSlugs } from "@/lib/tools/registry";

export interface IndexingScorecard {
  technicalSeo: number;
  indexability: number;
  canonical: number;
  internalLinking: number;
  sitemap: number;
  crawlEfficiency: number;
  assessedAt: string;
}

export const indexingScorecard: IndexingScorecard = {
  technicalSeo: 7.4,
  indexability: 7.8,
  canonical: 5.5,
  internalLinking: 8.1,
  sitemap: 8.6,
  crawlEfficiency: 7.2,
  assessedAt: "2026-06-12",
};

/** Post-fix projected scores once Vercel primary domain = apex. */
export const indexingScorecardProjected: IndexingScorecard = {
  technicalSeo: 9.1,
  indexability: 9.0,
  canonical: 9.5,
  internalLinking: 8.3,
  sitemap: 9.2,
  crawlEfficiency: 8.8,
  assessedAt: "2026-06-12",
};

export const canonicalAudit = {
  standard: `${siteConfig.url}{path}`,
  https: true,
  nonWww: true,
  selfReferencing: "All indexable routes via buildSeoMetadata / createMetadata / buildPageMetadata",
  issuesFound: [
    {
      severity: "critical" as const,
      issue: "Live host mismatch: https://maxwellelectrodeal.com 307 → www; canonical tags use apex",
      affected: "Sitewide",
      fix: "Set apex as primary domain in Vercel + deploy vercel.json www→apex 301 + proxy apex redirect",
    },
    {
      severity: "medium" as const,
      issue: "sameAs in socialProfiles used www URL (fixed to apex)",
      affected: "Organization JSON-LD",
      fix: "Deployed — siteConfig.url in socialProfiles",
    },
  ],
  missingCanonicals: [] as string[],
  conflictingCanonicals: [
    "Served URL (www) ≠ declared canonical (apex) until hosting fix",
  ],
};

export const hostRedirectAudit = {
  httpToHttps: "pass — Vercel 308 to HTTPS",
  wwwToApex: "fail — apex currently 307 to www; www serves 200",
  apexToWww: "fail — creates canonical loop with metadata",
  trailingSlash: "pass — Next.js default, no trailing slash in URLs",
  redirectChain: "2-hop when visiting apex (apex→www→200); should be 1-hop www→apex",
  actionRequired:
    "Vercel Dashboard → Domains → set maxwellelectrodeal.com as Primary; remove redirect apex→www",
};

export type CrawlIssue = {
  urlPattern: string;
  problem: string;
  recommendedFix: string;
  expectedImpact: "high" | "medium" | "low";
};

/** Typical GSC “Crawled – not indexed” patterns for this architecture. */
export const crawledNotIndexedPatterns: CrawlIssue[] = [
  {
    urlPattern: "/industries/{industry}/{service}",
    problem: "Thin programmatic matrix; noindex but crawlable via internal links",
    recommendedFix: "Keep noindex; reduce internal links (already filtered in build-pages); monitor crawl stats",
    expectedImpact: "medium",
  },
  {
    urlPattern: "/locations/india/{city}/{service}",
    problem: "Thin city×service pages; noindex",
    recommendedFix: "Keep noindex; on-demand only",
    expectedImpact: "medium",
  },
  {
    urlPattern: "/compare/*, /cost/* (long tail)",
    problem: "Similar template structure; may be judged duplicate without strong differentiation",
    recommendedFix: "Ensure unique stats, FAQs, and internal links per page; request indexing for top 10 by impressions",
    expectedImpact: "high",
  },
  {
    urlPattern: "/work/manufacturing-erp-platform",
    problem: "noIndex project was in sitemap (fixed)",
    recommendedFix: "Removed from sitemap-work.xml",
    expectedImpact: "low",
  },
  {
    urlPattern: "www vs apex URLs",
    problem: "Canonical confusion — Google crawls www, canonical points to redirecting apex",
    recommendedFix: "Fix primary domain to apex (critical)",
    expectedImpact: "high",
  },
  {
    urlPattern: "/eeat-audit, /founder-insights, /citation-guides",
    problem: "Support/authority hubs with lower search demand",
    recommendedFix: "eeat-audit noindex; strengthen links from services and knowledge center",
    expectedImpact: "low",
  },
];

export const internalLinkScores: Record<string, { score: number; notes: string }> = {
  homepage: { score: 9.2, notes: "Links to services, industries, tools, case studies; + knowledge center strip" },
  servicePages: { score: 8.5, notes: "GEO sections, related services; add more answers links in FAQs" },
  industryPages: { score: 8.4, notes: "Strong hub structure; case study + CTA links" },
  knowledgeCenter: { score: 8.8, notes: "Pillar links to answers, guides, research" },
  reports: { score: 7.9, notes: "Linked from content sitemap + knowledge hub" },
  resources: { score: 8.0, notes: "Footer + content sitemap" },
  caseStudies: { score: 8.6, notes: "Homepage, footer, service cross-links" },
  answers: { score: 8.3, notes: "Knowledge center + resource centers" },
  comparePages: { score: 7.5, notes: "Programmatic internal link graph; boost from service heroes" },
  costPages: { score: 7.6, notes: "Same as compare; high commercial intent" },
  locationPages: { score: 8.1, notes: "India cities prioritized in sitemap" },
  tools: { score: 8.7, notes: "Homepage spotlight + dedicated sitemap" },
  blog: { score: 7.8, notes: "Content hub; ensure new posts link to service money pages" },
};

export const sitemapAudit = {
  indexUrl: `${siteConfig.url}/sitemap.xml`,
  childSitemaps: 10,
  issuesFixed: [
    "Removed hub URL duplicates from sitemap-pages.xml",
    "Excluded noIndex project manufacturing-erp-platform from work sitemap",
    "Removed /eeat-audit from pages sitemap (noindex)",
  ],
  remainingNotes: [
    "Thin noindex programmatic routes correctly excluded",
    "Portal, admin, thank-you excluded via robots.txt",
    "Resubmit sitemap index in GSC after deploy",
  ],
};

export const programmaticIndexRecommendations = [
  { type: "Industry hubs", path: "/industries/{slug}", index: true, reason: "Unique depth, E-E-A-T, case studies" },
  { type: "Industry×service", path: "/industries/{i}/{s}", index: false, reason: "Thin matrix; noindex correct" },
  { type: "Location country", path: "/locations/{country}", index: true, reason: "Geo intent, unique copy" },
  { type: "Location city", path: "/locations/india/{city}", index: true, reason: "Local SEO value for India cities" },
  { type: "City×service", path: "/locations/india/{city}/{s}", index: false, reason: "Thin; noindex correct" },
  { type: "Compare pages", path: "/compare/{slug}", index: true, reason: "High intent; unique verdicts + FAQs" },
  { type: "Cost pages", path: "/cost/{slug}", index: true, reason: "Commercial intent; pricing tables" },
  { type: "Tools", path: "/tools/{slug}", index: true, reason: "Interactive value, lead gen, unique engines" },
  { type: "Solutions", path: "/solutions/{slug}", index: true, reason: "Pillar pages for geo markets" },
] as const;

export const gscPriorityLists = {
  priority1: [
    `${siteConfig.url}/`,
    `${siteConfig.url}/services/erp-development`,
    `${siteConfig.url}/services/crm-development`,
    `${siteConfig.url}/services/ai-solutions`,
    `${siteConfig.url}/services/custom-software-development`,
    `${siteConfig.url}/services/mobile-app-development`,
    `${siteConfig.url}/get-estimate`,
    `${siteConfig.url}/contact`,
    `${siteConfig.url}/case-studies`,
    ...caseStudySlugs.slice(0, 4).map((s) => `${siteConfig.url}/case-studies/${s}`),
    `${siteConfig.url}/knowledge-center`,
    `${siteConfig.url}/answers/best-erp-for-manufacturing`,
    `${siteConfig.url}/cost/erp-development-cost-india`,
    `${siteConfig.url}/compare/erp-vs-crm`,
    `${siteConfig.url}/locations/india/vadodara`,
  ],
  priority2: [
    ...serviceSlugs.map((s) => `${siteConfig.url}/services/${s}`),
    ...industrySlugs.map((s) => `${siteConfig.url}/industries/${s}`),
    ...compareSlugs.slice(0, 15).map((s) => `${siteConfig.url}/compare/${s}`),
    ...costSlugs.slice(0, 15).map((s) => `${siteConfig.url}/cost/${s}`),
    ...answerSlugs.map((s) => `${siteConfig.url}/answers/${s}`),
    `${siteConfig.url}/research`,
    `${siteConfig.url}/guides`,
    `${siteConfig.url}/reports`,
  ],
  priority3: [
    `${siteConfig.url}/eeat-audit`,
    `${siteConfig.url}/founder-insights`,
    `${siteConfig.url}/citation-guides`,
    `${siteConfig.url}/project-gallery`,
    `${siteConfig.url}/videos`,
    ...toolSlugs.slice(-3).map((s) => `${siteConfig.url}/tools/${s}`),
  ],
};

export const indexingFixes = {
  critical: [
    "Set maxwellelectrodeal.com as primary domain in Vercel (remove apex→www redirect)",
    "Deploy vercel.json + proxy.ts www→apex 301 redirects",
    "Resubmit sitemap.xml in Google Search Console after deploy",
    "Validate canonical with URL Inspection on apex homepage",
  ],
  highImpact: [
    "Request indexing for Priority 1 URLs after canonical fix",
    "Monitor ‘Duplicate, Google chose different canonical’ report for 2 weeks",
    "Add 2–3 contextual answer links per top service page FAQ blocks",
  ],
  optional: [
    "Expand Maxwell Answers by 10 pages from sales discovery",
    "Refresh compare/cost pages with dated statistics quarterly",
    "Add author sameAs LinkedIn URLs for Person schema",
  ],
};
