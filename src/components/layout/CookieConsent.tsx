"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const choiceButtonClass =
  "min-h-11 flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]";

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
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      data-intro-chrome
      className="mobile-fixed-chrome fixed left-4 right-4 z-[90] sm:left-auto sm:right-6 sm:max-w-md"
    >
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-2xl">
        <p id="cookie-consent-title" className="text-sm font-semibold text-slate-900">
          Cookie preferences
        </p>
        <p id="cookie-consent-desc" className="mt-2 text-sm leading-relaxed text-slate-600">
          We use essential cookies to run this site. With your permission, we also use analytics
          cookies (Google Analytics / Tag Manager) to understand how visitors use our website. You
          can accept or reject non-essential cookies — your choice is stored on this device. See our{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-[#4f46e5] underline decoration-[#4f46e5]/30 underline-offset-2 hover:text-[#4338ca]"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setChoice("declined")}
            className={`${choiceButtonClass} border border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100`}
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => setChoice("accepted")}
            className={`${choiceButtonClass} border border-[#4f46e5] bg-[#4f46e5] text-white hover:bg-[#4338ca]`}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
