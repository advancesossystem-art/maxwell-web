/**
 * High-intent search terms buyers use when hiring software vendors (India + global).
 * Sources: 2025–2026 B2B/dev-agency SEO playbooks — commercial modifiers: company, hire, cost, India, industry.
 */

/** Head terms — homepage, root metadata (India + commercial intent) */
export const headTerms = [
  "software development company",
  "software development company India",
  "custom software development company",
  "custom software development company India",
  "best software development company India",
  "top software development company India",
  "IT company India",
  "software development services",
  "enterprise software development company",
  "offshore software development India",
  "hire software developers India",
  "dedicated development team India",
  "software outsourcing India",
] as const;

/** Global / export-market head terms — same site, international English buyers */
export const globalHeadTerms = [
  "custom software development company",
  "enterprise software development company",
  "offshore software development company",
  "hire dedicated software developers",
  "software development outsourcing",
  "IT outsourcing company",
  "B2B software development services",
  "software development agency",
  "application development company",
  "digital product development company",
  "nearshore software development",
  "offshore development team",
] as const;

/** Region-specific commercial modifiers (metadata + llms.txt) */
export const globalMarketKeywords = {
  us: [
    "software development company USA",
    "web development company USA",
    "custom web development company",
    "hire web developers for startup",
    "mobile app development company USA",
    "app development company USA",
    "MVP app development for startups",
    "offshore software development USA",
    "custom software development company USA",
    "dedicated development team",
    "hire offshore developers from India",
    "India software outsourcing for US companies",
    "React.js development company",
    "Next.js development agency",
    "MERN stack development services",
  ],
  uk: [
    "software development company UK",
    "offshore software development UK",
    "hire developers India UK timezone",
  ],
  uae: [
    "software development company Dubai",
    "software development company UAE",
    "web development services Dubai",
    "affordable web development UAE",
    "mobile app development UAE",
    "app development company UAE",
    "custom software development Dubai",
    "IT company UAE offshore India",
  ],
  au: [
    "software development company Australia",
    "offshore development India Australia",
  ],
  ca: [
    "software development company Canada",
    "offshore software development Canada",
  ],
  sg: [
    "software development company Singapore",
    "offshore software development Singapore",
  ],
  de: [
    "software development company Germany",
    "offshore software development Europe India",
  ],
} as const;

/** By service slug — maps to /services/[slug] */
export const serviceSearchKeywords: Record<string, readonly string[]> = {
  "website-development": [
    "website development company",
    "website development company India",
    "web development company India",
    "web development company",
    "custom web development company",
    "business website development",
    "corporate website design",
    "professional website development",
    "responsive website design",
    "website development services",
    "website redesign services",
    "Next.js development company",
    "React development company",
    "web development company USA",
    "web development services Dubai",
    "hire web developers for startup",
    "web development agency for small business",
    "web application development company",
    "corporate website development",
    "business website development company",
    "Next.js development agency",
    "React.js development company",
    "MERN stack development services",
    "ecommerce website development company",
    "SEO friendly website development",
  ],
  "custom-software-development": [
    "custom software development company",
    "custom software development company India",
    "offshore software development USA",
    "custom software development Dubai",
    "software outsourcing company",
    "dedicated development team",
    "software development for small business",
    "enterprise software development services",
    "custom software development services",
    "business software development company",
    "hire custom software developers India",
    "bespoke software development",
  ],
  "mobile-app-development": [
    "mobile app development company",
    "mobile app development company India",
    "Android app development company",
    "iOS app development company",
    "Flutter app development company",
    "cross platform app development",
    "business mobile applications",
    "mobile app development company USA",
    "mobile app development UAE",
    "iOS Android app development",
    "hire app developers",
    "MVP app development for startups",
    "cross-platform app development services",
    "Flutter app development company",
    "app development company India",
    "React Native development company",
    "hire mobile app developers India",
  ],
  "erp-development": [
    "ERP software development company",
    "ERP development company India",
    "custom ERP software development",
    "custom ERP solutions India",
    "ERP software development services",
    "manufacturing ERP development",
    "cloud ERP development India",
    "GST ERP software India",
  ],
  "crm-development": [
    "CRM development company",
    "CRM development company India",
    "CRM software development services",
    "custom CRM development",
    "custom CRM software development company",
    "sales CRM development India",
  ],
  "ai-solutions": [
    "AI development company",
    "AI development company India",
    "AI software development company",
    "artificial intelligence solutions",
    "AI automation services",
    "AI powered business software",
    "AI chatbot development",
    "machine learning solutions",
    "computer vision solutions",
    "industrial AI solutions",
    "workplace safety AI",
    "PPE detection system",
    "computer vision safety monitoring",
    "AI video analytics",
    "industrial safety monitoring",
    "AI software development services",
    "machine learning development company",
    "LLM integration services",
    "AI automation for business",
  ],
  "saas-development": [
    "SaaS development company",
    "SaaS development company India",
    "SaaS application development",
    "multi tenant SaaS development",
    "MVP development company India",
    "startup SaaS development",
  ],
  "cloud-solutions": [
    "cloud solutions company India",
    "cloud migration services India",
    "AWS consulting company India",
    "Azure migration services",
    "DevOps services India",
    "cloud consulting company",
  ],
};

/** Industry slug → vertical commercial queries */
export const industrySearchKeywords: Record<string, readonly string[]> = {
  manufacturing: [
    "manufacturing software development company",
    "manufacturing ERP development India",
    "manufacturing ERP software",
    "manufacturing software solutions",
    "factory automation software",
    "production management software",
    "inventory management software",
    "custom software for manufacturing companies",
  ],
  healthcare: [
    "healthcare software development company",
    "healthcare software development services",
    "hospital management software",
    "medical ERP software",
    "healthcare mobile app development",
    "healthcare management software",
  ],
  education: [
    "education software development company",
    "education software development",
    "LMS development company India",
    "learning management system development",
    "school ERP software",
    "online education platform development",
  ],
  "education-data-privacy": [
    "student data privacy software",
    "education data privacy India",
    "DPDP Act education software",
    "school management software privacy",
    "EdTech data protection India",
  ],
  "chemical-manufacturing": [
    "CRM software for chemical industry",
    "chemical manufacturing CRM",
    "chemical industry ERP India",
    "batch tracking software chemical",
    "MSDS management software India",
  ],
  "cement-construction-materials": [
    "cement plant software",
    "cement ERP India",
    "construction material software",
    "dealer management cement",
    "building materials ERP India",
  ],
  logistics: [
    "logistics software development company",
    "logistics software development",
    "fleet management software",
    "supply chain management software",
    "transportation ERP software",
  ],
  retail: [
    "retail software development company",
    "retail ERP software",
    "retail management software",
    "POS software development",
    "retail analytics solutions",
    "ecommerce software development India",
  ],
  construction: [
    "construction software development company",
    "construction ERP software",
    "project management software construction",
    "construction management solutions",
  ],
};

/** Solution slug → “[service] company” style queries */
export const solutionSearchKeywords: Record<string, readonly string[]> = {
  "software-development-company": [
    "software development company",
    "software development company India",
    "software development services",
    "enterprise software development",
    "software development outsourcing",
  ],
  "erp-development-company": ["ERP development company", "ERP software development company India", "custom ERP development"],
  "crm-development-company": ["CRM development company", "custom CRM development company India", "CRM development India"],
  "website-development-company": [
    "enterprise website development solutions",
    "corporate website development solutions",
    "Next.js website solutions India",
    "SEO website development solutions",
  ],
  "ai-development-company": ["AI development company India", "AI solutions company", "AI software development company"],
  "mobile-app-development-company": ["mobile app development company India", "mobile app development company"],
  "saas-development-company": ["SaaS development company India", "SaaS development company"],
  "cloud-solutions-company": ["cloud solutions company India", "cloud migration company", "cloud solutions company"],
  "custom-software-development-company": ["custom software development company India", "custom software development services"],
  "digital-transformation-company": [
    "digital transformation company",
    "digital transformation services",
    "enterprise software solutions",
  ],
  "it-consulting-company": ["IT consulting company", "IT consulting company India", "IT consulting services"],
  "business-automation-services": [
    "business automation services",
    "business automation solutions",
    "AI automation services",
  ],
  "web-development-company-usa": [
    "web development company USA",
    "custom web development company",
    "hire web developers for startup",
    "Next.js development agency",
  ],
  "web-development-company-uae": [
    "web development company UAE",
    "web development services Dubai",
    "affordable web development UAE",
  ],
  "mobile-app-development-company-usa": [
    "mobile app development company USA",
    "MVP app development for startups",
    "hire app developers",
  ],
  "mobile-app-development-company-uae": [
    "mobile app development UAE",
    "app development company UAE",
    "mobile app development Dubai",
  ],
  "custom-software-development-company-usa": [
    "offshore software development USA",
    "custom software development company USA",
    "dedicated development team",
  ],
  "custom-software-development-company-uae": [
    "custom software development Dubai",
    "custom software development UAE",
    "software development company UAE",
  ],
  "software-development-company-india": [
    "software development company India",
    "top software development company India",
    "custom software development India",
  ],
  "software-development-company-gujarat": [
    "software development company in Gujarat",
    "IT company Gujarat",
    "ERP development company in Gujarat",
  ],
  "software-development-company-vadodara": [
    "software development company in Vadodara",
    "IT company in Vadodara",
    "best software company in Vadodara",
  ],
  "erp-development-company-gujarat": ["ERP development company in Gujarat", "ERP development India"],
  "erp-development-company-vadodara": ["ERP development company in Vadodara", "ERP software Vadodara"],
  "web-development-company-vadodara": [
    "website developer in Vadodara",
    "website development in Vadodara",
    "website development company Vadodara",
    "web development company in Vadodara",
  ],
  "web-development-company-gujarat": [
    "website development company Gujarat",
    "website development in Gujarat",
    "web development company Gujarat",
  ],
  "web-development-company-india": [
    "website development in India",
    "pan-India website development",
    "India website delivery",
  ],
  "web-development-company-india-germany": [
    "web development company India for Germany",
    "Indian web development agency Germany",
    "outsource web development India Germany",
  ],
  "mobile-app-development-company-vadodara": [
    "mobile app development company in Vadodara",
    "app development company Vadodara",
  ],
  "crm-development-company-india": ["CRM development India", "CRM development company India"],
  "ai-development-company-india": ["AI development India", "AI development company India", "industrial AI solutions"],
};

/** City SEO — local delivery intent only (commercial head terms live on geo solution pages). */
export const locationQueryPatterns = [
  "IT company {city}",
  "software company {city}",
  "ERP development company {city}",
  "mobile app development company {city}",
  "Maxwell Electrodeal {city}",
] as const;

/** FAQ / blog style — high volume informational → commercial bridge */
export const buyerQuestionKeywords = [
  "software development cost in India",
  "how much does custom software development cost",
  "how much does custom website cost in the US",
  "mobile app development cost USA",
  "mobile app development cost UAE",
  "mobile app development cost India",
  "ERP development cost in India",
  "CRM development cost",
  "ERP software price India",
  "how to hire a web development company",
  "how to choose a software development company",
  "what does a custom software company do",
  "custom software vs SaaS",
  "web app vs mobile app",
  "ERP vs CRM",
  "ERP vs Excel",
  "Flutter vs React Native",
  "build vs buy software",
  "custom CRM vs Salesforce",
  "hire dedicated developers India price",
  "best software company in Vadodara",
  "software development company Gujarat",
  "ERP software development company in India",
  "best CRM software development company",
  "healthcare software development services",
  "logistics software development company",
  "AI software development company for businesses",
  "benefits of custom software",
] as const;

/** AEO / featured snippet + AI answer engine targets */
export const aeoQuestionKeywords = [
  "What is Maxwell Electrodeal?",
  "What is the cost of mobile app development?",
  "How to hire a web development company?",
  "What does a custom software development company do?",
  "What is the difference between custom software and off-the-shelf software?",
  "How much does custom web development cost for a startup?",
  "How long does mobile app development take?",
  "Best software development company in Vadodara",
  "Software development company in Gujarat",
  "ERP development company in India",
  "Industrial AI solutions India",
  "PPE detection system software",
  "How much does custom software development cost in India?",
  "Custom CRM vs Salesforce",
  "ERP vs CRM which to choose",
] as const;

export function keywordsForService(slug: string): string[] {
  return [...(serviceSearchKeywords[slug] ?? []), ...headTerms.slice(0, 6)];
}

export function keywordsForIndustry(slug: string): string[] {
  return [
    ...(industrySearchKeywords[slug] ?? []),
    "software development company India",
    ...globalHeadTerms.slice(0, 4),
  ];
}

export function keywordsForSolution(slug: string): string[] {
  return [
    ...(solutionSearchKeywords[slug] ?? []),
    ...headTerms.slice(0, 5),
    ...globalHeadTerms.slice(0, 3),
  ];
}

/** Country slug → extra metadata keywords */
export function keywordsForCountry(countrySlug: string, countryName: string): string[] {
  const base = [
    `software development company ${countryName}`,
    `${countryName} software development`,
    "software development company India",
    ...globalHeadTerms.slice(0, 5),
  ];
  const regional =
    countrySlug === "usa" || countrySlug === "us"
      ? [...globalMarketKeywords.us]
      : countrySlug === "uk" || countrySlug === "united-kingdom"
        ? [...globalMarketKeywords.uk]
        : countrySlug === "uae" || countrySlug === "united-arab-emirates"
          ? [...globalMarketKeywords.uae]
          : countrySlug === "australia"
            ? [...globalMarketKeywords.au]
            : countrySlug === "canada"
              ? [...globalMarketKeywords.ca]
              : countrySlug === "singapore"
                ? [...globalMarketKeywords.sg]
                : countrySlug === "germany"
                  ? [...globalMarketKeywords.de]
                  : countrySlug === "india"
                    ? [...indiaOnlyTerms]
                    : [];
  return [...base, ...regional];
}

const indiaOnlyTerms = [
  "best software development company India",
  "software development company Gujarat",
  "software development Vadodara",
  "GST ERP software India",
] as const;

export function keywordsForCity(
  cityName: string,
  countrySlug: string,
  existing: string[] = [],
): string[] {
  const patterns = locationQueryPatterns.map((p) => p.replace("{city}", cityName));
  return [
    ...existing,
    ...patterns,
    ...keywordsForCountry(countrySlug, cityName).slice(0, 6),
  ];
}
