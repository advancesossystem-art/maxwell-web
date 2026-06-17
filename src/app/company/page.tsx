import { CompanyPageContent } from "@/components/company/CompanyPageContent";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { AccentGradient } from "@/components/design/typography";
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
      <CompanyPageHero
        breadcrumb={[{ label: "About", href: "/about" }, { label: "Company" }]}
        eyebrow="Company"
        title={<AccentGradient>{siteConfig.legalName}</AccentGradient>}
        description="A full-stack software company built for enterprise delivery, long-term partnerships, and measurable outcomes."
        below={<TrustStrip compact />}
      />
      <CompanyPageContent />
    </>
  );
}
