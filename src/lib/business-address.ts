/**
 * Public location copy — no street address on the website.
 * Use `formatted` / `publicLabel` everywhere in UI. Schema uses city-level only.
 */
export const businessAddress = {
  /** Intentionally empty — we do not publish a street address on the site. */
  streetAddress: "",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "",
  addressCountry: "IN",
  /** Human-readable line for UI, footer, contact, FAQ */
  formatted: "Office in Vadodara",
  publicLabel: "Office in Vadodara",
  latitude: 22.3114,
  longitude: 73.1666,
  /** City-level maps search only — no street pin / embed on site */
  googleMapsLink: "https://maps.google.com/?q=Vadodara+Gujarat+India",
} as const;
