import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { textileSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: textileSeo.title,
  description: textileSeo.description,
  path: textileSeo.path,
  keywords: [...textileSeo.keywords],
});

export default function TextileWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Textile Manufacturer"
      location="India — Surat, Ahmedabad & Bhilwara Specialist"
      h1="Website Development for Textile Manufacturers India"
      description="Websites for fabric manufacturers, yarn suppliers, garment exporters, and textile traders. Surat, Ahmedabad, and Bhilwara textile clusters — we build catalogs that international buyers can browse and request samples from."
      canonicalPath={textileSeo.path}
      serviceName="Website Development for Textile Manufacturers"
      specificFeatures={[
        "Fabric swatch gallery with GSM, count, composition details",
        "Sample request forms",
        "MOQ (Minimum Order Quantity) display",
        "Export-ready product descriptions",
        "Color variant display for fabrics",
      ]}
    />
  );
}
