import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { pharmaEquipmentBlueprintSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: pharmaEquipmentBlueprintSeo.title,
  description: pharmaEquipmentBlueprintSeo.description,
  path: pharmaEquipmentBlueprintSeo.path,
  keywords: [...pharmaEquipmentBlueprintSeo.keywords],
});

export default function PharmaEquipmentBlueprintPage() {
  return (
    <IndustryWebsitePage
      industry="Pharma Equipment Manufacturer"
      location="Vadodara · Halol GIDC pharma equipment cluster"
      h1="Website Development for Pharma Equipment — Vadodara & Halol"
      description="Pharma equipment OEMs need a clean showcase buyers trust for capex RFQs: model specs, utilities, brochure/document request — not generic agency gradients. Maxwell builds validation-ready industrial websites for Vadodara and Halol manufacturers with RFQ paths, optional service-partner sections, and corridor SEO that keeps you off the printer-company name collision."
      canonicalPath={pharmaEquipmentBlueprintSeo.path}
      serviceName="Website Development for Pharma Equipment Manufacturers"
      directAnswer="Maxwell Electrodeal designs Next.js websites for pharma equipment manufacturers in Vadodara and Halol: clean equipment showcase, capacity tables, and RFQ forms for plant buyers. Starter ₹45,000 · Professional ₹75,000 · Growth ₹1,50,000 — no advance; pay within 3 days of go-live + GST. We are a software & website engineering company — not related to maxwells.in or hardware retail brands of similar name."
      catalogWireframe={[
        "Equipment lines IA: process, packaging, utility, cleanroom accessories",
        "Model page: capacity, utilities, materials of construction (as you approve)",
        "Document / brochure request + WhatsApp plant-sales route",
        "Clean visual system: white industrial, not consumer ecommerce",
        "Halol GIDC + Vadodara HQ locality blocks",
      ]}
      specificFeatures={[
        "Clean industrial showcase suitable for plant-floor buyers and audits",
        "Model pages with capacity, utility, and application sections",
        "RFQ fields for plant destination, throughput, and compliance documents",
        "Facility / quality narrative pages (claims you approve — display only)",
        "Halol GIDC and Vadodara corridor SEO for pharma equipment cluster",
        "Dealer or service-partner login roadmap after the public site ships",
      ]}
      relatedLinks={[
        { label: "Pharmaceutical company website", href: "/services/website-development/pharmaceutical-company" },
        { label: "Halol GIDC", href: "/locations/india/gujarat/halol-gidc" },
        { label: "Vadodara location", href: "/locations/india/vadodara" },
        { label: "Industrial website design", href: "/services/industrial-website-design" },
        { label: "Dealer portal development", href: "/services/dealer-portal-development" },
      ]}
    />
  );
}
