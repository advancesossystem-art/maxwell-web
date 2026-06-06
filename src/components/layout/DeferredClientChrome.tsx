"use client";

import dynamic from "next/dynamic";
import { MotionProvider } from "@/components/motion/MotionProvider";

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

export function DeferredClientChrome({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <SmoothScrollProvider>
        <LeadConversionLayer />
        {children}
        <CookieConsent />
      </SmoothScrollProvider>
    </MotionProvider>
  );
}
