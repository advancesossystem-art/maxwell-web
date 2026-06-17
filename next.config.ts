import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["animejs", "lenis"],
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/software-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      { source: "/services/web-development", destination: "/services/website-development", permanent: true },
      { source: "/services/ai-development", destination: "/services/ai-solutions", permanent: true },
      {
        source: "/services/software-development-mumbai",
        destination: "/locations/india/mumbai",
        permanent: true,
      },
      {
        source: "/services/software-development-delhi",
        destination: "/locations/india/delhi",
        permanent: true,
      },
      {
        source: "/services/software-development-bangalore",
        destination: "/locations/india/bengaluru",
        permanent: true,
      },
      {
        source: "/services/software-development-hyderabad",
        destination: "/locations/india/hyderabad",
        permanent: true,
      },
      {
        source: "/services/software-development-pune",
        destination: "/locations/india/pune",
        permanent: true,
      },
      { source: "/case-studies/crm-implementation", destination: "/case-studies/retail-analytics", permanent: true },
      { source: "/case-studies/textile-management-system", destination: "/case-studies/manufacturing-erp", permanent: true },
      { source: "/case-studies/business-automation", destination: "/case-studies/saas-workforce-management", permanent: true },
      { source: "/resources/erp-buyer-guide", destination: "/resources/erp-readiness-checklist", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/web-development-company-usa", destination: "/solutions/web-development-company-usa", permanent: true },
      { source: "/web-development-company-uae", destination: "/solutions/web-development-company-uae", permanent: true },
      { source: "/mobile-app-development-usa", destination: "/solutions/mobile-app-development-company-usa", permanent: true },
      { source: "/mobile-app-development-uae", destination: "/solutions/mobile-app-development-company-uae", permanent: true },
      { source: "/custom-software-development-usa", destination: "/solutions/custom-software-development-company-usa", permanent: true },
      { source: "/custom-software-development-uae", destination: "/solutions/custom-software-development-company-uae", permanent: true },
      { source: "/custom-software-development-uk", destination: "/solutions/custom-software-development-company", permanent: true },
      { source: "/software-development-company", destination: "/solutions/software-development-company", permanent: true },
      { source: "/erp-development-company", destination: "/solutions/erp-development-company", permanent: true },
      { source: "/crm-development-company", destination: "/solutions/crm-development-company", permanent: true },
      { source: "/website-development-company", destination: "/solutions/website-development-company", permanent: true },
      { source: "/web-development-company", destination: "/solutions/website-development-company", permanent: true },
      { source: "/mobile-app-development-company", destination: "/solutions/mobile-app-development-company", permanent: true },
      { source: "/ai-development-company", destination: "/solutions/ai-development-company", permanent: true },
      { source: "/digital-transformation-company", destination: "/solutions/digital-transformation-company", permanent: true },
      { source: "/it-consulting-company", destination: "/solutions/it-consulting-company", permanent: true },
      { source: "/business-automation-services", destination: "/solutions/business-automation-services", permanent: true },
      { source: "/software-development-company-india", destination: "/solutions/software-development-company-india", permanent: true },
      { source: "/software-development-company-vadodara", destination: "/solutions/software-development-company-vadodara", permanent: true },
      { source: "/software-development-company-gujarat", destination: "/solutions/software-development-company-gujarat", permanent: true },
      { source: "/erp-development-company-vadodara", destination: "/solutions/erp-development-company-vadodara", permanent: true },
      { source: "/erp-development-company-gujarat", destination: "/solutions/erp-development-company-gujarat", permanent: true },
      { source: "/vadodara", destination: "/locations/india/vadodara", permanent: true },
      { source: "/gujarat", destination: "/locations/india/gujarat", permanent: true },
      { source: "/discovery-call", destination: "/book-consultation", permanent: true },
    ];
  },
};

export default nextConfig;
