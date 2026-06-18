import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import {
  buildLanguageAlternates,
  geoMetaOther,
  homeSeo,
  primaryLocale,
  siteTitleTemplate,
} from "@/lib/seo/config";

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
      .trim();
  }
  return segment || title.trim();
}

/** Page title segment only — root layout `title.template` appends the brand suffix. */
function formatPageTitle(title: string): string {
  const segment = stripBrandSuffix(title);
  // Keep document titles near ~60 chars in SERPs (segment + " | Maxwell Electrodeal").
  const maxSegment = 38;
  if (segment.length <= maxSegment) return segment;
  return `${segment.slice(0, maxSegment - 1).trimEnd()}…`;
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
}): Metadata {
  const pageTitleSegment = title ? formatPageTitle(title) : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageTitleFull = title ? resolveFullTitle(pageTitleSegment) : pageTitleSegment;

  const pageDescription = description ?? siteConfig.description;
  const alternates = buildLanguageAlternates(path);

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
  const pageTitle = homeSeo.title;
  const alternates = buildLanguageAlternates(homeSeo.path);

  return {
    title: { absolute: pageTitle },
    description: homeSeo.description,
    keywords: homeSeo.keywords.join(", "),
    metadataBase: new URL(siteConfig.url),
    alternates,
    applicationName: siteConfig.name,
    openGraph: baseOpenGraph({
      title: pageTitle,
      description: homeSeo.description,
      url: alternates.canonical,
    }),
    twitter: baseTwitter(pageTitle, homeSeo.description),
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
}): Metadata {
  return buildSeoMetadata({
    title: args.title,
    description: args.description,
    path: args.path,
    keywords: args.keywords,
    noIndex: args.noIndex,
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
    description: args.description,
    metadataBase: new URL(siteConfig.url),
    alternates,
    openGraph: baseOpenGraph({
      title: pageTitleFull,
      description: args.description,
      url: alternates.canonical,
      type: "article",
      publishedTime: args.publishedAt,
      modifiedTime: args.updatedAt,
      authors: [args.authorName],
      ogImage: ogImageUrl,
    }),
    twitter: baseTwitter(pageTitleFull, args.description, ogImageUrl),
    robots: args.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: { ...geoMetaOther },
  };
}
