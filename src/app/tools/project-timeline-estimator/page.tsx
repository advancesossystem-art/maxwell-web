import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const ProjectTimelineEstimatorTool = dynamic(() =>
  import("@/components/tools/implementations/ProjectTimelineEstimatorTool").then((m) => ({ default: m.ProjectTimelineEstimatorTool })),
);

const tool = getToolBySlug("project-timeline-estimator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — Software Delivery Schedule`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <ProjectTimelineEstimatorTool />;
}
