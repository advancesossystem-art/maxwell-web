"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/constants";
import { getLeadMagnetById } from "@/lib/content/lead-magnets";
import { ArrowRight } from "@/components/ui/Icons";
import { CalendlyEmbed } from "@/components/leads/CalendlyEmbed";
import { getCalendlyUrl } from "@/lib/calendly";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "contact";
  const position = searchParams.get("position");
  const magnetId = searchParams.get("magnet");
  const magnet = magnetId ? getLeadMagnetById(magnetId) : undefined;

  const isCareers = source === "careers";

  const calendlyUrl = getCalendlyUrl();
  const wantsCalendly =
    !isCareers &&
    (source === "book-consultation" || source === "discovery-call" || source === "get-estimate");
  const showCalendlyEmbed = !!calendlyUrl && wantsCalendly;
  const showCalendlyFallback = wantsCalendly && !calendlyUrl;
  const whatsappLink = whatsappHref(
    isCareers
      ? "Hi, I submitted a job application on your careers page and wanted to follow up."
      : "Hi, I just submitted a form on your website and would like to schedule a call.",
  );

  const isNewsletter =
    source === "newsletter" ||
    source === "resource-download" ||
    source === "guide-download" ||
    source === "report-download" ||
    source === "resource-hub" ||
    !!magnet;

  const sourceLabels: Record<string, string> = {
    contact: "message",
    "get-estimate": "estimate request",
    "project-calculator": "calculator estimate",
    "book-consultation": "consultation request",
    "discovery-call": "discovery call request",
    newsletter: "newsletter subscription",
    "resource-download": "download request",
    "guide-download": "download request",
    "report-download": "download request",
    "resource-hub": "newsletter subscription",
    careers: "job application",
  };

  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="mt-8 font-display text-3xl font-bold sm:text-4xl">
          {isCareers ? "Application received!" : "Thank you!"}
        </h1>
        <p className="mt-4 text-lg text-muted">
          {isCareers
            ? position
              ? `Thank you for applying for ${position}. Our HR team has your application and will review it shortly.`
              : "Thank you for applying to Maxwell Electrodeal. Our HR team has your application and will review it shortly."
            : isNewsletter
              ? magnet
                ? `Your download is ready. We've also sent ${magnet.title} details to your inbox.`
                : "You're subscribed to Maxwell engineering insights. Check your inbox to confirm."
              : showCalendlyEmbed || showCalendlyFallback
                ? `Your ${sourceLabels[source] ?? "inquiry"} is confirmed. Pick a time below — or we'll reach out within one business day.`
                : `Your ${sourceLabels[source] ?? "inquiry"} has been received. Our team will respond within 24 hours.`}
        </p>

        {showCalendlyEmbed && calendlyUrl ? (
          <div className="mt-10 text-left">
            <h2 className="font-display text-lg font-bold text-center sm:text-left">
              {source === "get-estimate" ? "Prefer to talk sooner?" : "Book your session now"}
            </h2>
            <p className="mt-2 text-center text-sm text-muted sm:text-left">
              {CONVERSION_EXPECTATIONS.consultationLength} · {CONVERSION_EXPECTATIONS.responseTime}
            </p>
            <div className="mt-6">
              <CalendlyEmbed url={calendlyUrl} height={source === "get-estimate" ? 600 : 700} />
            </div>
          </div>
        ) : null}

        {showCalendlyFallback ? (
          <div className="mt-10 rounded-2xl border border-border bg-surface-elevated p-6 text-left">
            <h2 className="font-display text-lg font-bold">
              {source === "get-estimate" ? "Prefer to talk sooner?" : "Book your session now"}
            </h2>
            <p className="mt-2 text-sm text-muted">
              Our scheduling calendar is loading separately — a consultant will email you a booking link within one
              business day. For a faster response, message us on WhatsApp.
            </p>
            <p className="mt-2 text-sm text-muted">
              {CONVERSION_EXPECTATIONS.consultationLength} · {CONVERSION_EXPECTATIONS.responseTime}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink} external size="lg" className="w-full sm:w-auto">
                Chat on WhatsApp
              </Button>
              <Button href="/book-consultation" variant="secondary" size="lg" className="w-full sm:w-auto">
                Book consultation page
              </Button>
            </div>
          </div>
        ) : null}

        {magnet?.downloadPath && (
          <Button href={magnet.downloadPath} external className="mt-8" size="lg">
            Download {magnet.title}
          </Button>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-surface-elevated p-8 text-left">
          <h2 className="font-display text-lg font-bold">
            {isCareers ? "What happens next?" : isNewsletter ? "While you're here" : "What happens next?"}
          </h2>
          <ol className="mt-4 space-y-4">
            {(isCareers
              ? [
                  { time: "Within 3–5 business days", text: "Our HR team reviews your application and portfolio" },
                  { time: "If shortlisted", text: "We'll email or call you to schedule an interview" },
                  { time: "Keep an eye on your inbox", text: "Check spam/junk for messages from maxwellelectrodealsystems@gmail.com" },
                ]
              : isNewsletter
              ? [
                  { time: "Now", text: "Access your resource using the download button above" },
                  { time: "Weekly", text: "Receive curated articles on ERP, AI, and software strategy" },
                  { time: "Anytime", text: "Reply to our emails to speak with a consultant" },
                ]
              : [
              { time: "Within 24 hours", text: "A senior consultant reviews your requirements" },
              { time: "1–2 business days", text: "We schedule a discovery or strategy call" },
              { time: "3–5 business days", text: "You receive a detailed proposal with transparent pricing" },
            ]).map((step, i) => (
              <li key={step.time} className="flex gap-4">
                <span className="v6-step-num h-8 w-8 text-sm">{i + 1}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{step.time}</p>
                  <p className="mt-0.5 text-sm text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={`mt-10 grid gap-3 ${isCareers ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {isCareers ? (
            <>
              <Button href="/careers" variant="primary" className="w-full">
                View open positions
              </Button>
              <Button href="/about" variant="secondary" className="w-full">
                About Maxwell Electrodeal
              </Button>
            </>
          ) : (
            <>
              <Button href={whatsappLink} external variant="primary" className="w-full">
                WhatsApp Us
              </Button>
              <Button href="/case-studies" variant="secondary" className="w-full">
                Case Studies
              </Button>
              <Button href="/services" variant="secondary" className="w-full">
                Explore Services
              </Button>
            </>
          )}
        </div>

        {!isCareers && !isNewsletter && (
          <div className="mt-8 rounded-2xl border border-border bg-surface-elevated p-6 text-left">
            <h2 className="font-display text-base font-bold">While you wait — see how we've helped similar businesses:</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/case-studies/drashti-chemicals" className="text-brand-600 hover:underline font-medium">
                  How we built a 263-page manufacturer website in 6 weeks →
                </Link>
              </li>
              <li>
                <Link href="/blog/indiamart-alternative-website-manufacturer" className="text-brand-600 hover:underline font-medium">
                  Why manufacturers are moving beyond IndiaMART →
                </Link>
              </li>
              <li>
                <Link href="/blog/erp-software-cost-india-2026" className="text-brand-600 hover:underline font-medium">
                  ERP software cost in India 2026 — complete guide →
                </Link>
              </li>
            </ul>
          </div>
        )}

        <Link href="/" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          Back to homepage <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Container>
    </section>
  );
}

export function ThankYouPageContent() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse" />}>
      <ThankYouInner />
    </Suspense>
  );
}
