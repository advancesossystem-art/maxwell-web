import type { Metadata } from "next";

/** Merge into root layout metadata after verifying domain in Search Console. */
export function buildSiteVerificationMetadata(): Pick<Metadata, "verification"> | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();

  if (!google && !bing && !yandex) return undefined;

  return {
    verification: {
      ...(google ? { google } : {}),
      ...(bing ? { other: { "msvalidate.01": bing } } : {}),
      ...(yandex ? { yandex } : {}),
    },
  };
}
