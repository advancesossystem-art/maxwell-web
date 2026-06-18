import dynamic from "next/dynamic";

const RoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/RoiCalculatorTool").then((m) => ({ default: m.RoiCalculatorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("roi-calculator")!;

export const metadata = buildPageMetadata({
  title: "Software ROI Calculator India | Maxwell Electrodeal",
  description:
    "Free software ROI calculator for Indian businesses. Estimate annual savings, payback period, and Year 1 ROI from automating manual processes with custom ERP, CRM, and software.",
  path: `/tools/${tool.slug}`,
  keywords: [
    ...tool.tags,
    "software ROI calculator India",
    "custom software ROI",
    "ERP ROI calculator",
    "automation savings calculator",
  ],
});

export default function Page() {
  return (
    <ToolRouteShell slug="roi-calculator">
      <RoiCalculatorTool />
    </ToolRouteShell>
  );
}
