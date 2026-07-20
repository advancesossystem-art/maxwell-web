import type { ManufacturerVerticalInsight } from "@/lib/content/information-gain/manufacturer-vertical-insights";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

type InformationGainBlocksProps = {
  insight: ManufacturerVerticalInsight;
  industry: string;
};

/** Unique per-vertical decision support — Phase 6A information gain. */
export function ManufacturerInformationGain({ insight, industry }: InformationGainBlocksProps) {
  return (
    <>
      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
            Buyer checklist before you hire a {industry} website vendor
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Use this internally — not generic agency filler. Maxwell scopes projects from answers like these.
          </p>
          <ol className="grid gap-3 sm:grid-cols-2">
            {insight.buyerChecklist.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Common mistakes we fix</h2>
              <ul className="space-y-3">
                {insight.commonMistakes.map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-amber-600" aria-hidden>
                      ✕
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">How to evaluate vendors</h2>
              <ul className="space-y-3">
                {insight.selectionCriteria.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-600" aria-hidden>
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200 bg-slate-50">
        <Container>
          <h2 className="font-display text-xl font-bold text-slate-900 mb-3">Owned website vs marketplace listing</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{insight.ownedVsMarketplace}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/compare" className="text-indigo-600 hover:underline">
              Platform comparisons →
            </Link>
            <Link href="/pricing" className="text-indigo-600 hover:underline">
              Published pricing →
            </Link>
          </div>
        </Container>
      </section>

      {insight.uniqueFaqs.length > 0 ? (
        <section className="py-14 border-b border-slate-200">
          <Container>
            <h2 className="font-display text-xl font-bold text-slate-900 mb-6">{industry}-specific questions</h2>
            <dl className="divide-y divide-slate-200">
              {insight.uniqueFaqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}
    </>
  );
}
