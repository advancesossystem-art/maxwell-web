"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import type { ProgrammaticPageData } from "@/lib/seo/programmatic/types";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { siteConfig } from "@/lib/constants";

function PageFAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function Breadcrumb({ items }: { items: ProgrammaticPageData["breadcrumb"] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
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

export function ProgrammaticSeoPage({ page }: { page: ProgrammaticPageData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.headline,
            description: page.metaDescription,
            url: `${siteConfig.url}${page.path}`,
            publisher: { "@id": `${siteConfig.url}/#organization` },
          }),
        }}
      />
      {page.faqs.length > 0 && <PageFAQJsonLd faqs={page.faqs} />}

      <section className="relative overflow-hidden bg-background section-hero">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse 60% 50% at 70% 30%, ${page.accent}33, transparent)` }}
        />
        <Container className="relative z-10">
          <Breadcrumb items={page.breadcrumb} />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {page.pageType.replace("-", " ")} · {siteConfig.name}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">{page.subheadline}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-estimate" size="lg">
                Get Free Estimate <ArrowRight />
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{page.intro}</p>
          <TrustNearCTA variant="dark" compact className="mt-6 justify-start" />
        </Container>
      </section>

      <section className="border-b border-border bg-[#0a0f1a] py-10">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">Industry insight</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <StatCard value="78%" label="Indian SMEs still run core ops on spreadsheets (2025)" />
            <StatCard value={companyMetricDisplay.avgRoiTimeline} label="Average ERP payback for our clients" />
            <StatCard value="40–60%" label="Typical manual work reduction post go-live" />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-8">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-400">Free — no obligation</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-estimate" className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white hover:border-brand-500/40">
              Free Project Estimate
            </Link>
            <Link href="/book-consultation" className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white hover:border-brand-500/40">
              Free Consultation
            </Link>
            <Link href="/tools/erp-roi-calculator" className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white hover:border-brand-500/40">
              Free ERP Assessment
            </Link>
          </div>
        </Container>
      </section>

      {page.sections.map((section) => (
        <section key={section.title} className="border-b border-border py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{section.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{section.content}</p>
            {section.bullets && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      ))}

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-white">Key challenges we solve</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {page.challenges.map((c) => (
              <div key={c.title} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-white">Recommended approach</h2>
          <ol className="mt-6 space-y-3">
            {page.approach.map((step, i) => (
              <li key={step} className="flex gap-4 text-muted">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-white">Related pages</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-brand-500/40"
              >
                <p className="font-semibold text-white group-hover:text-brand-400">{link.label}</p>
                {link.description && <p className="mt-1 text-sm text-muted">{link.description}</p>}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16" data-seo-speakable>
        <Container>
          <h2 className="font-display text-2xl font-bold text-white">Frequently asked questions</h2>
          <dl className="mt-8 space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-border bg-[#0a0f1a] py-16">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Ready to start your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {siteConfig.name} delivers {page.primaryKeyword.toLowerCase()} with milestone pricing and full IP ownership.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-estimate" size="lg">
              Get Free Estimate
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <p className="font-display text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-400">{label}</p>
    </div>
  );
}
