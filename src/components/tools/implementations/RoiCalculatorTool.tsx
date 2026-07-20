"use client";

import { useState, useMemo, useEffect } from "react";
import { ToolShell } from "@/components/tools/ToolShell";
import { ToolFormPanel, ToolField, ToolRangeField } from "@/components/tools/ToolLayout";
import { MetricCard, MetricGrid } from "@/components/tools/ToolUI";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { Button } from "@/components/ui/Button";
import { getToolBySlug } from "@/lib/tools/registry";
import { formatINR } from "@/lib/tools/format";
import { trackToolStart, trackToolComplete } from "@/lib/tools/analytics";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "Manufacturing",
  "Trading",
  "Retail",
  "Healthcare",
  "Education",
  "Real Estate",
  "Logistics",
  "Other",
] as const;

type WizardInput = {
  businessType: string;
  hoursPerWeek: number;
  employeeCount: number;
  hourlyCost: number;
};

function calculateRoiMetrics(input: WizardInput) {
  const weeklyCost = input.hoursPerWeek * input.employeeCount * input.hourlyCost;
  const annualCost = weeklyCost * 52;
  const savingsRate = 0.7;
  const estimatedSavings = Math.round(annualCost * savingsRate);
  const projectCost = Math.max(150_000, Math.round(annualCost * 0.35));
  const roiPercent = projectCost > 0 ? Math.round((estimatedSavings / projectCost) * 100) : 0;
  const paybackMonths = estimatedSavings > 0 ? Math.max(1, Math.round((projectCost / estimatedSavings) * 12)) : 0;

  return {
    annualCost,
    estimatedSavings,
    roiPercent,
    paybackMonths,
    projectCost,
    summary: `${roiPercent}% ROI, ${paybackMonths} mo payback`,
  };
}

export function RoiCalculatorTool() {
  const tool = getToolBySlug("roi-calculator")!;
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<WizardInput>({
    businessType: "",
    hoursPerWeek: 10,
    employeeCount: 5,
    hourlyCost: 400,
  });
  const [result, setResult] = useState<ReturnType<typeof calculateRoiMetrics> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const preview = useMemo(() => calculateRoiMetrics(input), [input]);

  useEffect(() => {
    trackToolStart("roi-calculator");
  }, []);

  function goToResults() {
    const r = calculateRoiMetrics(input);
    setResult(r);
    trackToolComplete("roi-calculator", 100, r.summary);
    setStep(3);
  }

  async function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!result) return;
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    if (String(fd.get("website_url") || "").trim()) {
      router.push("/thank-you?source=tool-roi-calculator");
      return;
    }

    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );

    const leadResult = await submitLeadForm({
      source: "tool-roi-calculator",
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      industry: input.businessType,
      message: `[ROI Calculator] Business: ${input.businessType}. Manual hours/week: ${input.hoursPerWeek}. Employees: ${input.employeeCount}. Hourly cost: ₹${input.hourlyCost}. Annual cost: ${formatINR(result.annualCost)}. Est. savings: ${formatINR(result.estimatedSavings)}. ROI: ${result.roiPercent}%. Payback: ${result.paybackMonths} mo.`,
      estimate: {
        costMin: result.projectCost,
        costMax: Math.round(result.projectCost * 1.25),
        developmentTime: `${result.paybackMonths} mo payback`,
      },
    });

    setLoading(false);
    if (!leadResult.success) {
      setError(leadResult.error || "Could not submit. Please try again.");
      return;
    }
    router.push(
      `/thank-you?source=tool-roi-calculator${leadResult.leadTier ? `&tier=${leadResult.leadTier}` : ""}`,
    );
  }

  return (
    <ToolShell
      tool={tool}
      previewLabel={step >= 3 && result ? "Estimated annual savings" : "Preview annual cost"}
      previewValue={formatINR(step >= 3 && result ? result.estimatedSavings : preview.annualCost)}
    >
      {step === 1 ? (
        <ToolFormPanel
          title="Step 1 — Your business type"
          description="Select the industry that best matches your operations."
          footer={
            <Button
              size="lg"
              onClick={() => input.businessType && setStep(2)}
              disabled={!input.businessType}
            >
              Continue →
            </Button>
          }
        >
          <ToolField label="Business type" htmlFor="roi-business">
            <select
              id="roi-business"
              className={inputClass}
              value={input.businessType}
              onChange={(e) => setInput({ ...input, businessType: e.target.value })}
            >
              <option value="">Select industry</option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </ToolField>
        </ToolFormPanel>
      ) : null}

      {step === 2 ? (
        <ToolFormPanel
          title="Step 2 — Current manual process"
          description="How much time and cost goes into manual data entry and repetitive work?"
          footer={
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" onClick={() => setStep(1)}>
                ← Back
              </Button>
              <Button size="lg" onClick={goToResults}>
                Calculate ROI →
              </Button>
            </div>
          }
        >
          <ToolRangeField
            label="Manual data entry hours per week (team total)"
            htmlFor="roi-hours"
            hint="Include reporting, approvals, reconciliation, and duplicate entry."
            min={0}
            max={40}
            value={input.hoursPerWeek}
            onChange={(value) => setInput({ ...input, hoursPerWeek: value })}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ToolField label="Employees handling this process" htmlFor="roi-emp">
              <input
                id="roi-emp"
                type="number"
                min={1}
                className={inputClass}
                value={input.employeeCount}
                onChange={(e) => setInput({ ...input, employeeCount: Number(e.target.value) })}
              />
            </ToolField>
            <ToolField label="Average hourly cost per employee (₹/hr)" htmlFor="roi-rate">
              <input
                id="roi-rate"
                type="number"
                min={100}
                className={inputClass}
                value={input.hourlyCost}
                onChange={(e) => setInput({ ...input, hourlyCost: Number(e.target.value) })}
              />
            </ToolField>
          </div>
        </ToolFormPanel>
      ) : null}

      {step === 3 && result ? (
        <ToolFormPanel
          title="Step 3 — Your ROI estimate"
          description="Indicative figures based on 60–80% automation of manual work."
          footer={
            <p className="text-sm text-[var(--v6-text-secondary)]">
              Enter your details below for a detailed analysis tailored to your business.
            </p>
          }
        >
          <MetricGrid columns={2}>
            <MetricCard label="Current annual cost" value={formatINR(result.annualCost)} accent={tool.accent} />
            <MetricCard
              label="Est. savings with custom software"
              value={formatINR(result.estimatedSavings)}
              sub="Typically 60–80% of manual cost"
              accent={tool.accent}
            />
            <MetricCard label="ROI in Year 1" value={`${result.roiPercent}%`} />
            <MetricCard label="Payback period" value={`${result.paybackMonths} months`} />
          </MetricGrid>

          <form onSubmit={handleLeadSubmit} className="mt-8 space-y-4 rounded-2xl border border-[var(--v6-border)] bg-[#f8fafc] p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">
              Want a detailed analysis for your business?
            </h3>
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <FormField label="Name" htmlFor="roi-name" required>
              <input id="roi-name" name="name" required className={inputClass} />
            </FormField>
            <FormField label="Email" htmlFor="roi-email" required>
              <input id="roi-email" name="email" type="email" required className={inputClass} />
            </FormField>
            <PhoneCountryFields
              countryInputClassName={inputClass}
              phoneInputClassName={inputClass}
              required
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Sending…" : "Get My Full ROI Report →"}
            </Button>
          </form>
        </ToolFormPanel>
      ) : null}
    </ToolShell>
  );
}
