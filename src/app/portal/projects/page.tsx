import dynamic from "next/dynamic";

const PortalProjects = dynamic(() =>
  import("@/components/portal/PortalProjects").then((m) => ({ default: m.PortalProjects })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Projects — Client Portal",
  description: "Track project timelines, milestones, and health scores.",
  path: "/portal/projects",
  noIndex: true,
});

export default function PortalProjectsPage() {
  return <PortalProjects />;
}
