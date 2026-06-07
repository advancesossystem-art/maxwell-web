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
        "mobile-fixed-chrome fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#030b1f]/95 px-3 py-3 backdrop-blur-md sm:px-4 lg:py-2.5",
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
            Get Cost Estimate
          </Link>
          <Link
            href={consultHref}
            onClick={() => trackCTAClick(CTA_LABELS.primary, consultHref, location)}
            className="v6-btn v6-btn-secondary min-w-0 flex-1 border-white/20 text-sm text-white sm:flex-none sm:px-6"
          >
            Book Consultation
          </Link>
        </div>
        {onDismiss ? (
          <button
            type="button"
            onClick={onDismiss}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
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
