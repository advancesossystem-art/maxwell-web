"use client";

import Link from "next/link";
import { trustProofItems } from "@/lib/homepage";
import { CONVERSION_ROUTES } from "@/lib/conversion-copy";

/** Phase A — above-the-fold trust proof directly below hero */
export function TrustProofStrip() {
  return (
    <section
      className="border-b border-[var(--v6-border)] bg-white"
      aria-label="Why trust Maxwell"
    >
      <div className="v6-container py-4">
        <ul className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-8 lg:gap-y-2">
          {trustProofItems.map((item) => (
            <li key={item.label} className="flex items-start gap-2.5 text-sm lg:items-center">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-[#059669] lg:mt-0"
                aria-hidden
              >
                ✓
              </span>
              <Link href={item.href} className="font-medium text-[var(--v6-text)] hover:text-[#4f46e5]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-xs text-[var(--v6-text-muted)]">
          No obligation · Response within 24 hours ·{" "}
          <Link href={CONVERSION_ROUTES.estimate} className="font-semibold text-[#4f46e5] hover:underline">
            Free project assessment
          </Link>
        </p>
      </div>
    </section>
  );
}
