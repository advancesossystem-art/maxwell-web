import type { NextConfig } from "next";

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

/**
 * Legacy paths Google still discovers. Each entry also gets a trailing-slash
 * variant that jumps straight to the final URL (avoids /old/ → /old → /new chains).
 */
const permanentRedirects: Array<{ source: string; destination: string }> = [
  { source: "/services/software-development", destination: "/services/website-development" },
  { source: "/services/web-development", destination: "/services/website-development" },
  { source: "/services/ai-development", destination: "/services/website-development" },
  { source: "/services/software-development-mumbai", destination: "/solutions/web-development-company-vadodara" },
  { source: "/services/software-development-delhi", destination: "/solutions/web-development-company-vadodara" },
  { source: "/services/software-development-bangalore", destination: "/solutions/web-development-company-vadodara" },
  { source: "/services/software-development-hyderabad", destination: "/solutions/web-development-company-vadodara" },
  { source: "/services/software-development-pune", destination: "/solutions/web-development-company-vadodara" },
  { source: "/case-studies/crm-implementation", destination: "/case-studies/retail-analytics" },
  { source: "/case-studies/textile-management-system", destination: "/case-studies/manufacturing-erp" },
  { source: "/case-studies/business-automation", destination: "/case-studies/saas-workforce-management" },
  { source: "/resources/erp-buyer-guide", destination: "/resources/erp-readiness-checklist" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/terms", destination: "/terms-of-service" },
  { source: "/web-development-company-usa", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/web-development-company-uae", destination: "/solutions/web-development-company-uae" },
  { source: "/mobile-app-development-usa", destination: "/services/website-development" },
  { source: "/mobile-app-development-uae", destination: "/services/website-development" },
  { source: "/custom-software-development-usa", destination: "/services/website-development" },
  { source: "/custom-software-development-uae", destination: "/services/website-development" },
  { source: "/custom-software-development-uk", destination: "/services/website-development" },
  { source: "/software-development-company", destination: "/services/website-development" },
  { source: "/erp-development-company", destination: "/services/website-development" },
  { source: "/crm-development-company", destination: "/services/website-development" },
  { source: "/website-development-company", destination: "/solutions/website-development-company" },
  { source: "/web-development-company", destination: "/solutions/website-development-company" },
  { source: "/mobile-app-development-company", destination: "/services/website-development" },
  { source: "/ai-development-company", destination: "/services/website-development" },
  { source: "/digital-transformation-company", destination: "/services/website-development" },
  { source: "/it-consulting-company", destination: "/services/website-development" },
  { source: "/business-automation-services", destination: "/services/website-development" },
  { source: "/software-development-company-india", destination: "/services/website-development-for-manufacturers" },
  { source: "/software-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/software-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/erp-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/erp-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/vadodara", destination: "/locations/india/vadodara" },
  { source: "/gujarat", destination: "/locations/india/gujarat" },
  { source: "/discovery-call", destination: "/book-consultation" },
  // Soft-404 / legacy paths still appearing in Search Console
  { source: "/portal", destination: "/company" },
  { source: "/founders", destination: "/about" },
  { source: "/founder", destination: "/about" },
  { source: "/team", destination: "/about" },
  { source: "/home", destination: "/" },
  { source: "/login", destination: "/admin/login" },
  { source: "/index.html", destination: "/" },
  // Surgical SEO: consolidate duplicate manufacturer verticals → one canonical per industry
  {
    source: "/services/website-development/chemical-manufacturer",
    destination: "/services/website-development/chemical-manufacturers",
  },
  {
    source: "/services/website-development/engineering-company",
    destination: "/services/website-development/engineering-machinery",
  },
  {
    source: "/services/website-development/machinery-oem",
    destination: "/services/website-development/engineering-machinery",
  },
  {
    source: "/services/website-development/ceramic-manufacturer",
    destination: "/services/website-development/ceramic-exporters",
  },
  {
    source: "/services/website-development/pharmaceutical-company",
    destination: "/services/website-development/pharma-equipment",
  },
  {
    source: "/services/website-development/rajkot-engineering-company",
    destination: "/services/website-development/engineering-machinery",
  },
  // Compare pages removed — redirect to matching blog content
  { source: "/compare", destination: "/blog" },
  { source: "/compare/nextjs-vs-wordpress-business", destination: "/blog/nextjs-vs-wordpress-industrial-website" },
  { source: "/compare/wordpress-vs-custom-website", destination: "/blog/nextjs-vs-wordpress-industrial-website" },
  { source: "/compare/:slug", destination: "/services/website-development-for-manufacturers" },
  // ERP tools removed — redirect to manufacturer website service
  { source: "/tools/erp-roi-calculator", destination: "/services/website-development-for-manufacturers" },
  { source: "/tools/crm-roi-calculator", destination: "/services/website-development-for-manufacturers" },
  { source: "/tools/erp-requirement-generator", destination: "/services/website-development-for-manufacturers" },
  { source: "/tools/crm-requirement-generator", destination: "/services/website-development-for-manufacturers" },
  { source: "/tools/roi-calculator", destination: "/tools/industrial-website-rfq-estimator" },
  { source: "/tools/software-cost-calculator", destination: "/cost/manufacturing-website-cost" },
  { source: "/tools/rfp-builder", destination: "/get-estimate" },
  { source: "/tools/proposal-generator", destination: "/get-estimate" },
  { source: "/tools/vendor-comparison-scorecard", destination: "/services/website-development-for-manufacturers" },
  // Deleted tools only — never catch-all /tools/:slug (that redirected the live estimator to itself)
  { source: "/tools/ai-readiness-assessment", destination: "/tools/industrial-website-rfq-estimator" },
  { source: "/tools/digital-transformation-assessment", destination: "/tools/industrial-website-rfq-estimator" },
  { source: "/tools/project-roadmap", destination: "/get-estimate" },
  { source: "/tools/project-timeline-estimator", destination: "/get-estimate" },
  { source: "/tools/team-size-calculator", destination: "/pricing" },
  { source: "/tools/tech-stack-advisor", destination: "/services/website-development-for-manufacturers" },
  // International solutions removed — redirect to manufacturer service or contact
  { source: "/solutions/web-development-company-india-germany", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/web-development-company-india-uk", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/web-development-company-india-usa", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/web-development-company-india-uae", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/web-development-company-india-turkey", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/web-development-company-india-international", destination: "/services/website-development/manufacturer-export-website" },
  // GSC noindex-validation failures — send leftover pages to live money URLs
  { source: "/solutions/software-development-company-india", destination: "/services/website-development-for-manufacturers" },
  { source: "/solutions/web-development-company-usa", destination: "/services/website-development/manufacturer-export-website" },
  // Removed stub pages
  { source: "/work", destination: "/case-studies" },
  { source: "/work/:slug", destination: "/case-studies" },
  { source: "/resources", destination: "/blog" },
  { source: "/resources/:slug", destination: "/blog" },
  { source: "/guides", destination: "/blog" },
  { source: "/guides/:slug", destination: "/blog" },
  { source: "/reports", destination: "/blog" },
  { source: "/reports/:slug", destination: "/blog" },
  { source: "/answers", destination: "/blog" },
  { source: "/answers/:slug", destination: "/blog" },
  { source: "/authors", destination: "/about" },
  { source: "/authors/:slug", destination: "/about" },
  { source: "/research", destination: "/blog" },
  { source: "/knowledge-center", destination: "/blog" },
  { source: "/citation-guides", destination: "/blog" },
  { source: "/videos", destination: "/case-studies" },
  { source: "/project-gallery", destination: "/case-studies" },
  { source: "/project-calculator", destination: "/tools/industrial-website-rfq-estimator" },
  { source: "/eeat-audit", destination: "/about" },
  { source: "/login", destination: "/contact" },
  { source: "/admin/:path*", destination: "/contact" },
  { source: "/services/custom-software-development", destination: "/services/website-development" },
  { source: "/services/mobile-app-development", destination: "/services/website-development" },
  { source: "/services/erp-development", destination: "/services/website-development" },
  { source: "/services/crm-development", destination: "/services/website-development" },
  { source: "/services/ai-solutions", destination: "/services/website-development" },
  { source: "/services/saas-development", destination: "/services/website-development" },
  { source: "/services/cloud-solutions", destination: "/services/website-development" },
  { source: "/services/web-application-development", destination: "/services/website-development" },
  { source: "/services/ai-automation", destination: "/services/website-development" },
  { source: "/services/ai-consulting", destination: "/services/website-development" },
  { source: "/services/ai-agent-development", destination: "/services/website-development" },
  { source: "/services/generative-ai-development", destination: "/services/website-development" },
  { source: "/services/enterprise-ai-solutions", destination: "/services/website-development" },
  { source: "/services/cloud-services", destination: "/services/website-development" },
  { source: "/services/cloud-migration", destination: "/services/website-development" },
  { source: "/services/digital-transformation", destination: "/services/website-development" },
  { source: "/services/cybersecurity", destination: "/services/website-development" },
  { source: "/services/managed-it-services", destination: "/services/website-development" },
  { source: "/locations/india/delhi", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/delhi/:path*", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/noida", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/gurgaon", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/gurugram", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/mumbai", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/pune", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/bengaluru", destination: "/solutions/web-development-company-vadodara" },
  { source: "/locations/india/bangalore", destination: "/solutions/web-development-company-vadodara" },
  { source: "/solutions/erp-development-company", destination: "/services/website-development" },
  { source: "/solutions/crm-development-company", destination: "/services/website-development" },
  { source: "/solutions/software-development-company", destination: "/services/website-development" },
  { source: "/solutions/software-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/solutions/software-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/solutions/erp-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/solutions/erp-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/solutions/:slug(erp-.*)", destination: "/services/website-development" },
  { source: "/solutions/:slug(crm-.*)", destination: "/services/website-development" },
  { source: "/solutions/:slug(ai-.*)", destination: "/services/website-development" },
  { source: "/solutions/:slug(software-.*)", destination: "/services/website-development" },
  { source: "/solutions/:slug(mobile-.*)", destination: "/services/website-development" },
  { source: "/solutions/:slug(saas-.*)", destination: "/services/website-development" },
  { source: "/solutions/digital-transformation-company", destination: "/services/website-development" },
  { source: "/solutions/it-consulting-company", destination: "/services/website-development" },
  { source: "/solutions/mobile-app-development-company", destination: "/services/website-development" },
  { source: "/solutions/business-automation-services", destination: "/services/website-development" },
  { source: "/solutions/custom-software-development-company", destination: "/services/website-development" },
  { source: "/solutions/custom-software-development-company-usa", destination: "/services/website-development" },
  { source: "/solutions/custom-software-development-company-uae", destination: "/services/website-development" },
  { source: "/solutions/mobile-app-development-company-usa", destination: "/services/website-development" },
  { source: "/solutions/mobile-app-development-company-uae", destination: "/services/website-development" },
  { source: "/solutions/web-development-company-uae", destination: "/services/website-development/manufacturer-export-website" },
  { source: "/solutions/website-designing-company-vadodara", destination: "/solutions/web-design-company-vadodara" },
  { source: "/solutions/web-design-company-india", destination: "/services/web-design" },
  { source: "/solutions/seo-services-india", destination: "/services/website-seo" },
  { source: "/solutions/website-amc-india", destination: "/services/website-maintenance" },
];

function withTrailingSlashVariants(rules: Array<{ source: string; destination: string }>): Redirect[] {
  const out: Redirect[] = [];
  for (const rule of rules) {
    out.push({ source: rule.source, destination: rule.destination, permanent: true });
    if (!rule.source.endsWith("/")) {
      out.push({
        source: `${rule.source}/`,
        destination: rule.destination,
        permanent: true,
      });
    }
  }
  return out;
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["animejs", "lenis"],
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        ],
      },
      {
        source: "/thank-you",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/thank-you/",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      // Only hash-immutable static caching in production. In dev, do not set
      // Cache-Control on /_next/static — Turbopack may reuse chunk paths; long
      // immutable max-age causes stale client modules / hydration mismatch.
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source: "/(.*)\\.(ico|jpg|jpeg|png|gif|webp|svg|woff|woff2)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : []),
    ];
  },
  async redirects() {
    return withTrailingSlashVariants(permanentRedirects);
  },
};

export default nextConfig;
