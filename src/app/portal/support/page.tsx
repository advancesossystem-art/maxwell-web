import dynamic from "next/dynamic";

const PortalSupport = dynamic(() =>
  import("@/components/portal/PortalSupport").then((m) => ({ default: m.PortalSupport })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Support — Client Portal",
  description: "Create and track support tickets.",
  path: "/portal/support",
  noIndex: true,
});

export default function PortalSupportPage() {
  return <PortalSupport />;
}
