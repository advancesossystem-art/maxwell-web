import dynamic from "next/dynamic";

const PortalSettings = dynamic(() =>
  import("@/components/portal/PortalSettings").then((m) => ({ default: m.PortalSettings })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Settings — Client Portal",
  description: "Profile, notifications, and portal preferences.",
  path: "/portal/settings",
  noIndex: true,
});

export default function PortalSettingsPage() {
  return <PortalSettings />;
}
