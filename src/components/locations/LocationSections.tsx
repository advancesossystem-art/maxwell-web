"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, MotionReveal, PageEntrance } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import type { CityPageData, CountryPageData } from "@/lib/locations-data";
import { programmaticTemplates } from "@/lib/locations-data";
import { getCaseStudyBySlug } from "@/lib/case-studies-data";
import { getServiceBySlug } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

export function LocationBreadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CityHero({ city }: { city: CityPageData }) {
  const query = `?location=${encodeURIComponent(city.name)}`;

  return (
    <section className="relative overflow-hidden bg-background section-hero">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(37,99,235,0.15),transparent)]" />
      <Container className="relative z-10">
        <LocationBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: "India", href: "/locations/india" },
            { label: city.name },
          ]}
        />
        <PageEntrance>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {city.state}, {city.countryName}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {city.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">{city.subheadline}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact${query}`} size="lg">
              Book Consultation <ArrowRight />
            </Button>
            <Button href={`/get-estimate${query}`} size="lg" variant="outline">
              Get Free Estimate
            </Button>
          </div>
        </PageEntrance>
      </Container>
    </section>
  );
}

export function LocalInsights({ city }: { city: CityPageData }) {
  return (
    <section className="border-b border-border py-16" aria-label="Local market insights">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Local Market Insights</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{city.localInsights}</p>
        </FadeIn>
      </Container>
    </section>
  );
}

export function LocalChallenges({ challenges, title }: { challenges: CityPageData["localChallenges"]; title: string }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Local business challenges">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Challenges</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {challenges.map((c, i) => (
            <MotionReveal
              key={c.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface-elevated p-8"
            >
              <h3 className="font-display font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CityServices({ city }: { city: CityPageData }) {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="Services offered">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Software services in {city.name}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {city.recommendedSolutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-border bg-surface-elevated p-8 transition-all hover:border-brand-600/25 hover:shadow-lg"
            >
              <h3 className="font-display font-semibold group-hover:text-brand-700 transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {city.serviceSlugs.map((slug) => {
            const service = getServiceBySlug(slug);
            if (!service) return null;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-brand-600/30 hover:text-brand-700 transition-colors"
              >
                {service.title}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function CityIndustries({ city }: { city: CityPageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Industry expertise">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Industry expertise</h2>
        </FadeIn>
        <div className="mt-10 flex flex-wrap gap-3">
          {city.industryFocus.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="rounded-xl border border-border bg-surface-elevated px-6 py-4 font-medium transition-colors hover:border-brand-600/25 hover:text-brand-700"
            >
              {ind.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CityCaseStudies({ city }: { city: CityPageData }) {
  const studies = city.caseStudySlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => !!s);

  if (studies.length === 0) return null;

  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="Case studies">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Case Studies</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Results for businesses like yours
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-brand-600/25"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-brand-600">{study.trust.industry}</span>
              <h3 className="mt-2 font-display font-semibold group-hover:text-brand-700 transition-colors">{study.title}</h3>
              <p className="mt-2 text-sm text-muted line-clamp-2">{study.executiveSummary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.roiMetrics.slice(0, 2).map((m) => (
                  <span key={m.label} className="rounded-md bg-surface px-2 py-1 text-xs font-medium">
                    {m.value} {m.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/case-studies" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
          Explore services <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Container>
    </section>
  );
}

export function CityWhyMaxwell({ city }: { city: CityPageData }) {
  return (
    <section className="py-20 lg:py-28" aria-label="Why Maxwell">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Why Maxwell</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Why {city.name} businesses choose {siteConfig.name}
            </h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="text-brand-600">✓</span>
                <span>Enterprise-grade engineering with SME-friendly pricing and milestone transparency.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">✓</span>
                <span>100% IP ownership, GST-compliant billing, and post-launch SLA support.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">✓</span>
                <span>Proven delivery across ERP, mobile, AI, and SaaS for {city.state} industries.</span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 gap-4">
              {city.roiExamples.map((r) => (
                <div key={r.label} className="rounded-2xl border border-border bg-surface-elevated p-6 text-center">
                  <div className="font-display text-2xl font-bold text-brand-600">{r.metric}</div>
                  <div className="mt-1 text-xs text-muted">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {city.technologies.map((t) => (
                <span key={t} className="rounded-md border border-border px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function ProgrammaticSeoBlock({ cityName }: { cityName: string }) {
  const titles = programmaticTemplates.map((t) => t.replace("{city}", cityName));

  return (
    <section className="border-t border-border bg-surface py-12" aria-label="Related searches">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Related searches</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {titles.map((title) => (
            <span key={title} className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs text-muted">
              {title}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LocationFAQ({
  faqs,
  title,
  locationName,
}: {
  faqs: { question: string; answer: string }[];
  title: string;
  locationName: string;
}) {
  const query = `?location=${encodeURIComponent(locationName)}`;

  return (
    <section className="bg-surface py-20 lg:py-28" aria-label="FAQ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <Button href={`/contact${query}`} className="mt-8">
              Talk to our team
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border bg-surface-elevated open:border-brand-600/20"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-muted group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function LocationCTA({ locationName }: { locationName: string }) {
  const query = `?location=${encodeURIComponent(locationName)}`;

  return (
    <section className="relative overflow-hidden bg-surface section-py">
      <Container className="relative text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to build in {locationName}?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Free discovery call. Transparent pricing. Senior engineers from day one.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`/contact${query}`} size="lg">
            Contact Us <ArrowRight />
          </Button>
          <Button href="/book-consultation" size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Book Consultation
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/50">
          <Link href="/solutions" className="hover:text-white transition-colors">
            All Solutions
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function CountryHero({ country }: { country: CountryPageData }) {
  return (
    <section className="relative overflow-hidden bg-background section-hero">
      <Container className="relative z-10">
        <LocationBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: country.name },
          ]}
        />
        <PageEntrance>
          <h1 className="max-w-4xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{country.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/55">{country.subheadline}</p>
          <Button href="/contact" size="lg" className="mt-10">
            Start Your Project <ArrowRight />
          </Button>
        </PageEntrance>
      </Container>
    </section>
  );
}

export function CountryOverview({ country }: { country: CountryPageData }) {
  return (
    <section className="py-16 border-b border-border">
      <Container>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{country.overview}</p>
      </Container>
    </section>
  );
}
