/** Loads GTM / GA4 / Clarity / Meta Pixel after cookie consent — no inline CSP nonce required. */
(function () {
  var root = document.documentElement;
  var gtmId = root.dataset.gtmId;
  var gaId = root.dataset.gaId;
  var clarityId = root.dataset.clarityId;
  var metaPixelId = root.dataset.metaPixelId;

  function grantConsent() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
    });
  }

  function loadScript(src, id) {
    if (document.getElementById(id)) return;
    var s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function loadInline(id, code) {
    if (document.getElementById(id)) return;
    var s = document.createElement("script");
    s.id = id;
    s.text = code;
    document.head.appendChild(s);
  }

  function bootstrap() {
    grantConsent();

    if (gtmId) {
      loadInline(
        "gtm-bootstrap",
        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" +
          gtmId +
          "');",
      );
      return;
    }

    if (gaId) {
      loadScript("https://www.googletagmanager.com/gtag/js?id=" + gaId, "ga4-lib");
      loadInline(
        "ga4-config",
        "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
          gaId +
          "');",
      );
    }

    if (clarityId) {
      loadInline(
        "ms-clarity",
        "(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','" +
          clarityId +
          "');",
      );
    }

    if (metaPixelId) {
      loadInline(
        "meta-pixel",
        "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','" +
          metaPixelId +
          "');fbq('track','PageView');",
      );
    }
  }

  window.__mwLoadAnalytics = bootstrap;
})();
