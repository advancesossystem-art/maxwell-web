import type { Metadata } from "next";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { HomepageStructuredData } from "@/components/seo/HomepageStructuredData";
import { IndiaSeoHomeSection } from "@/components/home/IndiaSeoHomeSection";
import { GlobalTrustBar } from "@/components/conversion/GlobalTrustBar";
import { TrustProofStrip } from "@/components/conversion/TrustProofStrip";
import { RiskReductionBar } from "@/components/conversion/RiskReductionBar";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeProblemSolutionMap } from "@/components/home/HomeProblemSolutionMap";
import { HomeSolution } from "@/components/home/HomeSolution";
import { HomeBusinessOutcomes } from "@/components/home/HomeBusinessOutcomes";
import { ServicesExperience } from "@/components/home/ServicesExperience";
import { HomepageAssessment } from "@/components/leads/HomepageAssessment";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { HomeCaseStudies } from "@/components/home/HomeCaseStudies";
import { HomeToolsSpotlight } from "@/components/home/HomeToolsSpotlight";
import { WhyMaxwell } from "@/components/home/WhyMaxwell";
import { HomeSocialProof } from "@/components/home/HomeSocialProof";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <AiEntitySummary />
      <Hero />
      <TrustProofStrip />
      <GlobalTrustBar />
      <RiskReductionBar />
      <HomeProblem />
      <HomeProblemSolutionMap />
      <HomeSolution />
      <HomeBusinessOutcomes />
      <ServicesExperience />
      <HomepageAssessment />
      <IndustriesShowcase />
      <DevelopmentProcess />
      <HomeCaseStudies />
      <HomeToolsSpotlight />
      <WhyMaxwell />
      <HomeSocialProof />
      <HomeTrust />
      <HomeFAQ />
      <IndiaSeoHomeSection />
      <FinalCTA />
    </>
  );
}
