"use client";

type PortalAnalyticsEvent =
  | "portal_login"
  | "portal_logout"
  | "proposal_view"
  | "proposal_accept"
  | "proposal_revision"
  | "proposal_download"
  | "project_view"
  | "document_download"
  | "support_create"
  | "meeting_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackPortalEvent(
  event: PortalAnalyticsEvent,
  payload?: Record<string, string | number | boolean>,
) {
  const data = { event, category: "client_portal", ...payload, timestamp: new Date().toISOString() };
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(data);
    if (process.env.NODE_ENV === "development") console.log("[Portal Analytics]", data);
  }
}
