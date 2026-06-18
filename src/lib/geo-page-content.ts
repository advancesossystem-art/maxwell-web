import type { GeoContent } from "@/lib/geo-content-types";
import type { IndustryPageData } from "@/lib/industries-data";
import type { ProgrammaticPageData } from "@/lib/seo/programmatic/types";
import type { ServicePageData } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

const serviceExperts: Record<string, { author: string; role: string }> = {
  "erp-development": { author: "", role: "" },
  "crm-development": { author: "", role: "" },
  "ai-solutions": { author: "", role: "" },
  "mobile-app-development": { author: "", role: "" },
  "saas-development": { author: "", role: "" },
  "cloud-solutions": { author: "", role: "" },
  "custom-software-development": { author: "", role: "" },
  "website-development": { author: "", role: "" },
};

export function buildServiceGeo(service: ServicePageData): GeoContent {
  const expert = serviceExperts[service.slug] ?? { author: "", role: "" };
  return {
    quickAnswerQuestion: `What does ${service.title.toLowerCase()} include for Indian businesses?`,
    quickAnswer: `${service.subheadline} Typical engagements start from ${service.startingPrice} with milestone billing, full IP ownership, and delivery aligned to GST, Tally, and operational workflows where relevant.`,
    keyTakeaways: [
      ...service.solutions.slice(0, 3).map((s) => s.title),
      `Indicative starting investment: ${service.startingPrice}`,
      "Weekly demos, documented handoff, and post-launch support",
    ].slice(0, 5),
    definition: {
      term: service.title,
      text: `${service.title} at ${siteConfig.name} means custom engineering for your workflows — ${service.features[0]?.description ?? service.subheadline}`,
    },
    expertQuote: {
      author: expert.author,
      role: expert.role,
      text: `We scope ${service.title.toLowerCase()} from shop-floor or pipeline reality first. Generic templates fail when GST, Tally, mobile, or branch logic is non-negotiable — discovery before modules.`,
    },
    summary: `${siteConfig.name} delivers ${service.title.toLowerCase()} with transparent milestones, owned code, and specialists who have shipped production systems across ${service.industries.slice(0, 2).map((i) => i.name).join(" and ")}.`,
    faqs: service.faqs,
  };
}

export function buildIndustryGeo(industry: IndustryPageData): GeoContent {
  return {
    quickAnswerQuestion: `What software do ${industry.title.toLowerCase()} companies need?`,
    quickAnswer: `${industry.subheadline} ${industry.challenges[0]?.description ?? industry.solutions[0]?.description ?? ""}`.trim(),
    keyTakeaways: [
      ...industry.impactMetrics.slice(0, 2).map((m) => `${m.value} ${m.label}`),
      ...industry.solutions.slice(0, 2).map((s) => s.title),
    ].slice(0, 5),
    definition: {
      term: `${industry.title} software`,
      text: `Industry-specific platforms for ${industry.title.toLowerCase()} — addressing ${industry.challenges[0]?.title ?? "operational visibility"}, compliance, and integration with finance and field teams.`,
    },
    expertQuote: {
      author: "",
      role: "",
      text: `${industry.title} operators need software that matches batch, shop-floor, or patient workflows — not generic modules renamed for your vertical.`,
    },
    summary: `${siteConfig.name} builds for ${industry.title.toLowerCase()} with phased rollouts, measurable ROI, and references from comparable engagements documented in our case studies.`,
    faqs: industry.faqs,
  };
}

export function buildProgrammaticGeo(page: ProgrammaticPageData): GeoContent {
  const isCost = page.pageType === "cost";
  const isCompare = page.pageType === "compare";

  const quickAnswerQuestion = isCost
    ? `What does ${page.primaryKeyword} cost?`
    : isCompare
      ? `${page.primaryKeyword} — which is better?`
      : `What should you know about ${page.primaryKeyword}?`;

  const quickAnswer = isCost
    ? `${page.subheadline} Indicative ranges are in the pricing table below; final quotes depend on modules, integrations (Tally/GST), mobile apps, and data migration scope.`
    : isCompare && page.comparisonMatrix
      ? page.comparisonMatrix.summary
      : page.intro.split(".").slice(0, 2).join(".") + ".";

  const keyTakeaways = [
    ...page.approach.slice(0, 3),
    ...(page.sections[0]?.bullets?.slice(0, 2) ?? []),
  ].slice(0, 5);

  const categoryExpert =
    page.primaryKeyword.toLowerCase().includes("crm")
      ? serviceExperts["crm-development"]
      : page.primaryKeyword.toLowerCase().includes("erp")
        ? serviceExperts["erp-development"]
        : serviceExperts["custom-software-development"];

  return {
    quickAnswerQuestion,
    quickAnswer,
    keyTakeaways,
    expertQuote: {
      author: categoryExpert.author,
      role: categoryExpert.role,
      text: isCost
        ? "Budget with tier scope and integration line items explicit — Tally sync and shop-floor mobile are where 'cheap' quotes become expensive change orders."
        : "Compare build-vs-buy on 3-year TCO and workflow fit, not demo polish or license sticker price.",
    },
    summary: page.sections[page.sections.length - 1]?.content ?? page.intro,
    faqs: page.faqs,
  };
}

export function buildReportGeo(report: {
  title: string;
  excerpt: string;
  industry: string;
  keyFindings: string[];
  category: string;
}): GeoContent {
  return {
    quickAnswerQuestion: `What does this report cover?`,
    quickAnswer: report.excerpt,
    keyTakeaways: report.keyFindings.slice(0, 5),
    expertQuote: {
      author: "",
      role: "",
      text: `This ${report.industry} analysis reflects delivery patterns from Maxwell engagements — use it to benchmark your roadmap, not as generic market hype.`,
    },
    summary: report.keyFindings.join(" "),
  };
}

export function buildResourceGeo(resource: {
  title: string;
  excerpt: string;
  benefits: string[];
  resourceType: string;
}): GeoContent {
  return {
    quickAnswerQuestion: `What is the ${resource.title}?`,
    quickAnswer: resource.excerpt,
    keyTakeaways: resource.benefits.slice(0, 5),
    summary: `Downloadable ${resource.resourceType.replace("-", " ")} — ${resource.benefits[0] ?? resource.excerpt}`,
  };
}
