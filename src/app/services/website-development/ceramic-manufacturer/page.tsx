import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { ceramicSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: ceramicSeo.title,
  description: ceramicSeo.description,
  path: ceramicSeo.path,
  keywords: [...ceramicSeo.keywords],
});

export default function CeramicWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Ceramic Manufacturer"
      location="Morbi, Gujarat — World's Largest Ceramic Hub"
      h1="Website Development for Ceramic Manufacturers Morbi Gujarat"
      description="Morbi is the world's largest ceramic hub — 800+ manufacturers, but most rely only on trade fairs and IndiaMART. We build websites that generate direct international buyer inquiries from the US, Europe, and Middle East."
      canonicalPath={ceramicSeo.path}
      serviceName="Website Development for Ceramic Manufacturers"
      specificFeatures={[
        "Tile catalog with size, finish, and PEI rating",
        "Virtual room visualizer integration",
        "Sample request and container inquiry forms",
        "International shipping and MOQ information",
        "BIS and ISO certification display",
      ]}
    />
  );
}
