"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappHref } from "@/lib/constants";
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
  const delivered = searchParams.get("delivered");
  const magnet = magnetId ? getLeadMagnetById(magnetId) : undefined;
  const deliveryFailed = delivered === "0";

  const isCareers = source === "careers";

  const isNewsletter =
    source === "newsletter" ||
    source === "resource-download" ||
    source === "guide-download" ||
    source === "report-download" ||
    source === "resource-hub" ||
    !!magnet;

  const calendlyUrl = getCalendlyUrl();
  const wantsCalendly = !isCareers && !isNewsletter;
  const showCalendlyEmbed = !!calendlyUrl && wantsCalendly;
  const showCalendlyFallback = wantsCalendly && !calendlyUrl;
  const whatsappLink = whatsappHref(
    isCareers
      ? "Hi, I submitted a job application on your careers page and wanted to follow up."
      : "Hi, I just submitted a form on your website and would like to schedule a call.",
  );

  const sourceLabels: Record<string, string> = {
    contact: "message",
    "get-estimate": "estimate request",
    "project-calculator": "calculator estimate",
    "book-consultation": "consultation request",
    "discovery-call": "discovery call request",
    "homepage-assessment": "assessment request",
    "exit-intent": "free audit request",
    newsletter: "newsletter subscription",
    "resource-download": "download request",
    "guide-download": "download request",
    "report-download": "download request",
    "resource-hub": "newsletter subscription",
    careers: "job application",
    "tool-roi-calculator": "ROI report request",
  };

  const friendlyLabel = sourceLabels[source] ?? "inquiry";

  const headline = isCareers
    ? "Application received"
    : isNewsletter
      ? magnet
        ? "Your download is ready"
        : "You're on the list"
      : "Request received";

  const lead = isCareers
    ? position
      ? `Thanks for applying for ${position}. Our team will review your application and reply if there is a fit.`
      : "Thanks for applying to Maxwell Electrodeal. Our team will review your application and reply if there is a fit."
    : isNewsletter
      ? magnet
        ? `${magnet.title} is ready below. We also sent a copy to your inbox.`
        : "You will get Maxwell website and SEO notes in your inbox. Check spam if nothing arrives in a few minutes."
      : `Your ${friendlyLabel} is with us. A consultant will reply within one business day — usually sooner.`;

  const nextSteps = isCareers
    ? [
        { time: "3–5 business days", text: "We review your application and portfolio." },
        { time: "If shortlisted", text: "We email or call to schedule an interview." },
        { time: "Your inbox", text: `Watch for mail from ${siteConfig.email} (and spam).` },
      ]
    : isNewsletter
      ? [
          { time: "Now", text: magnet?.downloadPath ? "Download your resource below." : "Confirm the subscription email if asked." },
          { time: "This week", text: "Useful notes on manufacturer websites, SEO, and AMC." },
          { time: "Anytime", text: "Reply to any Maxwell email to talk to a consultant." },
        ]
      : [
          { time: "Today", text: "We read your request and prepare a clear reply." },
          { time: "Within 24 hours", text: CONVERSION_EXPECTATIONS.responseTime.replace("We respond ", "You hear from us ") + "." },
          {
            time: "Next step",
            text:
              source === "get-estimate"
                ? CONVERSION_EXPECTATIONS.successEstimate
                : "A short call or WhatsApp thread to lock scope and price.",
          },
        ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#030b1f] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(37, 99, 235, 0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <Container className="relative z-10 py-12 md:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Maxwell Electrodeal
          </p>
          <div className="mt-5 flex items-start gap-4">
            <span
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
              aria-hidden
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <div className="min-w-0">
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {headline}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {lead}
              </p>
            </div>
          </div>

          {!isCareers && !isNewsletter ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={whatsappLink} external size="lg">
                WhatsApp an engineer
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10"
              >
                See published pricing
              </Button>
            </div>
          ) : null}

          {deliveryFailed && !isCareers && !isNewsletter ? (
            <p className="mt-5 max-w-xl text-sm text-amber-200/95">
              Prefer not to wait on email? WhatsApp{" "}
              <a href={whatsappLink} className="font-semibold underline underline-offset-2">
                {siteConfig.phone}
              </a>{" "}
              — we reply in business hours.
            </p>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 min-w-0">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                {isCareers ? "What happens next" : isNewsletter ? "While you are here" : "What happens next"}
              </h2>
              <ol className="mt-8 space-y-0">
                {nextSteps.map((step, i) => (
                  <li
                    key={step.time}
                    className="relative flex gap-4 border-l border-slate-200 pb-8 pl-6 last:pb-0"
                  >
                    <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#030b1f] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                        {step.time}
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-slate-700">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {magnet?.downloadPath ? (
                <div className="mt-2">
                  <Button href={magnet.downloadPath} external size="lg">
                    Download {magnet.title}
                  </Button>
                </div>
              ) : null}

              {showCalendlyEmbed && calendlyUrl ? (
                <div className="mt-10 border-t border-slate-200 pt-10">
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    {source === "get-estimate" ? "Book a call if you want to move faster" : "Book your session"}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {CONVERSION_EXPECTATIONS.consultationLength} · {CONVERSION_EXPECTATIONS.responseTime}
                  </p>
                  <div className="mt-6">
                    <CalendlyEmbed
                      url={calendlyUrl}
                      height={source === "get-estimate" ? 560 : 640}
                    />
                  </div>
                </div>
              ) : null}

              {showCalendlyFallback ? (
                <div className="mt-10 border-t border-slate-200 pt-10">
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    Prefer to talk sooner?
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-600">
                    WhatsApp is the fastest path. Or open the consultation page and we will lock a slot.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button href={whatsappLink} external size="lg">
                      Chat on WhatsApp
                    </Button>
                    <Button href="/book-consultation" variant="secondary" size="lg">
                      Book consultation
                    </Button>
                  </div>
                </div>
              ) : null}

              {!isCareers && !isNewsletter ? (
                <div className="mt-10 border-t border-slate-200 pt-10">
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    Useful while you wait
                  </h2>
                  <ul className="mt-5 space-y-3">
                    <li>
                      <Link
                        href="/case-studies/drashti-chemicals"
                        className="group inline-flex items-baseline gap-2 text-base font-medium text-indigo-700 hover:text-indigo-900"
                      >
                        <span>Drashti Chemicals — 263-page catalog, live proof</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="group inline-flex items-baseline gap-2 text-base font-medium text-indigo-700 hover:text-indigo-900"
                      >
                        <span>Website pricing — ₹35,000 · ₹75,000 · AMC ₹15,000</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/indiamart-alternative-website-manufacturer"
                        className="group inline-flex items-baseline gap-2 text-base font-medium text-indigo-700 hover:text-indigo-900"
                      >
                        <span>Why manufacturers leave paid directories</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-5 min-w-0">
              <div className="lg:sticky lg:top-24 space-y-8 border-t border-slate-200 pt-8 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pt-0 lg:pl-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Reach us directly
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li>
                      <a
                        href={whatsappLink}
                        className="font-semibold text-indigo-700 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp {siteConfig.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-indigo-700 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="text-slate-600 leading-relaxed">
                      419, Lalita Tower, Jetalpur Road
                      <br />
                      Vadodara, Gujarat 390007
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  {isCareers ? (
                    <>
                      <Button href="/careers" className="w-full sm:w-auto lg:w-full">
                        View open positions
                      </Button>
                      <Button href="/about" variant="secondary" className="w-full sm:w-auto lg:w-full">
                        About Maxwell
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button href={whatsappLink} external className="w-full sm:w-auto lg:w-full">
                        WhatsApp us
                      </Button>
                      <Button
                        href="/case-studies/drashti-chemicals"
                        variant="secondary"
                        className="w-full sm:w-auto lg:w-full"
                      >
                        See a live case study
                      </Button>
                      <Button
                        href="/services/website-development"
                        variant="secondary"
                        className="w-full sm:w-auto lg:w-full"
                      >
                        Website development
                      </Button>
                    </>
                  )}
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-indigo-700"
                >
                  Back to homepage
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ThankYouPageContent() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] animate-pulse bg-slate-100" aria-hidden />
      }
    >
      <ThankYouInner />
    </Suspense>
  );
}
