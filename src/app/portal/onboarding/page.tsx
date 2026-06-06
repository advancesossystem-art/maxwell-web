import dynamic from "next/dynamic";

const PortalOnboarding = dynamic(() =>
  import("@/components/portal/PortalOnboarding").then((m) => ({ default: m.PortalOnboarding })),
);
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Client Onboarding",
  description: "Complete your Maxwell client onboarding profile.",
  path: "/portal/onboarding",
  noIndex: true,
});

export default function PortalOnboardingPage() {
  return <PortalOnboarding />;
}
