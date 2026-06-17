"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const buttonClass =
  "flex-1 rounded-lg border border-white/15 px-3 py-2.5 text-xs font-semibold transition-colors hover:border-white/30 hover:bg-white/[0.04]";

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
      aria-describedby="cookie-consent-desc"
      data-intro-chrome
      className="mobile-fixed-chrome fixed left-4 right-4 z-[90] sm:left-auto sm:right-6 sm:max-w-md"
    >
      <div className="rounded-2xl border border-white/[0.1] bg-[#030b1f]/95 px-4 py-4 shadow-xl backdrop-blur-xl">
        <p id="cookie-consent-title" className="text-sm font-medium text-white">
          Cookie preferences
        </p>
        <p id="cookie-consent-desc" className="mt-1.5 text-sm text-[#CBD5E1]">
          We use optional cookies for analytics to improve our site. Essential cookies are always
          active. See our{" "}
          <Link
            href="/cookie-policy"
            className="text-brand-500 underline decoration-brand-500/40 underline-offset-2 hover:text-brand-400"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => setChoice("declined")} className={buttonClass}>
            Reject all
          </button>
          <button type="button" onClick={() => setChoice("accepted")} className={buttonClass}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
