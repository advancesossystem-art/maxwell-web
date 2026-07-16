import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = createMetadata({
  title: "Website Development Pricing — Fixed Prices, No Quote Games | Maxwell Electrodeal",
  description:
    "Published website pricing for Gujarat manufacturers: Starter ₹45,000 · Professional ₹75,000 · Growth ₹1,50,000. +18% GST. You own domain, hosting, and code. Vadodara.",
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
