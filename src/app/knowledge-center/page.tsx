import { KnowledgeCenterHub } from "@/components/knowledge/KnowledgeCenterHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Knowledge Center — ERP, CRM, AI & Manufacturing Authority",
  description:
    "Maxwell Knowledge Center: ERP, CRM, AI, automation, digital transformation, and manufacturing technology guides, research, answers, and tools.",
  path: "/knowledge-center",
  keywords: [
    "ERP knowledge",
    "CRM knowledge",
    "AI manufacturing",
    "digital transformation guide",
    "manufacturing technology",
  ],
});

export default function KnowledgeCenterPage() {
  return <KnowledgeCenterHub />;
}
