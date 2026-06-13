import dynamic from "next/dynamic";

const ProposalGeneratorTool = dynamic(() =>
  import("@/components/tools/implementations/ProposalGeneratorTool").then((m) => ({ default: m.ProposalGeneratorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("proposal-generator")!;

export const metadata = buildPageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return (
    <ToolRouteShell slug="proposal-generator">
      <ProposalGeneratorTool />
    </ToolRouteShell>
  );
}
