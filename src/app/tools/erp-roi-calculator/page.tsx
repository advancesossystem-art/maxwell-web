import dynamic from "next/dynamic";

const ErpRoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/ErpRoiCalculatorTool").then((m) => ({ default: m.ErpRoiCalculatorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("erp-roi-calculator")!;

export const metadata = buildPageMetadata({
  title: "Free ERP ROI Calculator India — See If ERP Pays Off for Your Business",
  description:
    "Calculate ERP payback period, inventory savings & 5-year ROI for Indian manufacturers and businesses. Free calculator — no signup required. Get your numbers in 4 minutes.",
  path: `/tools/${tool.slug}`,
  keywords: [...tool.tags, "erp roi calculator india", "erp return on investment india", "erp payback period", "is erp worth it india"],
});

export default function Page() {
  return (
    <ToolRouteShell slug="erp-roi-calculator">
      <ErpRoiCalculatorTool />
    </ToolRouteShell>
  );
}
