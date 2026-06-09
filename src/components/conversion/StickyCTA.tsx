"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CTA_LABELS,
  consultationHref,
  estimateHref,
  type ConversionContext,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { cn } from "@/lib/utils";
import { hasContextMobileSticky, isPortalRoute } from "@/lib/mobile-sticky";

type StickyCTAProps = {
  context?: ConversionContext;
  location?: string;
  className?: string;
  dismissed?: boolean;
  onDismiss?: () => void;
};

const HIDE_ON = ["/contact", "/get-estimate", "/book-consultation", "/discovery-call", "/thank-you"];

export function StickyCTA({ context, location = "sticky_bar", className, dismissed, onDismiss }: StickyCTAProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (
    dismissed ||
    !visible ||
    isPortalRoute(pathname) ||
    HIDE_ON.some((p) => pathname === p) ||
    hasContextMobileSticky(pathname)
  ) {
    return null;
  }

  const consultHref = consultationHref(context);
  const estHref = estimateHref(context);

  return (
    <div
      className={cn(
        "mobile-fixed-chrome fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--v6-border)] bg-white px-3 py-3 shadow-[0_-4px_24px_rgba(15,23,42,0.08)] sm:bg-white/95 sm:px-4 sm:backdrop-blur-md lg:py-2.5",
        className,
      )}
      role="region"
      aria-label="Quick actions"
      data-mobile-sticky-bar
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2 sm:gap-3">
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
          <Link
            href={estHref}
            onClick={() => trackCTAClick(CTA_LABELS.secondary, estHref, location)}
            className="v6-btn v6-btn-primary min-w-0 flex-1 text-center text-sm sm:flex-none sm:px-6"
          >
            {CTA_LABELS.secondary}
          </Link>
          <Link
            href={consultHref}
            onClick={() => trackCTAClick(CTA_LABELS.strategyCall, consultHref, location)}
            className="v6-btn v6-btn-secondary min-w-0 flex-1 text-sm sm:flex-none sm:px-6"
          >
            {CTA_LABELS.strategyCall}
          </Link>
        </div>
        {onDismiss ? (
          <button
            type="button"
            onClick={onDismiss}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--v6-border)] text-[var(--v6-text-muted)] transition-colors hover:border-[#4f46e5]/30 hover:bg-[#f8fafc] hover:text-[var(--v6-text)]"
            aria-label="Close quick actions bar"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  );
}
