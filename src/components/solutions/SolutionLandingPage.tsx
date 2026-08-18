import {
  SolutionHero,
  SolutionMarketInsights,
  SolutionChallenges,
  SolutionApproach,
  SolutionROI,
  SolutionCaseStudies,
  SolutionInternalLinks,
  SolutionFAQ,
  SolutionCTA,
} from "@/components/solutions/SolutionSections";
import { SolutionPageJsonLd } from "@/components/seo/JsonLd";
import type { SolutionPageData } from "@/lib/solutions-data";

/** Tight layout: no stacked trust/founder bands (they added empty space and off-topic copy). */
export function SolutionLandingPage({ solution }: { solution: SolutionPageData }) {
  return (
    <>
      <SolutionPageJsonLd solution={solution} />
      <SolutionHero solution={solution} />
      <SolutionMarketInsights solution={solution} />
      <SolutionChallenges solution={solution} />
      <SolutionApproach solution={solution} />
      <SolutionROI solution={solution} />
      <SolutionCaseStudies solution={solution} />
      <SolutionInternalLinks solution={solution} />
      <SolutionFAQ solution={solution} />
      <SolutionCTA solution={solution} />
    </>
  );
}
