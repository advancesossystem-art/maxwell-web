"use client";

import { StickyCTA } from "@/components/conversion/StickyCTA";

interface StickyEstimateCTAProps {
  service?: string;
  source?: string;
}

/** Alias used by service/industry/blog pages — restores mobile sticky quote bar. */
export function StickyEstimateCTA({ service, source }: StickyEstimateCTAProps) {
  return (
    <StickyCTA
      context={{
        service,
        source: source ?? (service ? `service-${service}` : "sticky"),
      }}
      location={source ?? "sticky-estimate"}
    />
  );
}

export default StickyEstimateCTA;
