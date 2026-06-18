import { ReviewsPageContent } from "@/components/trust/ReviewsPageContent";
import { ReviewsPageJsonLd } from "@/components/seo/ReviewsPageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Client Reviews & Testimonials",
  description: `Read client reviews and testimonials for ${siteConfig.name} — custom ERP, CRM, AI, and software development projects across India and globally. Honest feedback from manufacturing, healthcare, SaaS, and logistics clients.`,
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
