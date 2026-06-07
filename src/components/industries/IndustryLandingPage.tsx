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
import type { IndustryPageData, IndustrySlug } from "@/lib/industries-data";

const industryCaseStudySlug: Partial<Record<IndustrySlug, string>> = {
  manufacturing: "manufacturing-erp",
  healthcare: "healthcare-management",
  education: "educational-portal",
  logistics: "logistics-platform",
  retail: "retail-analytics",
  construction: "construction-platform",
  chemical: "manufacturing-erp",
  pharma: "healthcare-management",
  textile: "manufacturing-erp",
  automotive: "manufacturing-erp",
};

export function IndustryLandingPage({ industry }: { industry: IndustryPageData }) {
  return (
    <>
      <IndustryPageJsonLd industry={industry} />
      <IndustryHero industry={industry} />
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
      <Container>
        <IndustryCTA
          industryName={industry.title}
          caseStudySlug={industryCaseStudySlug[industry.slug] ?? "manufacturing-erp"}
        />
      </Container>
      <IndustryCTAStrip industryName={industry.title} />
    </>
  );
}
