import dynamic from "next/dynamic";

const TechStackAdvisorTool = dynamic(() =>
  import("@/components/tools/implementations/TechStackAdvisorTool").then((m) => ({ default: m.TechStackAdvisorTool })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tech-stack-advisor")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <TechStackAdvisorTool />;
}
