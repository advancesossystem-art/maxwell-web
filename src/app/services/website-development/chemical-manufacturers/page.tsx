import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { chemicalManufacturersBlueprintSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: chemicalManufacturersBlueprintSeo.title,
  description: chemicalManufacturersBlueprintSeo.description,
  path: chemicalManufacturersBlueprintSeo.path,
  keywords: [...chemicalManufacturersBlueprintSeo.keywords],
});

export default function ChemicalManufacturersBlueprintPage() {
  return (
    <IndustryWebsitePage
      industry="Chemical Manufacturer"
      location="Ankleshwar · Nandesari · Bharuch corridor"
      h1="Website Development for Chemical Manufacturers — Ankleshwar & Nandesari"
      description="Industrial digital architect for chemical plants and specialty suppliers on the Bharuch–Ankleshwar–Nandesari belt. We replace rented directory placement with an owned Next.js catalog: CAS / grade tables, SDS PDF per SKU, REACH-ready export copy you approve, and WhatsApp RFQ on every product page."
      canonicalPath={chemicalManufacturersBlueprintSeo.path}
      serviceName="Website Development for Chemical Manufacturers"
      caseStudy
      directAnswer="Maxwell Electrodeal builds Next.js chemical manufacturer websites for the Ankleshwar and Nandesari corridors with CAS tables, SDS downloads, and direct RFQ forms. Packages: Starter ₹45,000 · Professional ₹75,000 · Growth ₹1,50,000 — no advance; full pay within 3 days of go-live plus 18% GST. You own the domain, code, and inquiries — not a yearly directory slot."
      catalogWireframe={[
        "Product landing: CAS, grade, packaging, hazard labels (display only — you supply approved text)",
        "SDS library: versioned PDF + request CoA without leaving the SKU page",
        "RFQ: bulk / sample / export fields with GST or IEC context",
        "Corridor SEO block: Ankleshwar GIDC, Nandesari, plant logistics narrative",
        "Mobile plant-floor layout: fast load, WhatsApp sticky inquiry",
      ]}
      specificFeatures={[
        "CAS number + grade + packaging tables on HTML product pages",
        "SDS / MSDS PDF downloads per SKU with version date",
        "REACH / export disclosure sections (your approved legal copy)",
        "Certificate of Analysis (CoA) request routing",
        "Corridor targeting: Ankleshwar GIDC, Nandesari, Bharuch logistics",
        "Direct WhatsApp RFQ + GST quote forms that bypass directory middle-men",
      ]}
      relatedLinks={[
        { label: "Bharuch–Ankleshwar chemical spoke", href: "/services/website-development/bharuch-ankleshwar-chemical" },
        { label: "Chemical manufacturer hub (national)", href: "/services/website-development/chemical-manufacturer" },
        { label: "Ankleshwar GIDC", href: "/locations/india/gujarat/ankleshwar-gidc" },
        { label: "Nandesari GIDC", href: "/locations/india/gujarat/nandesari-gidc" },
      ]}
    />
  );
}
