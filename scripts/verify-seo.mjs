#!/usr/bin/env node
/**
 * Post-deploy SEO checks (run locally or in CI).
 * GSC Rich Results must still be validated manually:
 * https://search.google.com/test/rich-results?url=https://maxwellelectrodeal.com
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const src = join(root, "src");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?)$/.test(name)) acc.push(p);
  }
  return acc;
}

const files = walk(src);
let faqPageEmitters = 0;
let faqPageTypeDefs = 0;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (text.includes('FaqPageJsonLd') || text.includes('buildFaqPageSchema')) {
    if (!file.includes("FaqPageJsonLd.tsx") && !file.includes("faq-schema.ts")) {
      faqPageEmitters += 1;
    }
  }
  if (text.includes('"@type": "FAQPage"') || text.includes("'@type': 'FAQPage'")) {
    faqPageTypeDefs += 1;
  }
}

const pageClient = files.filter(
  (f) => f.includes(join("app", "")) && f.endsWith("page.tsx") && readFileSync(f, "utf8").includes('"use client"'),
);

let ok = true;

if (faqPageTypeDefs > 1) {
  console.error(`FAIL: FAQPage @type found in ${faqPageTypeDefs} files (expect 1: faq-schema.ts)`);
  ok = false;
} else {
  console.log("OK: single FAQPage schema builder");
}

if (pageClient.length) {
  console.error("FAIL: use client on app pages:", pageClient.map((f) => f.replace(root + "\\", "")));
  ok = false;
} else {
  console.log("OK: no use client on app page.tsx files");
}

console.log(`Info: ${faqPageEmitters} files import FaqPageJsonLd (one per page type is expected)`);
console.log("\nManual: after deploy, run Rich Results Test on / and /services/erp-development");

process.exit(ok ? 0 : 1);
