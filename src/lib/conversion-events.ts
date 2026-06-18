/**
 * GA4-ready conversion event layer.
 * Events push to window.dataLayer (GTM / gtag can map these in AnalyticsScripts).
 */

export type ConversionEventName =
  | "cta_click"
  | "consultation_request"
  | "estimate_request"
  | "discovery_request"
  | "newsletter_signup"
  | "resource_download"
  | "guide_download"
  | "industry_audit_request"
  | "form_start"
  | "form_step"
  | "form_complete"
  | "form_abandon"
  | "calculator_use"
  | "lead_score"
  | "exit_intent_shown"
  | "exit_intent_convert"
  | "scroll_depth"
  | "tool_complete";

type EventParams = Record<string, string | number | boolean | undefined>;

/** GA4 recommended / custom event names for key conversion tracking */
const GA4_EVENT_MAP: Partial<Record<ConversionEventName, string>> = {
  consultation_request: "consultation_request",
  estimate_request: "estimate_request",
  discovery_request: "discovery_request",
  form_complete: "generate_lead",
  cta_click: "select_content",
  newsletter_signup: "sign_up",
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function forwardToGtag(event: ConversionEventName, params?: EventParams): void {
  const gaEvent = GA4_EVENT_MAP[event];
  if (!gaEvent || typeof window.gtag !== "function") return;

  window.gtag("event", gaEvent, {
    event_category: "conversion",
    ...params,
  });
}

export function pushConversionEvent(
  event: ConversionEventName,
  params?: EventParams,
): void {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    event_category: "conversion",
    ...params,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  forwardToGtag(event, params);

  if (process.env.NODE_ENV === "development") {
    console.log("[Conversion]", payload);
  }
}

export function trackCTAClick(
  ctaName: string,
  destination: string,
  location?: string,
): void {
  pushConversionEvent("cta_click", {
    cta_name: ctaName,
    link_url: destination,
    cta_location: location,
  });

  if (destination.includes("/book-consultation")) {
    pushConversionEvent("consultation_request", { cta_name: ctaName, cta_location: location });
  }
  if (destination.includes("/get-estimate")) {
    pushConversionEvent("estimate_request", { cta_name: ctaName, cta_location: location });
  }
  if (destination.includes("/discovery-call")) {
    pushConversionEvent("discovery_request", { cta_name: ctaName, cta_location: location });
  }
}

export function trackFormStart(source: string): void {
  pushConversionEvent("form_start", { form_source: source });
}

export function trackFormStep(source: string, step: number, stepName: string): void {
  pushConversionEvent("form_step", { form_source: source, step, step_name: stepName });
}

export function trackFormComplete(
  source: string,
  leadTier?: string,
  leadScore?: number,
): void {
  pushConversionEvent("form_complete", {
    form_source: source,
    lead_tier: leadTier,
    lead_score: leadScore,
  });
  if (leadTier && leadScore !== undefined) {
    pushConversionEvent("lead_score", { form_source: source, lead_tier: leadTier, lead_score: leadScore });
  }
}

export function trackNewsletterSignup(location: string): void {
  pushConversionEvent("newsletter_signup", { cta_location: location });
}

export function trackResourceDownload(resource: string, location: string): void {
  pushConversionEvent("resource_download", { resource_name: resource, cta_location: location });
}

export function trackGuideDownload(guide: string, location: string): void {
  pushConversionEvent("guide_download", { guide_name: guide, cta_location: location });
}

export function trackIndustryAudit(industry: string, location: string): void {
  pushConversionEvent("industry_audit_request", { industry, cta_location: location });
}

export function trackCalculatorUse(projectType: string, complexityScore: number): void {
  pushConversionEvent("calculator_use", { project_type: projectType, complexity_score: complexityScore });
}

export function trackExitIntent(action: "shown" | "convert", offer?: string): void {
  pushConversionEvent(
    action === "shown" ? "exit_intent_shown" : "exit_intent_convert",
    { offer },
  );
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100, pagePath?: string): void {
  pushConversionEvent("scroll_depth", { scroll_depth: percent, page_path: pagePath });
}

export function trackToolComplete(toolSlug: string, summary?: string): void {
  pushConversionEvent("tool_complete", { tool_slug: toolSlug, result_summary: summary });
}

/** GTM dataLayer lead click — WhatsApp / phone */
export function trackLeadClick(method: "whatsapp" | "call"): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "lead_click", method });
}
