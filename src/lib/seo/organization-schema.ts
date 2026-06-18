import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { companyMetrics } from "@/lib/company-metrics";
import { testimonials } from "@/lib/testimonials-data";
import type { Author } from "@/lib/content/authors";
import type { ServicePageData } from "@/lib/services-data";
import { headquarters, seoIds, socialProfiles } from "@/lib/seo/config";
import { globalHeadTerms, headTerms } from "@/lib/seo/search-keywords";

export const ORGANIZATION_DESCRIPTION =
  "India-based custom software development company offering ERP, CRM, AI, web and mobile app solutions for businesses across India and globally.";

const CORE_OFFER_SERVICES = [
  "Custom ERP Development",
  "CRM Development",
  "AI Development",
  "Web Application Development",
  "Mobile App Development",
] as const;

/** Structured data constants — aligned with Knowledge Graph / GBP signals. */
const SCHEMA_FOUNDING_DATE = "2006";
const SCHEMA_EMPLOYEE_COUNT = 15;

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
  opens: "09:00",
  closes: "18:30",
};

export function parseInrAmount(raw: string): number | null {
  const s = raw.trim();
  const lakh = s.match(/([\d,.]+)\s*L/i);
  if (lakh) {
    return Math.round(parseFloat(lakh[1].replace(/,/g, "")) * 100_000);
  }
  const digits = s.replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

export function getServiceOfferPrices(service: ServicePageData): {
  minPrice: string;
  maxPrice: string;
} {
  const minPrice = parseInrAmount(service.startingPrice) ?? 50_000;
  let maxPrice = 2_000_000;

  if (service.pricingTiers?.length) {
    const lastTier = service.pricingTiers[service.pricingTiers.length - 1];
    const parts = lastTier.range.split(/[–-]/);
    const high = parseInrAmount(parts[parts.length - 1] ?? lastTier.range);
    if (high) maxPrice = Math.max(high, minPrice);
  } else {
    maxPrice = Math.max(minPrice * 8, minPrice);
  }

  return { minPrice: String(minPrice), maxPrice: String(maxPrice) };
}

export function buildOrganizationNode() {
  const catalogServices = CORE_OFFER_SERVICES.map((name) => ({
    "@type": "Offer" as const,
    itemOffered: {
      "@type": "Service" as const,
      name,
    },
  }));

  return {
    "@type": "Organization" as const,
    "@id": seoIds.organization,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject" as const,
      url: siteConfig.logoUrl,
      width: 200,
      height: 60,
    },
    image: `${siteConfig.url}/opengraph-image`,
    description: ORGANIZATION_DESCRIPTION,
    foundingDate: SCHEMA_FOUNDING_DATE,
    numberOfEmployees: {
      "@type": "QuantitativeValue" as const,
      value: SCHEMA_EMPLOYEE_COUNT,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress" as const,
      ...headquarters,
    },
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: businessAddress.latitude,
      longitude: businessAddress.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint" as const,
        contactType: "sales",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: ["IN", "US", "GB", "AU"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
    areaServed: [
      { "@type": "Country" as const, name: "India" },
      { "@type": "Country" as const, name: "United States" },
      { "@type": "Country" as const, name: "United Kingdom" },
      { "@type": "Country" as const, name: "Australia" },
    ],
    sameAs: socialProfiles,
    knowsAbout: [
      ...headTerms.slice(0, 8),
      ...globalHeadTerms.slice(0, 6),
      "Website Development Company India",
      "ERP Software Development",
      "CRM Software Development",
      "SaaS Product Development",
    ],
    speakable: {
      "@type": "SpeakableSpecification" as const,
      cssSelector: [".mx-display", "h1", "[data-seo-speakable]"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog" as const,
      "@id": seoIds.offerCatalog,
      name: "Software Development Services",
      itemListElement: catalogServices,
    },
  };
}

/** Aggregate rating only when a verifiable third-party review count is configured. */
const VERIFIABLE_REVIEW_COUNT = process.env.GOOGLE_BUSINESS_REVIEW_COUNT?.trim();

export function buildLocalBusinessNode(options?: { pageUrl?: string }) {
  const node: Record<string, unknown> = {
    "@type": "LocalBusiness" as const,
    "@id": seoIds.localBusiness,
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "₹₹",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: options?.pageUrl ?? siteConfig.url,
    description: ORGANIZATION_DESCRIPTION,
    address: {
      "@type": "PostalAddress" as const,
      ...headquarters,
    },
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: businessAddress.latitude,
      longitude: businessAddress.longitude,
    },
    hasMap: businessAddress.googleMapsLink,
    openingHoursSpecification: [OPENING_HOURS],
    parentOrganization: { "@id": seoIds.organization },
  };

  if (VERIFIABLE_REVIEW_COUNT) {
    node.aggregateRating = {
      "@type": "AggregateRating" as const,
      ratingValue: String(companyMetrics.satisfactionScore),
      reviewCount: VERIFIABLE_REVIEW_COUNT,
      bestRating: String(companyMetrics.satisfactionScale),
    };
  }

  return node;
}

export function buildWebsiteNode() {
  return {
    "@type": "WebSite" as const,
    "@id": seoIds.website,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en-IN", "en"],
    publisher: { "@id": seoIds.organization },
    about: { "@id": seoIds.organization },
    potentialAction: {
      "@type": "SearchAction" as const,
      target: {
        "@type": "EntryPoint" as const,
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildPersonAuthorNode(author: Author) {
  return {
    "@type": "Person" as const,
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: author.isFounder ? `${siteConfig.url}/about` : `${siteConfig.url}/authors/${author.slug}`,
    ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
    knowsAbout: author.expertise,
    worksFor: { "@id": seoIds.organization },
  };
}

export function buildServiceSchema(service: ServicePageData) {
  const url = `${siteConfig.url}/services/${service.slug}`;
  const { minPrice, maxPrice } = getServiceOfferPrices(service);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: service.title,
    name: `${service.title} — ${siteConfig.name}`,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": seoIds.organization,
    },
    areaServed: { "@type": "Country", name: "India" },
    url,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice,
        maxPrice,
        priceCurrency: "INR",
      },
    },
  };
}

export function buildTestimonialReviewNodes(limit = 4) {
  return testimonials
    .filter((testimonial) => testimonial.author.trim().length > 0)
    .slice(0, limit)
    .map((testimonial) => ({
      "@type": "Review" as const,
      reviewRating: {
        "@type": "Rating" as const,
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person" as const,
        name: testimonial.author.trim(),
      },
      reviewBody: testimonial.quote,
      itemReviewed: { "@id": seoIds.localBusiness },
    }));
}
