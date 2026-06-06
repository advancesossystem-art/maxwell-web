"use client";

import { forwardRef } from "react";

const STROKE_LENGTH = 400;

export const MaxwellLogoMark = forwardRef<
  SVGSVGElement,
  {
    className?: string;
    glow?: number;
    /** light = header/footer on white; dark = intro overlay */
    theme?: "light" | "dark";
  }
>(function MaxwellLogoMark({ className, glow = 0, theme = "dark" }, ref) {
  const strokeColor = glow > 0 ? "url(#maxwell-intro-stroke)" : theme === "light" ? "#4f46e5" : "#2563EB";
  const leftFill = theme === "light" ? "#0f172a" : "white";
  const facetFill = theme === "light" ? "#4f46e5" : "#2563EB";
  const rightFill = theme === "light" ? "#334155" : "white";

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {glow > 0 ? (
          <linearGradient id="maxwell-intro-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        ) : null}
      </defs>

      <path
        id="maxwell-blue-stroke"
        data-intro-stroke
        d="M8 72 L52 28 L92 48"
        stroke={strokeColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={STROKE_LENGTH}
        strokeDashoffset={theme === "light" ? 0 : STROKE_LENGTH}
      />

      <path
        id="maxwell-white-left"
        data-intro-piece
        d="M18 78 L38 22 L52 78"
        fill={leftFill}
        opacity={theme === "light" ? 1 : 0}
      />

      <path
        id="maxwell-blue-facet"
        data-intro-piece
        d="M38 22 L52 22 L52 50 L38 38 Z"
        fill={facetFill}
        opacity={theme === "light" ? 1 : 0}
      />

      <path
        id="maxwell-white-right"
        data-intro-piece
        d="M52 22 L68 22 L68 78 L52 78 Z"
        fill={rightFill}
        opacity={theme === "light" ? 1 : 0}
      />
    </svg>
  );
});
