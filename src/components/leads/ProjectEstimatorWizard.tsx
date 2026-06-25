"use client";

import { useCallback, useEffect, useMemo, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { CrossFade } from "@/components/motion/CrossFade";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  IconAI,
  IconCRM,
  IconCode,
  IconERP,
  IconGlobe,
  IconMobile,
  IconSaaS,
  ArrowRight,
} from "@/components/ui/Icons";
import { FormField, inputClass, FeatureChip } from "@/components/leads/LeadFormFields";
import {
  DraftSavedIndicator,
  EstimateSummaryCard,
  RichOptionCard,
  SelectionInsightPanel,
  WizardOptionGrid,
  WizardOptionItem,
  WizardProgressHeader,
  WizardStepHeader,
  WizardStepNav,
} from "@/components/leads/EstimateWizardUI";
import {
  leadProjectTypes,
  leadIndustries,
  leadTimelines,
  leadBudgets,
  leadUserCounts,
  featureOptionsByProjectType,
} from "@/lib/leads-data";
import type { LeadIndustry, LeadProjectType } from "@/lib/leads-data";
import type { EstimateFormData } from "@/lib/lead-scoring";
import { calculateProjectEstimate } from "@/lib/project-estimator";
import {
  WIZARD_STEPS,
  budgetMeta,
  industryWizardMeta,
  projectTypeWizardMeta,
  timelineMeta,
  userCountMeta,
} from "@/lib/estimate-wizard-config";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";
import { trackFormStart, trackFormStep, trackFormComplete } from "@/components/leads/LeadAnalytics";

const STORAGE_KEY = "maxwell-estimate-draft";
const TOTAL_STEPS = WIZARD_STEPS.length;

type WizardFormData = Omit<EstimateFormData, "industry"> & { industry: LeadIndustry | "" };

function scopeFromUsers(userCount: string): string {
  if (userCount.startsWith("1–10")) return "Small";
  if (userCount.startsWith("11–30")) return "Medium";
  if (userCount.startsWith("31–75")) return "Large";
  return "Enterprise";
}

const initialData: WizardFormData = {
  projectType: "Custom Software",
  industry: "",
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

function getInitialData(): WizardFormData {
  if (typeof window === "undefined") return initialData;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...initialData, ...JSON.parse(saved) };
  } catch {
    /* ignore */
  }
  return initialData;
}

function IndustryIcon({ industry }: { industry: LeadIndustry }) {
  const className = "h-5 w-5";
  switch (industry) {
    case "Manufacturing":
      return <IconERP className={className} />;
    case "Healthcare":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "Education":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      );
    case "Logistics":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635" />
        </svg>
      );
    case "Retail":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
      );
    case "Construction":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      );
    default:
      return <IconCode className={className} />;
  }
}

function ProjectTypeIcon({ type }: { type: LeadProjectType }) {
  const className = "h-5 w-5";
  const map: Record<LeadProjectType, React.ReactNode> = {
    Website: <IconGlobe className={className} />,
    "Mobile App": <IconMobile className={className} />,
    ERP: <IconERP className={className} />,
    CRM: <IconCRM className={className} />,
    AI: <IconAI className={className} />,
    SaaS: <IconSaaS className={className} />,
    "Custom Software": <IconCode className={className} />,
  };
  return map[type];
}

function ProjectEstimatorInner() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(getInitialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [draftFlash, setDraftFlash] = useState(false);

  const stepMeta = WIZARD_STEPS[step - 1];

  const estimate = useMemo(
    () =>
      calculateProjectEstimate({
        projectType: data.projectType,
        industry: (data.industry || "Other") as LeadIndustry,
        scope: scopeFromUsers(data.userCount),
        features: data.features,
        timeline: data.timeline,
        userCount: data.userCount,
      }),
    [data.projectType, data.industry, data.userCount, data.features, data.timeline],
  );

  const saveDraft = useCallback((next: WizardFormData) => {
    const scope = scopeFromUsers(next.userCount);
    const merged = { ...next, scope };
    setData(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      setDraftFlash(true);
      window.setTimeout(() => setDraftFlash(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  const startForm = useCallback(() => {
    if (!started) {
      setStarted(true);
      trackFormStart("get-estimate");
    }
  }, [started]);

  const validateStep = useCallback(
    (s: number): boolean => {
      const e: Record<string, string> = {};
      if (s === 1 && !data.industry) e.industry = "Select your industry to continue";
      if (s === 4 && data.features.length === 0) e.features = "Select at least one capability";
      if (s === TOTAL_STEPS) {
        if (!data.name.trim()) e.name = "Name is required";
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
          e.email = "Valid email required";
      }
      setErrors(e);
      return Object.keys(e).length === 0;
    },
    [data],
  );

  const next = useCallback(() => {
    startForm();
    if (!validateStep(step)) return;
    trackFormStep("get-estimate", step, `step-${step}`);
    if (step < TOTAL_STEPS) setStep(step + 1);
  }, [startForm, validateStep, step]);

  const back = useCallback(() => {
    if (step > 1) setStep(step - 1);
  }, [step]);

  const jumpToStep = useCallback(
    (target: number) => {
      if (target < step) setStep(target);
    },
    [step],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || e.shiftKey) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (step < TOTAL_STEPS) next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, next]);

  const submit = async () => {
    if (!validateStep(TOTAL_STEPS)) return;
    setLoading(true);
    const industry = (data.industry || "Other") as LeadIndustry;
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "get-estimate",
          ...data,
          industry,
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

  const selectedIndustryMeta = data.industry ? industryWizardMeta[data.industry] : null;

  return (
    <section className="v6-lp-section--tail bg-gradient-to-b from-[#f8fafc] to-white">
      <Container className="max-w-5xl">
        <WizardProgressHeader current={step} total={TOTAL_STEPS} stepTitle={stepMeta.title} />
        <div className="mt-3 flex flex-col items-center gap-1">
          <p className="text-center text-xs text-[var(--v6-text-muted)]">{CONVERSION_EXPECTATIONS.privacyNote}</p>
          <DraftSavedIndicator visible={draftFlash} />
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--v6-border)] bg-white shadow-xl shadow-[#4f46e5]/5">
          <div className="grid lg:grid-cols-[240px_1fr]">
            <aside className="hidden border-r border-[var(--v6-border)] bg-[#fafbff] p-6 lg:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
                Your estimate path
              </p>
              <div className="mt-4">
                <WizardStepNav current={step} onJump={jumpToStep} />
              </div>
              <div className="mt-8 rounded-xl border border-[var(--v6-border)] bg-white p-4 text-xs text-[var(--v6-text-secondary)]">
                <p className="font-semibold text-[var(--v6-text)]">What happens next</p>
                <p className="mt-2 leading-relaxed">
                  Senior engineer reviews your inputs · scoped quote within 24 hours · NDA on request
                </p>
              </div>
            </aside>

            <div className="p-6 sm:p-8 lg:p-10">
              <WizardStepHeader title={stepMeta.title} subtitle={stepMeta.subtitle} />

              <div className="mt-8">
                <CrossFade contentKey={String(step)}>
                  {step === 1 && (
                    <>
                      <WizardOptionGrid stepKey="industry">
                        {leadIndustries.map((i) => (
                          <WizardOptionItem key={i}>
                            <RichOptionCard
                              title={i}
                              description={industryWizardMeta[i].tagline}
                              icon={<IndustryIcon industry={i} />}
                              selected={data.industry === i}
                              onClick={() => saveDraft({ ...data, industry: i })}
                            />
                          </WizardOptionItem>
                        ))}
                      </WizardOptionGrid>
                      {errors.industry && (
                        <p className="mt-3 text-sm text-red-600" role="alert">
                          {errors.industry}
                        </p>
                      )}
                      {selectedIndustryMeta && data.industry && (
                        <SelectionInsightPanel
                          title={data.industry}
                          lines={[
                            selectedIndustryMeta.compliance,
                            selectedIndustryMeta.deliveryNote,
                          ]}
                          tags={selectedIndustryMeta.modules}
                        />
                      )}
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <WizardOptionGrid stepKey="project-type">
                        {leadProjectTypes.map((t) => (
                          <WizardOptionItem key={t}>
                            <RichOptionCard
                              title={t}
                              description={projectTypeWizardMeta[t].tagline}
                              badge={`From ${projectTypeWizardMeta[t].startingFrom}`}
                              icon={<ProjectTypeIcon type={t} />}
                              selected={data.projectType === t}
                              onClick={() => saveDraft({ ...data, projectType: t, features: [] })}
                            />
                          </WizardOptionItem>
                        ))}
                      </WizardOptionGrid>
                      <SelectionInsightPanel
                        title={data.projectType}
                        lines={[
                          `Typical delivery: ${projectTypeWizardMeta[data.projectType as LeadProjectType].typicalTimeline}`,
                          projectTypeWizardMeta[data.projectType as LeadProjectType].tagline,
                        ]}
                      />
                    </>
                  )}

                  {step === 3 && (
                    <WizardOptionGrid stepKey="users">
                      {leadUserCounts.map((u) => (
                        <WizardOptionItem key={u}>
                          <RichOptionCard
                            title={u}
                            description={userCountMeta[u]}
                            selected={data.userCount === u}
                            onClick={() => saveDraft({ ...data, userCount: u })}
                          />
                        </WizardOptionItem>
                      ))}
                    </WizardOptionGrid>
                  )}

                  {step === 4 && (
                    <>
                      <p className="text-sm text-[var(--v6-text-secondary)]">
                        {data.features.length} selected · common for {data.projectType} projects
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {features.map((f) => (
                          <FeatureChip
                            key={f}
                            label={f}
                            selected={data.features.includes(f)}
                            onClick={() => toggleFeature(f)}
                            variant="light"
                          />
                        ))}
                      </div>
                      {errors.features && (
                        <p className="mt-3 text-sm text-red-600" role="alert">
                          {errors.features}
                        </p>
                      )}
                    </>
                  )}

                  {step === 5 && (
                    <WizardOptionGrid stepKey="budget">
                      {leadBudgets.map((b) => (
                        <WizardOptionItem key={b}>
                          <RichOptionCard
                            title={b}
                            description={budgetMeta[b]}
                            selected={data.budget === b}
                            onClick={() => saveDraft({ ...data, budget: b })}
                          />
                        </WizardOptionItem>
                      ))}
                    </WizardOptionGrid>
                  )}

                  {step === 6 && (
                    <WizardOptionGrid stepKey="timeline">
                      {leadTimelines.map((t) => (
                        <WizardOptionItem key={t}>
                          <RichOptionCard
                            title={t}
                            description={timelineMeta[t]}
                            selected={data.timeline === t}
                            onClick={() => saveDraft({ ...data, timeline: t })}
                          />
                        </WizardOptionItem>
                      ))}
                    </WizardOptionGrid>
                  )}

                  {step === 7 && (
                    <>
                      <EstimateSummaryCard
                        cost={estimate.estimatedCost.display}
                        timeline={estimate.developmentTime}
                        complexity={estimate.complexityLabel}
                        solution={estimate.suggestedSolution}
                      />
                      <p className="mt-4 text-xs text-[var(--v6-text-muted)]">
                        {CONVERSION_EXPECTATIONS.estimateTimeline}
                      </p>
                    </>
                  )}

                  {step === 8 && (
                    <>
                      <p className="text-sm text-[var(--v6-text-secondary)]">
                        {CONVERSION_EXPECTATIONS.responseTime}
                      </p>
                      <div className="mt-6 space-y-4">
                        <FormField label="Full Name" htmlFor="name" required error={errors.name}>
                          <input
                            id="name"
                            className={inputClass}
                            value={data.name}
                            onChange={(e) => saveDraft({ ...data, name: e.target.value })}
                            placeholder="Your full name"
                            autoComplete="name"
                          />
                        </FormField>
                        <FormField label="Company" htmlFor="company">
                          <input
                            id="company"
                            className={inputClass}
                            value={data.company}
                            onChange={(e) => saveDraft({ ...data, company: e.target.value })}
                            placeholder="Company name"
                            autoComplete="organization"
                          />
                        </FormField>
                        <FormField label="Work Email" htmlFor="email" required error={errors.email}>
                          <input
                            id="email"
                            type="email"
                            className={inputClass}
                            value={data.email}
                            onChange={(e) => saveDraft({ ...data, email: e.target.value })}
                            placeholder="you@company.com"
                            autoComplete="email"
                          />
                        </FormField>
                        <FormField label="Phone" htmlFor="phone">
                          <input
                            id="phone"
                            type="tel"
                            className={inputClass}
                            value={data.phone}
                            onChange={(e) => saveDraft({ ...data, phone: e.target.value })}
                            placeholder="+91 XXXXX XXXXX"
                            autoComplete="tel"
                          />
                        </FormField>
                      </div>
                      {errors.submit && (
                        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
                          {errors.submit}
                        </p>
                      )}
                    </>
                  )}
                </CrossFade>
              </div>

              <div className="mt-10 flex flex-col-reverse gap-3 border-t border-[var(--v6-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                {step > 1 ? (
                  <Button type="button" variant="secondary" onClick={back} className="min-h-11">
                    Back
                  </Button>
                ) : (
                  <div className="hidden sm:block" />
                )}
                <div className="flex flex-col gap-2 sm:items-end">
                  {step < TOTAL_STEPS ? (
                    <Button type="button" onClick={next} className="min-h-11 w-full sm:w-auto">
                      Continue <ArrowRight />
                    </Button>
                  ) : (
                    <Button type="button" onClick={submit} disabled={loading} className="min-h-11 w-full sm:w-auto">
                      {loading ? "Submitting..." : "Get Project Estimate"}
                    </Button>
                  )}
                  {step < TOTAL_STEPS && (
                    <p className="text-center text-[10px] text-[var(--v6-text-muted)] sm:text-right">
                      Press Enter to continue
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-center text-xs text-[var(--v6-text-muted)]">
          <span>50+ projects delivered</span>
          <span>·</span>
          <span>98% client retention</span>
          <span>·</span>
          <span>Milestone billing</span>
        </div>
      </Container>
    </section>
  );
}

export function ProjectEstimatorWizard() {
  return (
    <Suspense
      fallback={
        <div className="v6-lp-section--tail">
          <Container className="max-w-5xl">
            <div className="h-[520px] animate-pulse rounded-3xl bg-[var(--v6-bg-soft)]" />
          </Container>
        </div>
      }
    >
      <ProjectEstimatorInner />
    </Suspense>
  );
}
