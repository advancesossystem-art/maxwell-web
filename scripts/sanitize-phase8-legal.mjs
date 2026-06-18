/**
 * Sanitize Phase 8 service copy for ASCI-style comparative advertising safety:
 * - No disparagement of unnamed competitors
 * - Soften unsubstantiated superlatives
 * - Remove duplicated SEO paragraph boilerplate
 * - Fix broken FAQ template artifacts
 */
import fs from "node:fs";
import path from "node:path";

const file = path.join(process.cwd(), "src/lib/phase8/phase8-services-data.ts");
let text = fs.readFileSync(file, "utf8");

const boilerplate =
  / Maxwell Electrodeal delivers enterprise-grade outcomes at SMB-friendly pricing from Vadodara, Gujarat, with transparent milestone billing and weekly progress demos\. Unlike (?:large listed IT vendors|some traditional enterprise integrators) who rely on opaque statements of work and lengthy change-order cycles, we publish starting ranges and scope assumptions upfront so finance teams in India can budget with confidence\. Our Next\.js-powered delivery site loads in under two seconds, reflecting the performance standards we bring to every client engagement\./g;

text = text.replace(boilerplate, "");

const replacements = [
  [/large listed IT vendors/gi, "some traditional enterprise integrators"],
  [/Large IT vendor/g, "Typical integrator"],
  [/Large IT vendors/g, "Typical integrators"],
  [
    /We compete directly with national IT services firms on capability while beating them on speed and cost transparency\./g,
    "We focus on accountable delivery, published milestones, and transparent pricing.",
  ],
  [/retention rate exceeds 98%/g, "clients often renew for ongoing support"],
  [
    /98% client retention\. We support/g,
    "Long-term support partnerships. We support",
  ],
  [
    /at 40–60% lower total cost of ownership than large vendor statements of work/g,
    "with competitive total cost of ownership for comparable scope",
  ],
  [
    /at 40-60% lower total cost of ownership than large vendor statements of work/g,
    "with competitive total cost of ownership for comparable scope",
  ],
  [
    /For question \d+ regarding \\"[^\\"]+\\", /g,
    "",
  ],
  [/Opaque SOWs, change orders/g, "Varies by SOW structure"],
  [/Low headline, high customization fees/g, "Scope may expand with add-ons"],
  [/Heavy WordPress\/marketing sites/g, "Varies by stack"],
  [/Slow brochure sites/g, "Varies by implementation"],
  [/Subcontractor layers/g, "Multi-tier delivery models"],
  [/Generic playbooks/g, "Standardized packages"],
  [/Jack-of-all-trades/g, "Limited specialist depth"],
  [/License lock-in/g, "License terms vary"],
  [/Limited source access/g, "Source access varies"],
  [/99\.9% uptime guarantee/gi, "target uptime per SLA (contract-specific)"],
  [/99\.9% uptime SLA/g, "uptime targets per SLA"],
];

for (const [from, to] of replacements) {
  text = text.replace(from, to);
}

text = text.replace(/comparisonTitle: "How Maxwell compares"/g, 'comparisonTitle: "Delivery model comparison"');

fs.writeFileSync(file, text);
console.log("Sanitized", file);
