"use client";

import { useState } from "react";
import Link from "next/link";
import { LeadContactFormFromUrl } from "@/components/leads/LeadContactForm";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H2, H3, Caption } from "@/components/design/typography";
import { TrustBadgesRow } from "@/components/leads/LeadConversionLayer";
import { FormCard } from "@/components/design/Form";
import { MicroConversionCTA } from "@/components/conversion/MicroConversionCTA";
import { CompanyAuthorityStrip } from "@/components/trust/CompanyAuthorityStrip";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { contactFaqs, globalServiceAreas } from "@/lib/leads-data";
import { trackCTAClick } from "@/components/leads/LeadAnalytics";
import { IconWhatsApp } from "@/components/ui/Icons";

const altContactLinks = [
  {
    title: "WhatsApp",
    description: "Fastest reply",
    href: WHATSAPP_HREF_CONTACT,
    external: true,
  },
  {
    title: "Call",
    description: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    external: true,
  },
  {
    title: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: true,
  },
  {
    title: "Book a call",
    description: "Pick a slot",
    href: "/book-consultation",
    external: false,
  },
];

export function ContactPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Form first — research: bury form below CTAs/map and people leave without submitting */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3" id="contact-form">
            <FormCard>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                Free quote · reply in 4 hours
              </p>
              <H3 className="mt-2">Tell us what you need</H3>
              <Caption className="mt-2 block">
                Name, email, phone, and service — about 60 seconds. No obligation. NDA on request.
              </Caption>
              <div className="mt-6">
                <LeadContactFormFromUrl source="contact" submitLabel="Get My Free Quote →" />
              </div>
            </FormCard>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-[var(--v6-border)] bg-[var(--v6-surface,#fff)] p-5">
              <p className="text-sm font-semibold text-[var(--v6-text)]">Prefer WhatsApp?</p>
              <p className="mt-1 text-sm text-muted">
                Many Gujarat manufacturers message us directly — same team, same 4-hour reply window.
              </p>
              <a
                href={WHATSAPP_HREF_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Contact WhatsApp sidebar", WHATSAPP_HREF_CONTACT)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                <IconWhatsApp className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--v6-border)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">What happens next</p>
              <ol className="mt-3 space-y-3 text-sm text-[var(--v6-text-secondary,#475569)]">
                {[
                  "We confirm we received your request",
                  "A consultant replies within 4 business hours",
                  "You get a clear next step — scope, timeline, or call",
                ].map((step, i) => (
                  <li key={step} className="flex gap-2">
                    <span className="font-bold text-brand-600">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {altContactLinks.map((opt) =>
                opt.external ? (
                  <a
                    key={opt.title}
                    href={opt.href}
                    target={opt.href.startsWith("http") ? "_blank" : undefined}
                    rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => trackCTAClick(`Contact ${opt.title}`, opt.href)}
                    className="rounded-xl border border-[var(--v6-border)] px-3 py-3 transition hover:border-brand-600/40"
                  >
                    <p className="text-sm font-semibold text-[var(--v6-text)]">{opt.title}</p>
                    <p className="mt-0.5 truncate text-xs text-muted">{opt.description}</p>
                  </a>
                ) : (
                  <Link
                    key={opt.title}
                    href={opt.href}
                    onClick={() => trackCTAClick(`Contact ${opt.title}`, opt.href)}
                    className="rounded-xl border border-[var(--v6-border)] px-3 py-3 transition hover:border-brand-600/40"
                  >
                    <p className="text-sm font-semibold text-[var(--v6-text)]">{opt.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{opt.description}</p>
                  </Link>
                ),
              )}
            </div>
          </aside>
        </div>
      </PageSection>

      <PageSection tone="elevated">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Office & service areas</H2>
            <Caption className="mt-4 block">
              Headquartered in Vadodara with delivery across India and internationally.
            </Caption>
            <Card className="mt-6" interactive={false}>
              <CompanyAuthorityStrip showMapLink={false} />
              <Link
                href="/locations/india/vadodara"
                className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline"
              >
                View our Vadodara service page →
              </Link>
            </Card>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--v6-border)]">
              <iframe
                title="Maxwell Electrodeal office location — Vadodara, Gujarat"
                src={businessAddress.googleMapsEmbedUrl}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>
          <div>
            <H3>Global service areas</H3>
            <div className="mt-4 space-y-4">
              {globalServiceAreas.map((area) => (
                <div key={area.region}>
                  <p className="text-eyebrow font-semibold uppercase text-brand-500">{area.region}</p>
                  <Caption className="mt-1 block">{area.cities.join(" · ")}</Caption>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <H2 className="text-center">Frequently asked questions</H2>
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-border">
          {contactFaqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-display font-semibold pr-4">{faq.question}</span>
                <span className="shrink-0 text-brand-600">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <MicroConversionCTA variant="newsletter" location="contact_page" />
          <MicroConversionCTA variant="resource" location="contact_page" />
        </div>
        <div className="mt-8">
          <TrustBadgesRow />
        </div>
      </PageSection>
    </>
  );
}
