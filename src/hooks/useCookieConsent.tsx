"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  applyGoogleConsent,
  COOKIE_CONSENT_STORAGE_KEY,
} from "@/lib/analytics/google-consent";

export type CookieConsentChoice = "accepted" | "declined" | null;

type CookieConsentContextValue = {
  consent: CookieConsentChoice;
  setConsent: (choice: "accepted" | "declined") => void;
  resetConsent: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue>({
  consent: null,
  setConsent: () => {},
  resetConsent: () => {},
});

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsentChoice>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsentState(stored);
      applyGoogleConsent(stored === "accepted");
    }
  }, []);

  function setConsent(choice: "accepted" | "declined") {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
    setConsentState(choice);
    applyGoogleConsent(choice === "accepted");
  }

  function resetConsent() {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    setConsentState(null);
    applyGoogleConsent(false);
  }

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
