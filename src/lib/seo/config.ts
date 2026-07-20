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
  founder: `${siteConfig.url}/#founder`,
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
  "website development company in India",
  "website engineering company India",
  "business website development India",
  "manufacturer website development India",
  "corporate website design India",
  "industrial website development India",
  "website development company Vadodara",
  "website development company Gujarat",
  "web development company in Vadodara",
  "website development company in Gujarat",
  "custom website development India",
  "Next.js website development India",
  "web application development India",
  "ecommerce website development India",
  "website redesign company India",
  "website maintenance company India",
  "software development company in India",
  "custom software development company India",
  "ERP development company India",
  "CRM development India",
  "AI automation India",
  "IT company in Vadodara",
] as const;

/** Live profiles for Knowledge Graph / sameAs signals. */
export const socialProfiles: string[] = [
  "https://www.linkedin.com/company/maxwellelectrodeal",
  "https://twitter.com/MaxwellElectrodeal",
  "https://www.facebook.com/maxwellelectrodeal",
  "https://techbehemoths.com/company/maxwellelectrodeal",
];

export const homeSeo = {
  title: "Website Engineering Company for Businesses | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal is the website engineering company for businesses — manufacturer, corporate, and industrial websites that rank on Google and convert inquiries. From ₹45,000. Vadodara, Gujarat, India.",
  keywords: [
    "website engineering company",
    "website engineering company for businesses",
    "Maxwell Electrodeal",
    "business website development",
    "manufacturer website development India",
    "corporate website design India",
    "industrial website development",
    "web development company India international",
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
