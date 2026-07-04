"use client";

import { useEffect } from "react";
import { applyGoogleConsent, readStoredConsent } from "@/lib/analytics/google-consent";
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  USE_DIRECT_GA4,
  USE_GTM,
} from "@/lib/analytics/config";
import { injectInlineScript, injectScript, scheduleAnalyticsLoad } from "@/lib/analytics/schedule-analytics";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const CONSENT_SCRIPT_ID = "mw-consent-defaults";

function onGoogleTagsReady() {
  const stored = readStoredConsent();
  if (stored === "accepted") {
    applyGoogleConsent(true);
  }
}

async function loadGoogleTags() {
  await injectScript("/consent-defaults.js", CONSENT_SCRIPT_ID);

  if (USE_GTM && GTM_ID) {
    await injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, "gtm");
    onGoogleTagsReady();
    return;
  }

  if (USE_DIRECT_GA4 && GA_MEASUREMENT_ID) {
    await injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, "ga4-lib");
    injectInlineScript(
      "ga4-config",
      `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true,anonymize_ip:false});`,
    );
    onGoogleTagsReady();
  }
}

function loadClarity() {
  if (!clarityId || document.getElementById("ms-clarity")) return;
  injectInlineScript(
    "ms-clarity",
    `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`,
  );
}

function loadMetaPixel() {
  if (!metaPixelId || document.getElementById("meta-pixel")) return;
  injectInlineScript(
    "meta-pixel",
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`,
  );
}

/**
 * Google Analytics via GTM or direct gtag — deferred until idle/interaction.
 * Consent Mode v2 defaults load in the same deferred batch before tags.
 */
export function AnalyticsScripts(_props: { nonce?: string }) {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent === "accepted") {
      applyGoogleConsent(true);
    } else if (consent === "declined") {
      applyGoogleConsent(false);
    }
  }, [consent]);

  useEffect(() => {
    if (!USE_GTM && !USE_DIRECT_GA4 && !clarityId && !metaPixelId) {
      return;
    }

    return scheduleAnalyticsLoad(() => {
      void loadGoogleTags();
    });
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;
    loadClarity();
    loadMetaPixel();
  }, [consent]);

  return null;
}
