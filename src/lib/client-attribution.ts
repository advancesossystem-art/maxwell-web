/**
 * Marketing-safe client attribution — no personal or client organization names.
 */

export type AttributionInput = {
  role: string;
  industry?: string;
  companyType?: string;
  region?: string;
};

/** Comma-separated line for quotes, e.g. "Operations Director, Manufacturing SME, Gujarat" */
export function formatTestimonialAttribution(
  roleOrInput: string | AttributionInput,
  industry?: string,
): string {
  const input: AttributionInput =
    typeof roleOrInput === "string" ? { role: roleOrInput, industry } : roleOrInput;

  const parts = [input.role.trim()];
  if (input.companyType?.trim()) {
    parts.push(input.companyType.trim());
  } else if (input.industry?.trim()) {
    parts.push(input.industry.trim());
  }
  if (input.region?.trim()) {
    parts.push(input.region.trim());
  }
  return parts.join(", ");
}

/** Case study / project client descriptor (replaces named accounts) */
export function formatClientDescriptor(industry: string): string {
  const label = industry.toLowerCase();
  return `Leading ${label} organization`;
}

/** Short label for SEO / JSON-LD where a name was previously required */
export function formatAnonymousClient(industry: string): string {
  return `${industry} client engagement`;
}
