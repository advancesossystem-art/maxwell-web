import dynamic from "next/dynamic";

const DxAssessmentTool = dynamic(() =>
  import("@/components/tools/implementations/DxAssessmentTool").then((m) => ({ default: m.DxAssessmentTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("digital-transformation-assessment")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <DxAssessmentTool />;
}
