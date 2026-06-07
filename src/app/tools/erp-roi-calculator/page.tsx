import dynamic from "next/dynamic";

const ErpRoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/ErpRoiCalculatorTool").then((m) => ({ default: m.ErpRoiCalculatorTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("erp-roi-calculator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — Manufacturing & Distribution ERP Payback`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <ErpRoiCalculatorTool />;
}
