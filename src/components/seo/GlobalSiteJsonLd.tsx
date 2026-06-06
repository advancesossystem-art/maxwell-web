import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { getAllServices } from "@/lib/services-data";
import {
  areaServedCountries,
  headquarters,
  seoIds,
  socialProfiles,
} from "@/lib/seo/config";
import { globalHeadTerms, headTerms } from "@/lib/seo/search-keywords";

/**
 * Site-wide @graph: Organization + ProfessionalService + India HQ + WebSite.
 * Replaces separate Organization/WebSite scripts to avoid duplicate entities.
 */
export function GlobalSiteJsonLd() {
  const services = getAllServices();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": seoIds.organization,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
          width: 1672,
          height: 941,
        },
        image: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: "2018",
        sameAs: socialProfiles.length > 0 ? socialProfiles : [siteConfig.url],
        address: {
          "@type": "PostalAddress",
          ...headquarters,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessAddress.latitude,
          longitude: businessAddress.longitude,
        },
        areaServed: areaServedCountries.map((code) => ({
          "@type": "Country",
          name: code,
        })),
        knowsAbout: [
          ...headTerms.slice(0, 8),
          ...globalHeadTerms.slice(0, 6),
          "Website Development Company India",
          "ERP Software Development",
          "CRM Software Development",
          "SaaS Product Development",
          "Cloud Migration Services",
          "Offshore Software Development India",
          "Industrial AI Solutions",
          "PPE Detection System",
          "Computer Vision Safety Monitoring",
          "Software Development Company Vadodara",
          "Software Development Company Gujarat",
          "Digital Transformation Services",
          "Business Automation Services",
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".mx-display", "h1", "[data-seo-speakable]"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": seoIds.offerCatalog,
          name: "Software Development Services",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              "@id": `${siteConfig.url}/services/${service.slug}#service`,
              name: service.title,
              description: service.metaDescription,
              url: `${siteConfig.url}/services/${service.slug}`,
              provider: { "@id": seoIds.organization },
              areaServed: areaServedCountries,
              availableLanguage: ["en", "hi"],
            },
          })),
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            contactType: "sales",
            areaServed: ["IN", "US", "GB", "AE"],
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: siteConfig.phone,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": seoIds.localBusiness,
        name: `${siteConfig.name} — India`,
        description:
          "Headquartered in Vadodara, Gujarat. Enterprise software development for India and global clients.",
        url: `${siteConfig.url}/locations/india`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₹₹₹",
        currenciesAccepted: "INR, USD, GBP, AED",
        address: {
          "@type": "PostalAddress",
          ...headquarters,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessAddress.latitude,
          longitude: businessAddress.longitude,
        },
        areaServed: { "@type": "Country", name: "India" },
        hasMap: businessAddress.googleMapsLink,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        parentOrganization: { "@id": seoIds.organization },
      },
      {
        "@type": "WebSite",
        "@id": seoIds.website,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: ["en-IN", "en-US", "en-GB"],
        publisher: { "@id": seoIds.organization },
        about: { "@id": seoIds.organization },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
