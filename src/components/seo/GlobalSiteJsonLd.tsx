import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { getAllServices } from "@/lib/services-data";
import {
  headquarters,
  seoIds,
  socialProfiles,
} from "@/lib/seo/config";
import { globalHeadTerms, headTerms } from "@/lib/seo/search-keywords";
import { JsonLd } from "@/components/seo/JsonLdScript";

/**
 * Site-wide @graph: Organization + LocalBusiness + WebSite (with SearchAction).
 */
export function GlobalSiteJsonLd() {
  const services = getAllServices();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": seoIds.organization,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: siteConfig.logoUrl,
          width: 1672,
          height: 941,
        },
        image: `${siteConfig.url}/opengraph-image`,
        description:
          "India-based software development company offering custom ERP, CRM, AI, web and mobile apps",
        foundingLocation: "Vadodara, Gujarat, India",
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
        areaServed: ["India", "United States", "United Kingdom", "Canada", "Australia"].map(
          (name) => ({ "@type": "Country", name }),
        ),
        knowsAbout: [
          ...headTerms.slice(0, 8),
          ...globalHeadTerms.slice(0, 6),
          "Website Development Company India",
          "ERP Software Development",
          "CRM Software Development",
          "SaaS Product Development",
          "Cloud Migration Services",
          "Software Development Company Vadodara",
          "Software Development Company Gujarat",
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
              serviceType: service.title,
              description: service.metaDescription,
              url: `${siteConfig.url}/services/${service.slug}`,
              provider: { "@id": seoIds.organization },
              areaServed: "India",
            },
          })),
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Gujarati"],
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: ["IN", "US", "GB", "AE"],
            availableLanguage: ["English", "Hindi", "Gujarati"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": seoIds.localBusiness,
        name: "Maxwell Electrodeal IT Solutions",
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        description:
          "Custom software development company in Vadodara offering ERP, CRM, AI solutions, websites and mobile apps across India",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₹₹",
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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        parentOrganization: { "@id": seoIds.organization },
      },
      {
        "@type": "WebSite",
        "@id": seoIds.website,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: ["en-IN", "en"],
        publisher: { "@id": seoIds.organization },
        about: { "@id": seoIds.organization },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return <JsonLd data={graph} />;
}
