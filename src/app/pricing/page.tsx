import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = createMetadata({
  title: "Website Pricing India 2026 — TCO vs WordPress | From ₹45K",
  description:
    "Compare 3-year TCO before you buy: WordPress ₹2.77L vs Maxwell Next.js ₹1.2L. Published tiers — Starter ₹45K · Professional ₹75K · Growth ₹1.5L. GST invoice. Full IP ownership.",
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
