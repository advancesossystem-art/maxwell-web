import { AboutPageContent } from "@/components/company/AboutPageContent";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { CompanyStatsBar } from "@/components/company/TrustMetrics";
import { createMetadata } from "@/lib/metadata";
import { companyStory } from "@/lib/company-data";
import { brandDisambiguation, siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Custom ERP Team in Vadodara — 50+ Projects",
  description:
    "Engineering team behind 50+ ERP & CRM builds for Indian manufacturers. Vadodara HQ since 2018. See our process — book a free strategy call.",
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
        description={`${siteConfig.legalName} — engineering digital power with precision since 2018. ${brandDisambiguation}`}
        below={<CompanyStatsBar />}
      />
      <AboutPageContent />
    </>
  );
}
