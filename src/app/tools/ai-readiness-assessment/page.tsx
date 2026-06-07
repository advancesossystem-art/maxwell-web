import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const AiReadinessAssessmentTool = dynamic(() =>
  import("@/components/tools/implementations/AiReadinessAssessmentTool").then((m) => ({ default: m.AiReadinessAssessmentTool })),
);

const tool = getToolBySlug("ai-readiness-assessment")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — AI Maturity Score & Roadmap`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <AiReadinessAssessmentTool />;
}
