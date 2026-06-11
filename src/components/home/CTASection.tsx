"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/lib/constants";
import { ArrowRight } from "@/components/ui/Icons";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <span className="inline-flex rounded-full border border-brand-600/20 bg-brand-50 px-3 py-1 text-xs font-medium tracking-wide text-brand-700 uppercase">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Questions? We have answers.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Everything you need to know before starting your project. Can&apos;t find what you&apos;re looking for?
            </p>
            <Button href="/contact" className="mt-8">
              Talk to our team <ArrowRight />
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-surface-elevated">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                const panelId = `${baseId}-panel-${i}`;
                const triggerId = `${baseId}-trigger-${i}`;
                return (
                <div key={faq.question}>
                  <button
                    id={triggerId}
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="pr-4 font-display text-sm font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-muted transition-transform duration-300",
                        isOpen && "rotate-45 bg-brand-50 text-brand-600",
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-48 pb-5" : "max-h-0",
                    )}
                  >
                    <p className="px-6 text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </div>
              );
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <FadeIn>
          <div className="card-premium relative overflow-hidden rounded-3xl border-brand-500/20 bg-[#030b1f] px-8 py-16 text-center sm:px-16 lg:py-24">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37, 99, 235, 0.18), transparent 65%)",
              }}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-h2">
                Ready to power your digital growth?
              </h2>
              <p className="mt-4 text-lead text-[#CBD5E1]">
                Tell us about your project. We respond within 24 hours with a clear path forward—no obligation, no sales pressure.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" variant="secondary">
                  Book Free Consultation
                  <ArrowRight />
                </Button>
                <Button href="/services" size="lg" variant="outline">
                  Explore Services
                </Button>
              </div>
              <p className="mt-6 text-sm text-blue-200/50">
                Projects from ₹50,000 to ₹25,00,000+ • 100% IP ownership • NDA available
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
