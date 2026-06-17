/**
 * GTM Consent Mode v2 — India granted by default; EU/UK denied until banner choice.
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
  analytics_storage:'granted',
  functionality_storage:'granted',
  personalization_storage:'denied',
  security_storage:'granted',
  wait_for_update:500,
  region:['IN']
});
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  functionality_storage:'denied',
  personalization_storage:'denied',
  security_storage:'granted',
  wait_for_update:500,
  region:['GB','AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','CH']
});
gtag('set','url_passthrough',true);
gtag('set','ads_data_redaction',true);
`,
      }}
    />
  );
}
