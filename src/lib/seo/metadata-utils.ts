import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import {
  buildLanguageAlternates,
  defaultKeywords,
  geoMetaOther,
  globalKeywords,
  homeSeo,
  indiaKeywords,
  primaryLocale,
} from "@/lib/seo/config";

const defaultOgImage = `${siteConfig.url}/opengraph-image`;

function mergeKeywords(extra: string[] = []): string[] {
  const merged = [...extra, ...defaultKeywords];
  return [...new Set(merged)].slice(0, 48);
}

function baseOpenGraph({
  title,
  description,
  url,
  type = "website",
  publishedTime,
  authors,
}: {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}) {
  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: primaryLocale,
    alternateLocale: ["en_US", "en_GB", "en_AE", "en_CA", "en_AU"],
    type,
    ...(publishedTime ? { publishedTime } : {}),
    ...(authors ? { authors } : {}),
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: title }],
  };
}

function baseTwitter(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [defaultOgImage],
  };
}

function formatPageTitle(title: string): string {
  if (title.includes(siteConfig.name)) return title;
  const withBrand = `${title} | ${siteConfig.name}`;
  return withBrand.length > 68 ? title : withBrand;
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
}): Metadata {
  const pageTitle = title ? formatPageTitle(title) : `${siteConfig.name} — ${siteConfig.tagline}`;

  const pageDescription = description ?? siteConfig.description;
  const alternates = buildLanguageAlternates(path);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "technology",
    openGraph: baseOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: alternates.canonical,
      type: openGraphType,
      publishedTime,
      authors,
    }),
    twitter: baseTwitter(pageTitle, pageDescription),
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
    keywords: mergeKeywords(keywords),
    ...(includeIndiaGeo ? { other: { ...geoMetaOther } } : {}),
  };
}

export function createHomeMetadata(): Metadata {
  const pageTitle = homeSeo.title;
  const alternates = buildLanguageAlternates(homeSeo.path);

  return {
    title: pageTitle,
    description: homeSeo.description,
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
    keywords: mergeKeywords([
      ...indiaKeywords,
      ...globalKeywords,
      "software development company",
      "offshore software development",
    ]),
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
  authorName: string;
  tags?: string[];
  noIndex?: boolean;
}): Metadata {
  const pageTitle = formatPageTitle(args.title);
  const alternates = buildLanguageAlternates(args.path);

  return {
    title: pageTitle,
    description: args.description,
    metadataBase: new URL(siteConfig.url),
    alternates,
    openGraph: baseOpenGraph({
      title: pageTitle,
      description: args.description,
      url: alternates.canonical,
      type: "article",
      publishedTime: args.publishedAt,
      authors: [args.authorName],
    }),
    twitter: baseTwitter(pageTitle, args.description),
    robots: args.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    keywords: mergeKeywords(args.tags ?? []),
    other: { ...geoMetaOther },
  };
}
