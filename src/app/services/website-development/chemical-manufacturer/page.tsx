import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { Container } from "@/components/ui/Container";
import { chemicalManufacturerSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: chemicalManufacturerSeo.title,
  description: chemicalManufacturerSeo.description,
  path: chemicalManufacturerSeo.path,
  keywords: [...chemicalManufacturerSeo.keywords],
});

export default function ChemicalManufacturerWebsitePage() {
  return (
    <>
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
      <section className="py-10 border-t border-slate-100 bg-[#f8fafc]">
        <Container>
          <p className="text-sm font-semibold text-slate-700 mb-3">Region-specific pages</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/website-development/bharuch-ankleshwar-chemical" className="text-sm text-indigo-600 hover:underline">
              Specifically serving the Bharuch-Ankleshwar GIDC corridor →
            </Link>
            <Link href="/case-studies/drashti-chemicals" className="text-sm text-indigo-600 hover:underline">
              Drashti Chemicals case study (Vadodara) →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
