import { JsonLd } from "@/components/seo/JsonLdScript";
import { siteConfig } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumbs";
import {
  buildLocalBusinessNode,
  buildTestimonialReviewNodes,
} from "@/lib/seo/organization-schema";
import { seoIds } from "@/lib/seo/config";

/** Reviews hub — AggregateRating + individual Review nodes for rich results. */
export function ReviewsPageJsonLd() {
  const localBusiness = buildLocalBusinessNode({ pageUrl: `${siteConfig.url}/reviews` });
  const reviews = buildTestimonialReviewNodes(6);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/reviews#webpage`,
        name: "Client Reviews & Testimonials | Maxwell Electrodeal",
        description:
          "Client reviews and testimonials for Maxwell Electrodeal — custom ERP, CRM, AI, and software development company in Vadodara, India.",
        url: `${siteConfig.url}/reviews`,
        isPartOf: { "@id": seoIds.website },
        about: { "@id": seoIds.localBusiness },
      },
      localBusiness,
      ...reviews,
      buildBreadcrumbSchema(["Home", "Reviews"], [siteConfig.url, `${siteConfig.url}/reviews`]),
    ],
  };

  return <JsonLd data={graph} />;
}
