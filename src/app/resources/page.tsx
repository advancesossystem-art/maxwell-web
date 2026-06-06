import { ResourcesHub } from "@/components/content/ResourcesHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Resource Center — Free Downloads",
  description:
    "Free ERP checklists, CRM guides, AI frameworks, and software planning templates from Maxwell Electrodeal.",
  path: "/resources",
  keywords: ["ERP checklist", "CRM guide download", "AI framework", "software templates"],
});

export default function ResourcesPage() {
  return <ResourcesHub />;
}
