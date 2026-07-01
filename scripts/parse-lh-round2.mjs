import { readFileSync } from "node:fs";

const d = JSON.parse(readFileSync("lh-round2.json", "utf8"));
const a = d.audits;

console.log("=== SCORES ===");
console.log("Performance:", Math.round(d.categories.performance.score * 100));
console.log("LCP:", a["largest-contentful-paint"].displayValue);
console.log("TBT:", a["total-blocking-time"].displayValue);
console.log("FCP:", a["first-contentful-paint"].displayValue);

console.log("\n=== LCP ELEMENT ===");
const items = a["largest-contentful-paint-element"]?.details?.items ?? [];
for (const item of items) {
  if (item.type === "table") continue;
  if (item.node) {
    console.log("Selector:", item.node.selector);
    console.log("Snippet:", item.node.snippet?.slice(0, 120));
  }
  if (item.timing !== undefined) console.log("Timing ms:", item.timing);
  if (item.phase) console.log("Phase:", item.phase, "ms:", item.timing);
}

const phaseItems = items.filter((i) => i.phase);
if (phaseItems.length) {
  console.log("\n=== LCP PHASES ===");
  for (const p of phaseItems) {
    console.log(`${p.phase}: ${p.timing?.toFixed?.(0) ?? p.timing}ms`);
  }
}

console.log("\n=== MAIN THREAD TOP 10 ===");
const mt = a["mainthread-work-breakdown"]?.details?.items ?? [];
for (const item of mt.sort((x, y) => y.duration - x.duration).slice(0, 10)) {
  console.log(`${item.groupLabel}: ${item.duration.toFixed(0)}ms`);
}

console.log("\n=== RENDER BLOCKING ===");
const rb = a["render-blocking-resources"]?.details?.items ?? [];
for (const item of rb.slice(0, 8)) {
  console.log(`${item.url?.split("/").pop()}: ${(item.wastedMs ?? 0).toFixed(0)}ms wasted, ${(item.totalBytes / 1024).toFixed(1)}KB`);
}
