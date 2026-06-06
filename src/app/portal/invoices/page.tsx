import dynamic from "next/dynamic";

const PortalInvoices = dynamic(() =>
  import("@/components/portal/PortalInvoices").then((m) => ({ default: m.PortalInvoices })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Invoices — Client Portal",
  description: "View and download invoices with payment status.",
  path: "/portal/invoices",
  noIndex: true,
});

export default function PortalInvoicesPage() {
  return <PortalInvoices />;
}
