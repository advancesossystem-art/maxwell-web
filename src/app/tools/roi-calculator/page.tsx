import dynamic from "next/dynamic";

const RoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/RoiCalculatorTool").then((m) => ({ default: m.RoiCalculatorTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("roi-calculator")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <RoiCalculatorTool />;
}
