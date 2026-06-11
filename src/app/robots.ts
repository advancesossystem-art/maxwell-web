import type { MetadataRoute } from "next";
import { robotsSitemapUrls } from "@/lib/sitemap-index";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/portal/", "/thank-you"],
      },
    ],
    sitemap: robotsSitemapUrls,
  };
}
