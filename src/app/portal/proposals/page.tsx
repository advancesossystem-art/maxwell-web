import dynamic from "next/dynamic";

const PortalProposals = dynamic(() =>
  import("@/components/portal/PortalProposals").then((m) => ({ default: m.PortalProposals })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Proposals — Client Portal",
  description: "Review and approve project proposals.",
  path: "/portal/proposals",
  noIndex: true,
});

export default function PortalProposalsPage() {
  return <PortalProposals />;
}
