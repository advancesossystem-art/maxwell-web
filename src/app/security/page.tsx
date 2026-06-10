import { SecurityPageContent } from "@/components/trust/SecurityPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Security & Trust Center",
  description: `Data handling, NDA, IP ownership, and hosting practices for ${siteConfig.name} software delivery engagements.`,
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="security" path="/security" title="Security" />
      <SecurityPageContent />
    </>
  );
}
