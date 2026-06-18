"use client";

import Script from "next/script";
import { useEffect } from "react";
import { applyGoogleConsent, readStoredConsent } from "@/lib/analytics/google-consent";
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  USE_DIRECT_GA4,
  USE_GTM,
} from "@/lib/analytics/config";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/**
 * Google Analytics 4 via GTM (preferred) or direct gtag.js.
 * Consent Mode v2 defaults run in <head> via /consent-defaults.js.
 * Tags always load; the banner grants or denies analytics_storage.
 */
export function AnalyticsScripts() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent === "accepted") {
      applyGoogleConsent(true);
    } else if (consent === "declined") {
      applyGoogleConsent(false);
    }
  }, [consent]);

  function onGoogleTagsReady() {
    const stored = readStoredConsent();
    if (stored === "accepted") {
      applyGoogleConsent(true);
    }
  }

  if (!USE_GTM && !USE_DIRECT_GA4 && !clarityId && !metaPixelId) {
    return null;
  }

  return (
    <>
      {USE_GTM && (
        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="lazyOnload"
          onReady={onGoogleTagsReady}
        />
      )}

      {USE_DIRECT_GA4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
            onReady={onGoogleTagsReady}
          />
          <Script id="ga4" strategy="lazyOnload">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true,
              anonymize_ip: false
            });
          `}</Script>
        </>
      )}

      {clarityId && consent === "accepted" && (
        <Script id="ms-clarity" strategy="lazyOnload">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}</Script>
      )}

      {metaPixelId && consent === "accepted" && (
        <Script id="meta-pixel" strategy="lazyOnload">{`
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
