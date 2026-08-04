"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolWizard } from "@/components/tools/ToolWizard";
import { ExportToolbar } from "@/components/tools/ExportToolbar";
import { ToolRelatedLinks } from "@/components/tools/ToolRelatedLinks";
import { MetricCard } from "@/components/tools/ToolUI";
import { FormField, inputClass, OptionCard } from "@/components/leads/LeadFormFields";
import { getToolBySlug } from "@/lib/tools/registry";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";

const SLUG = "industrial-website-rfq-estimator";

const SKU_OPTIONS = [
  { id: "under-50", label: "Under 50 SKUs", score: 0 },
  { id: "50-200", label: "50–200 SKUs", score: 1 },
  { id: "200-1000", label: "200–1,000 SKUs", score: 2 },
  { id: "1000-plus", label: "1,000+ / multi-catalog", score: 3 },
] as const;

const RFQ_OPTIONS = [
  { id: "form", label: "Simple enquiry form + WhatsApp", score: 0 },
  { id: "product-rfq", label: "Per-product RFQ fields (MOQ, grade, destination)", score: 1 },
  { id: "cart", label: "Multi-line RFQ cart + file upload", score: 2 },
  { id: "portal", label: "Logged-in buyer / dealer quote flow", score: 3 },
] as const;

type SkuId = (typeof SKU_OPTIONS)[number]["id"];
type RfqId = (typeof RFQ_OPTIONS)[number]["id"];

type InputState = {
  skuBand: SkuId;
  rfqDepth: RfqId;
  catalogDepth: boolean;
  gidcSeo: boolean;
  dealerPortal: boolean;
  multiLanguage: boolean;
  industry: string;
};

type EstimateResult = {
  packageName: string;
  rangeLow: number;
  rangeHigh: number;
  timeline: string;
  summary: string;
  drivers: string[];
  nextSteps: string[];
};

function formatInr(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

function estimateIndustrialWebsite(input: InputState): EstimateResult {
  const sku = SKU_OPTIONS.find((o) => o.id === input.skuBand)!;
  const rfq = RFQ_OPTIONS.find((o) => o.id === input.rfqDepth)!;
  let score = sku.score + rfq.score;
  if (input.catalogDepth) score += 1;
  if (input.gidcSeo) score += 0.5;
  if (input.dealerPortal) score += 2;
  if (input.multiLanguage) score += 1;

  const drivers: string[] = [];
  drivers.push(`Catalog scale: ${sku.label}`);
  drivers.push(`RFQ depth: ${rfq.label}`);
  if (input.catalogDepth) drivers.push("Deep HTML product/spec IA (not PDF-only)");
  if (input.gidcSeo) drivers.push("GIDC / estate locality SEO");
  if (input.dealerPortal) drivers.push("Dealer/distributor login portal (often phase 2)");
  if (input.multiLanguage) drivers.push("Extra export language(s)");

  // Honest package bands (website packages; ERP remains separate milestone billing)
  if (score <= 1.5) {
    return {
      packageName: "Starter",
      rangeLow: 45000,
      rangeHigh: 60000,
        timeline: "About 1 week for a scoped Starter site",
      summary:
        "Likely fits a Starter business / light manufacturer site (around ₹45,000, sometimes to ₹60,000 if GIDC pages or extra categories). Good for under ~50 focused pages, core SEO, and basic enquiry + WhatsApp — not a 1,000-SKU PIM.",
      drivers,
      nextSteps: [
        "Confirm first-launch page and product list",
        "Use get-estimate for a written scope",
        "Dealer portal can wait until public RFQs prove demand",
      ],
    };
  }

  if (score <= 4) {
    return {
      packageName: "Professional",
      rangeLow: 75000,
      rangeHigh: 120000,
      timeline: "About 4–6 weeks after discovery",
      summary:
        "Likely Professional catalog territory — published from ₹75,000, often ₹90,000–₹1,20,000 when RFQ depth, multi-category specs, or GIDC SEO land pages add build days. Honest range, not a fixed quote.",
      drivers,
      nextSteps: [
        "Share product taxonomy (Excel/CSV is fine)",
        "List RFQ fields procurement actually needs",
        "Pair with industrial website design / RFQ pillar pages for architecture options",
      ],
    };
  }

  if (score <= 6.5) {
    return {
      packageName: "Growth",
      rangeLow: 150000,
      rangeHigh: 350000,
      timeline: "6–10 weeks phased (catalog first, portal next if needed)",
      summary:
        "Growth / multi-catalog builds commonly land between ₹1.5L and ₹3.5L depending on SKU migration, multi-line RFQ, cert libraries, and export languages. Dealer login is often a phase 2 line item — not bloating the public site launch.",
      drivers,
      nextSteps: [
        "Book discovery with inventory + sales process notes",
        "Decide phase 1 (public RFQ site) vs phase 2 (dealer portal)",
        "Review manufacturing website cost guide for tier context",
      ],
    };
  }

  return {
    packageName: "Custom industrial program",
    rangeLow: 350000,
    rangeHigh: 800000,
    timeline: "Phased 3–6+ months for full program",
    summary:
      "Heavy catalog + portal + multi-language programs are custom — often ₹3.5L–₹8L+ for public industrial web, RFQ engine, and dealer access combined. ERP/CRM are scoped separately with milestone billing. Treat this as a planning range only.",
    drivers,
    nextSteps: [
      "Use this range for internal budget approval only",
      "Request a workshop-based estimate — no fake precision",
      "Sequence: public industrial site → RFQ depth → dealer portal → systems",
    ],
  };
}

export function IndustrialWebsiteRfqEstimatorTool() {
  const tool = getToolBySlug(SLUG)!;
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState<InputState>({
    skuBand: "50-200",
    rfqDepth: "product-rfq",
    catalogDepth: true,
    gidcSeo: true,
    dealerPortal: false,
    multiLanguage: false,
    industry: "Engineering / manufacturing",
  });

  const result = showResults ? estimateIndustrialWebsite(input) : null;

  useEffect(() => {
    trackToolStart(SLUG);
  }, []);

  if (showResults && result) {
    return (
      <ToolShell tool={tool}>
        <div id="tool-report" className="space-y-8">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">Industrial website cost range</h2>
            <ExportToolbar
              toolSlug={SLUG}
              toolName={tool.name}
              resultSummary={result.summary}
              resultData={{ input, result }}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Package band" value={result.packageName} accent={tool.accent} />
            <MetricCard
              label="Planning range"
              value={`${formatInr(result.rangeLow)} – ${formatInr(result.rangeHigh)}`}
            />
            <MetricCard label="Timeline guide" value={result.timeline} />
          </div>
          <p className="text-sm text-muted leading-relaxed">{result.summary}</p>
          <p className="text-xs text-muted">
            Website packages: no advance payment — full payment within 3 days of go-live (+18% GST). ERP and custom
            software use milestone billing and are not included in these ranges.
          </p>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">What moved the range</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.drivers.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold">Suggested next steps</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {result.nextSteps.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </section>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href={`/get-estimate?service=Industrial%20Website&source=rfq-estimator&package=${encodeURIComponent(result.packageName)}`}
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-500"
            >
              Get a written free estimate
            </Link>
            <a
              href={WHATSAPP_HREF_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold hover:bg-muted/40"
            >
              WhatsApp this range
            </a>
            <Link
              href="/cost/manufacturing-website-cost"
              className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold hover:bg-muted/40"
            >
              Manufacturing website cost guide →
            </Link>
          </div>
          <ToolRelatedLinks slug={SLUG} />
          <button type="button" onClick={() => setShowResults(false)} className="text-sm text-brand-600 hover:underline">
            ← Edit inputs
          </button>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolWizard
        step={step}
        totalSteps={3}
        stepTitle={step === 1 ? "Catalog scale" : step === 2 ? "RFQ & features" : "Locality & notes"}
        onBack={() => setStep((s) => Math.max(1, s - 1))}
        onNext={() => setStep((s) => s + 1)}
        isLastStep={step === 3}
        onFinish={() => {
          trackToolComplete(SLUG, 100);
          setShowResults(true);
        }}
      >
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm text-muted">
              Planning ranges only — not a fixed quote. Website Starter from ₹45,000 · Professional from ₹75,000.
            </p>
            <p className="text-sm font-medium">How many products / SKUs at launch?</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {SKU_OPTIONS.map((o) => (
                <OptionCard
                  key={o.id}
                  title={o.label}
                  selected={input.skuBand === o.id}
                  onClick={() => setInput({ ...input, skuBand: o.id })}
                />
              ))}
            </div>
            <FormField label="Industry (optional)" htmlFor="ind">
              <input
                id="ind"
                className={inputClass}
                value={input.industry}
                onChange={(e) => setInput({ ...input, industry: e.target.value })}
                placeholder="e.g. Chemical, electrical, extrusion"
              />
            </FormField>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm font-medium">RFQ / enquiry depth</p>
            <div className="grid gap-2">
              {RFQ_OPTIONS.map((o) => (
                <OptionCard
                  key={o.id}
                  title={o.label}
                  selected={input.rfqDepth === o.id}
                  onClick={() => setInput({ ...input, rfqDepth: o.id })}
                />
              ))}
            </div>
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={input.catalogDepth}
                onChange={(e) => setInput({ ...input, catalogDepth: e.target.checked })}
              />
              <span>HTML product/spec catalog (categories, filters, datasheet links)</span>
            </label>
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={input.dealerPortal}
                onChange={(e) => setInput({ ...input, dealerPortal: e.target.checked })}
              />
              <span>Dealer / distributor login (price lists, stock) — often phase 2</span>
            </label>
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={input.multiLanguage}
                onChange={(e) => setInput({ ...input, multiLanguage: e.target.checked })}
              />
              <span>Extra export language beyond English at launch</span>
            </label>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={input.gidcSeo}
                onChange={(e) => setInput({ ...input, gidcSeo: e.target.checked })}
              />
              <span>Gujarat GIDC / local industrial SEO (estate + product long-tails)</span>
            </label>
            <p className="text-sm text-muted leading-relaxed">
              Outputs map to Starter (₹45k), Professional (₹75k+), Growth (₹1.5L+), or custom programs. No guarantee of a
              single exact number — scope workshops fix the number after discovery.
            </p>
          </div>
        )}
      </ToolWizard>
    </ToolShell>
  );
}
