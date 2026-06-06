"use client";

type ToolAnalyticsEvent =
  | "tool_view"
  | "tool_start"
  | "tool_step"
  | "tool_complete"
  | "tool_export_gate"
  | "tool_export"
  | "tool_abandon";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackToolEvent(
  event: ToolAnalyticsEvent,
  payload: {
    toolSlug: string;
    step?: number;
    stepName?: string;
    completionRate?: number;
    recommendation?: string;
    exportType?: "print" | "email" | "save";
  },
) {
  const data = {
    event: `tool_${event}`,
    category: "business_tools",
    ...payload,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(data);
    if (process.env.NODE_ENV === "development") {
      console.log("[Tool Analytics]", data);
    }
  }
}

export function trackToolView(toolSlug: string) {
  trackToolEvent("tool_view", { toolSlug });
}

export function trackToolStart(toolSlug: string) {
  trackToolEvent("tool_start", { toolSlug });
}

export function trackToolStep(toolSlug: string, step: number, stepName: string) {
  trackToolEvent("tool_step", { toolSlug, step, stepName });
}

export function trackToolComplete(toolSlug: string, completionRate: number, recommendation?: string) {
  trackToolEvent("tool_complete", { toolSlug, completionRate, recommendation });
}

export function trackToolExport(toolSlug: string, exportType: "print" | "email" | "save") {
  trackToolEvent("tool_export", { toolSlug, exportType });
}
