import dynamic from "next/dynamic";

const CrmRoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/CrmRoiCalculatorTool").then((m) => ({ default: m.CrmRoiCalculatorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("crm-roi-calculator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — Sales Pipeline ROI & Payback`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return (
    <ToolRouteShell slug="crm-roi-calculator">
      <CrmRoiCalculatorTool />
    </ToolRouteShell>
  );
}
