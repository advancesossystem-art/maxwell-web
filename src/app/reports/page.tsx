import { ReportsHub } from "@/components/content/ReportsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Industry Reports — Market Intelligence",
  description:
    "Industry reports on manufacturing digital transformation, healthcare software, AI adoption, ERP trends, and SaaS markets.",
  path: "/reports",
  keywords: ["industry report", "digital transformation manufacturing", "AI adoption report"],
});

export default function ReportsPage() {
  return <ReportsHub />;
}
