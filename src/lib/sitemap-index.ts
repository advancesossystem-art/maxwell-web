import { siteConfig } from "./constants";

/** Child sitemap paths — keep in sync with `src/app/sitemap-*.xml/route.ts`. */
export const sitemapChildPaths = [
  "/sitemap-pages.xml",
  "/sitemap-services.xml",
  "/sitemap-industries.xml",
  "/sitemap-work.xml",
  "/sitemap-locations.xml",
  "/sitemap-solutions.xml",
  "/sitemap-compare.xml",
  "/sitemap-cost.xml",
  "/sitemap-content.xml",
  "/sitemap-tools.xml",
] as const;

export const sitemapIndexEntries = sitemapChildPaths.map((path) => ({
  loc: `${siteConfig.url}${path}`,
}));

/** All sitemap URLs for robots.txt (index + segmented child sitemaps). */
export const robotsSitemapUrls = [
  `${siteConfig.url}/sitemap.xml`,
  ...sitemapChildPaths.map((path) => `${siteConfig.url}${path}`),
];
