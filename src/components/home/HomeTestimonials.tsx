import Link from "next/link";
import { homepageTestimonials } from "@/lib/homepage";
import { formatTestimonialAttribution } from "@/lib/client-attribution";

export function HomeTestimonials() {
  return (
    <section
      className="border-t border-white/5 bg-[#07070c] py-12 md:py-16"
      aria-label="Client outcomes"
    >
      <div className="v6-container">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            What clients say
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Outcomes businesses care about
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Role, industry, and results — not generic “great team” quotes.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {homepageTestimonials.map((t) => (
            <li
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-white/10 pt-4">
                {"clientLabel" in t && t.clientLabel ? (
                  <p className="font-display text-sm font-semibold text-white">{t.clientLabel}</p>
                ) : null}
                <p className="text-sm text-slate-400">
                  {formatTestimonialAttribution({
                    role: t.role,
                    companyType: t.companyType,
                    region: t.region,
                  })}
                </p>
                <p className="mt-2 text-xs font-semibold text-violet-300">{t.outcome}</p>
                {"href" in t && t.href ? (
                  <Link
                    href={t.href}
                    className="mt-3 inline-block text-xs font-semibold text-violet-300 hover:text-white"
                  >
                    Read case study →
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
