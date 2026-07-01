import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { pharmaceuticalSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: pharmaceuticalSeo.title,
  description: pharmaceuticalSeo.description,
  path: pharmaceuticalSeo.path,
  keywords: [...pharmaceuticalSeo.keywords],
});

export default function PharmaceuticalWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Pharmaceutical Company"
      location="India — Vadodara Pharma Hub Specialist"
      h1="Website Development for Pharmaceutical Companies India"
      description="Websites for pharma manufacturers, API suppliers, and medicine distributors in India. Vadodara is India's pharma capital — we understand the compliance, product catalog, and international buyer requirements of this industry."
      canonicalPath={pharmaceuticalSeo.path}
      serviceName="Website Development for Pharmaceutical Companies"
      specificFeatures={[
        "WHO-GMP compliance badge display",
        "Drug licence and regulatory info pages",
        "API product catalog with molecular data",
        "International buyer inquiry with country-specific fields",
        "Scheduled substance compliance notices",
      ]}
    />
  );
}
