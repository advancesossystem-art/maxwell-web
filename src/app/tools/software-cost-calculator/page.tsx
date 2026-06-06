import dynamic from "next/dynamic";

const SoftwareCostCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/SoftwareCostCalculatorTool").then((m) => ({ default: m.SoftwareCostCalculatorTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("software-cost-calculator")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <SoftwareCostCalculatorTool />;
}
