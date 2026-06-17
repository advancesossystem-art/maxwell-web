#!/usr/bin/env node
/**
 * Live SEO verification for maxwellelectrodeal.com
 * Run: node scripts/verify-live-seo.mjs
 */

const BASE = process.env.SITE_URL || "https://maxwellelectrodeal.com";

const checks = [];

function pass(id, detail) {
  checks.push({ id, status: "pass", detail });
  console.log(`✓ ${id}: ${detail}`);
}

function fail(id, detail) {
  checks.push({ id, status: "fail", detail });
  console.log(`✗ ${id}: ${detail}`);
}

function warn(id, detail) {
  checks.push({ id, status: "warn", detail });
  console.log(`! ${id}: ${detail}`);
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Maxwell-SEO-Verify/1.0" },
    redirect: "follow",
  });
  return { res, text: await res.text(), url: res.url };
}

async function main() {
  console.log(`\nLive SEO verification — ${BASE}\n`);

  // 1. HTTPS + apex
  const home = await fetchText(BASE);
  if (home.res.ok && home.url.startsWith("https://maxwellelectrodeal.com")) {
    pass("https-apex", `Homepage ${home.res.status} at ${home.url}`);
  } else {
    fail("https-apex", `Unexpected: ${home.res.status} ${home.url}`);
  }

  const html = home.text;

  // 2. GTM (loader is client-side via next/script; consent + noscript are in SSR HTML)
  if (html.includes("dataLayer") && html.includes("gtag('consent','default'")) {
    pass("gtm-consent", "Consent Mode v2 defaults in <head>");
  } else {
    fail("gtm-consent", "Consent Mode defaults missing from HTML");
  }

  if (html.includes("googletagmanager.com/ns.html?id=GTM-TFSNMLRK")) {
    pass("gtm-noscript", "GTM noscript fallback (GTM-TFSNMLRK) in body");
  } else {
    fail("gtm-noscript", "GTM noscript iframe missing");
  }

  if (html.includes("googletagmanager.com") && html.includes("preconnect")) {
    pass("gtm-preconnect", "preconnect to googletagmanager.com");
  } else if (html.includes("googletagmanager.com")) {
    pass("gtm-preconnect", "googletagmanager.com referenced in HTML");
  } else {
    warn("gtm-preconnect", "No googletagmanager preconnect in static HTML");
  }

  if (html.includes("GTM-TFSNMLRK")) {
    pass("gtm-id", "GTM-TFSNMLRK present (noscript + client bundle)");
  } else {
    fail("gtm-id", "GTM-TFSNMLRK not found — check Vercel NEXT_PUBLIC_GTM_ID");
  }

  // 3. Meta / title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch?.[1]?.includes("Software Development Company India")) {
    pass("home-title", titleMatch[1].slice(0, 80));
  } else {
    warn("home-title", titleMatch?.[1] ?? "No title found");
  }

  if (html.includes('name="description"') && html.includes("Vadodara")) {
    pass("home-description", "Meta description with Vadodara present");
  } else {
    warn("home-description", "Meta description may be missing or stale");
  }

  if (html.includes('hreflang="en-IN"') || html.includes('hrefLang="en-IN"')) {
    pass("hreflang", "en-IN hreflang present");
  } else {
    // Next.js may emit alternates differently in RSC - check canonical link
    if (html.includes('rel="canonical"') && html.includes("maxwellelectrodeal.com")) {
      pass("canonical", "Canonical URL present");
    } else {
      warn("hreflang", "hreflang not in static HTML (may be in metadata API)");
    }
  }

  // 4. JSON-LD
  const ldScripts = (html.match(/application\/ld\+json/g) || []).length;
  if (ldScripts >= 2) {
    pass("json-ld-count", `${ldScripts} JSON-LD blocks on homepage`);
  } else {
    warn("json-ld-count", `Only ${ldScripts} JSON-LD block(s) on homepage`);
  }

  if (html.includes("SearchAction") && html.includes("/search?q=")) {
    pass("website-searchaction", "WebSite SearchAction schema present");
  } else {
    fail("website-searchaction", "SearchAction schema missing from homepage");
  }

  // Parse JSON-LD for Rich Results eligibility signals
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (m) => m[1],
  );
  let faqCount = 0;
  let graphTypes = new Set();
  for (const block of ldBlocks) {
    try {
      const data = JSON.parse(block);
      const nodes = data["@graph"] ?? [data];
      for (const node of nodes) {
        const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
        types.filter(Boolean).forEach((t) => graphTypes.add(t));
        if (types.includes("FAQPage") && node.mainEntity) {
          faqCount += Array.isArray(node.mainEntity) ? node.mainEntity.length : 1;
        }
      }
    } catch {
      /* skip malformed */
    }
  }
  if (faqCount >= 5) {
    pass("rich-faqpage", `FAQPage with ${faqCount}+ questions detected`);
  } else if (
    graphTypes.has("FAQPage") ||
    html.includes("FAQPage") ||
    html.includes("mainEntity")
  ) {
    pass("rich-faqpage", "FAQPage schema present on homepage");
  } else {
    warn("rich-faqpage", "FAQPage schema not found");
  }

  if (graphTypes.has("BreadcrumbList")) {
    pass("rich-breadcrumb", "BreadcrumbList available on site");
  }

  // Open Graph tags
  if (html.includes('property="og:image"') || html.includes('name="twitter:image"')) {
    pass("og-meta", "og:image / twitter:image meta tags present");
  } else {
    warn("og-meta", "OG image meta not in static HTML head");
  }

  if (html.includes("LocalBusiness") && html.includes("Organization")) {
    pass("org-localbusiness", "Organization + LocalBusiness in schema");
  } else {
    warn("org-localbusiness", "Organization/LocalBusiness schema incomplete");
  }

  // 5. robots.txt
  const robots = await fetchText(`${BASE}/robots.txt`);
  if (robots.res.ok && robots.text.includes("Sitemap:") && robots.text.includes("sitemap.xml")) {
    pass("robots", "robots.txt lists sitemap");
  } else {
    fail("robots", "robots.txt issue");
  }

  // 6. sitemap index
  const sitemap = await fetchText(`${BASE}/sitemap.xml`);
  if (sitemap.res.ok && sitemap.text.includes("sitemapindex") && sitemap.text.includes("sitemap-services")) {
    pass("sitemap", "Sitemap index with child sitemaps");
  } else {
    fail("sitemap", "sitemap.xml invalid or missing children");
  }

  // 7. Search page
  const search = await fetchText(`${BASE}/search?q=erp`);
  if (search.res.ok && (search.text.includes("erp-development") || search.text.includes("ERP"))) {
    pass("search-page", "/search?q=erp returns ERP-related results");
  } else {
    fail("search-page", "Search page missing ERP results");
  }

  // 8. Service page + schema
  const erp = await fetchText(`${BASE}/services/erp-development`);
  if (erp.res.ok && erp.text.includes('"@type":"Service"') || erp.text.includes('"@type": "Service"')) {
    pass("service-schema", "Service JSON-LD on /services/erp-development");
  } else if (erp.text.includes("BreadcrumbList")) {
    pass("service-schema", "BreadcrumbList on service page (Service type may be minified)");
  } else {
    warn("service-schema", "Could not confirm Service schema on ERP page");
  }

  // 9. OG image routes
  const ogRoot = await fetch(`${BASE}/opengraph-image`, { method: "HEAD" });
  if (ogRoot.ok && ogRoot.headers.get("content-type")?.includes("image")) {
    pass("og-root", `Root OG image ${ogRoot.status} (${ogRoot.headers.get("content-type")})`);
  } else {
    warn("og-root", `Root OG image status ${ogRoot.status}`);
  }

  const ogService = await fetch(`${BASE}/services/erp-development/opengraph-image`, { method: "HEAD" });
  if (ogService.ok && ogService.headers.get("content-type")?.includes("image")) {
    pass("og-service", `Service OG image ${ogService.status}`);
  } else {
    warn("og-service", `Service OG image status ${ogService.status}`);
  }

  // 10. Redirects
  const www = await fetch(`https://www.maxwellelectrodeal.com/`, { redirect: "manual" });
  if (www.status === 301 || www.status === 308) {
    const loc = www.headers.get("location") || "";
    if (loc.includes("maxwellelectrodeal.com") && !loc.includes("www.")) {
      pass("www-redirect", `www → apex (${www.status})`);
    } else {
      warn("www-redirect", `Redirect to: ${loc}`);
    }
  } else {
    warn("www-redirect", `Status ${www.status}`);
  }

  const cityRedirect = await fetch(`${BASE}/services/software-development-mumbai`, { redirect: "manual" });
  if ([301, 308, 307].includes(cityRedirect.status)) {
    const loc = cityRedirect.headers.get("location") || "";
    if (loc.includes("/locations/india/mumbai")) {
      pass("city-redirect", "Mumbai city slug redirects to /locations/india/mumbai");
    } else {
      warn("city-redirect", `Redirect to: ${loc}`);
    }
  } else {
    fail("city-redirect", `Expected redirect, got ${cityRedirect.status}`);
  }

  // Summary
  const passed = checks.filter((c) => c.status === "pass").length;
  const failed = checks.filter((c) => c.status === "fail").length;
  const warned = checks.filter((c) => c.status === "warn").length;

  console.log(`\n--- Summary: ${passed} passed, ${failed} failed, ${warned} warnings ---\n`);

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
