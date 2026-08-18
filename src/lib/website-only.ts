/** Public product: website build, website AMC, SEO. Nothing else. */

export const WEBSITE_SERVICE_SLUGS = new Set(["website-development"]);

export const WEBSITE_SOLUTION_SLUGS = new Set([
  "web-development-company-gujarat",
  "web-development-company-india",
]);

const OFFTOPIC_SLUG =
  /(^|-)(erp|crm|saas|odoo|sap|tally|flutter|react-native|mobile-app|ai-agent|ai-for|software-for|custom-software|cloud-migration|cybersecurity)(-|$)/i;

const WEBSITE_SLUG =
  /website|seo|catalog|gidc|rfq|wordpress|nextjs|manufacturer|maintenance|amc|enquiry|vadodara|gujarat|industrial/;

export function isWebsiteTopicSlug(slug: string): boolean {
  const s = slug.toLowerCase();
  if (OFFTOPIC_SLUG.test(s) && !s.includes("website")) return false;
  return WEBSITE_SLUG.test(s);
}

export const SOFTWARE_SERVICE_REDIRECTS: Array<{ source: string; destination: string }> = [
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
  { source: "/solutions/erp-:slug*", destination: "/services/website-development" },
  { source: "/solutions/crm-:slug*", destination: "/services/website-development" },
  { source: "/solutions/ai-:slug*", destination: "/services/website-development" },
  { source: "/solutions/software-:slug*", destination: "/services/website-development" },
  { source: "/solutions/mobile-:slug*", destination: "/services/website-development" },
  { source: "/solutions/saas-:slug*", destination: "/services/website-development" },
  { source: "/solutions/custom-software-:slug*", destination: "/services/website-development" },
  { source: "/solutions/erp-development-company", destination: "/services/website-development" },
  { source: "/solutions/crm-development-company", destination: "/services/website-development" },
  { source: "/solutions/software-development-company", destination: "/services/website-development" },
  { source: "/solutions/software-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/solutions/software-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/solutions/erp-development-company-vadodara", destination: "/solutions/web-development-company-vadodara" },
  { source: "/solutions/erp-development-company-gujarat", destination: "/solutions/web-development-company-gujarat" },
  { source: "/erp-development-company", destination: "/services/website-development" },
  { source: "/crm-development-company", destination: "/services/website-development" },
  { source: "/software-development-company", destination: "/services/website-development" },
];
