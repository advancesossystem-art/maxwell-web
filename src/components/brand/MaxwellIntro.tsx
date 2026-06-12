"use client";

import { useCallback, useEffect, useRef } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { MaxwellLogoMark } from "@/components/brand/MaxwellLogoMark";
import type { IntroMode } from "@/lib/intro/config";
import { INTRO_Z_INDEX } from "@/hooks/useIntro";
import { runIntroSequence } from "@/lib/animations/intro";

type Props = {
  mode: IntroMode;
  onComplete: () => void;
  onSkip: () => void;
};

export function MaxwellIntro({ mode, onComplete, onSkip }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRootRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const doneRef = useRef(false);
  const stopRef = useRef<(() => void) | null>(null);

  const exit = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onComplete();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    stopRef.current?.();
    onSkip();
  }, [onSkip]);

  useEscapeKey(handleSkip, true);
  useFocusTrap(overlayRef, true);

  useEffect(() => {
    skipRef.current?.focus();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const stroke = svg?.querySelector<SVGPathElement>("#maxwell-blue-stroke");
    const left = svg?.querySelector<SVGPathElement>("#maxwell-white-left");
    const facet = svg?.querySelector<SVGPathElement>("#maxwell-blue-facet");
    const right = svg?.querySelector<SVGPathElement>("#maxwell-white-right");
    const wordmark = wordmarkRef.current;
    const tagline = taglineRef.current;
    const line = tagline?.querySelector<HTMLElement>("[data-intro-line]");
    const overlay = overlayRef.current;
    const logoRoot = logoRootRef.current;

    if (!stroke || !left || !facet || !right || !wordmark || !tagline || !line || !overlay || !logoRoot) {
      onComplete();
      return;
    }

    stopRef.current = runIntroSequence(
      {
        overlay,
        stroke,
        left,
        facet,
        right,
        wordmark,
        tagline,
        line,
        logoRoot,
      },
      mode,
      exit,
    );

    return () => {
      stopRef.current?.();
    };
  }, [exit, mode, onComplete]);

  return (
    <div
      id="maxwell-intro-overlay"
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black/95 will-change-[opacity]"
      style={{ zIndex: INTRO_Z_INDEX }}
      role="dialog"
      aria-label="Maxwell brand introduction"
      aria-modal="true"
    >
      <button
        ref={skipRef}
        type="button"
        onClick={handleSkip}
        className="absolute right-6 top-6 rounded-lg px-3 py-2 text-sm text-[#94A3B8] transition-colors hover:text-white"
      >
        Skip <span className="hidden sm:inline text-[#94A3B8]">· Esc</span>
      </button>

      <div ref={logoRootRef} className="flex flex-col items-center px-6">
        <MaxwellLogoMark ref={svgRef} className="h-36 w-44 sm:h-44 sm:w-52" />

        <div ref={wordmarkRef} className="mt-14 text-center opacity-0">
          <p className="font-display text-[1.75rem] font-semibold tracking-[0.38em] text-white sm:text-[2.125rem]">
            MAXWELL
          </p>
        </div>

        <div ref={taglineRef} className="relative mt-5 text-center opacity-0">
          <div
            data-intro-line
            className="mx-auto mb-3.5 h-px w-28 max-w-full bg-brand-600"
          />
          <p className="font-display text-[0.6875rem] font-medium tracking-[0.46em] text-[#94a3b8] sm:text-xs">
            ELECTRODEAL
          </p>
        </div>
      </div>
    </div>
  );
}
