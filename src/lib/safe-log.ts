/** Avoid logging full PII from lead payloads in production. */
export function logLeadReceived(summary: {
  source: string;
  tier: string;
  score: number;
}): void {
  if (process.env.NODE_ENV !== "production") {
    console.log("[Lead Submission]", summary);
  }
}
