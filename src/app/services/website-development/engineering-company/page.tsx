import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { engineeringSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: engineeringSeo.title,
  description: engineeringSeo.description,
  path: engineeringSeo.path,
  keywords: [...engineeringSeo.keywords],
});

export default function EngineeringWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Engineering Company"
      location="Gujarat — GIDC Industrial Cluster Specialist"
      h1="Website Development for Engineering Companies Gujarat"
      description="Websites for precision engineering, CNC machining, fabrication, and heavy equipment manufacturers. Gujarat's GIDC industrial estates have 10,000+ engineering companies with no standalone web presence — we help them get found on Google."
      canonicalPath={engineeringSeo.path}
      serviceName="Website Development for Engineering Companies"
      specificFeatures={[
        "Technical specification sheets per product",
        "CAD drawing download requests",
        "Tolerance and material grade tables",
        "ISO certification display",
        "RFQ (Request for Quotation) forms",
      ]}
    />
  );
}
