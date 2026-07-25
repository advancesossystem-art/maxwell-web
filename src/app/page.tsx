import type { Metadata } from "next";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { HomepageStructuredData } from "@/components/seo/HomepageStructuredData";
import { GlobalTrustBar } from "@/components/conversion/GlobalTrustBar";
import { FounderAuthorityCard } from "@/components/trust/FounderAuthorityCard";
import { TrustProofStrip } from "@/components/conversion/TrustProofStrip";
import { RiskReductionBar } from "@/components/conversion/RiskReductionBar";
import { HomeWhatWeBuild } from "@/components/home/HomeWhatWeBuild";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeProblemSolutionMap } from "@/components/home/HomeProblemSolutionMap";
import { DeferredHomeBelowFold } from "@/components/home/DeferredHomeBelowFold";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <Hero />
      <AiEntitySummary />
      <TrustProofStrip />
      <GlobalTrustBar />
      <FounderAuthorityCard compact />
      <RiskReductionBar />
      <HomeWhatWeBuild />
      <HomeProblem />
      <HomeProblemSolutionMap />
      <DeferredHomeBelowFold />
    </>
  );
}
