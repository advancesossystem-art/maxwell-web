"use client";

import { trackCTAClick } from "@/lib/conversion-events";

export function useCTATracking(location: string) {
  return (ctaName: string, href: string) => trackCTAClick(ctaName, href, location);
}
