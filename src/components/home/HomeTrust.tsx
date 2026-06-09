"use client";

import { useState } from "react";
import { trustHighlights } from "@/lib/homepage";
import { testimonials } from "@/lib/testimonials-data";
import { ClientQuoteCard } from "@/components/trust/ClientQuoteCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function HomeTrust() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const featured = testimonials;
  const current = featured[index] ?? featured[0];

  return (
    <section className="v6-section v6-section--soft" aria-label="Trust">
      <div className="v6-container">
        <FadeIn>
          <p className="v6-eyebrow-line v6-eyebrow">Trust</p>
          <h2 className="v6-section-title v6-section-title--wide mt-4 text-balance">
            Accountability you can plan around
          </h2>
        </FadeIn>

        <ul className="mt-8 flex flex-wrap gap-3">
          {trustHighlights.map((item) => (
            <li
              key={item.label}
              className="rounded-full border border-[var(--v6-border)] bg-white px-4 py-2 text-sm text-[var(--v6-text-secondary)]"
            >
              <span className="font-semibold text-[var(--v6-text)]">{item.label}</span>
              <span className="mx-1.5 text-[var(--v6-text-muted)]">·</span>
              {item.desc}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f46e5]">Client feedback</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="mt-4"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ClientQuoteCard
                  quote={current.quote}
                  role={current.role}
                  industry={current.industry}
                  subtitle={current.outcome}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f46e5]">Engagement snapshot</p>
            <div className="mt-4 rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-[var(--v6-shadow-md)]">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-[var(--v6-text-muted)]">Industry</dt>
                  <dd className="mt-0.5 font-medium text-[var(--v6-text)]">{current.industry}</dd>
                </div>
                <div>
                  <dt className="text-[var(--v6-text-muted)]">Project type</dt>
                  <dd className="mt-0.5 font-medium text-[var(--v6-text)]">{current.projectType}</dd>
                </div>
                <div>
                  <dt className="text-[var(--v6-text-muted)]">Company size</dt>
                  <dd className="mt-0.5 font-medium text-[var(--v6-text)]">{current.companySize}</dd>
                </div>
                {current.projectValue ? (
                  <div>
                    <dt className="text-[var(--v6-text-muted)]">Project value</dt>
                    <dd className="mt-0.5 font-display text-lg font-bold text-[#4f46e5]">{current.projectValue}</dd>
                  </div>
                ) : null}
              </dl>
              {current.outcome ? (
                <p className="mt-5 rounded-lg bg-[#ecfdf5] px-3 py-2.5 text-sm font-medium text-[#047857]">
                  {current.outcome}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    i === index
                      ? "bg-[#4f46e5] text-white"
                      : "border border-[var(--v6-border)] bg-white text-[var(--v6-text-secondary)] hover:border-[#4f46e5]/30"
                  }`}
                  aria-label={`Show testimonial from ${t.industry}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                >
                  {t.industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
