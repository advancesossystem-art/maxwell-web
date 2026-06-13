"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

declare global {
  interface Window {
    __mwLoadAnalytics?: () => void;
  }
}

export function AnalyticsScripts() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent !== "accepted") return;
    window.__mwLoadAnalytics?.();
  }, [consent]);

  return null;
}
