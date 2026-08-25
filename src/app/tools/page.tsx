import { ToolsHub } from "@/components/tools/ToolsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Industrial Website Cost Estimator",
  description:
    "Free RFQ cost estimator for manufacturer websites in Gujarat and India. Honest planning ranges in 4 minutes — no signup. From ₹35,000 builds.",
  path: "/tools",
  keywords: ["industrial website cost estimator", "manufacturer website cost India", "RFQ website estimator", "website cost Gujarat"],
  absoluteTitle: true,
});

export default function ToolsPage() {
  return <ToolsHub />;
}
