/**
 * Marketing-safe client attribution — no personal or client organization names.
 */

/** Footer line for quotes: role + industry only */
export function formatTestimonialAttribution(role: string, industry?: string): string {
  const sector = industry?.trim();
  if (sector) {
    return `${role} · ${sector} sector`;
  }
  return role;
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
