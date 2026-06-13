import dynamic from "next/dynamic";
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const VendorScorecardTool = dynamic(() =>
  import("@/components/tools/implementations/VendorScorecardTool").then((m) => ({ default: m.VendorScorecardTool })),
);

const tool = getToolBySlug("vendor-comparison-scorecard")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — Compare Software Vendors`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return (
    <ToolRouteShell slug="vendor-comparison-scorecard">
      <VendorScorecardTool />
    </ToolRouteShell>
  );
}
