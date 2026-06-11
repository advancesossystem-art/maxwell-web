/**
 * GTM Consent Mode v2 — default denied state in <head> before any marketing tags.
 * Tags load only after cookie accept via AnalyticsScripts.
 */
export function ConsentModeDefaults({ nonce }: { nonce?: string }) {
  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  functionality_storage:'denied',
  personalization_storage:'denied',
  security_storage:'granted',
  wait_for_update:500
});
`,
      }}
    />
  );
}
