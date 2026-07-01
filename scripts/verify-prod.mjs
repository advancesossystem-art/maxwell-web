const url = "https://maxwellelectrodeal.com/";

const html = await fetch(url, { headers: { Accept: "text/html" } }).then((r) => r.text());
console.log("gtag/js in HTML:", (html.match(/gtag\/js/g) || []).length);
console.log("gtm.js in HTML:", (html.match(/gtm\.js/g) || []).length);

const head = await fetch(url, { method: "HEAD" });
console.log("Cache-Control:", head.headers.get("cache-control"));

const t0 = performance.now();
await fetch(url);
console.log("TTFB approx:", ((performance.now() - t0) / 1000).toFixed(3) + "s");
