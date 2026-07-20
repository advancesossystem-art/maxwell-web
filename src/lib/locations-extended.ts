import { siteConfig } from "./constants";
import type { CityPageData } from "./locations-data";
import { programmaticCities } from "./seo/programmatic/catalog";

const existingSlugs = new Set([
  "gujarat", "vadodara", "ahmedabad", "surat", "rajkot", "mumbai", "pune",
  "bengaluru", "hyderabad", "chennai", "delhi",
]);

function buildExtendedCityPage(city: (typeof programmaticCities)[number]): CityPageData {
  const name = city.name;
  return {
    slug: city.slug,
    name: city.name,
    countrySlug: "india",
    countryName: "India",
    state: city.state,
    metaTitle: `Maxwell Electrodeal ${name} — Website & Software Delivery`,
    metaDescription: `${siteConfig.name} delivers websites, web apps, ERP, CRM & AI in ${name}, ${city.state}. ${city.insight}`,
    primaryKeyword: `Website & Software Services in ${name}`,
    secondaryKeywords: [
      `ERP Development ${name}`,
      `CRM Development ${name}`,
      `Mobile App Development ${name}`,
      `IT Company ${name}`,
    ],
    relatedSearches: [`best software company ${name}`, `ERP software ${city.state}`, `app development cost ${name}`],
    headline: `${siteConfig.name} — ${name}`,
    subheadline: `${city.insight} Website and software delivery from ${siteConfig.name}.`,
    localInsights: city.insight,
    localChallenges: [
      { title: "Legacy manual processes", description: `${name} SMEs often outgrow spreadsheets—creating visibility gaps across ${city.industries[0] ?? "operations"}.` },
      { title: "Integration complexity", description: "GST, Tally, and logistics APIs require experienced engineering—not brochure website vendors." },
      { title: "Delivery risk", description: "Freelancer dropout is unacceptable for production ERP and compliance systems." },
    ],
    recommendedSolutions: [
      { title: "Custom Software", description: "Workflow-fit applications.", href: "/solutions/custom-software-development-company" },
      { title: "ERP Systems", description: "Inventory, production, finance.", href: "/solutions/erp-development-company" },
      { title: "Mobile Apps", description: "Field and shop-floor apps.", href: "/solutions/mobile-app-development-company" },
      { title: "AI Solutions", description: "Automation and vision.", href: "/solutions/ai-development-company-india" },
    ],
    industryFocus: city.industries.map((ind) => ({
      name: ind,
      href: `/industries/${ind.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`,
    })),
    caseStudySlugs: ["manufacturing-erp", "logistics-platform"],
    roiExamples: [
      { metric: "40%", label: "Less manual entry" },
      { metric: "₹12L", label: "Annual savings" },
      { metric: "8 mo", label: "ROI timeline" },
    ],
    faqs: [
      { question: `Do you serve ${name}?`, answer: `Yes. We deliver for ${name} and ${city.state} with on-site discovery and Vadodara HQ engineering.` },
      { question: `What industries in ${name}?`, answer: city.industries.join(", ") + "." },
      { question: "How do I get a quote?", answer: "Use /get-estimate or /contact—we respond within one business day." },
    ],
    serviceSlugs: ["custom-software-development", "erp-development", "mobile-app-development", "ai-solutions"],
    technologies: ["React", "Next.js", "Node.js", "Flutter", "PostgreSQL", "AWS"],
  };
}

const extendedCitiesMap = Object.fromEntries(
  programmaticCities
    .filter((c) => !existingSlugs.has(c.slug))
    .map((c) => [c.slug, buildExtendedCityPage(c)]),
) as Record<string, CityPageData>;

export const extendedCitySlugs = Object.keys(extendedCitiesMap);

export function getExtendedCity(slug: string): CityPageData | undefined {
  return extendedCitiesMap[slug];
}
