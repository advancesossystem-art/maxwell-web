import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { QuickEstimateForm } from "@/components/leads/QuickEstimateForm";
import { ProjectEstimatorWizard } from "@/components/leads/ProjectEstimatorWizard";
import { StraightAnswers } from "@/components/conversion/StraightAnswers";
import { createMetadata } from "@/lib/metadata";
import { companyMetricDisplay } from "@/lib/company-metrics";

export const metadata = createMetadata({
  title: "Get Free Project Estimate — Website, ERP, CRM & Software | Maxwell Electrodeal",
  description:
    "Get a free estimate for your website, ERP, CRM, AI, or custom software project. 5 fields. Response within 24 hours. No obligation. Vadodara-based team serving India.",
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
            5 fields · no obligation · personalized estimate on WhatsApp within 24 hours.
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
                Quick Estimate — 5 fields, 2 minutes
              </h2>
              <Suspense>
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
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-green-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.845L.057 23.886l6.202-1.424A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.197-1.375l-.373-.217-3.678.844.907-3.576-.236-.383A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp us now
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Detailed wizard — accessible via anchor */}
      <section id="wizard" className="bg-white py-12 border-t border-gray-100">
        <Container className="max-w-4xl">
          <p className="text-center text-sm text-gray-500 mb-2">
            Want a more detailed scoped estimate with cost range?
          </p>
          <h2 className="text-center font-display text-xl font-bold text-gray-900 mb-8">
            Guided Project Estimator — 8 steps, ~5 minutes
          </h2>
        </Container>
        <ProjectEstimatorWizard />
      </section>

      <StraightAnswers />
    </>
  );
}
