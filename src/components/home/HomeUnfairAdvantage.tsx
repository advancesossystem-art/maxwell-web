import Link from "next/link";
import { unfairAdvantageOffer } from "@/lib/homepage";

export function HomeUnfairAdvantage() {
  const o = unfairAdvantageOffer;
  return (
    <section className="border-y border-slate-200 bg-[#f8fafc] py-16 md:py-20" aria-labelledby="unfair-advantage-heading">
      <div className="v6-container">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{o.eyebrow}</p>
        <h2
          id="unfair-advantage-heading"
          className="mt-2 max-w-3xl font-display text-2xl font-bold text-slate-900 md:text-3xl"
        >
          {o.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{o.description}</p>
        <p className="mt-2 max-w-3xl text-xs text-slate-500">{o.assumptions}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {o.pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-display text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={o.ctaPrimary.href}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            {o.ctaPrimary.label}
          </Link>
          <Link
            href={o.ctaSecondary.href}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-indigo-300"
          >
            {o.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
