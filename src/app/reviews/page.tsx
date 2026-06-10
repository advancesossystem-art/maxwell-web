import { ReviewsPageContent } from "@/components/trust/ReviewsPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Reviews & Client Feedback",
  description: `Honest client feedback and third-party review links for ${siteConfig.name}. No fabricated ratings — Clutch, G2, and Google profiles when available.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="reviews" path="/reviews" title="Reviews" />
      <ReviewsPageContent />
    </>
  );
}
