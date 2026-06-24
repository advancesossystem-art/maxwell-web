"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const choiceButtonClass =
  "min-h-[44px] flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]";

/** Delay before showing banner so hero H1 paints first (LCP). */
const BANNER_MOUNT_DELAY_MS = 800;

export function CookieConsent() {
  const { consent, setConsent } = useCookieConsent();
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent !== null) return;
    const timer = window.setTimeout(() => setShouldRender(true), BANNER_MOUNT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [consent]);

  useEffect(() => {
    if (!shouldRender || consent !== null) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [shouldRender, consent]);

  useEffect(() => {
    if (visible && consent === null) {
      document.body.setAttribute("data-cookie-visible", "true");
      return () => {
        document.body.removeAttribute("data-cookie-visible");
      };
    }
    document.body.removeAttribute("data-cookie-visible");
  }, [visible, consent]);

  function setChoice(choice: "accepted" | "declined") {
    setConsent(choice);
    setVisible(false);
    document.body.removeAttribute("data-cookie-visible");
  }

  if (!shouldRender || !visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      data-intro-chrome
      data-cookie-banner
      className="mobile-fixed-chrome fixed bottom-3 left-3 z-[90] sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-xs"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 80px" }}
    >
      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-lg">
        <p id="cookie-consent-title" className="text-xs font-semibold text-slate-900">
          Cookie preferences
        </p>
        <p id="cookie-consent-desc" className="mt-1 text-xs leading-snug text-slate-600">
          Essential cookies always run. Analytics cookies are optional.{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-[#4f46e5] underline decoration-[#4f46e5]/30 underline-offset-2 hover:text-[#4338ca]"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setChoice("declined")}
            className={`${choiceButtonClass} border border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100`}
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setChoice("accepted")}
            className={`${choiceButtonClass} border border-[#4f46e5] bg-[#4f46e5] text-white hover:bg-[#4338ca]`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
