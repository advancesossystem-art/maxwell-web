"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/leads-data";
import { getLeadMagnetById } from "@/lib/content/lead-magnets";
import { ArrowRight } from "@/components/ui/Icons";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "contact";
  const magnetId = searchParams.get("magnet");
  const magnet = magnetId ? getLeadMagnetById(magnetId) : undefined;

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
  };

  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="mt-8 font-display text-3xl font-bold sm:text-4xl">Thank you!</h1>
        <p className="mt-4 text-lg text-muted">
          {isNewsletter
            ? magnet
              ? `Your download is ready. We've also sent ${magnet.title} details to your inbox.`
              : "You're subscribed to Maxwell engineering insights. Check your inbox to confirm."
            : `Your ${sourceLabels[source] ?? "inquiry"} has been received. Our team will respond within 24 hours.`}
        </p>

        {magnet?.downloadPath && (
          <Button href={magnet.downloadPath} external className="mt-8" size="lg">
            Download {magnet.title}
          </Button>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-surface-elevated p-8 text-left">
          <h2 className="font-display text-lg font-bold">{isNewsletter ? "While you're here" : "What happens next?"}</h2>
          <ol className="mt-4 space-y-4">
            {(isNewsletter
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

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <Button
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just submitted a form on your website.")}`}
            external
            variant="secondary"
            className="w-full"
          >
            WhatsApp Us
          </Button>
          <Button href="/case-studies" variant="secondary" className="w-full">Case Studies</Button>
          <Button href="/services" variant="secondary" className="w-full">Explore Services</Button>
        </div>

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
