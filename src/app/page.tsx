import type { Metadata } from "next";
import { createHomeMetadata } from "@/lib/seo/metadata-utils";
import { HomepageStructuredData } from "@/components/seo/HomepageStructuredData";
import { HomeCorridorStrip } from "@/components/home/HomeCorridorStrip";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomePricingSnapshot } from "@/components/home/HomePricingSnapshot";
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
      <HomeCorridorStrip />
      <HomeBuiltForBuyers />
      <HomeWebsiteTypes />
      <HomeProvenDelivery />
      <HomeTestimonials />
      <HomePricingSnapshot />
      <HomeTrustGrid />
      <HomeFounderBand />
      <HomeFAQ />
      <HomeFinalCta />
    </>
  );
}
