/** Recommended services for internal navigation — website product only. */

export type RecommendedServiceLink = {
  reason: string;
  slug?: string;
  /** Use when the target is a keyword-money route not in services-data */
  href?: string;
  label?: string;
};

export const recommendedServicesBySlug: Record<string, RecommendedServiceLink[]> = {
  "website-development": [
    { slug: "website-technologies", reason: "Next.js stack, SSR, and CMS choices explained" },
    {
      href: "/services/business-website-development",
      label: "Business Website Development",
      reason: "Company and MSME sites from the same pillar",
    },
    {
      href: "/services/website-redesign",
      label: "Website Redesign",
      reason: "Rebuild slow WordPress sites on Next.js",
    },
  ],
  "website-technologies": [
    { slug: "website-development", reason: "Full website builds on this stack" },
    {
      href: "/services/website-redesign",
      label: "Website Redesign",
      reason: "Migrate legacy sites to Next.js",
    },
    { slug: "website-seo", reason: "Technical SEO for SSR/SSG sites" },
  ],
  "website-seo": [
    { slug: "website-maintenance", reason: "SEO hours included on AMC plans" },
    { slug: "website-development", reason: "Fix crawlability before content SEO" },
    {
      href: "/services/business-website-development",
      label: "Business Websites",
      reason: "Local and MSME ranking pages",
    },
  ],
  "website-maintenance": [
    { slug: "website-seo", reason: "Monthly SEO reports on AMC plans" },
    {
      href: "/services/website-redesign",
      label: "Website Redesign",
      reason: "When AMC cannot fix a dead theme",
    },
    { slug: "website-development", reason: "Add catalog depth to Starter sites" },
  ],
};

const websiteDefaults: RecommendedServiceLink[] = [
  {
    href: "/services/business-website-development",
    label: "Business Websites",
    reason: "Company sites for MSMEs and professionals",
  },
  {
    href: "/services/website-redesign",
    label: "Website Redesign",
    reason: "Rebuild outdated sites on Next.js",
  },
];

export function getRecommendedServices(serviceSlug: string): RecommendedServiceLink[] {
  return recommendedServicesBySlug[serviceSlug] ?? websiteDefaults;
}

export const recommendedToolsByService: Record<string, { slug: string; label: string }[]> = {
  "website-development": [
    { slug: "industrial-website-rfq-estimator", label: "Website Cost Estimator" },
  ],
  default: [{ slug: "industrial-website-rfq-estimator", label: "Website Cost Estimator" }],
};

export function getRecommendedTools(serviceSlug: string) {
  return recommendedToolsByService[serviceSlug] ?? recommendedToolsByService.default;
}
