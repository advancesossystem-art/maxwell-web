import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumbs";
import { buildLocalBusinessNode } from "@/lib/seo/organization-schema";

/** Contact page LocalBusiness + BreadcrumbList (complements site-wide Organization). */
export function ContactPageJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      buildLocalBusinessNode({ pageUrl: `${siteConfig.url}/contact` }),
      buildBreadcrumbSchema(["Home", "Contact"], [siteConfig.url, `${siteConfig.url}/contact`]),
    ],
  };

  return <JsonLd data={graph} />;
}
