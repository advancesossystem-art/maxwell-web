import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = createMetadata({
  title: "Website Pricing India 2026 | From ₹35,000 | AMC ₹11,000",
  description:
    "Published website prices: Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L. Monthly AMC from ₹11,000 (SEO, weekly updates, two articles). GST invoice. Request a quote.",
  path: "/pricing",
  keywords: [
    "website development cost Vadodara",
    "website price Gujarat manufacturer",
    "fixed price website India",
    "manufacturer website cost",
  ],
});

export default function PricingPage() {
  return <PricingPageContent />;
}
