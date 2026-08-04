import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { ceramicExportersBlueprintSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: ceramicExportersBlueprintSeo.title,
  description: ceramicExportersBlueprintSeo.description,
  path: ceramicExportersBlueprintSeo.path,
  keywords: [...ceramicExportersBlueprintSeo.keywords],
});

export default function CeramicExportersBlueprintPage() {
  return (
    <IndustryWebsitePage
      industry="Ceramic Exporter"
      location="Morbi ceramic cluster · Gujarat export corridor"
      h1="Website Development for Ceramic Exporters — Morbi"
      description="Morbi tile and sanitary-ware exporters win overseas RFQs when catalogs expose size, finish, PEI, and packing — not only lifestyle photos. We build Next.js export catalogs with filterable collections, sample and container RFQ, and English pages international buyers actually use after IndiaMART and fair research."
      canonicalPath={ceramicExportersBlueprintSeo.path}
      serviceName="Website Development for Ceramic Exporters"
      directAnswer="Maxwell Electrodeal builds Morbi ceramic exporter websites with tile size/finish matrices, PEI ratings, and overseas RFQ paths. Packages: Starter ₹45,000 · Professional ₹75,000 · Growth ₹1,50,000. No advance on websites; full payment within 3 days of go-live + 18% GST. Reduce perpetual directory dependence with an owned inquiry channel."
      catalogWireframe={[
        "Collection grid: size, finish, thickness, PEI filter chips",
        "SKU family page: technical table + packing options for export",
        "Sample vs container RFQ with destination country",
        "Export English landing + factory / capacity narrative",
        "Morbi cluster + manufacturer hub internal links",
      ]}
      specificFeatures={[
        "Size × finish matrices and PEI / abrasion class in HTML tables",
        "Export packing, destination, and sample-request RFQ fields",
        "Overseas-buyer English pages (not Google-translated noise)",
        "Collection SEO for tile series and sanitary SKUs",
        "Direct WhatsApp for Morbi plant sales teams on shift",
        "Clear path off rented multi-supplier directory pages",
      ]}
      relatedLinks={[
        { label: "Ceramic manufacturer website", href: "/services/website-development/ceramic-manufacturer" },
        { label: "Morbi ceramic spoke", href: "/services/website-development/morbi-ceramic-website" },
        { label: "Exporter India hub", href: "/services/website-development/exporter-india" },
        { label: "Industrial catalog development", href: "/services/industrial-catalog-development" },
      ]}
    />
  );
}
