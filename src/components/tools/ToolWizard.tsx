"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/leads/LeadFormFields";
import { ArrowRight } from "@/components/ui/Icons";

export function ToolWizard({
  step,
  totalSteps,
  stepTitle,
  children,
  onBack,
  onNext,
  nextLabel = "Continue",
  canNext = true,
  isLastStep = false,
  onFinish,
}: {
  step: number;
  totalSteps: number;
  stepTitle: string;
  children: ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  canNext?: boolean;
  isLastStep?: boolean;
  onFinish?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated shadow-sm">
      <div className="border-b border-border px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgressBar current={step} total={totalSteps} />
        <h2 className="mt-3 font-display text-base font-semibold sm:mt-4 sm:text-lg">{stepTitle}</h2>
      </div>
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div key={step} className="animate-[fadeSlideIn_0.25s_ease-out]">
          {children}
        </div>
      </div>
      <div className="flex flex-col-reverse gap-3 border-t border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 lg:px-8">
        {onBack && step > 1 ? (
          <Button type="button" variant="secondary" onClick={onBack} className="w-full sm:w-auto">
            Back
          </Button>
        ) : (
          <div className="hidden sm:block" />
        )}
        {isLastStep ? (
          <Button type="button" onClick={onFinish} disabled={!canNext} className="w-full sm:w-auto">
            Generate Results <ArrowRight />
          </Button>
        ) : (
          <Button type="button" onClick={onNext} disabled={!canNext} className="w-full sm:w-auto">
            {nextLabel} <ArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}
