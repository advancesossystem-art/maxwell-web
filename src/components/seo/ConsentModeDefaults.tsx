/**
 * GTM Consent Mode v2 — non-essential storage denied until the visitor chooses.
 * GTM still loads so Google can receive consent-aware / cookieless pings.
 */
export function ConsentModeDefaults({ nonce }: { nonce?: string }) {
  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
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
gtag('set','url_passthrough',true);
gtag('set','ads_data_redaction',true);
`,
      }}
    />
  );
}
