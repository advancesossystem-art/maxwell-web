import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { Hero } from "@/components/home/Hero";
import { AiEntitySummary } from "@/components/seo/AiEntitySummary";
import { ServicesJsonLd, HomeFAQJsonLd } from "@/components/seo/JsonLd";

const HomeProblem = dynamic(() =>
  import("@/components/home/HomeProblem").then((m) => ({ default: m.HomeProblem })),
);
const HomeSolution = dynamic(() =>
  import("@/components/home/HomeSolution").then((m) => ({ default: m.HomeSolution })),
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
const FeaturedWork = dynamic(() =>
  import("@/components/home/FeaturedWork").then((m) => ({ default: m.FeaturedWork })),
);
const HomeTrust = dynamic(() =>
  import("@/components/home/HomeTrust").then((m) => ({ default: m.HomeTrust })),
);
const WhyMaxwell = dynamic(() =>
  import("@/components/home/WhyMaxwell").then((m) => ({ default: m.WhyMaxwell })),
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
      <ServicesJsonLd />
      <HomeFAQJsonLd />
      <AiEntitySummary />
      <Hero />
      <HomeProblem />
      <HomeSolution />
      <ServicesExperience />
      <IndustriesShowcase />
      <DevelopmentProcess />
      <FeaturedWork />
      <HomeTrust />
      <WhyMaxwell />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
