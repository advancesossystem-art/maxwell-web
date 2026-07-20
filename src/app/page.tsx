import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { HeroMotionEnhancer } from "@/components/home/HeroMotionEnhancer";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { HomepageStructuredData } from "@/components/seo/HomepageStructuredData";
import { GlobalTrustBar } from "@/components/conversion/GlobalTrustBar";
import { FounderAuthorityCard } from "@/components/trust/FounderAuthorityCard";
import { TrustProofStrip } from "@/components/conversion/TrustProofStrip";
import { RiskReductionBar } from "@/components/conversion/RiskReductionBar";
import { HomeWhatWeBuild } from "@/components/home/HomeWhatWeBuild";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeProblemSolutionMap } from "@/components/home/HomeProblemSolutionMap";
import { HomepageAssessment } from "@/components/leads/HomepageAssessment";
import WebsiteEstimateBanner from "@/components/home/WebsiteEstimateBanner";


const HomeSolution = dynamic(
  () => import("@/components/home/HomeSolution").then((m) => ({ default: m.HomeSolution })),
  { ssr: true },
);
const HomeBusinessOutcomes = dynamic(
  () => import("@/components/home/HomeBusinessOutcomes").then((m) => ({ default: m.HomeBusinessOutcomes })),
  { ssr: true },
);
const ServicesExperience = dynamic(
  () => import("@/components/home/ServicesExperience").then((m) => ({ default: m.ServicesExperience })),
  { ssr: true },
);
const IndustriesShowcase = dynamic(
  () => import("@/components/home/IndustriesShowcase").then((m) => ({ default: m.IndustriesShowcase })),
  { ssr: true },
);
const DevelopmentProcess = dynamic(
  () => import("@/components/home/DevelopmentProcess").then((m) => ({ default: m.DevelopmentProcess })),
  { ssr: true },
);
import { HomeCaseStudies } from "@/components/home/HomeCaseStudies";
const HomeToolsSpotlight = dynamic(
  () => import("@/components/home/HomeToolsSpotlight").then((m) => ({ default: m.HomeToolsSpotlight })),
  { ssr: true },
);
const WhyMaxwell = dynamic(
  () => import("@/components/home/WhyMaxwell").then((m) => ({ default: m.WhyMaxwell })),
  { ssr: true },
);
const HomeSocialProof = dynamic(
  () => import("@/components/home/HomeSocialProof").then((m) => ({ default: m.HomeSocialProof })),
  { ssr: true },
);
const StraightAnswers = dynamic(
  () => import("@/components/conversion/StraightAnswers").then((m) => ({ default: m.StraightAnswers })),
  { ssr: true },
);
const WhoWeAreNotFor = dynamic(
  () => import("@/components/conversion/WhoWeAreNotFor").then((m) => ({ default: m.WhoWeAreNotFor })),
  { ssr: true },
);
const HomeTrust = dynamic(
  () => import("@/components/home/HomeTrust").then((m) => ({ default: m.HomeTrust })),
  { ssr: true },
);
const HomeFAQ = dynamic(
  () => import("@/components/home/HomeFAQ").then((m) => ({ default: m.HomeFAQ })),
  { ssr: true },
);
const IndiaSeoHomeSection = dynamic(
  () => import("@/components/home/IndiaSeoHomeSection").then((m) => ({ default: m.IndiaSeoHomeSection })),
  { ssr: true },
);
const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { ssr: true },
);

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <Hero />
      <HeroMotionEnhancer />
      <AiEntitySummary />
      <TrustProofStrip />
      <GlobalTrustBar />
      <FounderAuthorityCard compact />
      <RiskReductionBar />
      <HomeWhatWeBuild />
      <HomeProblem />
      <HomeProblemSolutionMap />
      <HomeSolution />
      <HomeBusinessOutcomes />
      <ServicesExperience />
      <HomeCaseStudies />
      <HomeSocialProof />
      <HomepageAssessment />
      <IndustriesShowcase />
      <DevelopmentProcess />
      <HomeToolsSpotlight />
      <WhyMaxwell />
      <HomeTrust />
      <StraightAnswers />
      <WhoWeAreNotFor />
      <HomeFAQ />
      <IndiaSeoHomeSection />
      <FinalCTA />
      <WebsiteEstimateBanner />
    </>
  );
}
