"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieConsent() {
  const { consent, setConsent } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent !== null) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [consent]);

  function setChoice(choice: "accepted" | "declined") {
    setConsent(choice);
    setVisible(false);
  }

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      data-intro-chrome
      className="mobile-fixed-chrome fixed left-4 right-4 z-[90] sm:left-auto sm:right-6 sm:max-w-sm"
    >
      <div className="rounded-2xl border border-white/[0.1] bg-[#030b1f]/95 px-4 py-3 shadow-xl backdrop-blur-xl">
        <p id="cookie-consent-title" className="text-sm text-[#CBD5E1]">
          We use cookies for analytics.{" "}
          <Link
            href="/cookie-policy"
            className="text-brand-500 underline decoration-brand-500/40 underline-offset-2 hover:text-brand-400"
          >
            Policy
          </Link>
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setChoice("declined")}
            className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-white/20 hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setChoice("accepted")}
            className="flex-1 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
