"use client";

import Script from "next/script";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

const consentDefaults = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
`;

export function AnalyticsScripts({ nonce }: { nonce?: string }) {
  const { consent } = useCookieConsent();

  if (consent !== "accepted") return null;

  return (
    <>
      {gtmId && (
        <>
          <Script id="gtm-consent-defaults" strategy="lazyOnload" nonce={nonce}>{consentDefaults}</Script>
          <Script id="gtm" strategy="lazyOnload" nonce={nonce}>{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}</Script>
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}
      {gaId && !gtmId && (
        <>
          <Script id="ga4-consent-defaults" strategy="lazyOnload" nonce={nonce}>{consentDefaults}</Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
            nonce={nonce}
          />
          <Script id="ga4" strategy="lazyOnload" nonce={nonce}>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
              analytics_storage: 'granted'
            });
            gtag('config', '${gaId}');
          `}</Script>
        </>
      )}
      {clarityId && (
        <Script id="ms-clarity" strategy="lazyOnload" nonce={nonce}>{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}</Script>
      )}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="lazyOnload" nonce={nonce}>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixelId}');
          fbq('track', 'PageView');
        `}</Script>
      )}
    </>
  );
}
