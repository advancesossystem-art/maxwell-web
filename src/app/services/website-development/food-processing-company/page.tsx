import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { foodProcessingSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: foodProcessingSeo.title,
  description: foodProcessingSeo.description,
  path: foodProcessingSeo.path,
  keywords: [...foodProcessingSeo.keywords],
});

export default function FoodProcessingWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Food Processing Company"
      location="India (Pan-India Delivery)"
      h1="Website Development for Food Processing Companies India"
      description="Food processing manufacturers in India face a trust problem — buyers want to see FSSAI certification, GMP compliance, and product specifications before placing a bulk order. A professional website with your full product catalog, certifications, and inquiry forms converts more buyers than a paid directory listing that puts your competitors right next to you."
      canonicalPath={foodProcessingSeo.path}
      serviceName="Website Development for Food Processing Companies"
      caseStudy={true}
      specificFeatures={[
        "FSSAI license and certification display per product category",
        "Product pages with shelf life, packaging sizes, and MOQ details",
        "Bulk inquiry and sample request forms",
        "Export-ready product descriptions (APEDA, FDA-compliance mentions where relevant)",
        "Integration with WhatsApp Business for instant inquiry routing",
      ]}
    />
  );
}
