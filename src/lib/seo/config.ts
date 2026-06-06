import { siteConfig } from "@/lib/constants";
import {
  aeoQuestionKeywords,
  buyerQuestionKeywords,
  globalHeadTerms,
  globalMarketKeywords,
  headTerms,
} from "@/lib/seo/search-keywords";

/** Stable @id fragments for JSON-LD graph (absolute URLs). */
export const seoIds = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  localBusiness: `${siteConfig.url}/#localbusiness-india`,
  offerCatalog: `${siteConfig.url}/#services`,
} as const;

/** Primary market: India (en-IN). Content is English; x-default for global discovery. */
export const primaryLocale = "en_IN" as const;
export const hreflangDefault = "en-IN" as const;

export const headquarters = {
  streetAddress: "Vadodara",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390001",
  addressCountry: "IN",
} as const;

/** ISO 3166-1 alpha-2 — India first, then key export markets. */
export const areaServedCountries = [
  "IN",
  "US",
  "GB",
  "AE",
  "CA",
  "AU",
  "DE",
  "SG",
  "NL",
] as const;

export const globalKeywords = [
  ...globalHeadTerms,
  ...globalMarketKeywords.us,
  ...globalMarketKeywords.uk,
  ...globalMarketKeywords.uae,
] as const;

export const defaultKeywords = [
  ...headTerms,
  ...globalHeadTerms.slice(0, 8),
  ...buyerQuestionKeywords,
  ...aeoQuestionKeywords.slice(0, 6),
  "Maxwell Electrodeal",
] as const;

export const indiaKeywords = [
  "software development company in India",
  "best software development company India",
  "top software development company India",
  "hire software developers India",
  "offshore software development India",
  "software development Vadodara",
  "software development company Gujarat",
  "software development company in Vadodara",
  "software development company in Gujarat",
  "web development company in Vadodara",
  "mobile app development company in Vadodara",
  "ERP development company in Vadodara",
  "CRM development company in Vadodara",
  "IT company in Vadodara",
  "software company in Vadodara",
  "ERP development company in Gujarat",
  "website development company in Gujarat",
  "AI development company in Gujarat",
  "ERP development India",
  "CRM development India",
  "AI development India",
  "software development Mumbai",
  "software development company Bangalore",
  "software development company Delhi",
  "IT company Vadodara Gujarat",
  "GST compliant ERP India",
  "custom software development company India",
  "digital transformation company India",
  "IT consulting company India",
  "business automation services India",
] as const;

/** Update with live profiles before launch. */
export const socialProfiles: string[] = [
  // "https://www.linkedin.com/company/maxwell-electrodeal",
  // "https://www.youtube.com/@maxwellelectrodeal",
];

export const homeSeo = {
  title:
    "Maxwell Electrodeal | Custom Software, ERP, CRM, AI & Mobile App Development Company",
  description:
    "Maxwell Electrodeal helps businesses build custom software, ERP systems, CRM platforms, mobile applications, AI solutions, and cloud-based systems that improve efficiency, automation, and growth.",
  path: "/",
} as const;

export function buildCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

/** Single English site; hreflang signals India HQ + global English discovery (same canonical). */
export function buildLanguageAlternates(path: string) {
  const canonical = buildCanonicalUrl(path);
  return {
    canonical,
    languages: {
      [hreflangDefault]: canonical,
      "en-US": canonical,
      "en-GB": canonical,
      "en-AE": canonical,
      "en-CA": canonical,
      "en-AU": canonical,
      "x-default": canonical,
    },
  };
}

export const geoMetaOther = {
  "geo.region": "IN-GJ",
  "geo.placename": "Vadodara, Gujarat, India",
  "geo.position": "22.3072;73.1812",
  ICBM: "22.3072, 73.1812",
  "content-language": "en-IN",
  target: "all",
  distribution: "global",
  rating: "general",
} as const;
