import { JsonLd } from "@/components/seo/JsonLdScript";
import {
  buildFounderPersonNode,
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
    "@graph": [buildOrganizationNode(), buildFounderPersonNode(), buildLocalBusinessNode(), buildWebsiteNode()],
  };

  return <JsonLd data={graph} />;
}
