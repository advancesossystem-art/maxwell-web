import { Suspense } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuickEstimateForm } from "@/components/leads/QuickEstimateForm";
import { ProjectEstimatorWizard } from "@/components/leads/ProjectEstimatorWizard";
import { createMetadata } from "@/lib/metadata";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { IconWhatsApp } from "@/components/ui/Icons";
import { whatsappHref } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Get Free Project Estimate | Website Quote | Maxwell Electrodeal",
  description:
    "Free website project estimate in under 1 minute. Short form, no obligation. Estimate on WhatsApp and email within 24 hours. Vadodara GST-registered team.",
  path: "/get-estimate",
});

const WHY_MAXWELL = [
  "Based in Vadodara — on-site available for Gujarat",
  "GST-registered — GST invoice on every project",
  "100% code ownership — no lock-in",
  `${companyMetricDisplay.projectsCompleted} projects across India & globally`,
  "Published pricing at /pricing — no quote games",
];

const TRUST_AVATARS = [
  { initials: "DC", color: "bg-indigo-500" },
  { initials: "RK", color: "bg-sky-500" },
  { initials: "AP", color: "bg-violet-500" },
  { initials: "SM", color: "bg-emerald-500" },
];

const whatsappLink = whatsappHref(
  "Hi Maxwell, I want to discuss a project estimate.",
);

export default function GetEstimatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#030712] py-8 sm:py-10 lg:py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 15% 40%, rgba(79, 70, 229, 0.28), transparent 55%), radial-gradient(ellipse 45% 60% at 85% 45%, rgba(56, 189, 248, 0.14), transparent 55%)",
          }}
          aria-hidden
        />
        <Container className="relative z-10">
          <div className="grid items-center gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
            <div className="md:col-span-7 lg:col-span-8 min-w-0">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                Free Estimate
              </span>
              <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.12]">
                Get your free project estimate
              </h1>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                <li className="inline-flex items-center gap-2">
                  <ClockIcon />
                  Short form
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldIcon />
                  No obligation
                </li>
                <li className="inline-flex items-center gap-2">
                  <ChatIcon />
                  Estimate on WhatsApp &amp; email within 24 hours.
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:col-span-5 lg:col-span-4 md:justify-end">
              <div className="relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px]">
                <Image
                  src="/estimate-hero-clipboard.png"
                  alt=""
                  width={440}
                  height={440}
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a12] py-6 sm:py-8 lg:py-9">
        <Container>
          <div className="grid items-start gap-5 lg:grid-cols-12 lg:gap-7">
            <div className="lg:col-span-7 xl:col-span-8 min-w-0">
              <div className="rounded-2xl border border-white/10 bg-[#12121c] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
                <div className="mb-5 flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/30">
                    <BoltIcon />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                      Quick estimate — under 1 minute
                    </h2>
                    <p className="mt-0.5 text-sm text-slate-400">
                      Name, email, phone, and service. Budget and details are optional.
                    </p>
                  </div>
                </div>
                <Suspense
                  fallback={
                    <div className="h-64 animate-pulse rounded-xl bg-slate-100" aria-hidden />
                  }
                >
                  <QuickEstimateForm />
                </Suspense>
              </div>
            </div>

            <aside className="lg:col-span-5 xl:col-span-4 min-w-0 space-y-4 lg:sticky lg:top-4">
              <div className="rounded-2xl border border-white/10 bg-[#12121c] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                    <StarIcon />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white">Why Maxwell?</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {WHY_MAXWELL.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-slate-300">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                        <CheckMini />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#12121c] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <IconWhatsApp className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white">Prefer to talk?</h3>
                </div>
                <p className="mt-1.5 text-sm text-slate-400">Chat with us instantly on WhatsApp.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-[#1ebe57]"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  WhatsApp us now
                </a>
              </div>

              <div className="flex items-center gap-3 px-1">
                <div className="flex -space-x-2">
                  {TRUST_AVATARS.map((a) => (
                    <span
                      key={a.initials}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a12] text-[9px] font-bold text-white ${a.color}`}
                    >
                      {a.initials}
                    </span>
                  ))}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a12] bg-violet-600 text-[9px] font-bold text-white">
                    {companyMetricDisplay.projectsCompleted}
                  </span>
                </div>
                <p className="text-xs leading-snug text-slate-400 sm:text-sm">
                  Trusted by {companyMetricDisplay.projectsCompleted} businesses across India &amp; globally
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="wizard" className="border-t border-white/5 bg-[#07070c] py-8">
        <Container className="max-w-4xl">
          <details className="group rounded-2xl border border-white/10 bg-[#12121c] p-4 sm:p-5">
            <summary className="cursor-pointer list-none font-display text-sm font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                Need a detailed cost range? Open the guided estimator
                <span className="text-sm font-normal text-slate-500 transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-400">
              Most buyers get a scoped estimate from the quick form above. Use this only if you want a longer
              module-by-module breakdown.
            </p>
            <div className="mt-5">
              <ProjectEstimatorWizard />
            </div>
          </details>
        </Container>
      </section>
    </>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13L13 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.25l2.955 6.168 6.795.87-4.995 4.71 1.305 6.702L12 17.727l-6.06 3.273 1.305-6.702-4.995-4.71 6.795-.87L12 2.25z" />
    </svg>
  );
}

function CheckMini() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
