import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { HomeSectionSkeleton } from "@/components/home/HomeSectionSkeleton";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { AiDiscoveryJsonLd } from "@/components/seo/AiDiscoveryJsonLd";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { homepageFaqs } from "@/lib/homepage";
import { siteConfig } from "@/lib/constants";
import { IndiaSeoHomeSection } from "@/components/home/IndiaSeoHomeSection";
import { GlobalTrustBar } from "@/components/conversion/GlobalTrustBar";
import { TrustProofStrip } from "@/components/conversion/TrustProofStrip";
import { RiskReductionBar } from "@/components/conversion/RiskReductionBar";

const HomeProblem = dynamic(
  () => import("@/components/home/HomeProblem").then((m) => ({ default: m.HomeProblem })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeProblemSolutionMap = dynamic(
  () =>
    import("@/components/home/HomeProblemSolutionMap").then((m) => ({
      default: m.HomeProblemSolutionMap,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeSolution = dynamic(
  () => import("@/components/home/HomeSolution").then((m) => ({ default: m.HomeSolution })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeBusinessOutcomes = dynamic(
  () =>
    import("@/components/home/HomeBusinessOutcomes").then((m) => ({
      default: m.HomeBusinessOutcomes,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const ServicesExperience = dynamic(
  () =>
    import("@/components/home/ServicesExperience").then((m) => ({
      default: m.ServicesExperience,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const IndustriesShowcase = dynamic(
  () =>
    import("@/components/home/IndustriesShowcase").then((m) => ({
      default: m.IndustriesShowcase,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const DevelopmentProcess = dynamic(
  () =>
    import("@/components/home/DevelopmentProcess").then((m) => ({
      default: m.DevelopmentProcess,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeCaseStudies = dynamic(
  () => import("@/components/home/HomeCaseStudies").then((m) => ({ default: m.HomeCaseStudies })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeToolsSpotlight = dynamic(
  () =>
    import("@/components/home/HomeToolsSpotlight").then((m) => ({
      default: m.HomeToolsSpotlight,
    })),
  { loading: () => <HomeSectionSkeleton /> },
);
const WhyMaxwell = dynamic(
  () => import("@/components/home/WhyMaxwell").then((m) => ({ default: m.WhyMaxwell })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeSocialProof = dynamic(
  () => import("@/components/home/HomeSocialProof").then((m) => ({ default: m.HomeSocialProof })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeTrust = dynamic(
  () => import("@/components/home/HomeTrust").then((m) => ({ default: m.HomeTrust })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeTeamPreview = dynamic(
  () => import("@/components/home/HomeTeamPreview").then((m) => ({ default: m.HomeTeamPreview })),
  { loading: () => <HomeSectionSkeleton /> },
);
const HomeFAQ = dynamic(
  () => import("@/components/home/HomeFAQ").then((m) => ({ default: m.HomeFAQ })),
  { loading: () => <HomeSectionSkeleton /> },
);
const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { loading: () => <HomeSectionSkeleton /> },
);

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd
        faqs={homepageFaqs}
        id={`${siteConfig.url}/#homepage-faq`}
        name={`${siteConfig.name} — Homepage FAQ`}
      />
      <AiDiscoveryJsonLd />
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
