import { ReviewsPageContent } from "@/components/trust/ReviewsPageContent";
import { ReviewsPageJsonLd } from "@/components/seo/ReviewsPageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Client Work & Reviews — Manufacturer Website Projects",
  description: `Verified client work from ${siteConfig.name} — industrial catalog websites, RFQ systems, and B2B platforms for manufacturers in Gujarat and India. Named projects with live URLs.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <ReviewsPageJsonLd />
      <ReviewsPageContent />
    </>
  );
}
