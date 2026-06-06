import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo-helpers";

const PortalDashboard = dynamic(() =>
  import("@/components/portal/PortalDashboard").then((m) => ({ default: m.PortalDashboard })),
);

export const metadata = buildPageMetadata({
  title: "Portal Dashboard",
  description: "Client dashboard — projects, proposals, meetings, and support at a glance.",
  path: "/portal/dashboard",
  noIndex: true,
});

export default function PortalDashboardPage() {
  return <PortalDashboard />;
}
