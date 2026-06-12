import { EeatAuditHub } from "@/components/authority/EeatAuditHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "E-E-A-T Content Audit — Experience, Expertise, Authority, Trust",
  description:
    "Maxwell E-E-A-T audit: scores, weaknesses, and fixes for knowledge center, answers, guides, reports, case studies, and service pages.",
  path: "/eeat-audit",
  keywords: ["E-E-A-T audit", "content authority", "SEO trust signals"],
  noIndex: true,
});

export default function EeatAuditPage() {
  return <EeatAuditHub />;
}
