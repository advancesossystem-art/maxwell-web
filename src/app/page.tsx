import type { Metadata } from "next";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { HomepageStructuredData } from "@/components/seo/HomepageStructuredData";
import {
  Hero,
  HomeBuiltForBuyers,
  HomeWebsiteTypes,
  HomeProvenDelivery,
  HomeTrustGrid,
  HomeFounderBand,
  HomeFinalCta,
} from "@/components/home/Hero";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <Hero />
      <HomeBuiltForBuyers />
      <HomeWebsiteTypes />
      <HomeProvenDelivery />
      <HomeTrustGrid />
      <HomeFounderBand />
      <HomeFinalCta />
    </>
  );
}
