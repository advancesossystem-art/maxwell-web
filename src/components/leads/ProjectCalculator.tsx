"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { FormField, inputClass, OptionCard, FeatureChip } from "@/components/leads/LeadFormFields";
import {
  leadProjectTypes,
  leadScopes,
  leadTimelines,
  featureOptionsByProjectType,
} from "@/lib/leads-data";
import type { LeadProjectType } from "@/lib/leads-data";
import { calculateProjectEstimate } from "@/lib/project-estimator";
import { trackCalculatorUse, trackFormComplete } from "@/components/leads/LeadAnalytics";

export function ProjectCalculator() {
  const router = useRouter();
  const [projectType, setProjectType] = useState<LeadProjectType>("Custom Software");
  const [scope, setScope] = useState("Medium");
  const [timeline, setTimeline] = useState("3 Months");
  const [features, setFeatures] = useState<string[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", company: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const estimate = calculateProjectEstimate({ projectType, scope, features, timeline });

  useEffect(() => {
    trackCalculatorUse(projectType, estimate.complexityScore);
  }, [projectType, scope, features.length, estimate.complexityScore]);

  const featureList = featureOptionsByProjectType[projectType] ?? [];

  const toggleFeature = (f: string) => {
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  };

  const submitLead = async () => {
    if (!contact.name || !contact.email) {
      setError("Name and email are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "project-calculator",
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          company: contact.company,
          projectType,
          scope,
          features,
          timeline,
          estimate: {
            costMin: estimate.estimatedCost.min,
            costMax: estimate.estimatedCost.max,
            developmentTime: estimate.developmentTime,
            teamSize: estimate.teamSize,
            complexityScore: estimate.complexityScore,
          },
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error);
      trackFormComplete("project-calculator", body.leadTier, body.leadScore);
      router.push(`/thank-you?source=project-calculator&tier=${body.leadTier}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Configure your project</h2>
              <p className="mt-2 text-sm text-muted">Adjust parameters for an instant estimate</p>
            </FadeIn>

            <div className="mt-8 space-y-8">
              <div>
                <p className="mb-3 text-sm font-medium">Project Type</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {leadProjectTypes.slice(0, 4).map((t) => (
                    <OptionCard key={t} title={t} selected={projectType === t} onClick={() => { setProjectType(t); setFeatures([]); }} />
                  ))}
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {leadProjectTypes.slice(4).map((t) => (
                    <OptionCard key={t} title={t} selected={projectType === t} onClick={() => { setProjectType(t); setFeatures([]); }} />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">Scope</p>
                <div className="grid grid-cols-2 gap-2">
                  {leadScopes.map((s) => (
                    <OptionCard key={s} title={s} selected={scope === s} onClick={() => setScope(s)} />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">Timeline</p>
                <div className="flex flex-wrap gap-2">
                  {leadTimelines.map((t) => (
                    <FeatureChip key={t} label={t} selected={timeline === t} onClick={() => setTimeline(t)} />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">Features ({features.length} selected)</p>
                <div className="flex flex-wrap gap-2">
                  {featureList.map((f) => (
                    <FeatureChip key={f} label={f} selected={features.includes(f)} onClick={() => toggleFeature(f)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <motion.div
              layout
              className="sticky top-28 rounded-2xl border border-border bg-surface-elevated p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Estimate Summary</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm text-muted">Estimated Cost</p>
                  <p className="font-display text-3xl font-bold text-brand-700">{estimate.estimatedCost.display}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted">Development Time</p>
                    <p className="font-display font-semibold">{estimate.developmentTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Team Size</p>
                    <p className="font-display font-semibold">{estimate.teamSize}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted">Complexity Score</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                      <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${estimate.complexityScore}%` }} />
                    </div>
                    <span className="font-display text-sm font-bold">{estimate.complexityScore}/100</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{estimate.complexityLabel}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Recommended Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {estimate.technologies.map((t) => (
                      <span key={t} className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">{estimate.summary}</p>
              </div>

              {!showLeadForm ? (
                <Button className="mt-8 w-full" onClick={() => setShowLeadForm(true)}>
                  Get Detailed Proposal
                </Button>
              ) : (
                <div className="mt-8 space-y-3 border-t border-border pt-6">
                  <FormField label="Name" htmlFor="calc-name" required>
                    <input id="calc-name" className={inputClass} value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                  </FormField>
                  <FormField label="Email" htmlFor="calc-email" required>
                    <input id="calc-email" type="email" className={inputClass} value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                  </FormField>
                  <FormField label="Phone" htmlFor="calc-phone">
                    <input id="calc-phone" className={inputClass} value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  </FormField>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <Button className="w-full" onClick={submitLead} disabled={loading}>
                    {loading ? "Sending..." : "Send Me This Estimate"}
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
