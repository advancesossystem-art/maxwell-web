import type { MetadataRoute } from "next";
import { robotsSitemapUrls } from "@/lib/sitemap-index";

/**
 * Crawl-budget hygiene: block thin noindex programmatic matrices so Googlebot
 * stops fetching pages it will only drop, freeing budget for real pages.
 * Google honors more-specific Allow rules, so GIDC estate pages are explicitly re-allowed.
 */
const crawlWasteDisallow = [
  "/api/",
  "/admin/",
  "/thank-you",
  // Industry × service matrix — all noindex
  "/industries/*/*/",
  "/industries/*/*",
  // City × service matrix — noindex
  "/locations/india/*/*/",
  "/locations/india/*/*",
  // Programmatic dynamic solutions — all noindex (hand-written ones are in their own folders)
  "/solutions/erp-",
  "/solutions/crm-",
  "/solutions/saas-",
  "/solutions/ai-",
  "/solutions/mobile-",
  "/solutions/cloud-",
  "/solutions/digital-",
  "/solutions/it-",
  "/solutions/business-",
  "/solutions/software-",
  "/solutions/custom-",
  // Thin cost pages — all noindex (hand-written ones are in their own folders)
  "/cost/mobile-",
  "/cost/crm-",
  "/cost/erp-",
  "/cost/custom-software-",
  "/cost/ai-",
  "/cost/saas-",
];

const crawlWasteAllow = [
  "/",
  // GIDC estate cluster (would otherwise match /locations/india/*/* disallow)
  "/locations/india/gujarat/gidc",
  "/locations/india/gujarat/makarpura-gidc",
  "/locations/india/gujarat/savli-gidc",
  "/locations/india/gujarat/nandesari-gidc",
  "/locations/india/gujarat/halol-gidc",
  "/locations/india/gujarat/ankleshwar-gidc",
  "/locations/india/gujarat/vatva-gidc",
  "/locations/india/gujarat/waghodia-gidc",
  "/locations/india/gujarat/por-gidc",
  // City pages with real GSC traffic
  "/locations/india/ahmedabad",
  "/locations/india/hyderabad",
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
