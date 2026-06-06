import dynamic from "next/dynamic";

const PortalLanding = dynamic(() =>
  import("@/components/portal/PortalLanding").then((m) => ({ default: m.PortalLanding })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Client Portal — Enterprise Project Hub",
  description:
    "Secure client portal for proposals, projects, documents, meetings, support tickets, and invoices. Professional SaaS experience for Maxwell clients.",
  path: "/portal",
  keywords: ["client portal", "project dashboard", "proposal review"],
  noIndex: true,
});

export default function PortalPage() {
  return <PortalLanding />;
}
