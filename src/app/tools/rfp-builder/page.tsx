import dynamic from "next/dynamic";

const RfpBuilderTool = dynamic(() =>
  import("@/components/tools/implementations/RfpBuilderTool").then((m) => ({ default: m.RfpBuilderTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("rfp-builder")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return (
    <ToolRouteShell slug="rfp-builder">
      <RfpBuilderTool />
    </ToolRouteShell>
  );
}
