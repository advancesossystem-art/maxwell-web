import { ToolsHub } from "@/components/tools/ToolsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Industrial Website Cost Estimator — Free Tool for Manufacturers",
  description:
    "Free RFQ cost estimator for industrial manufacturer websites in Gujarat and India. Get an honest website planning estimate in 4 minutes — no signup required.",
  path: "/tools",
  keywords: ["industrial website cost estimator", "manufacturer website cost India", "RFQ website estimator", "website cost Gujarat"],
});

export default function ToolsPage() {
  return <ToolsHub />;
}
