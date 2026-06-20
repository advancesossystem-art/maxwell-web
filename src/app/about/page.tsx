import { AboutPageContent } from "@/components/company/AboutPageContent";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { CompanyStatsBar } from "@/components/company/TrustMetrics";
import { createMetadata } from "@/lib/metadata";
import { companyStory } from "@/lib/company-data";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About Maxwell — 50+ Projects, Vadodara",
  description:
    "Vadodara IT company since 2018, based in Gujarat. 50+ ERP, CRM and web projects across India. Process, team, and free consultation — reply within 24 hours.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="about" path="/about" title="About Us" />
      <CompanyPageHero
        breadcrumb={[{ label: "About" }]}
        eyebrow="About Us"
        title={companyStory.headline}
        description={`${siteConfig.legalName} — engineering digital power with precision since 2018.`}
        below={<CompanyStatsBar />}
      />
      <AboutPageContent />
    </>
  );
}
