import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumbs";
import { buildLocalBusinessNode } from "@/lib/seo/organization-schema";
import { seoIds } from "@/lib/seo/config";

/** Contact page LocalBusiness + ContactPage + BreadcrumbList. */
export function ContactPageJsonLd() {
  const contactUrl = `${siteConfig.url}/contact`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${contactUrl}#webpage`,
        name: "Get ERP Quote in 24 Hours — Vadodara, India",
        description:
          "Request a free ERP, CRM or custom software quote from Maxwell Electrodeal. Vadodara team — reply within 24 hours.",
        url: contactUrl,
        isPartOf: { "@id": seoIds.website },
      },
      buildLocalBusinessNode({ pageUrl: contactUrl }),
      buildBreadcrumbSchema(["Home", "Contact"], [siteConfig.url, contactUrl]),
    ],
  };

  return <JsonLd data={graph} />;
}
