import { GTM_ID } from "@/lib/analytics/config";

/** GTM noscript fallback — must be first element inside <body> per Google docs. */
export function GtmNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        title="Google Tag Manager"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
