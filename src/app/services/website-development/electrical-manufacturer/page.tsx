import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { electricalManufacturerSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: electricalManufacturerSeo.title,
  description: electricalManufacturerSeo.description,
  path: electricalManufacturerSeo.path,
  keywords: [...electricalManufacturerSeo.keywords],
});

export default function ElectricalManufacturerWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Electrical Manufacturer"
      location="India · Gujarat GIDC corridor"
      h1="Website Development for Electrical Manufacturers"
      description="Electrical OEMs and panel/component manufacturers need catalogs that speak voltage, IP rating, busbar, and duty cycle — not generic agency slogans. Maxwell builds electrical manufacturer websites with structured product pages, certification display, and RFQ paths buyers actually use from the plant floor."
      canonicalPath={electricalManufacturerSeo.path}
      serviceName="Website Development for Electrical Manufacturers"
      specificFeatures={[
        "Product pages with ratings, standards references, and application tags",
        "Category IA for switchgear, panels, wires/cables, controls, or components",
        "RFQ fields for quantity, destination, and installation context",
        "Datasheet download or request patterns per product line",
        "GIDC / Gujarat locality SEO with industrial website design linkage",
      ]}
    />
  );
}
