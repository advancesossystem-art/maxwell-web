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
  { source: "/services/software-development", destination: "/services/custom-software-development" },
  { source: "/services/web-development", destination: "/services/website-development" },
  { source: "/services/ai-development", destination: "/services/ai-solutions" },
  { source: "/services/software-development-mumbai", destination: "/locations/india/mumbai" },
  { source: "/services/software-development-delhi", destination: "/locations/india/delhi" },
  { source: "/services/software-development-bangalore", destination: "/locations/india/bengaluru" },
  { source: "/services/software-development-hyderabad", destination: "/locations/india/hyderabad" },
  { source: "/services/software-development-pune", destination: "/locations/india/pune" },
  { source: "/case-studies/crm-implementation", destination: "/case-studies/retail-analytics" },
  { source: "/case-studies/textile-management-system", destination: "/case-studies/manufacturing-erp" },
  { source: "/case-studies/business-automation", destination: "/case-studies/saas-workforce-management" },
  { source: "/resources/erp-buyer-guide", destination: "/resources/erp-readiness-checklist" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/terms", destination: "/terms-of-service" },
  { source: "/web-development-company-usa", destination: "/solutions/web-development-company-usa" },
  { source: "/web-development-company-uae", destination: "/solutions/web-development-company-uae" },
  { source: "/mobile-app-development-usa", destination: "/solutions/mobile-app-development-company-usa" },
  { source: "/mobile-app-development-uae", destination: "/solutions/mobile-app-development-company-uae" },
  { source: "/custom-software-development-usa", destination: "/solutions/custom-software-development-company-usa" },
  { source: "/custom-software-development-uae", destination: "/solutions/custom-software-development-company-uae" },
  { source: "/custom-software-development-uk", destination: "/solutions/custom-software-development-company" },
  { source: "/software-development-company", destination: "/solutions/software-development-company" },
  { source: "/erp-development-company", destination: "/solutions/erp-development-company" },
  { source: "/crm-development-company", destination: "/solutions/crm-development-company" },
  { source: "/website-development-company", destination: "/solutions/website-development-company" },
  { source: "/web-development-company", destination: "/solutions/website-development-company" },
  { source: "/mobile-app-development-company", destination: "/solutions/mobile-app-development-company" },
  { source: "/ai-development-company", destination: "/solutions/ai-development-company" },
  { source: "/digital-transformation-company", destination: "/solutions/digital-transformation-company" },
  { source: "/it-consulting-company", destination: "/solutions/it-consulting-company" },
  { source: "/business-automation-services", destination: "/solutions/business-automation-services" },
  { source: "/software-development-company-india", destination: "/solutions/software-development-company-india" },
  { source: "/software-development-company-vadodara", destination: "/solutions/software-development-company-vadodara" },
  { source: "/software-development-company-gujarat", destination: "/solutions/software-development-company-gujarat" },
  { source: "/erp-development-company-vadodara", destination: "/solutions/erp-development-company-vadodara" },
  { source: "/erp-development-company-gujarat", destination: "/solutions/erp-development-company-gujarat" },
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
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)\\.(ico|jpg|jpeg|png|gif|webp|svg|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return withTrailingSlashVariants(permanentRedirects);
  },
};

export default nextConfig;
