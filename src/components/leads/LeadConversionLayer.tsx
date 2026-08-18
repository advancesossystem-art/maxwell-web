"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileBodyState } from "@/components/layout/MobileBodyState";
import { leadTrustBadges } from "@/lib/company-metrics";

const FloatingCTA = dynamic(
  () => import("@/components/leads/FloatingCTA").then((m) => ({ default: m.FloatingCTA })),
  { ssr: false },
);
const ExitIntentPopup = dynamic(
  () => import("@/components/leads/ExitIntentPopup").then((m) => ({ default: m.ExitIntentPopup })),
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
  const showMarketing = pathname !== "/thank-you";
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let armed = false;
    const arm = () => {
      if (armed) return;
      armed = true;
      setReady(true);
      cleanup();
    };
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const opts: AddEventListenerOptions = { once: true, passive: true };
    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, arm, opts));
    }
    events.forEach((e) => window.addEventListener(e, arm, opts));
    return cleanup;
  }, []);

  return (
    <>
      <MobileBodyState stickyBarActive={false} />
      {showMarketing && ready ? (
        <>
          <FloatingCTA />
          <ExitIntentPopup />
        </>
      ) : null}
    </>
  );
}
