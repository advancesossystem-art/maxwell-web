"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  leadScopes,
  leadTimelines,
  leadBudgets,
  featureOptionsByProjectType,
} from "@/lib/leads-data";
import type { LeadProjectType } from "@/lib/leads-data";
import type { EstimateFormData } from "@/lib/lead-scoring";
import { trackFormStart, trackFormStep, trackFormComplete } from "@/components/leads/LeadAnalytics";

const STORAGE_KEY = "maxwell-estimate-draft";
const TOTAL_STEPS = 7;

const initialData: EstimateFormData = {
  projectType: "Custom Software",
  industry: "Other",
  scope: "Medium",
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
  } catch { /* ignore */ }
  return initialData;
}

function ProjectEstimatorInner() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(getInitialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const saveDraft = (next: EstimateFormData) => {
    setData(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch { /* ignore */ }
  };

  const startForm = () => {
    if (!started) {
      setStarted(true);
      trackFormStart("get-estimate");
    }
  };

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 7) {
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
    if (!validateStep(7)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "get-estimate", ...data }),
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

        <div className="mt-10 rounded-2xl border border-border bg-surface-elevated p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <>
                  <h2 className="font-display text-2xl font-bold">What are you building?</h2>
                  <p className="mt-2 text-sm text-muted">Select your project type</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadProjectTypes.map((t) => (
                      <OptionCard key={t} title={t} selected={data.projectType === t} onClick={() => saveDraft({ ...data, projectType: t, features: [] })} />
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Your industry</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadIndustries.map((i) => (
                      <OptionCard key={i} title={i} selected={data.industry === i} onClick={() => saveDraft({ ...data, industry: i })} />
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Project scope</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadScopes.map((s) => (
                      <OptionCard key={s} title={s} selected={data.scope === s} onClick={() => saveDraft({ ...data, scope: s })} />
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Required features</h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {features.map((f) => (
                      <FeatureChip key={f} label={f} selected={data.features.includes(f)} onClick={() => toggleFeature(f)} />
                    ))}
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Timeline</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadTimelines.map((t) => (
                      <OptionCard key={t} title={t} selected={data.timeline === t} onClick={() => saveDraft({ ...data, timeline: t })} />
                    ))}
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Budget range</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leadBudgets.map((b) => (
                      <OptionCard key={b} title={b} selected={data.budget === b} onClick={() => saveDraft({ ...data, budget: b })} />
                    ))}
                  </div>
                </>
              )}

              {step === 7 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Your contact details</h2>
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
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            {step > 1 ? <Button type="button" variant="secondary" onClick={back}>Back</Button> : <div />}
            {step < TOTAL_STEPS ? (
              <Button type="button" onClick={next}>Continue <ArrowRight /></Button>
            ) : (
              <Button type="button" onClick={submit} disabled={loading}>{loading ? "Submitting..." : "Get My Estimate"}</Button>
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
