import { Agent, fetch } from "undici";

const agent = new Agent({ connect: { rejectUnauthorized: false } });
const base = "https://maxwellelectrodeal.com";

async function audit(url, label) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 perf-audit" },
    dispatcher: agent,
  });
  const html = await res.text();
  const scripts = [...new Set([...html.matchAll(/\/_next\/static\/chunks\/[^"']+\.js/g)].map((m) => m[0]))];
  const css = [...new Set([...html.matchAll(/\/_next\/static\/chunks\/[^"']+\.css/g)].map((m) => m[0]))];
  const fonts = [...new Set([...html.matchAll(/\/_next\/static\/media\/[^"']+\.woff2/g)].map((m) => m[0]))];
  const external = [...new Set([...html.matchAll(/src="(https:\/\/[^"]+\.js)"/g)].map((m) => m[1]))];

  let jsBytes = 0;
  let cssBytes = 0;
  let fontBytes = 0;

  for (const path of scripts) {
    const r = await fetch(base + path, { dispatcher: agent });
    const buf = await r.arrayBuffer();
    jsBytes += buf.byteLength;
  }
  for (const path of css) {
    const r = await fetch(base + path, { dispatcher: agent });
    const buf = await r.arrayBuffer();
    cssBytes += buf.byteLength;
  }
  for (const path of fonts) {
    const r = await fetch(base + path, { dispatcher: agent });
    const buf = await r.arrayBuffer();
    fontBytes += buf.byteLength;
  }

  console.log(`\n${label}`);
  console.log(`HTML: ${Buffer.byteLength(html)} bytes`);
  console.log(`JS chunks: ${scripts.length} | ${(jsBytes / 1024).toFixed(1)} KiB transferred`);
  console.log(`CSS chunks: ${css.length} | ${(cssBytes / 1024).toFixed(1)} KiB`);
  console.log(`Fonts: ${fonts.length} | ${(fontBytes / 1024).toFixed(1)} KiB`);
  console.log(`External scripts in HTML: ${external.length}`);
  external.forEach((u) => console.log(`  - ${u}`));
}

for (const [label, path] of [
  ["Homepage", "/"],
  ["ERP service", "/services/erp-development"],
  ["Blog", "/blog/erp-software-cost-india-2026"],
]) {
  await audit(base + path, label);
}
