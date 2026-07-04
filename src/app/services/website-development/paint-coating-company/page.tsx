import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { paintCoatingSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: paintCoatingSeo.title,
  description: paintCoatingSeo.description,
  path: paintCoatingSeo.path,
  keywords: [...paintCoatingSeo.keywords],
});

export default function PaintCoatingWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Paint & Coating Company"
      location="India (Gujarat Specialist)"
      h1="Website Development for Paint & Coating Companies India"
      description="Paint and industrial coating companies compete heavily on paid B2B directory platforms — dozens of suppliers appear for every buyer search. Your own website lets buyers find your exact product range on Google, download your TDS and SDS sheets, and contact your dealer network directly. Maxwell builds paint industry websites that generate both retail dealer inquiries and bulk industrial coating orders."
      canonicalPath={paintCoatingSeo.path}
      serviceName="Website Development for Paint & Coating Companies"
      caseStudy={true}
      specificFeatures={[
        "Shade card gallery with downloadable color charts",
        "TDS (Technical Data Sheet) and SDS downloads per product",
        "Dealer and distributor locator by state/city",
        "Application calculator (coverage per litre by surface type)",
        "Industrial vs. decorative product separation with distinct navigation",
      ]}
    />
  );
}
