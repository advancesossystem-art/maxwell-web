import { ThankYouPageContent } from "@/components/leads/ThankYouPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your submission has been received. Maxwell Electrodeal will respond within 24 hours.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return <ThankYouPageContent />;
}
