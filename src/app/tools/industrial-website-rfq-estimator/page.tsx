import dynamic from "next/dynamic";
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const IndustrialWebsiteRfqEstimatorTool = dynamic(() =>
  import("@/components/tools/implementations/IndustrialWebsiteRfqEstimatorTool").then((m) => ({
    default: m.IndustrialWebsiteRfqEstimatorTool,
  })),
);

const tool = getToolBySlug("industrial-website-rfq-estimator")!;

export const metadata = buildPageMetadata({
  title: "Industrial Website Cost & RFQ Feature Estimator | Free | Maxwell",
  description:
    "Free industrial website cost estimator for manufacturers: Starter ₹45k / Professional ₹75k planning ranges based on SKU count, RFQ depth, catalog, GIDC SEO, and dealer portal needs. Not a fixed quote.",
  path: `/tools/${tool.slug}`,
  keywords: [
    ...tool.tags,
    "industrial website cost",
    "RFQ website price estimator",
    "manufacturer website cost calculator",
    "industrial website cost India",
    "B2B RFQ website price",
  ],
});

export default function Page() {
  return (
    <ToolRouteShell slug="industrial-website-rfq-estimator">
      <div className="mb-8 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-display text-xl font-bold text-[var(--v6-text,#0f172a)]">
          Estimate industrial website cost from RFQ and catalog scope
        </h2>
        <p>
          Use this planner when you need a budget ballpark for an industrial or manufacturer website — product SKUs,
          RFQ depth, GIDC SEO, and optional dealer portal. Published anchors: Starter from ₹45,000 and Professional from
          ₹75,000. Ranges are honest planning bands, not guaranteed quotes. ERP is billed separately with milestones.
        </p>
      </div>
      <IndustrialWebsiteRfqEstimatorTool />
    </ToolRouteShell>
  );
}
