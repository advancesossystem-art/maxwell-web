import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { ServiceConversionNarrative } from "@/lib/service-conversion-data";

export function ServiceConversionNarrativeSection({ narrative }: { narrative: ServiceConversionNarrative }) {
  return (
    <section className="border-b border-[var(--v6-border)] bg-[#f8fafc] py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-600">The problem</p>
          <p className="mt-3 text-xl font-semibold text-[var(--v6-text)]">{narrative.pain}</p>
          <p className="mt-4 text-[var(--v6-text-secondary)]">{narrative.agitate}</p>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">The plan</p>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {narrative.plan.map((step, i) => (
              <li key={step.step} className="rounded-xl border border-[var(--v6-border)] bg-white p-6">
                <span className="font-display text-3xl font-bold text-brand-200">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]">{step.step}</p>
                <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Proof</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {narrative.proof.map((item) => (
              <div key={item.label} className="rounded-xl border border-[var(--v6-border)] bg-white p-5 text-center">
                <p className="font-display text-3xl font-bold text-[var(--v6-text)]">{item.metric}</p>
                <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">{item.label}</p>
                {item.href ? (
                  <Link href={item.href} className="mt-2 inline-block text-xs font-semibold text-brand-600 hover:underline">
                    View →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="font-semibold text-[var(--v6-text)]">{narrative.action}</p>
          <Button href="/pricing" variant="secondary" size="md">
            See pricing
          </Button>
          <Button href="/get-estimate" variant="primary" size="md">
            Get free estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
