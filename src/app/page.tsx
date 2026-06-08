import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { HomeFAQJsonLd } from "@/components/seo/JsonLd";
import { IndiaSeoHomeSection } from "@/components/home/IndiaSeoHomeSection";
import { GlobalTrustBar } from "@/components/conversion/GlobalTrustBar";
import { TrustProofStrip } from "@/components/conversion/TrustProofStrip";
import { RiskReductionBar } from "@/components/conversion/RiskReductionBar";

const HomeProblem = dynamic(() =>
  import("@/components/home/HomeProblem").then((m) => ({ default: m.HomeProblem })),
);
const HomeProblemSolutionMap = dynamic(() =>
  import("@/components/home/HomeProblemSolutionMap").then((m) => ({ default: m.HomeProblemSolutionMap })),
);
const HomeSolution = dynamic(() =>
  import("@/components/home/HomeSolution").then((m) => ({ default: m.HomeSolution })),
);
const HomeBusinessOutcomes = dynamic(() =>
  import("@/components/home/HomeBusinessOutcomes").then((m) => ({ default: m.HomeBusinessOutcomes })),
);
const ServicesExperience = dynamic(() =>
  import("@/components/home/ServicesExperience").then((m) => ({ default: m.ServicesExperience })),
);
const IndustriesShowcase = dynamic(() =>
  import("@/components/home/IndustriesShowcase").then((m) => ({ default: m.IndustriesShowcase })),
);
const DevelopmentProcess = dynamic(() =>
  import("@/components/home/DevelopmentProcess").then((m) => ({ default: m.DevelopmentProcess })),
);
const HomeCaseStudies = dynamic(() =>
  import("@/components/home/HomeCaseStudies").then((m) => ({ default: m.HomeCaseStudies })),
);
const HomeToolsSpotlight = dynamic(() =>
  import("@/components/home/HomeToolsSpotlight").then((m) => ({ default: m.HomeToolsSpotlight })),
);
const WhyMaxwell = dynamic(() =>
  import("@/components/home/WhyMaxwell").then((m) => ({ default: m.WhyMaxwell })),
);
const HomeSocialProof = dynamic(() =>
  import("@/components/home/HomeSocialProof").then((m) => ({ default: m.HomeSocialProof })),
);
const HomeTrust = dynamic(() =>
  import("@/components/home/HomeTrust").then((m) => ({ default: m.HomeTrust })),
);
const HomeTeamPreview = dynamic(() =>
  import("@/components/home/HomeTeamPreview").then((m) => ({ default: m.HomeTeamPreview })),
);
const HomeFAQ = dynamic(() =>
  import("@/components/home/HomeFAQ").then((m) => ({ default: m.HomeFAQ })),
);
const FinalCTA = dynamic(() =>
  import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
);

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomeFAQJsonLd />
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
      <IndustriesShowcase />
      <DevelopmentProcess />
      <HomeCaseStudies />
      <HomeToolsSpotlight />
      <WhyMaxwell />
      <HomeSocialProof />
      <HomeTeamPreview />
      <HomeTrust />
      <HomeFAQ />
      <IndiaSeoHomeSection />
      <FinalCTA />
    </>
  );
}
