/**
 * Ping search engines after deploying new URLs.
 * Run: node scripts/ping-sitemaps.mjs
 *
 * Also submit https://maxwellelectrodeal.com/sitemap.xml in Google Search Console
 * and use URL Inspection → Request indexing for priority service pages.
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://maxwellelectrodeal.com";
const SITEMAP = `${SITE}/sitemap.xml`;

const pingTargets = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

for (const url of pingTargets) {
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    console.log(`${res.status} ${url}`);
  } catch (error) {
    console.error(`Failed ${url}:`, error instanceof Error ? error.message : error);
  }
}

const priorityPaths = [
  "/services/ai-consulting",
  "/services/cybersecurity-services",
  "/services/cloud-services",
  "/services/digital-transformation",
  "/services/managed-it-services",
];

console.log("\nRequest indexing in Google Search Console for:");
for (const path of priorityPaths) {
  console.log(`  ${SITE}${path}`);
}
