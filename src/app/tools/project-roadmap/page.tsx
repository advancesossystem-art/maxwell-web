import dynamic from "next/dynamic";

const ProjectRoadmapTool = dynamic(() =>
  import("@/components/tools/implementations/ProjectRoadmapTool").then((m) => ({ default: m.ProjectRoadmapTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("project-roadmap")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <ProjectRoadmapTool />;
}
