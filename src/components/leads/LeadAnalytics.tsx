"use client";

/** Re-exports — prefer `@/lib/conversion-events` for new integrations. */
export {
  pushConversionEvent,
  pushConversionEvent as trackLeadEvent,
  trackCTAClick,
  trackFormStart,
  trackFormStep,
  trackFormComplete,
  trackCalculatorUse,
} from "@/lib/conversion-events";

export type { ConversionEventName as AnalyticsEvent } from "@/lib/conversion-events";
