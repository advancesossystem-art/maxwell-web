import Image from "next/image";
import Link from "next/link";
import { HeroMagneticActions } from "@/components/home/HeroMagneticActions";
import {
  heroTrustMetrics,
  heroTrustRow,
  homeHero,
  heroSidePanel,
  drashtiFeaturedCaseStudy,
} from "@/lib/homepage";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { founderProfile } from "@/lib/trust/founder-profile";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const STAT_ICONS = [
  <svg key="p" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  <svg key="b" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
  <svg key="s" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  <svg key="r" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.753 2.25c2.036 2.036 3.32 4.482 3.32 7.12 0 .42-.025.836-.074 1.245" /></svg>,
];

const FEATURE_ICONS = [
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a48.64 48.64 0 01-4.02-.163 2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
];

const TRUST_BLOCKS = [
  { title: "GST-Registered Enterprise", body: "Formal invoices on every project — ready for your accounts team." },
  { title: "100% IP Ownership", body: "Domain, hosting, and source code registered in your name from day one." },
  { title: "Based in Vadodara, Gujarat", body: "Plant visits across GIDC belts — not a remote-only body shop." },
  { title: "No Hidden Annual Costs", body: "Published build prices. Optional AMC from ₹15,000/month — no plugin rent." },
];

const WHY_STATS = [
  { value: companyMetricDisplay.projectsCompleted, label: "Projects" },
  { value: companyMetricDisplay.industriesServed, label: "Industries" },
  { value: companyMetricDisplay.yearsInBusiness, label: "Years experience" },
  { value: companyMetricDisplay.countriesServed, label: "Countries served" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07070c]" aria-label="Hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(124, 58, 237, 0.22), transparent 55%), radial-gradient(ellipse 40% 50% at 80% 40%, rgba(56, 189, 248, 0.1), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="v6-container relative z-10 pb-8 pt-5 md:pb-10 md:pt-6 lg:pb-12 lg:pt-7">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h1
              className="font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
              data-seo-speakable
            >
              {homeHero.headlineLine1}{" "}
              <span className="v6-gradient-text">{homeHero.headlineLine2}</span>{" "}
              {homeHero.headlineLine3}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" data-seo-speakable>
              {homeHero.subhead}
            </p>

            <div className="mt-6">
              <HeroMagneticActions />
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Delivery promises">
              {heroTrustRow.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white sm:text-sm">
                    <CheckIcon />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/home-hero-devices.png"
              alt="Manufacturer catalog website on laptop and mobile"
              width={1280}
              height={720}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-4">
          {heroTrustMetrics.map((stat, i) => (
            <li key={stat.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                {STAT_ICONS[i]}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white sm:text-xl">{stat.value}</p>
                <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeBuiltForBuyers() {
  return (
    <section className="border-t border-white/5 bg-[#07070c] py-10 md:py-12">
      <div className="v6-container">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Built for how buyers search
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Engineered to rank. Designed to convert.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroSidePanel.outcomes.map((item, i) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40 hover:bg-violet-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                {FEATURE_ICONS[i]}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWebsiteTypes() {
  const types = [
    ...heroSidePanel.websiteTypes,
    { label: "B2B Websites", href: "/services/business-website-development" },
  ];
  return (
    <section className="bg-[#07070c] pb-10 md:pb-12">
      <div className="v6-container">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Website types we build
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {types.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="rounded-full border border-violet-500/40 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/15 hover:text-white"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeProvenDelivery() {
  const study = drashtiFeaturedCaseStudy;
  return (
    <section className="bg-[#07070c] pb-10 md:pb-12">
      <div className="v6-container">
        <div className="overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-r from-violet-950/80 via-[#12121c] to-[#0e0e16]">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8 lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">Proven delivery</p>
              <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                {study.client} — {study.highlight}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">{study.title}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
                {study.metrics.slice(0, 3).map((m) => (
                  <span key={m.label}>
                    <span className="font-bold text-white">{m.value}</span> {m.label}
                  </span>
                ))}
              </div>
              <Link
                href={study.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-300 hover:text-white"
              >
                See case study →
              </Link>
            </div>
            <div className="hidden w-56 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40 md:block lg:w-64">
              <Image
                src="/home-hero-devices.png"
                alt=""
                width={400}
                height={280}
                className="h-36 w-full object-cover object-top opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeTrustGrid() {
  return (
    <section className="border-y border-white/5 bg-[#0a0a12] py-10 md:py-12">
      <div className="v6-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BLOCKS.map((block) => (
            <div key={block.title} className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                <CheckIcon />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-white sm:text-base">{block.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{block.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFounderBand() {
  return (
    <section className="bg-[#07070c] py-10 md:py-14">
      <div className="v6-container">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
              Why businesses choose Maxwell
            </p>
            <ul className="mt-5 space-y-4">
              {WHY_STATS.map((s) => (
                <li key={s.label} className="flex items-baseline gap-3 border-b border-white/5 pb-3">
                  <span className="font-display text-2xl font-bold text-violet-300">{s.value}</span>
                  <span className="text-sm text-slate-400">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
              From the Founder &amp; CEO
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 font-display text-lg font-bold text-white">
                {founderProfile.initials}
              </span>
              <div>
                <p className="font-display font-semibold text-white">{founderProfile.name}</p>
                <p className="text-sm text-slate-400">{founderProfile.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {founderProfile.message}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
              How we work with you
            </p>
            <ul className="mt-5 space-y-3">
              {founderProfile.principles.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 text-violet-400">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFinalCta() {
  return (
    <section className="border-t border-white/5 bg-[#050508] py-12 md:py-16">
      <div className="v6-container">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-transparent p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to get more inquiries from your website?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {CONVERSION_EXPECTATIONS.estimateTimeline} · {CONVERSION_EXPECTATIONS.responseTime}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/get-estimate"
              className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
            >
              Request Quote →
            </Link>
            <a
              href={WHATSAPP_HREF_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-7 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
