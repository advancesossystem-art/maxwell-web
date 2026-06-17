import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { headquarters, seoIds } from "@/lib/seo/config";
import { JsonLd } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumbs";

/** Contact page LocalBusiness + BreadcrumbList (complements site-wide Organization). */
export function ContactPageJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/contact#localbusiness`,
        name: "Maxwell Electrodeal IT Solutions",
        url: `${siteConfig.url}/contact`,
        image: `${siteConfig.url}/opengraph-image`,
        description:
          "Contact Maxwell Electrodeal — custom software development company in Vadodara, Gujarat, India",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          ...headquarters,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessAddress.latitude,
          longitude: businessAddress.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        parentOrganization: { "@id": seoIds.organization },
      },
      buildBreadcrumbSchema(["Home", "Contact"], [siteConfig.url, `${siteConfig.url}/contact`]),
    ],
  };

  return <JsonLd data={graph} />;
}
