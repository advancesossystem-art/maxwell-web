import { ToolsHub } from "@/components/tools/ToolsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "AI Business Tools — Free Software Planning Tools",
  description:
    "Free enterprise tools: project roadmap generator, proposal builder, RFP creator, tech stack advisor, cost calculator, digital maturity assessment, and ROI calculator.",
  path: "/tools",
  keywords: ["software cost calculator", "project roadmap", "RFP builder", "tech stack advisor", "ROI calculator"],
});

export default function ToolsPage() {
  return <ToolsHub />;
}
