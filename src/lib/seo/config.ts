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
  localBusiness: `${siteConfig.url}/#localbusiness-india`,
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

/** Live profiles for Knowledge Graph / sameAs signals. */
export const socialProfiles: string[] = [
  "https://www.linkedin.com/company/maxwell-electrodeal-private-limited",
  "https://www.maxwellelectrodeal.com",
];

export const homeSeo = {
  title:
    "Software Development Company Vadodara | Custom ERP, CRM, AI & Web Apps",
  description:
    "Maxwell Electrodeal is a Vadodara, Gujarat software development company for custom ERP, CRM, websites, mobile apps & AI. GST-ready systems, on-site discovery & offshore delivery for India, USA & UAE.",
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
  "geo.position": `${businessAddress.latitude};${businessAddress.longitude}`,
  ICBM: `${businessAddress.latitude}, ${businessAddress.longitude}`,
  "content-language": "en-IN",
  target: "all",
  distribution: "global",
  rating: "general",
} as const;
