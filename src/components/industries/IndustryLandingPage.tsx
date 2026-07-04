import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndustryHero, IndustryWorkflow } from "@/components/industries/IndustryHero";
import {
  IndustryChallenges,
  IndustrySolutions,
  IndustrySoftwareStack,
  IndustryImpactMetrics,
} from "@/components/industries/IndustrySections";
import {
  IndustryUseCases,
  IndustryCaseStudy,
  IndustryWhy,
  IndustryFAQ,
  IndustryFocusAreas,
} from "@/components/industries/IndustrySections2";
import { IndustryCTA, IndustryCTAStrip } from "@/components/industries/IndustryCTA";
import { IndustryPageJsonLd } from "@/components/seo/JsonLd";
import { GeoContentSection } from "@/components/authority/GeoContentSection";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { ProofSignalsBar } from "@/components/trust/ProofSignalsBar";
import { buildIndustryGeo } from "@/lib/geo-page-content";
import { getStatisticsForIndustry } from "@/lib/statistics-data";
import { IndustryLeadForm } from "@/components/leads/IndustryLeadForm";
import { StickyEstimateCTA } from "@/components/common/StickyEstimateCTA";
import type { IndustryPageData, IndustrySlug } from "@/lib/industries-data";

const industryCaseStudySlug: Partial<Record<IndustrySlug, string>> = {
  manufacturing: "manufacturing-erp",
  healthcare: "healthcare-management",
  education: "educational-portal",
  logistics: "logistics-platform",
  retail: "retail-analytics",
  construction: "construction-platform",
  chemical: "chemical-industry-erp",
  "chemical-manufacturing": "chemical-industry-erp",
  pharma: "healthcare-management",
  textile: "manufacturing-erp",
  automotive: "manufacturing-erp",
  cement: "construction-platform",
  "cement-construction-materials": "construction-platform",
  "education-data-privacy": "educational-portal",
};

export function IndustryLandingPage({ industry }: { industry: IndustryPageData }) {
  const geo = buildIndustryGeo(industry);
  const stats = getStatisticsForIndustry(industry.slug);
  const showErpRoiLink = [...stats.industry, ...stats.market, ...stats.benchmark].some(
    (s) => s.category === "erp",
  );

  return (
    <>
      <IndustryPageJsonLd industry={industry} />
      <IndustryHero industry={industry} />
      <GeoContentSection geo={geo} />
      <StatisticsPanel {...stats} />
      {showErpRoiLink ? (
        <Container className="border-b border-border pb-10">
          <Link
            href="/tools/erp-roi-calculator"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            Free ERP ROI Calculator — estimate 5-year payback →
          </Link>
        </Container>
      ) : null}
      <ProofSignalsBar />
      <IndustryFocusAreas industry={industry} />
      <IndustryWorkflow industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustrySolutions industry={industry} />
      <IndustrySoftwareStack industry={industry} />
      <IndustryImpactMetrics industry={industry} />
      <IndustryUseCases industry={industry} />
      <IndustryCaseStudy industry={industry} />
      <IndustryWhy industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryLeadForm
        industryName={industry.title}
        industrySlug={industry.slug}
        formTitle={industry.leadFormTitle}
        submitLabel={industry.leadFormSubmitLabel}
      />
      <Container>
        <IndustryCTA
          industryName={industry.title}
          caseStudySlug={industryCaseStudySlug[industry.slug] ?? "manufacturing-erp"}
        />
      </Container>
      <IndustryCTAStrip industryName={industry.title} />
      <StickyEstimateCTA service={industry.title} source={`industry-${industry.slug}`} />
    </>
  );
}
