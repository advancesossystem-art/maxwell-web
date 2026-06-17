/** Google Consent Mode v2 — used by cookie banner + AnalyticsScripts */

export const COOKIE_CONSENT_STORAGE_KEY = "maxwell-cookie-consent";

export function applyGoogleConsent(granted: boolean): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];

  const gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      (window.dataLayer as unknown[] | undefined)?.push(args);
    });

  window.gtag = gtag;

  gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    functionality_storage: granted ? "granted" : "denied",
    personalization_storage: granted ? "granted" : "denied",
  });

  window.dataLayer.push({
    event: "cookie_consent",
    consent: granted ? "accepted" : "declined",
  });
}

export function readStoredConsent(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return null;
}
