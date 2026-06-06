import dynamic from "next/dynamic";

const PortalDocuments = dynamic(() =>
  import("@/components/portal/PortalDocuments").then((m) => ({ default: m.PortalDocuments })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Documents — Client Portal",
  description: "Secure document center for contracts, reports, and invoices.",
  path: "/portal/documents",
  noIndex: true,
});

export default function PortalDocumentsPage() {
  return <PortalDocuments />;
}
