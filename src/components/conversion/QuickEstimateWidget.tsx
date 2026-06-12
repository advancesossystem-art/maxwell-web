"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModalBackdrop, ModalPanel } from "@/components/motion/ModalEnter";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import {
  leadBudgets,
  leadIndustries,
  leadProjectTypes,
  leadTimelines,
  companySizes,
  type LeadIndustry,
  type LeadProjectType,
  type LeadTimeline,
  type LeadBudget,
} from "@/lib/leads-data";
import { estimateHref, CTA_LABELS } from "@/lib/conversion-copy";
import { trackCTAClick, trackFormStart, trackFormStep } from "@/lib/conversion-events";
import { isPortalRoute } from "@/lib/mobile-sticky";
import { cn } from "@/lib/utils";

const STEPS = ["Industry", "Project", "Team", "Budget", "Timeline"] as const;

type QuickEstimateData = {
  industry: LeadIndustry;
  projectType: LeadProjectType;
  companySize: (typeof companySizes)[number];
  budget: LeadBudget;
  timeline: LeadTimeline;
};

export function QuickEstimateWidget({ stickyBarDismissed = false }: { stickyBarDismissed?: boolean }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuickEstimateData>({
    industry: leadIndustries[0],
    projectType: leadProjectTypes[3],
    companySize: companySizes[1],
    budget: leadBudgets[2],
    timeline: leadTimelines[2],
  });

  const reset = useCallback(() => {
    setStep(0);
    setOpen(false);
  }, []);

  useEscapeKey(reset, open);
  useFocusTrap(dialogRef, open);

  if (isPortalRoute(pathname) || pathname === "/get-estimate") return null;

  const estimateUrl = estimateHref({
    source: "quick-estimate-widget",
    industry: data.industry,
    service: data.projectType,
  });
  const qs = new URLSearchParams({
    industry: data.industry,
    projectType: data.projectType,
    companySize: data.companySize,
    budget: data.budget,
    timeline: data.timeline,
  });
  const fullHref = `${estimateUrl.split("?")[0]}?${qs.toString()}`;

  const openWidget = () => {
    setOpen(true);
    trackFormStart("quick-estimate-widget");
    trackCTAClick(CTA_LABELS.instantEstimate, "#quick-estimate", "floating_widget");
  };

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={openWidget}
          data-intro-chrome
          className={cn(
            "mobile-fixed-chrome fixed z-50 rounded-full bg-[#4f46e5] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 active:scale-95",
            "left-4 lg:bottom-8 lg:left-8",
            stickyBarDismissed ? "bottom-4 lg:bottom-8" : "bottom-[4.5rem] lg:bottom-8",
          )}
          aria-label={CTA_LABELS.instantEstimate}
        >
          ⚡ {CTA_LABELS.instantEstimate}
        </button>
      ) : null}

      {open ? (
        <>
          <ModalBackdrop
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
            onClick={reset}
          />
          <ModalPanel
            panelRef={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-estimate-title"
            className="fixed bottom-0 left-0 right-0 z-[56] max-h-[85vh] overflow-y-auto rounded-t-2xl border border-white/10 bg-[#030b1f] p-6 shadow-2xl sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl"
          >
              <button
                type="button"
                onClick={reset}
                className="absolute right-4 top-4 text-muted hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">Step {step + 1} of 5</p>
              <h2 id="quick-estimate-title" className="mt-2 font-display text-xl font-bold text-white">
                {STEPS[step]}
              </h2>

              <div className="mt-4 space-y-2">
                {step === 0 &&
                  leadIndustries.map((v) => (
                    <Option key={v} selected={data.industry === v} onClick={() => setData({ ...data, industry: v })}>
                      {v}
                    </Option>
                  ))}
                {step === 1 &&
                  leadProjectTypes.map((v) => (
                    <Option
                      key={v}
                      selected={data.projectType === v}
                      onClick={() => setData({ ...data, projectType: v })}
                    >
                      {v}
                    </Option>
                  ))}
                {step === 2 &&
                  companySizes.map((v) => (
                    <Option
                      key={v}
                      selected={data.companySize === v}
                      onClick={() => setData({ ...data, companySize: v })}
                    >
                      {v}
                    </Option>
                  ))}
                {step === 3 &&
                  leadBudgets.map((v) => (
                    <Option key={v} selected={data.budget === v} onClick={() => setData({ ...data, budget: v })}>
                      {v}
                    </Option>
                  ))}
                {step === 4 &&
                  leadTimelines.map((v) => (
                    <Option key={v} selected={data.timeline === v} onClick={() => setData({ ...data, timeline: v })}>
                      {v}
                    </Option>
                  ))}
              </div>

              <div className="mt-6 flex gap-2">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="v6-btn v6-btn-secondary flex-1 border-white/20 text-white"
                  >
                    Back
                  </button>
                ) : null}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => {
                      trackFormStep("quick-estimate-widget", step + 1, STEPS[step]);
                      setStep((s) => s + 1);
                    }}
                    className="v6-btn v6-btn-primary flex-1"
                  >
                    Next
                  </button>
                ) : (
                  <Link
                    href={fullHref}
                    onClick={() => {
                      trackCTAClick(CTA_LABELS.secondary, fullHref, "quick_estimate_complete");
                      reset();
                    }}
                    className="v6-btn v6-btn-primary flex-1 text-center"
                  >
                    Get Full Estimate →
                  </Link>
                )}
              </div>
          </ModalPanel>
        </>
      ) : null}
    </>
  );
}

function Option({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors",
        selected
          ? "border-brand-500/50 bg-brand-500/10 text-white"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20",
      )}
    >
      {children}
    </button>
  );
}
