/** Avoid logging full PII from lead payloads in production. */
export function logLeadReceived(summary: {
  source: string;
  tier: string;
  score: number;
}): void {
  console.log("[Lead Submission]", summary);
}
