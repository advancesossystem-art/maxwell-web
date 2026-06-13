import dynamic from "next/dynamic";
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const TeamSizeCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/TeamSizeCalculatorTool").then((m) => ({ default: m.TeamSizeCalculatorTool })),
);

const tool = getToolBySlug("team-size-calculator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — Dev Team Staffing Guide`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return (
    <ToolRouteShell slug="team-size-calculator">
      <TeamSizeCalculatorTool />
    </ToolRouteShell>
  );
}
