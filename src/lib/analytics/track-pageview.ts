import { GA_MEASUREMENT_ID, USE_DIRECT_GA4 } from "@/lib/analytics/config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fire a page_view on client-side route changes (Next.js App Router).
 * Initial load is handled by GTM / gtag config — callers should skip first run.
 */
export function trackSpaPageView(path: string): void {
  if (typeof window === "undefined") return;

  const pagePath = path.startsWith("/") ? path : `/${path}`;
  const pageLocation = `${window.location.origin}${pagePath}`;
  const pageTitle = document.title;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "page_view",
    page_path: pagePath,
    page_location: pageLocation,
    page_title: pageTitle,
  });

  if (USE_DIRECT_GA4 && GA_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}
