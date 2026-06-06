import { SiteAuditDashboard } from "@/components/admin/SiteAuditDashboard";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Site Audit — Launch Readiness",
  description: "Executive launch readiness dashboard for Maxwell Electrodeal.",
  path: "/admin/site-audit",
  noIndex: true,
});

export default function SiteAuditPage() {
  return <SiteAuditDashboard />;
}
