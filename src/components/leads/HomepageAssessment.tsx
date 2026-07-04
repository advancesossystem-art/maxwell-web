import { companyMetricDisplay } from "@/lib/company-metrics";
import { HomepageAssessmentForm } from "@/components/leads/HomepageAssessmentForm";

const TRUST_SIGNALS = [
  `Response within ${companyMetricDisplay.supportResponse.replace("<", "")}`,
  `${companyMetricDisplay.projectsCompleted} projects delivered`,
  "No obligation",
  "GST-ready solutions",
] as const;

export function HomepageAssessment() {
  return (
    <section id="free-audit" className="v6-section v6-section--soft" aria-label="Free software assessment">
      <div className="v6-container">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--v6-border)] bg-white shadow-sm lg:grid-cols-[0.86fr_1.14fr]">
          <div className="v6-dark-panel relative bg-[#0f172a] p-6 text-white sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_34%)]" />
            <div className="relative">
              <p className="v6-eyebrow-line v6-eyebrow text-white/80 before:bg-white/25">Free assessment</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get a Free Software Needs Assessment
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Tell us about your business and we&apos;ll map what will help first: a website, ERP, CRM, AI, or mobile
                app. No obligation.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">What you get</p>
                <ul className="mt-4 space-y-3 text-sm text-white/90">
                  <li className="flex gap-2">
                    <span className="text-[#a5b4fc]" aria-hidden>
                      ✓
                    </span>
                    Priority recommendation for website, ERP, CRM, AI, or mobile app
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#a5b4fc]" aria-hidden>
                      ✓
                    </span>
                    Practical budget range and timeline
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#a5b4fc]" aria-hidden>
                      ✓
                    </span>
                    Clear next steps from a Vadodara-based team
                  </li>
                </ul>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-1">
                {TRUST_SIGNALS.map((signal) => (
                  <li key={signal} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a5b4fc]" aria-hidden />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <HomepageAssessmentForm />
        </div>
      </div>
    </section>
  );
}
