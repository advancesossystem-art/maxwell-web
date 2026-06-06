import dynamic from "next/dynamic";

const PortalMeetings = dynamic(() =>
  import("@/components/portal/PortalMeetings").then((m) => ({ default: m.PortalMeetings })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Meetings — Client Portal",
  description: "Meeting agendas, notes, and action items.",
  path: "/portal/meetings",
  noIndex: true,
});

export default function PortalMeetingsPage() {
  return <PortalMeetings />;
}
