import { siteConfig } from "@/lib/constants";
import {
  aeoQuestionKeywords,
  buyerQuestionKeywords,
  globalHeadTerms,
  globalMarketKeywords,
  headTerms,
} from "@/lib/seo/search-keywords";

import { businessAddress } from "@/lib/business-address";

/** Stable @id fragments for JSON-LD graph (absolute URLs). */
export const seoIds = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  localBusiness: `${siteConfig.url}/#business`,
  offerCatalog: `${siteConfig.url}/#services`,
} as const;

/** Primary market: India (en-IN). Content is English; x-default for global discovery. */
export const primaryLocale = "en_IN" as const;
export const hreflangDefault = "en-IN" as const;

export const headquarters = {
  streetAddress: businessAddress.streetAddress,
  addressLocality: businessAddress.addressLocality,
  addressRegion: businessAddress.addressRegion,
  postalCode: businessAddress.postalCode,
  addressCountry: businessAddress.addressCountry,
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
  "software development company Chennai",
  "software development company Hyderabad",
  "software development company Pune",
  "ERP development company India",
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

/** Live profiles for Knowledge Graph / sameAs signals. */
export const socialProfiles: string[] = [
  "https://www.linkedin.com/company/maxwellelectrodeal",
  "https://twitter.com/MaxwellElectrodeal",
  "https://www.facebook.com/maxwellelectrodeal",
  "https://techbehemoths.com/company/maxwellelectrodeal",
];

export const homeSeo = {
  title:
    "Maxwell Electrodeal | Full-Service IT Company India — ERP, CRM, AI & Cloud",
  description:
    "Maxwell Electrodeal — India's full-service IT company. Custom ERP, CRM, AI, Cloud, Cybersecurity & Digital Transformation. Vadodara, Gujarat. Serving India & globally.",
  keywords: [
    "software development company India",
    "IT company Vadodara",
    "AI consulting services India",
    "cloud services company India",
    "cybersecurity services India",
    "digital transformation company India",
    "managed IT services India",
    "custom ERP India",
    "CRM software Vadodara",
  ],
  path: "/",
} as const;

export const siteTitleTemplate = "%s | Maxwell Electrodeal";

export function buildCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

/** Canonical + hreflang for India English and global English (same URL). */
export function buildLanguageAlternates(path: string) {
  const canonical = buildCanonicalUrl(path);
  return {
    canonical,
    languages: {
      "en-IN": canonical,
      en: canonical,
      "x-default": canonical,
    },
  };
}

export const geoMetaOther = {
  "geo.region": "IN-GJ",
  "geo.placename": "Vadodara, Gujarat, India",
  "geo.position": `${businessAddress.latitude};${businessAddress.longitude}`,
  ICBM: `${businessAddress.latitude}, ${businessAddress.longitude}`,
  "content-language": "en-IN",
  target: "all",
  distribution: "global",
  rating: "general",
} as const;
