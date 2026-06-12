import { ResearchHub } from "@/components/research/ResearchHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Maxwell Research — Industry Reports & Original Analysis",
  description:
    "Original Maxwell research: manufacturing technology 2026, ERP and CRM adoption India, digital transformation trends, and AI in manufacturing — with statistics and citations.",
  path: "/research",
  keywords: [
    "ERP adoption India",
    "CRM adoption India",
    "manufacturing technology report",
    "AI manufacturing India",
    "digital transformation trends",
  ],
});

export default function ResearchPage() {
  return <ResearchHub />;
}
