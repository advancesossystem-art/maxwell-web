import dynamic from "next/dynamic";

const PortalLogin = dynamic(() =>
  import("@/components/portal/PortalLogin").then((m) => ({ default: m.PortalLogin })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Client Portal Sign In",
  description: "Sign in to your Maxwell client portal — email, Google, or invitation access.",
  path: "/portal/login",
  noIndex: true,
});

export default function PortalLoginPage() {
  return <PortalLogin />;
}
