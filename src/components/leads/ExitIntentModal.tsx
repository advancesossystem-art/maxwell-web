"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import Link from "next/link";
import { ModalBackdrop, ModalPanel } from "@/components/motion/ModalEnter";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import {
  CTA_LABELS,
  CONVERSION_EXPECTATIONS,
  CONVERSION_ROUTES,
} from "@/lib/conversion-copy";
import { trackCTAClick, trackExitIntent } from "@/lib/conversion-events";

const EXIT_OFFERS = [
  {
    id: "strategy",
    label: CTA_LABELS.freeStrategySession,
    description: "30-minute call with a solutions lead — no obligation.",
    href: CONVERSION_ROUTES.consultation,
    cta: CTA_LABELS.primary,
  },
  {
    id: "estimate",
    label: CTA_LABELS.secondary,
    description: "7-step estimator · phased quote in 24–48 hours.",
    href: CONVERSION_ROUTES.estimate,
    cta: CTA_LABELS.secondary,
  },
  {
    id: "audit",
    label: CTA_LABELS.industryAudit,
    description: "Workflow review for your vertical.",
    href: `${CONVERSION_ROUTES.consultation}?intent=audit`,
    cta: CTA_LABELS.industryAudit,
  },
] as const;

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEscapeKey(close, open);
  useFocusTrap(dialogRef, open);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem("exit-intent-shown")) {
      setOpen(true);
      sessionStorage.setItem("exit-intent-shown", "1");
      trackExitIntent("shown");
    }
  }, []);

  useEffect(() => {
    const delay = window.setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);
    return () => {
      window.clearTimeout(delay);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  if (!open) return null;

  return (
    <>
      <ModalBackdrop
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <ModalPanel
        panelRef={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        className="fixed bottom-0 left-0 right-0 z-[61] mx-auto max-w-lg rounded-t-2xl border border-white/[0.1] bg-[#030b1f] p-6 shadow-2xl sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl"
      >
            <button
              type="button"
              onClick={close}
              className="touch-target absolute right-4 top-4 text-muted hover:text-foreground"
              aria-label="Close dialog"
            >
              ✕
            </button>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Before you go</p>
            <h3 id="exit-intent-title" className="mt-2 font-display text-xl font-bold text-white">
              Choose your next step
            </h3>
            <p className="mt-2 text-sm text-[#94A3B8]">{CONVERSION_EXPECTATIONS.responseTime}</p>
            <ul className="mt-6 space-y-3">
              {EXIT_OFFERS.map((offer) => (
                <li key={offer.id}>
                  <Link
                    href={offer.href}
                    onClick={() => {
                      trackExitIntent("convert", offer.id);
                      trackCTAClick(offer.cta, offer.href, "exit_intent");
                      setOpen(false);
                    }}
                    className="block rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-brand-500/30"
                  >
                    <span className="font-display font-semibold text-white">{offer.label}</span>
                    <span className="mt-1 block text-xs text-[#94A3B8]">{offer.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
        <TrustNearCTA compact className="mt-6" />
      </ModalPanel>
    </>
  );
}
