"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { CookieConsentProvider } from "@/hooks/useCookieConsent";
import { GaRouteTracker } from "@/components/seo/GaRouteTracker";
import { Suspense } from "react";

const RecentlyViewedTracker = dynamic(
  () => import("@/components/engagement/RecentlyViewed").then((m) => ({ default: m.RecentlyViewedTracker })),
  { ssr: false },
);

const SmoothScrollProvider = dynamic(
  () =>
    import("@/components/providers/SmoothScrollProvider").then((m) => ({
      default: m.SmoothScrollProvider,
    })),
  { ssr: false },
);

const LeadConversionLayer = dynamic(
  () =>
    import("@/components/leads/LeadConversionLayer").then((m) => ({
      default: m.LeadConversionLayer,
    })),
  { ssr: false },
);

const CookieConsent = dynamic(
  () =>
    import("@/components/layout/CookieConsent").then((m) => ({
      default: m.CookieConsent,
    })),
  { ssr: false },
);

function isLightChromeRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname.startsWith("/portal")) return true;
  if (pathname === "/blog" || pathname.startsWith("/blog/")) return true;
  return false;
}

/** Analytics and overlays only — page content stays in the server layout tree. */
export function LayoutClientExtras() {
  const pathname = usePathname();
  const lightChrome = isLightChromeRoute(pathname);

  const overlays = (
    <>
      {!lightChrome ? <LeadConversionLayer /> : null}
      <RecentlyViewedTracker />
      <CookieConsent />
    </>
  );

  return (
    <CookieConsentProvider>
      <Suspense fallback={null}>
        <GaRouteTracker />
      </Suspense>
      <MotionProvider>
        {lightChrome ? overlays : <SmoothScrollProvider>{overlays}</SmoothScrollProvider>}
      </MotionProvider>
    </CookieConsentProvider>
  );
}
