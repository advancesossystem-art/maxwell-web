import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { chemicalManufacturerSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: chemicalManufacturerSeo.title,
  description: chemicalManufacturerSeo.description,
  path: chemicalManufacturerSeo.path,
  keywords: [...chemicalManufacturerSeo.keywords],
});

export default function ChemicalManufacturerWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Chemical Manufacturer"
      location="India (Gujarat Specialist)"
      h1="Website Development for Chemical Manufacturers India"
      description="Professional websites for chemical manufacturers, distributors, and industrial chemical suppliers. Product catalog, safety data sheet downloads, inquiry forms, and Google SEO — built for the Vadodara-Bharuch-Ankleshwar chemical corridor."
      canonicalPath={chemicalManufacturerSeo.path}
      serviceName="Website Development for Chemical Manufacturers"
      caseStudy={true}
      specificFeatures={[
        "MSDS/SDS document downloads per product",
        "Hazardous material compliance notices",
        "Certificate of Analysis (CoA) request forms",
        "Product grade/specification tables",
        "Export inquiry forms (IEC code integration)",
      ]}
    />
  );
}
