import type { MetadataRoute } from "next";
import { robotsSitemapUrls } from "@/lib/sitemap-index";
import { erpCompareNoIndexSlugs } from "@/lib/seo/seo-waste-decisions";

/**
 * Crawl-budget hygiene: block thin noindex programmatic matrices so Googlebot
 * stops fetching pages it will only drop, freeing budget for real pages.
 * Google honors more-specific Allow rules, so the two indexable city×service
 * pages are explicitly re-allowed.
 */
const crawlWasteDisallow = [
  "/api/",
  "/admin/",
  "/thank-you",
  // Industry × service matrix — all noindex
  "/industries/*/*/",
  "/industries/*/*",
  // City × service matrix — noindex except explicit allows below
  "/locations/india/*/*/",
  "/locations/india/*/*",
  // ERP comparison demotion — noindex pages still crawlable without disallow
  "/compare/best-erp-for-",
  ...erpCompareNoIndexSlugs.map((slug) => `/compare/${slug}`),
  // Thin international cost clones (India national + priority web markets stay indexable)
  "/cost/*-cost-canada",
  "/cost/*-cost-australia",
  "/cost/*-cost-singapore",
  "/cost/*-cost-germany",
];

const crawlWasteAllow = [
  "/",
  "/locations/india/surat/custom-software-development",
  "/locations/india/halol/ai-development",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: crawlWasteAllow,
        disallow: crawlWasteDisallow,
      },
      {
        userAgent: "Googlebot",
        allow: crawlWasteAllow,
        disallow: crawlWasteDisallow,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thank-you"],
      },
    ],
    sitemap: robotsSitemapUrls,
  };
}
