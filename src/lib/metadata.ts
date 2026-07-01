import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import {
  keywordsForCity,
  keywordsForCountry,
  keywordsForIndustry,
  keywordsForService,
  keywordsForSolution,
} from "@/lib/seo/search-keywords";

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords,
  openGraphType = "website",
  publishedTime,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  openGraphType?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  return buildSeoMetadata({
    title,
    description,
    path,
    noIndex,
    keywords,
    openGraphType,
    publishedTime,
  });
}

export function createServiceMetadata(service: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  keywords: string[];
}): Metadata {
  return buildSeoMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [...new Set([...service.keywords, ...keywordsForService(service.slug)])],
  });
}

export function createIndustryMetadata(industry: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  keywords: string[];
  title: string;
}): Metadata {
  return buildSeoMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    keywords: [...new Set([...industry.keywords, ...keywordsForIndustry(industry.slug), industry.title])],
  });
}

export function createProjectMetadata(project: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  title: string;
  industry: string;
  projectType: string;
  technologies: string[];
  noIndex?: boolean;
}): Metadata {
  return buildSeoMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/work/${project.slug}`,
    noIndex: project.noIndex,
    keywords: [
      project.title,
      project.industry,
      project.projectType,
      ...project.technologies,
      "case study",
      "portfolio",
      "India software company",
    ],
    openGraphType: "article",
  });
}

export function createSolutionMetadata(solution: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}): Metadata {
  return buildSeoMetadata({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
    keywords: [
      ...new Set([
        solution.primaryKeyword,
        ...solution.secondaryKeywords,
        ...keywordsForSolution(solution.slug),
      ]),
    ],
  });
}

export function createLocationCountryMetadata(country: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  name: string;
}): Metadata {
  return buildSeoMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/locations/${country.slug}`,
    keywords: keywordsForCountry(country.slug, country.name),
  });
}

export function createLocationCityMetadata(city: {
  metaTitle: string;
  metaDescription: string;
  countrySlug: string;
  citySlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  name: string;
}): Metadata {
  return buildSeoMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/locations/${city.countrySlug}/${city.citySlug}`,
    keywords: keywordsForCity(city.name, city.countrySlug, [
      city.primaryKeyword,
      ...city.secondaryKeywords,
    ]),
  });
}

export function createCaseStudyMetadata(study: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  title: string;
  publishedAt: string;
  clientProfile: { name: string };
  trust: { industry: string };
  technologyStack: string[];
}): Metadata {
  return buildSeoMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
    keywords: [
      study.title,
      study.trust.industry,
      `${study.trust.industry} case study`,
      ...study.technologyStack,
      "case study",
      "enterprise software India",
    ],
    openGraphType: "article",
    publishedTime: study.publishedAt,
  });
}
