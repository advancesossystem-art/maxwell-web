/** Canonical NAP — keep identical across site, schema, llms.txt, and Google Business Profile. */
export const businessAddress = {
  streetAddress: "419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390007",
  addressCountry: "IN",
  /** Human-readable single line for UI */
  formatted: "419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara, Gujarat 390007, India",
  latitude: 22.3114,
  longitude: 73.1666,
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0!2d73.1666!3d22.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a47e2b%3A0x530f141cfea6c5d1!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsLink: "https://maps.google.com/?q=Maxwell+Electrodeal+Vadodara+Gujarat",
} as const;
