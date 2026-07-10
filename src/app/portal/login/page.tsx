import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Client Portal",
  description: "Maxwell Electrodeal client workspace.",
  path: "/portal/login",
  noIndex: true,
});

export default function PortalLoginPage() {
  redirect("/portal/dashboard");
}
