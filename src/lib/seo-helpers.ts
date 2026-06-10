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
  authorName,
  tags = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  authorName: string;
  tags?: string[];
  noIndex?: boolean;
}): Metadata {
  return buildArticleSeoMetadata({
    title,
    description,
    path,
    publishedAt,
    authorName,
    tags,
    noIndex,
  });
}

export function buildSitemapXml(entries: { url: string; lastModified?: Date; priority?: number }[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${(e.lastModified ?? new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
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
