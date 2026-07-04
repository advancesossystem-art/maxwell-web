import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { plasticManufacturerSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: plasticManufacturerSeo.title,
  description: plasticManufacturerSeo.description,
  path: plasticManufacturerSeo.path,
  keywords: [...plasticManufacturerSeo.keywords],
});

export default function PlasticManufacturerWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Plastic Manufacturer"
      location="India (Pan-India Delivery)"
      h1="Website Development for Plastic Manufacturers India"
      description="India's plastic manufacturing industry — from injection molding to PET packaging to HDPE pipes — relies heavily on personal networks and B2B directories for orders. A professionally built website with your product catalog, material specifications, and custom mold inquiry form positions you ahead of competitors who are still only on paid listing platforms."
      canonicalPath={plasticManufacturerSeo.path}
      serviceName="Website Development for Plastic Manufacturers"
      caseStudy={true}
      specificFeatures={[
        "Product catalog by material type (PP, HDPE, PET, ABS, Nylon etc.)",
        "Technical spec sheets with material grade, density, and tensile strength",
        "Custom mold and tooling inquiry form with quantity and dimensions fields",
        "BIS and ISO certification display",
        "Export inquiry form with container load calculator",
      ]}
    />
  );
}
