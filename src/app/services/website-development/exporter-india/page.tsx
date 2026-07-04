import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { exporterIndiaSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: exporterIndiaSeo.title,
  description: exporterIndiaSeo.description,
  path: exporterIndiaSeo.path,
  keywords: [...exporterIndiaSeo.keywords],
});

export default function ExporterIndiaWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Exporter / Trading Company"
      location="India (Pan-India Export Specialist)"
      h1="Website Development for Indian Exporters and Trading Companies"
      description="International buyers searching for Indian suppliers use Google — not just B2B directories. An export-focused website with your product catalog in English, your certifications, your IEC code, and a proper inquiry form is the single most effective tool for generating global B2B leads. Maxwell builds export websites that rank for the exact product and country combination international buyers search."
      canonicalPath={exporterIndiaSeo.path}
      serviceName="Website Development for Indian Exporters and Trading Companies"
      caseStudy={true}
      specificFeatures={[
        "Multi-currency price inquiry support (USD, EUR, AED)",
        "IEC code and DGFT registration display",
        "Product pages in export-standard English with HS code references",
        "Export compliance pages (BIS, APEDA, FSSAI, GMP as relevant)",
        "Country-specific inquiry forms (Middle East, Africa, Europe, USA routing)",
      ]}
    />
  );
}
