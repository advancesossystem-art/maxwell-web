import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Client Portal",
  description:
    "Client workspace for proposals, projects, documents, meetings, support tickets, and invoices.",
  path: "/portal",
  keywords: ["client portal", "project dashboard", "proposal review"],
  noIndex: true,
});

export default function PortalPage() {
  redirect("/portal/dashboard");
}
