"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { hasGoogleAnalytics } from "@/lib/analytics/config";
import { trackSpaPageView } from "@/lib/analytics/track-pageview";

/**
 * Sends GA4 / GTM page_view on App Router client navigations.
 * Initial page load is already tracked by GTM or gtag config.
 */
export function GaRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    if (!hasGoogleAnalytics || !pathname) return;

    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    trackSpaPageView(path);
  }, [pathname, searchParams]);

  return null;
}
