"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

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
  const pct = Math.round((step / totalSteps) * 100);

  return (
    <div className="tool-wizard">
      <div className="tool-wizard__head">
        <div
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-valuenow={step}
          aria-label={`Step ${step} of ${totalSteps}`}
          className="tool-wizard__progress-track"
        >
          <div className="tool-wizard__progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="tool-wizard__step-label">
          <span>Step {step} of {totalSteps}</span>
          <span>{pct}% complete</span>
        </div>
        <h2 className="tool-wizard__step-title">{stepTitle}</h2>
      </div>
      <div className="tool-wizard__body">
        <div key={step} className="animate-[fadeSlideIn_0.25s_ease-out]">
          {children}
        </div>
      </div>
      <div className="tool-wizard__foot">
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
