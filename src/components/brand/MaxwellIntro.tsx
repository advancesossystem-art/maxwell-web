"use client";

import { useCallback, useEffect, useRef } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { MaxwellLogoMark } from "@/components/brand/MaxwellLogoMark";
import type { IntroMode } from "@/lib/intro/config";
import { INTRO_TIMING } from "@/lib/intro/config";
import { INTRO_Z_INDEX } from "@/hooks/useIntro";

const STROKE_LENGTH = 400;

type Props = {
  mode: IntroMode;
  onComplete: () => void;
  onSkip: () => void;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MaxwellIntro({ mode, onComplete, onSkip }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const doneRef = useRef(false);
  const gsapRef = useRef<typeof import("gsap").default | null>(null);

  const exitDuration = INTRO_TIMING[mode === "minimal" ? "minimal" : "full"].exit;

  const exit = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;

    const overlay = overlayRef.current;
    const gsap = gsapRef.current;
    if (!overlay || !gsap) {
      onComplete();
      return;
    }

    gsap.to(overlay, {
      opacity: 0,
      duration: exitDuration,
      ease: "power2.inOut",
      onComplete,
    });
  }, [exitDuration, onComplete]);

  const handleSkip = useCallback(() => {
    gsapRef.current?.killTweensOf(overlayRef.current);
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

    if (!stroke || !left || !facet || !right || !wordmark || !tagline || !line) {
      onComplete();
      return;
    }

    let cancelled = false;
    let revert: (() => void) | undefined;

    import("gsap").then(({ default: gsap }) => {
      if (cancelled) return;
      gsapRef.current = gsap;

      if (prefersReducedMotion()) {
        gsap.set([stroke, left, facet, right], { opacity: 1, strokeDashoffset: 0 });
        gsap.set([wordmark, tagline, line], { opacity: 1, y: 0, scaleX: 1 });
        const t = window.setTimeout(exit, 280);
        revert = () => window.clearTimeout(t);
        return;
      }

      const ctx = gsap.context(() => {
        if (mode === "minimal") {
          gsap.set([left, facet, right], { opacity: 0 });
          gsap.set(stroke, { strokeDashoffset: STROKE_LENGTH });
          gsap.set(wordmark, { opacity: 0, y: 8 });
          gsap.set(tagline, { opacity: 0, y: 4 });
          gsap.set(line, { scaleX: 0, transformOrigin: "center" });

          const tl = gsap.timeline({ onComplete: exit });
          tl.to(stroke, { strokeDashoffset: 0, duration: 0.55, ease: "power2.out" });
          tl.to([left, facet, right], { opacity: 1, duration: 0.28, stagger: 0.06, ease: "power2.out" }, "-=0.12");
          tl.to(wordmark, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.08");
          tl.to(line, { scaleX: 1, duration: 0.28, ease: "power2.inOut" }, "-=0.2");
          tl.to(tagline, { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }, "-=0.28");
          return;
        }

        gsap.set([left, facet, right], { opacity: 0 });
        gsap.set(stroke, { strokeDashoffset: STROKE_LENGTH });
        gsap.set(wordmark, { opacity: 0, y: 10 });
        gsap.set(tagline, { opacity: 0, y: 6 });
        gsap.set(line, { scaleX: 0, transformOrigin: "center" });

        const tl = gsap.timeline({ onComplete: exit });
        tl.to(stroke, { strokeDashoffset: 0, duration: 0.85, ease: "power2.inOut" });
        tl.to(left, { opacity: 1, duration: 0.22, ease: "power2.out" }, "-=0.1");
        tl.to(facet, { opacity: 1, duration: 0.18, ease: "power2.out" }, "-=0.14");
        tl.to(right, { opacity: 1, duration: 0.2, ease: "power2.out" }, "-=0.12");
        tl.to(wordmark, { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" }, "-=0.05");
        tl.to(line, { scaleX: 1, duration: 0.32, ease: "power2.inOut" }, "-=0.28");
        tl.to(tagline, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" }, "-=0.32");
      }, overlayRef);

      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      gsapRef.current?.killTweensOf(overlayRef.current);
      revert?.();
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

      <div className="flex flex-col items-center px-6">
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
