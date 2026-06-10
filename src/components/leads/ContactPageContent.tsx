"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LeadContactForm } from "@/components/leads/LeadContactForm";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H2, H3, Caption } from "@/components/design/typography";
import { TrustBadgesRow } from "@/components/leads/LeadConversionLayer";
import { FormCard } from "@/components/design/Form";
import { MicroConversionCTA } from "@/components/conversion/MicroConversionCTA";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import {
  contactFaqs,
  globalServiceAreas,
  WHATSAPP_NUMBER,
} from "@/lib/leads-data";
import { trackCTAClick } from "@/components/leads/LeadAnalytics";
import { ArrowRight } from "@/components/ui/Icons";

const contactOptions = [
  {
    title: "WhatsApp",
    description: "Fastest response for urgent inquiries",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Maxwell, I'd like to discuss a project.")}`,
    external: true,
  },
  {
    title: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: true,
  },
  {
    title: "Phone",
    description: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    external: true,
  },
  {
    title: "Schedule Meeting",
    description: "Book a free discovery call",
    href: "/discovery-call",
    external: false,
  },
];

const contactCardClass = "mx-hub-card block h-full";

export function ContactPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start with a <AccentGradient>clear conversation</AccentGradient>
          </>
        }
        description="Tell us what is slowing the business down. We respond within one business day with a practical next step."
      >
        <Button href="/book-consultation" size="lg">
          Book Consultation
          <ArrowRight />
        </Button>
        <Button href="/get-estimate" size="lg" variant="outline">
          Get Project Estimate
        </Button>
      </PageHero>

      <PageSection>
        <H2>How would you like to connect?</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map((opt) =>
            opt.external ? (
              <a
                key={opt.title}
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => trackCTAClick(`Contact ${opt.title}`, opt.href)}
                className={contactCardClass}
              >
                <H3 className="mt-0">{opt.title}</H3>
                <Caption className="mt-1">{opt.description}</Caption>
              </a>
            ) : (
              <Card key={opt.title} href={opt.href}>
                <H3 className="mt-0">{opt.title}</H3>
                <Caption className="mt-1">{opt.description}</Caption>
              </Card>
            ),
          )}
        </div>
      </PageSection>

      <PageSection tone="elevated">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <H2>Office & service areas</H2>
              <Caption className="mt-4 block">
                Headquartered in India with remote delivery capabilities worldwide.
              </Caption>
              <Card className="mt-6" interactive={false}>
                <p className="font-display font-semibold text-[var(--v6-text)]">{siteConfig.legalName}</p>
                <Caption className="mt-2 block">{siteConfig.address}</Caption>
                <Caption className="mt-4 block">Response time: within 24 hours</Caption>
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
          <div className="lg:col-span-3">
            <FormCard>
              <H3>Send us a message</H3>
              <Caption className="mt-2 block">Complete the form and we&apos;ll respond within 24 hours.</Caption>
              <div className="mt-8">
                <LeadContactForm source="contact" />
              </div>
            </FormCard>
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
