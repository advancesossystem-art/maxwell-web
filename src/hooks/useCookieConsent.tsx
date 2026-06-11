"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "maxwell-cookie-consent";

export type CookieConsentChoice = "accepted" | "declined" | null;

type CookieConsentContextValue = {
  consent: CookieConsentChoice;
  setConsent: (choice: "accepted" | "declined") => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue>({
  consent: null,
  setConsent: () => {},
});

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsentChoice>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsentState(stored);
    }
  }, []);

  function setConsent(choice: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, choice);
    setConsentState(choice);
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "cookie_consent", consent: choice });
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage: choice === "accepted" ? "granted" : "denied",
          ad_user_data: choice === "accepted" ? "granted" : "denied",
          ad_personalization: choice === "accepted" ? "granted" : "denied",
          analytics_storage: choice === "accepted" ? "granted" : "denied",
        });
      }
    }
  }

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
