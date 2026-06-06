import { CompanyPageContent } from "@/components/company/CompanyPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Company — Overview & Delivery Model",
  description: `${siteConfig.name} company overview: business model, delivery methodology, quality standards, and global service coverage.`,
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="company" path="/company" title="Company Overview" />
      <CompanyPageContent />
    </>
  );
}
