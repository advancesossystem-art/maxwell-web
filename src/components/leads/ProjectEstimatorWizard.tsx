"use client";

import { useMemo, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { CrossFade } from "@/components/motion/CrossFade";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import {
  FormField,
  inputClass,
  ProgressBar,
  OptionCard,
  FeatureChip,
} from "@/components/leads/LeadFormFields";
import {
  leadProjectTypes,
  leadIndustries,
  leadTimelines,
  leadBudgets,
  leadUserCounts,
  featureOptionsByProjectType,
} from "@/lib/leads-data";
import type { LeadProjectType } from "@/lib/leads-data";
import type { EstimateFormData } from "@/lib/lead-scoring";
import { calculateProjectEstimate } from "@/lib/project-estimator";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";
import { trackFormStart, trackFormStep, trackFormComplete } from "@/components/leads/LeadAnalytics";

const STORAGE_KEY = "maxwell-estimate-draft";
const TOTAL_STEPS = 8;

function scopeFromUsers(userCount: string): string {
  if (userCount.startsWith("1–10")) return "Small";
  if (userCount.startsWith("11–30")) return "Medium";
  if (userCount.startsWith("31–75")) return "Large";
  return "Enterprise";
}

const initialData: EstimateFormData = {
  projectType: "Custom Software",
  industry: "Other",
  scope: "Medium",
  userCount: "11–30 users",
  features: [],
  timeline: "3 Months",
  budget: "₹1L–₹5L",
  name: "",
  company: "",
  email: "",
  phone: "",
};

function getInitialData(): EstimateFormData {
  if (typeof window === "undefined") return initialData;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...initialData, ...JSON.parse(saved) };
  } catch {
    /* ignore */
  }
  return initialData;
}

function ProjectEstimatorInner() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(getInitialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const estimate = useMemo(
    () =>
      calculateProjectEstimate({
        projectType: data.projectType,
        industry: data.industry,
        scope: scopeFromUsers(data.userCount),
        features: data.features,
        timeline: data.timeline,
        userCount: data.userCount,
      }),
    [data.projectType, data.industry, data.userCount, data.features, data.timeline],
  );

  const saveDraft = (next: EstimateFormData) => {
    const scope = scopeFromUsers(next.userCount);
    setData({ ...next, scope });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, scope }));
    } catch {
      /* ignore */
    }
  };

  const startForm = () => {
    if (!started) {
      setStarted(true);
      trackFormStart("get-estimate");
    }
  };

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === TOTAL_STEPS) {
      if (!data.name.trim()) e.name = "Name is required";
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    startForm();
    if (!validateStep(step)) return;
    trackFormStep("get-estimate", step, `step-${step}`);
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const submit = async () => {
    if (!validateStep(TOTAL_STEPS)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "get-estimate",
          ...data,
          estimatedCost: estimate.estimatedCost.display,
          estimatedTimeline: estimate.developmentTime,
          complexity: estimate.complexityLabel,
          suggestedSolution: estimate.suggestedSolution,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Submission failed");

      trackFormComplete("get-estimate", body.leadTier, body.leadScore);
      localStorage.removeItem(STORAGE_KEY);
      router.push(`/thank-you?source=get-estimate&tier=${body.leadTier}&score=${body.leadScore}`);
    } catch (err) {
      setErrors({ submit: err instanceof Error ? err.message : "Failed to submit" });
    } finally {
      setLoading(false);
    }
  };

  const features = featureOptionsByProjectType[data.projectType as LeadProjectType] ?? [];

  const toggleFeature = (f: string) => {
    const nextFeatures = data.features.includes(f)
      ? data.features.filter((x) => x !== f)
      : [...data.features, f];
    saveDraft({ ...data, features: nextFeatures });
  };

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <ProgressBar current={step} total={TOTAL_STEPS} />
        <p className="mt-4 text-center text-xs text-muted">{CONVERSION_EXPECTATIONS.privacyNote}</p>

        <div className="mt-10 rounded-2xl border border-border bg-surface-elevated p-6 sm:p-10">
          <CrossFade contentKey={String(step)}>
              {step === 1 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Your industry</h2>
                  <p className="mt-2 text-sm text-muted">Helps us suggest the right compliance and modules</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadIndustries.map((i) => (
                      <OptionCard key={i} title={i} selected={data.industry === i} onClick={() => saveDraft({ ...data, industry: i })} />
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Project type</h2>
                  <p className="mt-2 text-sm text-muted">ERP, CRM, AI, mobile, or custom software</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadProjectTypes.map((t) => (
                      <OptionCard key={t} title={t} selected={data.projectType === t} onClick={() => saveDraft({ ...data, projectType: t, features: [] })} />
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Number of users</h2>
                  <p className="mt-2 text-sm text-muted">Daily active users on the system</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadUserCounts.map((u) => (
                      <OptionCard key={u} title={u} selected={data.userCount === u} onClick={() => saveDraft({ ...data, userCount: u })} />
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Expected features</h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {features.map((f) => (
                      <FeatureChip key={f} label={f} selected={data.features.includes(f)} onClick={() => toggleFeature(f)} />
                    ))}
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Budget range</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadBudgets.map((b) => (
                      <OptionCard key={b} title={b} selected={data.budget === b} onClick={() => saveDraft({ ...data, budget: b })} />
                    ))}
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Timeline</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadTimelines.map((t) => (
                      <OptionCard key={t} title={t} selected={data.timeline === t} onClick={() => saveDraft({ ...data, timeline: t })} />
                    ))}
                  </div>
                </>
              )}

              {step === 7 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Your instant estimate</h2>
                  <p className="mt-2 text-sm text-muted">Indicative range—final quote after discovery call</p>
                  <dl className="mt-6 grid gap-4 rounded-xl border border-border bg-[#f8fafc] p-5 text-sm">
                    <div>
                      <dt className="font-semibold text-muted">Estimated cost</dt>
                      <dd className="mt-1 text-xl font-bold text-[#4f46e5]">{estimate.estimatedCost.display}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-muted">Estimated timeline</dt>
                      <dd className="mt-1 font-medium">{estimate.developmentTime}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-muted">Project complexity</dt>
                      <dd className="mt-1 font-medium">{estimate.complexityLabel}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-muted">Suggested solution</dt>
                      <dd className="mt-1 text-muted">{estimate.suggestedSolution}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs text-muted">{CONVERSION_EXPECTATIONS.estimateTimeline}</p>
                </>
              )}

              {step === 8 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Get your detailed estimate</h2>
                  <p className="mt-2 text-sm text-muted">{CONVERSION_EXPECTATIONS.responseTime}</p>
                  <div className="mt-6 space-y-4">
                    <FormField label="Full Name" htmlFor="name" required error={errors.name}>
                      <input id="name" className={inputClass} value={data.name} onChange={(e) => saveDraft({ ...data, name: e.target.value })} placeholder="Your full name" />
                    </FormField>
                    <FormField label="Company" htmlFor="company">
                      <input id="company" className={inputClass} value={data.company} onChange={(e) => saveDraft({ ...data, company: e.target.value })} placeholder="Your Company" />
                    </FormField>
                    <FormField label="Work Email" htmlFor="email" required error={errors.email}>
                      <input id="email" type="email" className={inputClass} value={data.email} onChange={(e) => saveDraft({ ...data, email: e.target.value })} placeholder="you@company.com" />
                    </FormField>
                    <FormField label="Phone" htmlFor="phone">
                      <input id="phone" type="tel" className={inputClass} value={data.phone} onChange={(e) => saveDraft({ ...data, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                    </FormField>
                  </div>
                  {errors.submit && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{errors.submit}</p>}
                </>
              )}
          </CrossFade>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            {step > 1 ? (
              <Button type="button" variant="secondary" onClick={back}>
                Back
              </Button>
            ) : (
              <div />
            )}
            {step < TOTAL_STEPS ? (
              <Button type="button" onClick={next}>
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button type="button" onClick={submit} disabled={loading}>
                {loading ? "Submitting..." : "Get Project Estimate"}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectEstimatorWizard() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-surface" />}>
      <ProjectEstimatorInner />
    </Suspense>
  );
}
