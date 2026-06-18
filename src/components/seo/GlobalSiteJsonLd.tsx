import { JsonLd } from "@/components/seo/JsonLdScript";
import {
  buildLocalBusinessNode,
  buildOrganizationNode,
  buildWebsiteNode,
} from "@/lib/seo/organization-schema";

/**
 * Site-wide @graph: Organization + LocalBusiness + WebSite (with SearchAction).
 */
export function GlobalSiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationNode(), buildLocalBusinessNode(), buildWebsiteNode()],
  };

  return <JsonLd data={graph} />;
}
