import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { ServicePageData } from "@/lib/services-data";
import { companyAuthorityFacts } from "@/lib/trust/company-authority";
import { leadTrustBadges } from "@/lib/company-metrics";

function extractTimelineAnswer(service: ServicePageData): string | undefined {
  const match = service.faqs.find((f) => /how long|timeline|take to build/i.test(f.question));
  return match?.answer;
}

/** Commercial trust block — who, timeline, deliverables, outcomes (from service data only). */
export function ServiceCommercialTrust({ service }: { service: ServicePageData }) {
  const timeline = extractTimelineAnswer(service);
  const deliverables = service.features.slice(0, 4).map((f) => f.title);
  const outcomes = service.projects?.map((p) => p.result).filter(Boolean) ?? [];
  const industries = service.industries.map((i) => i.name);

  return (
    <section className="border-b border-border bg-surface py-12" aria-labelledby={`commercial-trust-${service.slug}`}>
      <Container>
        <h2 id={`commercial-trust-${service.slug}`} className="font-display text-2xl font-bold text-white">
          Commercial clarity for {service.title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Who we build for, how engagements run, and what you receive — from published service scope at{" "}
          {companyAuthorityFacts.legalName}.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">Who it&apos;s for</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {industries.map((name) => (
                <li key={name}>• {name}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">Typical engagement</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              <li>• Starting from {service.startingPrice}</li>
              <li>• {companyAuthorityFacts.milestoneBilling}</li>
              {timeline ? <li>• {timeline}</li> : null}
              <li>• {companyAuthorityFacts.responseExpectation}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">Deliverables</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
              <li>• Stack: {service.techStack.slice(0, 5).join(", ")}</li>
            </ul>
          </div>
          {outcomes.length > 0 ? (
            <div className="rounded-2xl border border-border bg-surface-elevated p-5 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">Documented outcomes</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {outcomes.map((result) => (
                  <li key={result}>• {result}</li>
                ))}
              </ul>
              <Link href="/case-studies" className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline">
                View case studies →
              </Link>
            </div>
          ) : null}
          <div className="rounded-2xl border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">Risk reduction</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {service.whyMaxwell.slice(0, 3).map((item) => (
                <li key={item.title}>• {item.title}</li>
              ))}
              <li>• {companyAuthorityFacts.codeOwnership}</li>
              {companyAuthorityFacts.ndaAvailable ? <li>• NDA available on request</li> : null}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {leadTrustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
