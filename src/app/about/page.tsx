import Link from "next/link";
import { AboutPageContent } from "@/components/company/AboutPageContent";
import { FounderAuthorityCard } from "@/components/trust/FounderAuthorityCard";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { CompanyStatsBar } from "@/components/company/TrustMetrics";
import { createMetadata } from "@/lib/metadata";
import { companyStory } from "@/lib/company-data";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About Maxwell Electrodeal — Website Engineering for Gujarat Manufacturers Since 2018",
  description:
    "Maxwell Electrodeal builds websites and software for manufacturers in Vadodara, Gujarat. Founded 2018 by Sanjay. 50+ projects delivered — chemical, pharma, engineering, FMCG. On-site discovery at GIDC estates. Free assessment.",
  path: "/about",
  keywords: [
    "about Maxwell Electrodeal",
    "website development company Vadodara",
    "Vadodara website engineering company",
    "Maxwell Electrodeal founder",
    "IT company Vadodara Gujarat",
    "industrial website development Gujarat",
  ],
});

export default function AboutPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="about" path="/about" title="About Us" />
      <CompanyPageHero
        breadcrumb={[{ label: "About" }]}
        eyebrow="About Us"
        title={companyStory.headline}
        description={`${siteConfig.legalName} — website engineering for businesses from Vadodara since 2018. ${companyMetricDisplay.projectsCompleted} projects delivered for manufacturers and growing companies in India and abroad.`}
        below={<CompanyStatsBar />}
      />
      <div className="border-b border-border bg-surface px-6 py-3 text-center text-sm text-muted">
        <Link href="/locations/india/vadodara" className="font-medium text-brand-600 hover:underline">
          {siteConfig.address}
        </Link>
      </div>
      <div className="bg-blue-600 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base font-medium">
          Building a software or website project? Get a free estimate from our team.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/get-estimate?source=about-banner"
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
          >
            Get Free Estimate
          </Link>
          <Link
            href="/book-consultation?source=about-banner"
            className="border border-white text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Book a Call
          </Link>
        </div>
      </div>
      <FounderAuthorityCard />
      <AboutPageContent />
    </>
  );
}
