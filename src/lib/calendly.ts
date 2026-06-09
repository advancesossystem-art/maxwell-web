/** Public Calendly scheduling URL — set NEXT_PUBLIC_CALENDLY_URL in env */
export function getCalendlyUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return url && url.startsWith("https://") ? url : undefined;
}
