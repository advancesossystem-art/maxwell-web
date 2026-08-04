import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { QuickEstimateForm } from "@/components/leads/QuickEstimateForm";
import { ProjectEstimatorWizard } from "@/components/leads/ProjectEstimatorWizard";
import { StraightAnswers } from "@/components/conversion/StraightAnswers";
import { createMetadata } from "@/lib/metadata";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { IconWhatsApp } from "@/components/ui/Icons";

export const metadata = createMetadata({
  title: "Get Free Scoped Estimate — Website, ERP & Software | Maxwell",
  description:
    "3-field quick form — scoped estimate on WhatsApp and email within 24 hours. GST-registered Vadodara team. No obligation. Full TCO breakdown available on request.",
  path: "/get-estimate",
});

export default function GetEstimatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#030712] pb-10 pt-32 lg:pt-40">
        <Container className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Free Estimate</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            Get your free project estimate
          </h1>
          <p className="mt-4 max-w-xl text-white/55">
            Quick form · no obligation · personalized estimate on WhatsApp and email within 24 hours.
          </p>
        </Container>
      </section>

      {/* Quick form + sidebar */}
      <section className="bg-gray-50 py-14 lg:py-20">
        <Container className="max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-6">
                Quick Estimate — about 2 minutes
              </h2>
              <Suspense fallback={<p className="text-sm text-gray-500">Loading form…</p>}>
                <QuickEstimateForm />
              </Suspense>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Why Maxwell?</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    "Based in Vadodara — on-site available for Gujarat",
                    "GST-registered · GST invoice on every project",
                    "100% code ownership — no lock-in",
                    `${companyMetricDisplay.projectsCompleted} projects across India & globally`,
                    "Published pricing at /pricing — no quote games",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Prefer to talk?</p>
                <a
                  href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100 transition"
                >
                  <IconWhatsApp className="h-5 w-5 text-green-600" />
                  WhatsApp us now
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Detailed wizard — secondary path for users who want a full scope breakdown */}
      <section id="wizard" className="bg-white py-12 border-t border-gray-100">
        <Container className="max-w-4xl">
          <details className="group rounded-2xl border border-gray-200 bg-gray-50/80 p-6">
            <summary className="cursor-pointer list-none text-center font-display text-lg font-bold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                Need a detailed cost range? Open the 8-step guided estimator (~5 min)
                <span className="text-sm font-normal text-gray-500 transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <p className="mt-4 text-center text-sm text-gray-500">
              Most buyers get a scoped estimate from the quick form above. Use this wizard only if you want
              module-by-module pricing for ERP, CRM, or multi-phase software.
            </p>
            <div className="mt-8">
              <ProjectEstimatorWizard />
            </div>
          </details>
        </Container>
      </section>

      <StraightAnswers />
    </>
  );
}
