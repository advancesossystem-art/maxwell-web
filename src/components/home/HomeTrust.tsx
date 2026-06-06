"use client";

import { useState } from "react";
import { trustHighlights } from "@/lib/homepage";
import { testimonials } from "@/lib/testimonials-data";
import { formatTestimonialAttribution } from "@/lib/client-attribution";
import { FadeIn } from "@/components/motion/FadeIn";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function HomeTrust() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const featured = testimonials;
  const current = featured[index] ?? featured[0];

  return (
    <section className="v6-section v6-section--white" aria-label="Trust">
      <div className="v6-container">
        <FadeIn>
          <p className="v6-eyebrow-line v6-eyebrow">Trust</p>
          <h2 className="v6-section-title v6-section-title--wide mt-4 text-balance">
            Accountability you can plan around
          </h2>
        </FadeIn>

        <ul className="mt-10 flex flex-wrap gap-3">
          {trustHighlights.map((item) => (
            <li
              key={item.label}
              className="rounded-full border border-[var(--v6-border)] bg-[#f8fafc] px-4 py-2 text-sm text-[var(--v6-text-secondary)]"
            >
              <span className="font-semibold text-[var(--v6-text)]">{item.label}</span>
              <span className="mx-1.5 text-[var(--v6-text-muted)]">·</span>
              {item.desc}
            </li>
          ))}
        </ul>

        <div className="relative mt-14 w-full">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.id}
              className="v6-testimonial-card lg:px-12"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-display text-xl font-medium leading-relaxed text-[var(--v6-text)] sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold text-[var(--v6-text)]">
                  {formatTestimonialAttribution(current.role, current.industry)}
                </p>
                {current.outcome ? (
                  <p className="mt-3 text-sm font-medium text-[#10b981]">{current.outcome}</p>
                ) : null}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {featured.map((t, i) => (
              <button
                key={t.id}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-[#4f46e5]" : "w-2 bg-[#cbd5e1]"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
