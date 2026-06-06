"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { DemoEnvironmentBadge, DemoDataNotice } from "@/components/portal/PortalDemo";
import { cn } from "@/lib/utils";
import { completeOnboarding } from "@/lib/portal/auth";
import type { OnboardingData } from "@/lib/portal/types";
import { usePortal } from "@/components/portal/PortalProvider";
import { siteConfig } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/BrandLogo";

const textareaClass = cn(inputClass, "resize-y min-h-[120px]");

const CHECKLIST = [
  { id: "business", label: "Business profile", step: 0 },
  { id: "goals", label: "Project goals", step: 1 },
  { id: "stakeholders", label: "Stakeholder setup", step: 2 },
  { id: "requirements", label: "Project requirements", step: 3 },
  { id: "preferences", label: "Communication preferences", step: 4 },
] as const;

export function PortalOnboarding() {
  const router = useRouter();
  const { refreshSession, user } = usePortal();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<OnboardingData>>({
    communicationPreference: "portal",
    timezone: "Asia/Kolkata",
  });

  function update(field: keyof OnboardingData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function next() {
    if (step < CHECKLIST.length - 1) setStep((s) => s + 1);
    else finish();
  }

  function finish() {
    const payload: OnboardingData = {
      businessName: data.businessName ?? user?.company ?? "",
      industry: data.industry ?? "",
      website: data.website ?? "",
      projectGoals: data.projectGoals ?? "",
      stakeholders: data.stakeholders ?? "",
      requirements: data.requirements ?? "",
      communicationPreference:
        (data.communicationPreference as OnboardingData["communicationPreference"]) ?? "portal",
      timezone: data.timezone ?? "Asia/Kolkata",
    };
    completeOnboarding(payload);
    refreshSession();
    router.push("/portal/dashboard");
  }

  return (
    <div
      className="min-h-screen bg-[#020617] text-white"
      style={
        {
          "--portal-border": "rgba(255, 255, 255, 0.08)",
          "--portal-muted": "#94a3b8",
          "--portal-text": "#ffffff",
          "--portal-hover": "rgba(255, 255, 255, 0.05)",
          "--portal-card": "#030b1f",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <BrandLogo size="md" href="/" />
          <DemoEnvironmentBadge />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              {siteConfig.name} · Client onboarding
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold">Welcome, {user?.name.split(" ")[0]}</h1>
            <p className="mt-3 text-sm text-[var(--portal-muted)]">
              Complete this checklist so your delivery team can configure your workspace and communication
              preferences.
            </p>
            <ul className="mt-8 space-y-3">
              {CHECKLIST.map((item) => {
                const done = step > item.step;
                const current = step === item.step;
                return (
                  <li
                    key={item.id}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors",
                      current
                        ? "border-brand-500/40 bg-brand-600/10 text-white"
                        : done
                          ? "border-emerald-500/25 bg-emerald-500/5 text-emerald-200"
                          : "border-[var(--portal-border)] text-[var(--portal-muted)]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        done ? "bg-emerald-500 text-white" : current ? "bg-brand-600 text-white" : "bg-white/10",
                      )}
                    >
                      {done ? "✓" : item.step + 1}
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
            <Link href="/portal/dashboard" className="mt-6 inline-block text-xs text-[var(--portal-muted)] hover:text-white">
              Skip for now (demo) →
            </Link>
          </aside>

          <div className="lg:col-span-3">
            <DemoDataNotice compact />
            <div className="mt-6 rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] p-6 lg:p-8">
              <p className="text-sm font-medium text-brand-400">
                Step {step + 1} of {CHECKLIST.length}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{CHECKLIST[step].label}</h2>

              {step === 0 && (
                <div className="mt-6 space-y-4">
                  <FormField label="Business name" htmlFor="businessName" required>
                    <input
                      id="businessName"
                      className={inputClass}
                      defaultValue={user?.company}
                      onChange={(e) => update("businessName", e.target.value)}
                    />
                  </FormField>
                  <FormField label="Industry" htmlFor="industry" required>
                    <input
                      id="industry"
                      className={inputClass}
                      placeholder="Manufacturing, Logistics…"
                      onChange={(e) => update("industry", e.target.value)}
                    />
                  </FormField>
                  <FormField label="Website" htmlFor="website">
                    <input
                      id="website"
                      type="url"
                      className={inputClass}
                      placeholder="https://"
                      onChange={(e) => update("website", e.target.value)}
                    />
                  </FormField>
                </div>
              )}
              {step === 1 && (
                <FormField label="Project goals" htmlFor="projectGoals" required>
                  <textarea
                    id="projectGoals"
                    rows={5}
                    className={textareaClass}
                    placeholder="Outcomes you need in the next 6–12 months…"
                    onChange={(e) => update("projectGoals", e.target.value)}
                  />
                </FormField>
              )}
              {step === 2 && (
                <FormField label="Key stakeholders" htmlFor="stakeholders" required>
                  <textarea
                    id="stakeholders"
                    rows={5}
                    className={textareaClass}
                    placeholder="Decision makers, technical contacts, finance approvers…"
                    onChange={(e) => update("stakeholders", e.target.value)}
                  />
                </FormField>
              )}
              {step === 3 && (
                <FormField label="Requirements & constraints" htmlFor="requirements" required>
                  <textarea
                    id="requirements"
                    rows={5}
                    className={textareaClass}
                    placeholder="Integrations, compliance, go-live date…"
                    onChange={(e) => update("requirements", e.target.value)}
                  />
                </FormField>
              )}
              {step === 4 && (
                <div className="mt-6 space-y-4">
                  <FormField label="Preferred communication" htmlFor="comm">
                    <select
                      id="comm"
                      className={inputClass}
                      onChange={(e) => update("communicationPreference", e.target.value)}
                    >
                      <option value="portal">Client portal (recommended)</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="calls">Scheduled calls</option>
                    </select>
                  </FormField>
                  <FormField label="Timezone" htmlFor="timezone">
                    <input
                      id="timezone"
                      className={inputClass}
                      defaultValue="Asia/Kolkata"
                      onChange={(e) => update("timezone", e.target.value)}
                    />
                  </FormField>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
                  Back
                </Button>
                <Button onClick={next}>
                  {step === CHECKLIST.length - 1 ? "Enter workspace" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
