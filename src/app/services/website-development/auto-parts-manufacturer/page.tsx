import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { autoPartsSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: autoPartsSeo.title,
  description: autoPartsSeo.description,
  path: autoPartsSeo.path,
  keywords: [...autoPartsSeo.keywords],
});

export default function AutoPartsManufacturerWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Auto Parts Manufacturer"
      location="India (Gujarat Specialist)"
      h1="Website Development for Auto Parts Manufacturers India"
      description="Auto parts manufacturers and OEM suppliers need websites that speak the language of procurement managers — part numbers, OEM cross-references, material grades, and tolerance specs. Maxwell builds automotive supplier websites that get found by Tier 1 manufacturers and export buyers searching for specific components."
      canonicalPath={autoPartsSeo.path}
      serviceName="Website Development for Auto Parts Manufacturers"
      caseStudy={true}
      specificFeatures={[
        "Part number search and OEM cross-reference lookup",
        "Technical specification sheets per part (material, tolerance, finish)",
        "OEM fitment data display",
        "IATF 16949 / ISO 9001 certification badge display",
        "RFQ (Request for Quotation) form with part number field",
      ]}
    />
  );
}
