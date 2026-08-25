"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CTA_LABELS, estimateHref, type ConversionContext } from "@/lib/conversion-copy";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { trackCTAClick, trackLeadClick } from "@/lib/conversion-events";

type StickyCTAProps = {
  context?: ConversionContext;
  location?: string;
  className?: string;
};

/**
 * Mobile sticky quote bar — Request Quote + WhatsApp.
 * Hidden on desktop (lg+); dismissed per session.
 */
export function StickyCTA({ context, location = "sticky", className = "" }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("mx-sticky-quote-dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  const quoteHref = estimateHref({ ...context, source: context?.source ?? location });

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#030b1f]/95 px-3 py-2.5 backdrop-blur-md lg:hidden ${className}`}
      role="region"
      aria-label="Request a website quote"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <Link
          href={quoteHref}
          className="flex-1 rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
          onClick={() => trackCTAClick("Sticky Request Quote", quoteHref)}
        >
          {CTA_LABELS.primary}
        </Link>
        <a
          href={WHATSAPP_HREF_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg border border-[#25D366]/50 bg-[#25D366]/15 px-3 py-2.5 text-center text-sm font-semibold text-[#6ee7b7]"
          onClick={() => trackLeadClick("whatsapp")}
        >
          WhatsApp
        </a>
        <button
          type="button"
          aria-label="Dismiss quote bar"
          className="shrink-0 rounded-lg px-2 py-2 text-white/50 hover:text-white"
          onClick={() => {
            sessionStorage.setItem("mx-sticky-quote-dismissed", "1");
            setDismissed(true);
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
