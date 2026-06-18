"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MobileBodyState } from "@/components/layout/MobileBodyState";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { useStickyBarDismiss } from "@/hooks/useStickyBarDismiss";
import { isMarketingChromeRoute } from "@/lib/mobile-sticky";
import { FloatingCTA } from "@/components/leads/FloatingCTA";
import { StickyCtaBar } from "@/components/leads/StickyCtaBar";
import { leadTrustBadges } from "@/lib/company-metrics";

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
  const showMarketing = isMarketingChromeRoute(pathname) && pathname !== "/thank-you";
  const { dismissed: stickyDismissed, dismiss: dismissStickyBar } = useStickyBarDismiss();

  return (
    <>
      <MobileBodyState stickyBarActive={showMarketing && !stickyDismissed} />
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
