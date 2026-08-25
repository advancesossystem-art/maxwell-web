import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import {
  buildLanguageAlternates,
  geoMetaOther,
  homeSeo,
  primaryLocale,
  siteTitleTemplate,
} from "@/lib/seo/config";
import { buildPageCanonicalAlternates } from "@/lib/seo/keyword-canonical";

const defaultOgImage = `${siteConfig.url}/opengraph-image`;

function baseOpenGraph({
  title,
  description,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  ogImage,
}: {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  ogImage?: string;
}) {
  const imageUrl = ogImage ?? defaultOgImage;
  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: primaryLocale,
    type,
    ...(publishedTime ? { publishedTime } : {}),
    ...(modifiedTime ? { modifiedTime } : {}),
    ...(authors ? { authors } : {}),
    images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
  };
}

function baseTwitter(title: string, description: string, ogImage?: string) {
  const imageUrl = ogImage ?? defaultOgImage;
  return {
    card: "summary_large_image" as const,
    title,
    description,
    site: "@MaxwellElectrodeal",
    creator: "@MaxwellElectrodeal",
    images: [{ url: imageUrl, alt: title }],
  };
}

/** Strip brand suffixes so layout `title.template` does not duplicate Maxwell. */
function stripBrandSuffix(title: string): string {
  let segment = title.trim();
  let prev = "";
  while (segment !== prev) {
    prev = segment;
    segment = segment
      .replace(/\s*\|\s*Maxwell Electrodeal(?:\s*[–-]\s*[^|]+)?$/i, "")
      .replace(/\s*\|\s*Maxwell\s*$/i, "")
      .replace(/\s*—\s*Maxwell Electrodeal$/i, "")
      .replace(/\s*—\s*Maxwell\s*$/i, "")
      .trim();
  }
  return segment || title.trim();
}

/** Truncate on a word boundary so money keywords are not mid-cut in SERPs. */
function truncateAtWord(text: string, maxLength: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  const slice = trimmed.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const base = lastSpace > maxLength * 0.55 ? slice.slice(0, lastSpace) : slice.trimEnd();
  return `${base.replace(/[|,–—:\-]+$/, "").trim()}…`;
}

const SERP_TITLE_MAX = 60;
const SERP_DESC_MAX = 155;
const BRAND_SUFFIX = "| Maxwell";

/** Page title segment only — root layout `title.template` appends the brand suffix. */
function formatPageTitle(title: string): string {
  const segment = stripBrandSuffix(title);
  // ~58 char full SERP with " | Maxwell Electrodeal" (~22 chars).
  const maxSegment = 38;
  return truncateAtWord(segment, maxSegment);
}

/**
 * Absolute SERP title for money pages.
 * Always keeps `| Maxwell` within 60 characters (world-class SERP packaging).
 */
function formatAbsoluteTitle(title: string): string {
  const core = stripBrandSuffix(title);
  const budget = SERP_TITLE_MAX - BRAND_SUFFIX.length - 1;
  const head = truncateAtWord(core, budget).replace(/…$/, "").trim();
  const full = `${head} ${BRAND_SUFFIX}`;
  return full.length <= SERP_TITLE_MAX ? full : truncateAtWord(full, SERP_TITLE_MAX);
}

/** Meta description capped for SERP snippets without mid-word cuts. */
function formatMetaDescription(description: string): string {
  return truncateAtWord(description.trim(), SERP_DESC_MAX);
}

/** Full resolved title for Open Graph / Twitter (template is not applied there). */
function resolveFullTitle(segment: string): string {
  return siteTitleTemplate.replace("%s", segment);
}

export function buildSeoMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  includeIndiaGeo = true,
  openGraphType = "website",
  publishedTime,
  authors,
  ogImage,
  absoluteTitle = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  includeIndiaGeo?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  ogImage?: string;
  /** Use full crafted title in SERPs (avoids 38-char segment truncation). */
  absoluteTitle?: boolean;
}): Metadata {
  const pageTitleSegment = title
    ? absoluteTitle
      ? { absolute: formatAbsoluteTitle(title) }
      : formatPageTitle(title)
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageTitleFull =
    title && absoluteTitle
      ? formatAbsoluteTitle(title)
      : title && typeof pageTitleSegment === "string"
        ? resolveFullTitle(pageTitleSegment)
        : typeof pageTitleSegment === "string"
          ? pageTitleSegment
          : `${siteConfig.name} — ${siteConfig.tagline}`;

  const pageDescription = formatMetaDescription(description ?? siteConfig.description);
  const alternates = buildPageCanonicalAlternates(path);

  return {
    title: pageTitleSegment,
    description: pageDescription,
    ...(keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
    metadataBase: new URL(siteConfig.url),
    alternates,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "technology",
    openGraph: baseOpenGraph({
      title: pageTitleFull,
      description: pageDescription,
      url: alternates.canonical,
      type: openGraphType,
      publishedTime,
      authors,
      ogImage,
    }),
    twitter: baseTwitter(pageTitleFull, pageDescription, ogImage),
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    ...(includeIndiaGeo ? { other: { ...geoMetaOther } } : {}),
  };
}

export function createHomeMetadata(): Metadata {
  const pageTitle = formatAbsoluteTitle(homeSeo.title);
  const pageDescription = formatMetaDescription(homeSeo.description);
  const alternates = buildLanguageAlternates(homeSeo.path);

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: homeSeo.keywords.join(", "),
    metadataBase: new URL(siteConfig.url),
    alternates,
    applicationName: siteConfig.name,
    openGraph: baseOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: alternates.canonical,
    }),
    twitter: baseTwitter(pageTitle, pageDescription),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: { ...geoMetaOther },
  };
}

export function buildPageSeoMetadata(args: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  return buildSeoMetadata({
    title: args.title,
    description: args.description,
    path: args.path,
    keywords: args.keywords,
    noIndex: args.noIndex,
    absoluteTitle: args.absoluteTitle,
  });
}

export function buildArticleSeoMetadata(args: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  tags?: string[];
  noIndex?: boolean;
  ogImage?: string;
}): Metadata {
  const pageTitleSegment = formatPageTitle(args.title);
  const pageTitleFull = resolveFullTitle(pageTitleSegment);
  const alternates = buildLanguageAlternates(args.path);
  const ogImageUrl = args.ogImage
    ? args.ogImage.startsWith("http")
      ? args.ogImage
      : `${siteConfig.url}${args.ogImage.startsWith("/") ? "" : "/"}${args.ogImage}`
    : undefined;

  return {
    title: pageTitleSegment,
    description: formatMetaDescription(args.description),
    metadataBase: new URL(siteConfig.url),
    alternates,
    openGraph: baseOpenGraph({
      title: pageTitleFull,
      description: formatMetaDescription(args.description),
      url: alternates.canonical,
      type: "article",
      publishedTime: args.publishedAt,
      modifiedTime: args.updatedAt,
      authors: [args.authorName],
      ogImage: ogImageUrl,
    }),
    twitter: baseTwitter(pageTitleFull, formatMetaDescription(args.description), ogImageUrl),
    robots: args.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: { ...geoMetaOther },
  };
}
