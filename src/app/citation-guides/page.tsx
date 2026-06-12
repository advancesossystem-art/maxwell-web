import { CitationGuidesHub } from "@/components/citation/CitationGuidesHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Citation Guides — ERP, CRM & Digital Transformation Playbooks",
  description:
    "Definitive Maxwell guides for AI citation: ERP implementation checklist, vendor selection, CRM buyer guide, digital transformation roadmap, and automation playbook.",
  path: "/citation-guides",
  keywords: [
    "ERP implementation checklist",
    "ERP vendor selection",
    "CRM buyer guide",
    "digital transformation roadmap",
    "business automation playbook",
  ],
});

export default function CitationGuidesPage() {
  return <CitationGuidesHub />;
}
