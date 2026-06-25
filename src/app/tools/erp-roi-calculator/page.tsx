import dynamic from "next/dynamic";

const ErpRoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/ErpRoiCalculatorTool").then((m) => ({ default: m.ErpRoiCalculatorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("erp-roi-calculator")!;

export const metadata = buildPageMetadata({
  title: "Free ERP ROI Calculator — 5-Year Payback Tool",
  description:
    "Estimate ERP payback, inventory savings & 5-year ROI for Indian manufacturers. Free calculator — no signup. See your numbers in 4 minutes.",
  path: `/tools/${tool.slug}`,
  keywords: [...tool.tags, "erp roi calculator", "erp return on investment", "erp payback period"],
});

export default function Page() {
  return (
    <ToolRouteShell slug="erp-roi-calculator">
      <ErpRoiCalculatorTool />
    </ToolRouteShell>
  );
}
