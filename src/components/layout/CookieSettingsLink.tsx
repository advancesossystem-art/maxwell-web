"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

/** Footer link — re-opens the cookie banner (GDPR: withdrawal as easy as giving consent). */
export function CookieSettingsLink() {
  const { resetConsent } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="hover:text-[var(--v6-text)]"
    >
      Cookie settings
    </button>
  );
}
