"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MobileBodyState } from "@/components/layout/MobileBodyState";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { useStickyBarDismiss } from "@/hooks/useStickyBarDismiss";
import { leadTrustBadges } from "@/lib/company-metrics";

const StickyCTA = dynamic(
  () => import("@/components/conversion/StickyCTA").then((m) => ({ default: m.StickyCTA })),
  { ssr: false },
);
const FloatingCTA = dynamic(
  () => import("@/components/leads/FloatingCTA").then((m) => ({ default: m.FloatingCTA })),
  { ssr: false },
);
const StickyCtaBar = dynamic(
  () => import("@/components/leads/StickyCtaBar").then((m) => ({ default: m.StickyCtaBar })),
  { ssr: false },
);
const ExitIntentPopup = dynamic(
  () => import("@/components/leads/ExitIntentPopup").then((m) => ({ default: m.ExitIntentPopup })),
  { ssr: false },
);
const QuickEstimateWidget = dynamic(
  () => import("@/components/conversion/QuickEstimateWidget").then((m) => ({ default: m.QuickEstimateWidget })),
  { ssr: false },
);

export function TrustBadgesRow() {
  const badges = [...leadTrustBadges];
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
      {badges.map((b) => (
        <span key={b} className="flex items-center gap-1.5">
          <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {b}
        </span>
      ))}
    </div>
  );
}

export function LeadConversionLayer() {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const showMarketing = pathname !== "/thank-you";
  const { dismissed: stickyDismissed, dismiss: dismissStickyBar } = useStickyBarDismiss();

  return (
    <>
      <MobileBodyState stickyBarActive={showMarketing && !stickyDismissed && isDesktop} />
      {showMarketing ? (
        <>
          <StickyCtaBar />
          <FloatingCTA />
          <StickyCTA location="global_sticky" dismissed={stickyDismissed} onDismiss={dismissStickyBar} />
          <QuickEstimateWidget stickyBarDismissed={stickyDismissed} />
          <ExitIntentPopup />
        </>
      ) : null}
    </>
  );
}
