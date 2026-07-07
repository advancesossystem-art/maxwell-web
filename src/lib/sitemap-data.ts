import { siteConfig } from "./constants";
import { serviceSlugs } from "./services-data";
import { industrySlugs } from "./industries-data";
import { phase8IndustrySlugs } from "./phase8/phase8-industries-data";
import { phase8ServiceSlugs } from "./phase8/phase8-services-data";
import { getIndexableProjectSlugs } from "./projects-data";
import { caseStudySlugs } from "./case-studies-data";
import { getLocationStaticParams } from "./locations-data";
import { solutionSlugs } from "./solutions-data";
import { getIndexableArticleSlugs } from "./content/articles";
import { guideSlugs } from "./content/guides";
import { resourceSlugs } from "./content/resources";
import { reportSlugs } from "./content/reports";
import { answerSlugs } from "./answers-data";
import { resourceCenterSlugs } from "./resource-centers-data";
import { toolSlugs } from "./tools/registry";
import { compareSlugs, costSlugs, getIndexableCityServicePages } from "./seo/programmatic/build-pages";

/** Phase 8 launch — use for lastmod on new service/industry URLs to speed discovery. */
const PHASE8_LAUNCH = new Date("2026-06-18T00:00:00.000Z");

const phase8ServiceSet = new Set<string>(phase8ServiceSlugs);
const phase8IndustrySet = new Set<string>(phase8IndustrySlugs);

/** Hub routes listed in segment sitemaps — omit here to avoid cross-sitemap duplicates. */
const staticPages = [
  "",
  "/videos",
  "/about",
  "/company",
  "/process",
  "/careers",
  "/why-maxwell",
  "/engagement-models",
  "/reviews",
  "/security",
  "/contact",
  "/get-estimate",
  "/project-calculator",
  "/book-consultation",
  "/book-consultation",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/disclaimer",
  "/data-processing",
];

export function getPagesSitemapEntries() {
  return staticPages.map((route) => {
    let priority = 0.8;
    if (route === "") priority = 1;
    else if (route === "/contact" || route === "/get-estimate") priority = 0.95;
    else if (route === "/locations" || route === "/services") priority = 0.92;
    return { url: `${siteConfig.url}${route}`, priority };
  });
}

/** Manufacturer website pages launched July 2026 */
const MANUFACTURER_LAUNCH = new Date("2026-07-01T00:00:00.000Z");
const PHASE3_LAUNCH = new Date("2026-07-04T00:00:00.000Z");
const PHASE4_LAUNCH = new Date("2026-07-04T00:00:00.000Z");

const manufacturerServicePages = [
  "/services/website-development-for-manufacturers",
  "/services/website-development/chemical-manufacturer",
  "/services/website-development/pharmaceutical-company",
  "/services/website-development/engineering-company",
  "/services/website-development/textile-manufacturer",
  "/services/website-development/ceramic-manufacturer",
];

const phase3IndustryPages = [
  "/services/website-development/food-processing-company",
  "/services/website-development/auto-parts-manufacturer",
  "/services/website-development/paint-coating-company",
  "/services/website-development/plastic-manufacturer",
  "/services/website-development/exporter-india",
];

const phase3LocationPages = [
  "/services/website-development/bharuch-ankleshwar-chemical",
  "/services/website-development/surat-textile-manufacturer",
  "/services/website-development/rajkot-engineering-company",
  "/services/website-development/morbi-ceramic-website",
  "/services/website-development/msme-india",
];

const phase4ServicePages = ["/services/website-development/manufacturer-export-website"];

export function getServicesSitemapEntries() {
  return [
    { url: `${siteConfig.url}/services`, priority: 0.9, changeFreq: "weekly" as const },
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      priority: phase8ServiceSet.has(slug) ? 0.9 : 0.85,
      lastModified: phase8ServiceSet.has(slug) ? PHASE8_LAUNCH : undefined,
      changeFreq: phase8ServiceSet.has(slug) ? ("weekly" as const) : ("monthly" as const),
    })),
    ...manufacturerServicePages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      priority: 0.92,
      lastModified: MANUFACTURER_LAUNCH,
      changeFreq: "monthly" as const,
    })),
    ...phase3IndustryPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      priority: 0.92,
      lastModified: PHASE3_LAUNCH,
      changeFreq: "monthly" as const,
    })),
    ...phase3LocationPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      priority: 0.90,
      lastModified: PHASE3_LAUNCH,
      changeFreq: "monthly" as const,
    })),
    ...phase4ServicePages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      priority: 0.9,
      lastModified: PHASE4_LAUNCH,
      changeFreq: "monthly" as const,
    })),
  ];
}

export function getIndustriesSitemapEntries() {
  return [
    { url: `${siteConfig.url}/industries`, priority: 0.9, changeFreq: "weekly" as const },
    ...industrySlugs.map((slug) => ({
      url: `${siteConfig.url}/industries/${slug}`,
      priority: phase8IndustrySet.has(slug) ? 0.9 : 0.85,
      lastModified: phase8IndustrySet.has(slug) ? PHASE8_LAUNCH : undefined,
      changeFreq: phase8IndustrySet.has(slug) ? ("weekly" as const) : ("monthly" as const),
    })),
  ];
}

export function getWorkSitemapEntries() {
  return [
    { url: `${siteConfig.url}/work`, priority: 0.8 },
    ...getIndexableProjectSlugs().map((slug) => ({
      url: `${siteConfig.url}/work/${slug}`,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/case-studies`, priority: 0.85 },
    ...caseStudySlugs.map((slug) => ({
      url: `${siteConfig.url}/case-studies/${slug}`,
      priority: 0.85,
    })),
    {
      url: `${siteConfig.url}/case-studies/drashti-chemicals`,
      priority: 0.9,
      lastModified: MANUFACTURER_LAUNCH,
      changeFreq: "monthly" as const,
    },
  ];
}

export function getLocationsSitemapEntries() {
  const entries = [{ url: `${siteConfig.url}/locations`, priority: 0.92 }];

  getLocationStaticParams().forEach((p) => {
    if (p.city) {
      const isVadodara = p.country === "india" && p.city === "vadodara";
      entries.push({
        url: `${siteConfig.url}/locations/${p.country}/${p.city}`,
        priority: isVadodara ? 0.95 : p.country === "india" ? 0.91 : 0.82,
        ...(isVadodara
          ? { lastModified: MANUFACTURER_LAUNCH, changeFreq: "monthly" as const }
          : {}),
      });
    } else {
      entries.push({
        url: `${siteConfig.url}/locations/${p.country}`,
        priority: p.country === "india" ? 0.95 : 0.84,
      });
    }
  });

  getIndexableCityServicePages().forEach((page) => {
    entries.push({
      url: `${siteConfig.url}${page.path}`,
      priority: 0.85,
    });
  });

  return entries;
}

export function getSolutionsSitemapEntries() {
  const phase4SolutionEntries = [
    { path: "/solutions/web-development-company-india-international", priority: 0.92 },
    { path: "/solutions/web-development-company-india", priority: 0.9 },
    { path: "/solutions/web-development-company-gujarat", priority: 0.9 },
    { path: "/solutions/web-development-company-vadodara", priority: 0.92 },
    { path: "/solutions/web-development-company-india-usa", priority: 0.88 },
    { path: "/solutions/web-development-company-india-uae", priority: 0.88 },
    { path: "/solutions/web-development-company-india-uk", priority: 0.88 },
    { path: "/solutions/web-development-company-india-germany", priority: 0.87 },
    { path: "/solutions/web-development-company-india-turkey", priority: 0.85 },
  ] as const;

  return [
    { url: `${siteConfig.url}/solutions`, priority: 0.88 },
    ...solutionSlugs.map((slug) => ({
      url: `${siteConfig.url}/solutions/${slug}`,
      priority: 0.88,
    })),
    ...phase4SolutionEntries.map((entry) => ({
      url: `${siteConfig.url}${entry.path}`,
      priority: entry.priority,
      lastModified: PHASE4_LAUNCH,
      changeFreq: "monthly" as const,
    })),
  ];
}

export function getToolsSitemapEntries() {
  return [
    { url: `${siteConfig.url}/tools`, priority: 0.9 },
    ...toolSlugs.map((slug) => ({ url: `${siteConfig.url}/tools/${slug}`, priority: 0.88 })),
  ];
}

export function getContentSitemapEntries() {
  const entries = [
    { url: `${siteConfig.url}/blog`, priority: 0.85 },
    { url: `${siteConfig.url}/resources`, priority: 0.84 },
    { url: `${siteConfig.url}/guides`, priority: 0.86 },
    { url: `${siteConfig.url}/reports`, priority: 0.84 },
    { url: `${siteConfig.url}/research`, priority: 0.86 },
    { url: `${siteConfig.url}/knowledge-center`, priority: 0.9 },
    { url: `${siteConfig.url}/answers`, priority: 0.88 },
    { url: `${siteConfig.url}/citation-guides`, priority: 0.85 },
    ...getIndexableArticleSlugs().map((slug) => ({ url: `${siteConfig.url}/blog/${slug}`, priority: 0.8 })),
    ...guideSlugs.map((slug) => ({ url: `${siteConfig.url}/guides/${slug}`, priority: 0.82 })),
    ...resourceSlugs.map((slug) => ({ url: `${siteConfig.url}/resources/${slug}`, priority: 0.81 })),
    ...reportSlugs.map((slug) => ({ url: `${siteConfig.url}/reports/${slug}`, priority: 0.83 })),
    ...answerSlugs.map((slug) => ({ url: `${siteConfig.url}/answers/${slug}`, priority: 0.87 })),
    ...resourceCenterSlugs.map((slug) => ({
      url: `${siteConfig.url}/resource-centers/${slug}`,
      priority: 0.84,
    })),
  ];
  return entries;
}

export function getCompareSitemapEntries() {
  return [
    { url: `${siteConfig.url}/compare`, priority: 0.87 },
    ...compareSlugs.map((slug) => ({
      url: `${siteConfig.url}/compare/${slug}`,
      priority: 0.84,
    })),
  ];
}

export function getCostSitemapEntries() {
  return [
    { url: `${siteConfig.url}/cost`, priority: 0.9 },
    ...costSlugs.map((slug) => ({
      url: `${siteConfig.url}/cost/${slug}`,
      priority: 0.86,
    })),
  ];
}
