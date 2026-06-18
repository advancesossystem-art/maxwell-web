import type { Metadata } from "next";
import {
  buildArticleSeoMetadata,
  buildPageSeoMetadata,
} from "@/lib/seo/metadata-utils";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  return buildPageSeoMetadata({ title, description, path, keywords, noIndex });
}

export function buildArticleMetadata({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  authorName,
  tags = [],
  noIndex = false,
  ogImage,
}: {
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
  return buildArticleSeoMetadata({
    title,
    description,
    path,
    publishedAt,
    updatedAt,
    authorName,
    tags,
    noIndex,
    ogImage,
  });
}

const buildDate = new Date().toISOString();

function resolveLastMod(entry: {
  lastModified?: Date;
  updatedAt?: string;
  publishedAt?: string;
}): string {
  if (entry.lastModified) return entry.lastModified.toISOString();
  const dateStr = entry.updatedAt ?? entry.publishedAt ?? buildDate;
  return new Date(dateStr).toISOString();
}

export function buildSitemapXml(
  entries: {
    url: string;
    lastModified?: Date;
    updatedAt?: string;
    publishedAt?: string;
    priority?: number;
    changeFreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[],
): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${resolveLastMod(e)}</lastmod>
    <changefreq>${e.changeFreq ?? "monthly"}</changefreq>
    <priority>${e.priority ?? 0.8}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function buildSitemapIndexXml(sitemaps: { loc: string; lastmod?: Date }[]): string {
  const entries = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${(s.lastmod ?? new Date()).toISOString()}</lastmod>
  </sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}
