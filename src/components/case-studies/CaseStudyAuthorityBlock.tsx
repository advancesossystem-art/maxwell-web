import { Container } from "@/components/ui/Container";
import type { CaseStudyData } from "@/lib/case-studies-data";
import { formatClientDescriptor } from "@/lib/client-attribution";
import { ClientQuoteCard } from "@/components/trust/ClientQuoteCard";
import {
  csDarkEyebrow,
  csDarkLead,
  csDarkSection,
  csDarkTitle,
} from "@/components/case-studies/case-study-theme";

function AuthorityRow({ label, children, dark = false }: { label: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? "border-b border-white/[0.08] py-4 last:border-0" : "border-b border-[var(--v6-border)] py-4 last:border-0"}>
      <p className={dark ? csDarkEyebrow : "text-xs font-semibold uppercase tracking-wider text-[#4f46e5]"}>{label}</p>
      <div className={dark ? "mt-2 text-white/70" : "mt-2 text-[var(--v6-text-secondary)]"}>{children}</div>
    </div>
  );
}

export function CaseStudyAuthorityBlock({ study }: { study: CaseStudyData }) {
  const primaryRoi = study.roiMetrics[0];
  const primaryResult = study.results[0];

  return (
    <section className={csDarkSection} aria-label="Case study authority summary">
      <Container>
        <p className={csDarkEyebrow}>Engagement summary</p>
        <h2 className={`${csDarkTitle} mt-3 max-w-3xl`}>Delivery at a glance</h2>
        <p className={`${csDarkLead} mt-3 max-w-4xl`}>
          Documented delivery parameters for a {formatClientDescriptor(study.trust.industry)} — documented in
          case study review.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/20 sm:p-8">
            <AuthorityRow label="Challenge">
              <p className="text-sm leading-relaxed text-[var(--v6-text)]">{study.challenges[0]}</p>
              {study.challenges.length > 1 ? (
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--v6-text-secondary)]">
                  {study.challenges.slice(1, 3).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              ) : null}
            </AuthorityRow>

            <AuthorityRow label="Solution">
              <p className="text-sm leading-relaxed text-[var(--v6-text)]">{study.solutionArchitecture.overview}</p>
            </AuthorityRow>

            <AuthorityRow label="Business outcome">
              <p className="font-display text-lg font-semibold text-[#4f46e5]">
                {primaryResult.metric} {primaryResult.label}
              </p>
              <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">{primaryResult.description}</p>
            </AuthorityRow>
          </div>

          <div className="glass-dark rounded-2xl border border-white/[0.06] p-6 sm:p-8">
            <AuthorityRow label="Timeline" dark>
              <p className="text-sm font-medium text-white">{study.trust.timeline}</p>
              <p className="mt-1 text-sm text-white/50">Support: {study.trust.supportPeriod}</p>
            </AuthorityRow>

            <AuthorityRow label="Team size" dark>
              <p className="text-sm font-medium text-white">{study.trust.teamSize}</p>
            </AuthorityRow>

            <AuthorityRow label="Technology stack" dark>
              <div className="flex flex-wrap gap-2">
                {study.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AuthorityRow>

            <AuthorityRow label="ROI indicator" dark>
              <p className="font-display text-lg font-semibold text-[#818cf8]">
                {primaryRoi.value} — {primaryRoi.label}
              </p>
              <p className="mt-1 text-sm text-white/50">{primaryRoi.description}</p>
            </AuthorityRow>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className={`${csDarkEyebrow} mb-4`}>Client feedback</p>
            <ClientQuoteCard
              quote={study.testimonial.quote}
              author={study.testimonial.author}
              company={study.testimonial.company}
              role={study.testimonial.role}
              industry={study.trust.industry}
              accent={study.accent}
              subtitle={primaryResult.metric ? `${primaryResult.metric} ${primaryResult.label}` : undefined}
            />
          </div>
          <div className="lg:col-span-5">
            <p className={`${csDarkEyebrow} mb-4`}>ROI highlight</p>
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/20">
              <p className="font-display text-3xl font-bold text-[#4f46e5]">{primaryRoi.value}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--v6-text)]">{primaryRoi.label}</p>
              <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{primaryRoi.description}</p>
              <dl className="mt-5 space-y-3 border-t border-[var(--v6-border)] pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--v6-text-muted)]">Timeline</dt>
                  <dd className="font-medium text-[var(--v6-text)]">{study.trust.timeline}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--v6-text-muted)]">Team</dt>
                  <dd className="font-medium text-[var(--v6-text)]">{study.trust.teamSize}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
