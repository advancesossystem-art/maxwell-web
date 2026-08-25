"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { TrackedWhatsAppLink } from "@/components/conversion/TrackedWhatsAppLink";
import { homepageFaqs } from "@/lib/homepage";
import { CTA_LABELS } from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { cn } from "@/lib/utils";

const FAQ_ANCHORS = [
  { label: "From ₹35,000", hint: "Starter website" },
  { label: "100% IP", hint: "You own the code" },
  { label: "Vadodara HQ", hint: "Gujarat plant visits" },
] as const;

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-[#07070c] py-14 md:py-20"
      aria-label="FAQ"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 0% 20%, rgba(124, 58, 237, 0.14), transparent 55%), radial-gradient(ellipse 35% 40% at 100% 80%, rgba(56, 189, 248, 0.06), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="v6-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Straight answers before you commit
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400 sm:text-base">
              Cost, timeline, ownership, and who we are — no sales theatre.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/get-estimate"
                className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
                onClick={() => trackCTAClick(CTA_LABELS.primary, "/get-estimate", "homepage_faq")}
              >
                {CTA_LABELS.primary} →
              </Link>
              <TrackedWhatsAppLink className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-emerald-500/60 px-6 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/10">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.04 2C6.5 2 2.004 6.486 2 12.02c0 1.77.463 3.5 1.342 5.021L2 22l5.09-1.315A10.04 10.04 0 0 0 12.04 22C17.58 22 22 17.523 22 12.01 21.996 6.49 17.57 2 12.04 2zm0 18.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.178-3.02.78.807-2.944-.195-.312A8.09 8.09 0 0 1 3.91 12.02C3.914 7.55 7.57 3.9 12.04 3.9c4.46 0 8.086 3.64 8.09 8.11-.004 4.47-3.64 8.12-8.09 8.12z" />
                </svg>
                {CTA_LABELS.secondary}
              </TrackedWhatsAppLink>
            </div>

            <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
              {FAQ_ANCHORS.map((item) => (
                <li key={item.label} className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-sm font-semibold text-white">{item.label}</span>
                  <span className="text-xs text-slate-500">{item.hint}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              role="region"
              aria-label="Frequently asked questions"
            >
              {homepageFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                const panelId = `${baseId}-panel-${i}`;
                const triggerId = `${baseId}-trigger-${i}`;
                const isLast = i === homepageFaqs.length - 1;

                return (
                  <div
                    key={faq.question}
                    className={cn(!isLast && "border-b border-white/5")}
                  >
                    <button
                      id={triggerId}
                      type="button"
                      className={cn(
                        "group flex w-full items-start gap-4 px-5 py-5 text-left transition-colors duration-200 sm:px-6 sm:py-5",
                        isOpen ? "bg-violet-500/[0.07]" : "hover:bg-white/[0.03]",
                      )}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span
                        className={cn(
                          "mt-1 h-8 w-0.5 shrink-0 rounded-full transition-colors duration-200",
                          isOpen ? "bg-violet-400" : "bg-transparent group-hover:bg-white/20",
                        )}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-400/90">
                          {faq.category}
                        </span>
                        <span
                          className={cn(
                            "mt-1.5 block font-display text-sm font-semibold leading-snug sm:text-base",
                            isOpen ? "text-white" : "text-slate-200",
                          )}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-200",
                          isOpen
                            ? "rotate-45 border-violet-400/40 bg-violet-500/20 text-violet-300"
                            : "border-white/10 text-slate-500 group-hover:border-white/20 group-hover:text-slate-300",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      aria-hidden={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="flex gap-4 px-5 pb-5 sm:px-6">
                          <span className="w-0.5 shrink-0" aria-hidden />
                          <p
                            className="min-w-0 flex-1 text-sm leading-relaxed text-slate-400"
                            data-seo-speakable
                          >
                            {faq.answer}
                          </p>
                          <span className="w-8 shrink-0" aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
