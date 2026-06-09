"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { LeadContactForm } from "@/components/leads/LeadContactForm";
import {
  discoveryCallBenefits,
  discoveryAgenda,
  discoveryDeliverables,
  contactFaqs,
} from "@/lib/leads-data";
import { CheckIcon, ArrowRight } from "@/components/ui/Icons";
import { CalendlyEmbed } from "@/components/leads/CalendlyEmbed";
import { getCalendlyUrl } from "@/lib/calendly";

export function DiscoveryCallPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const calendlyUrl = getCalendlyUrl();

  return (
    <>
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-32 lg:pb-24 lg:pt-40">
        <Container className="relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Discovery Call</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
              Free 30-minute strategy session
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              Understand scope, feasibility, and investment before you commit. Zero sales pressure.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Why book a discovery call?</h2>
              <div className="mt-8 space-y-6">
                {discoveryCallBenefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <CheckIcon className="mt-1 shrink-0 text-brand-600" />
                    <div>
                      <h3 className="font-display font-semibold">{b.title}</h3>
                      <p className="mt-1 text-sm text-muted">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-8">
                <h3 className="font-display font-semibold">Meeting agenda</h3>
                <ol className="mt-4 space-y-3">
                  {discoveryAgenda.map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="v6-step-num">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
                <h3 className="mt-8 font-display font-semibold">Expected deliverables</h3>
                <ul className="mt-4 space-y-2">
                  {discoveryDeliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted">
                      <CheckIcon className="mt-0.5 shrink-0 text-brand-600" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold">Schedule your call</h2>
            <p className="mt-2 text-muted">Choose a time that works for you</p>
            {calendlyUrl ? (
              <div className="mt-10 text-left">
                <CalendlyEmbed url={calendlyUrl} />
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border-2 border-dashed border-brand-600/30 bg-brand-50/50 p-12">
                <p className="v6-result-bar__text text-lg">Schedule instantly</p>
                <p className="mt-2 text-sm text-muted">
                  Add your Calendly link to <code className="text-xs">NEXT_PUBLIC_CALENDLY_URL</code> to enable
                  live scheduling here.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button href="/contact" size="lg">
                    Request Callback Instead <ArrowRight />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-center">Or send a message</h2>
          <div className="mt-8 rounded-2xl border border-border bg-surface-elevated p-8">
            <LeadContactForm source="discovery-call" submitLabel="Book Discovery Call" />
          </div>
          <div className="mt-12 divide-y divide-border">
            {contactFaqs.slice(0, 3).map((faq, i) => (
              <div key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full justify-between py-4 text-left">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span className="text-brand-600">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="pb-4 text-sm text-muted">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
