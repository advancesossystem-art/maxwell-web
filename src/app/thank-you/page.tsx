import { ThankYouPageContent } from "@/components/leads/ThankYouPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Estimate Request Received — We'll Be in Touch | Maxwell Electrodeal",
  description: "Your estimate request has been received. Maxwell Electrodeal will respond within 24 hours with a detailed phased estimate.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return <ThankYouPageContent />;
}
