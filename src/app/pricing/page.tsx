import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { MoneyInternalLinks } from "@/components/seo/MoneyInternalLinks";

export const metadata: Metadata = createMetadata({
  title: "Website Pricing Vadodara | From ₹35,000",
  description:
    "Website pricing for Vadodara & India: Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L. AMC from ₹15,000. GST invoice. Request a quote.",
  path: "/pricing",
  keywords: [
    "website development cost Vadodara",
    "website price Gujarat",
    "website development company Vadodara price",
    "business website cost India",
    "website AMC cost Vadodara",
    "manufacturer website cost India",
  ],
});

export default function PricingPage() {
  return (
    <>
      <PricingPageContent />
      <MoneyInternalLinks
        path="/pricing"
        links={[
          { label: "Manufacturing website cost", href: "/cost/manufacturing-website-cost" },
          { label: "Website cost Vadodara", href: "/cost/web-development-cost-vadodara" },
          { label: "Industrial cost estimator", href: "/tools/industrial-website-rfq-estimator" },
        ]}
      />
    </>
  );
}
