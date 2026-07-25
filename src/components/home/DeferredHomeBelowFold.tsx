"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HomeSolution = dynamic(
  () => import("@/components/home/HomeSolution").then((m) => ({ default: m.HomeSolution })),
  { ssr: false },
);
const HomeBusinessOutcomes = dynamic(
  () => import("@/components/home/HomeBusinessOutcomes").then((m) => ({ default: m.HomeBusinessOutcomes })),
  { ssr: false },
);
const ServicesExperience = dynamic(
  () => import("@/components/home/ServicesExperience").then((m) => ({ default: m.ServicesExperience })),
  { ssr: false },
);
const IndustriesShowcase = dynamic(
  () => import("@/components/home/IndustriesShowcase").then((m) => ({ default: m.IndustriesShowcase })),
  { ssr: false },
);
const DevelopmentProcess = dynamic(
  () => import("@/components/home/DevelopmentProcess").then((m) => ({ default: m.DevelopmentProcess })),
  { ssr: false },
);
const HomeCaseStudies = dynamic(
  () => import("@/components/home/HomeCaseStudies").then((m) => ({ default: m.HomeCaseStudies })),
  { ssr: false },
);
const HomeToolsSpotlight = dynamic(
  () => import("@/components/home/HomeToolsSpotlight").then((m) => ({ default: m.HomeToolsSpotlight })),
  { ssr: false },
);
const WhyMaxwell = dynamic(
  () => import("@/components/home/WhyMaxwell").then((m) => ({ default: m.WhyMaxwell })),
  { ssr: false },
);
const HomeSocialProof = dynamic(
  () => import("@/components/home/HomeSocialProof").then((m) => ({ default: m.HomeSocialProof })),
  { ssr: false },
);
const StraightAnswers = dynamic(
  () => import("@/components/conversion/StraightAnswers").then((m) => ({ default: m.StraightAnswers })),
  { ssr: false },
);
const WhoWeAreNotFor = dynamic(
  () => import("@/components/conversion/WhoWeAreNotFor").then((m) => ({ default: m.WhoWeAreNotFor })),
  { ssr: false },
);
const HomeTrust = dynamic(
  () => import("@/components/home/HomeTrust").then((m) => ({ default: m.HomeTrust })),
  { ssr: false },
);
const HomeFAQ = dynamic(
  () => import("@/components/home/HomeFAQ").then((m) => ({ default: m.HomeFAQ })),
  { ssr: false },
);
const IndiaSeoHomeSection = dynamic(
  () => import("@/components/home/IndiaSeoHomeSection").then((m) => ({ default: m.IndiaSeoHomeSection })),
  { ssr: false },
);
const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { ssr: false },
);
const HomepageAssessment = dynamic(
  () => import("@/components/leads/HomepageAssessment").then((m) => ({ default: m.HomepageAssessment })),
  { ssr: false },
);
const WebsiteEstimateBanner = dynamic(() => import("@/components/home/WebsiteEstimateBanner"), {
  ssr: false,
});

function BelowFoldSections() {
  return (
    <>
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

/** Loads below-fold chunks only when the user approaches them (LCP/TBT win). */
export function DeferredHomeBelowFold() {
  const gateRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = gateRef.current;
    if (!el || load) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return <div ref={gateRef}>{load ? <BelowFoldSections /> : null}</div>;
}
