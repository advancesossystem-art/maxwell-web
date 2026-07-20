import {
  SolutionHero,
  SolutionMarketInsights,
  SolutionChallenges,
  SolutionApproach,
  SolutionROI,
  SolutionCaseStudies,
  SolutionIndustries,
  SolutionInternalLinks,
  SolutionFAQ,
  SolutionCTA,
} from "@/components/solutions/SolutionSections";
import { SolutionPageJsonLd } from "@/components/seo/JsonLd";
import { FounderAuthorityCard } from "@/components/trust/FounderAuthorityCard";
import { ProofSignalsBar } from "@/components/trust/ProofSignalsBar";
import type { SolutionPageData } from "@/lib/solutions-data";

export function SolutionLandingPage({ solution }: { solution: SolutionPageData }) {
  return (
    <>
      <SolutionPageJsonLd solution={solution} />
      <SolutionHero solution={solution} />
      <ProofSignalsBar compact />
      <FounderAuthorityCard compact />
      <SolutionMarketInsights solution={solution} />
      <SolutionChallenges solution={solution} />
      <SolutionApproach solution={solution} />
      <SolutionROI solution={solution} />
      <SolutionCaseStudies solution={solution} />
      <SolutionIndustries solution={solution} />
      <SolutionInternalLinks solution={solution} />
      <SolutionFAQ solution={solution} />
      <SolutionCTA solution={solution} />
    </>
  );
}
