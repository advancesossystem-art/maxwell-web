import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import type { IndustryResourceCenter } from "@/lib/resource-centers-data";
import { siteConfig } from "@/lib/constants";

function LinkSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-brand-600 hover:text-brand-500">
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResourceCenterPage({ center }: { center: IndustryResourceCenter }) {
  const url = `${siteConfig.url}/resource-centers/${center.slug}`;

  return (
    <>
      <FaqPageJsonLd faqs={center.faqs} id={`${url}#faq`} />
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pt-36">
        <Container>
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/knowledge-center" className="hover:text-white">
              Knowledge Center
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{center.title}</span>
          </nav>
          <h1 className="max-w-4xl font-display text-4xl font-bold text-white">{center.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/55">{center.description}</p>
          <Link href={center.industryHref} className="mt-6 inline-block text-sm text-brand-400 hover:text-brand-300">
            View industry page →
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <LinkSection title="Guides" links={center.guides} />
            <LinkSection title="Case studies" links={center.caseStudies} />
            <LinkSection title="Research" links={center.research} />
            <LinkSection title="Reports" links={center.reports} />
            <LinkSection title="Tools" links={center.tools} />
          </div>

          {center.faqs.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <h2 className="font-display text-xl font-bold">FAQs</h2>
              <dl className="mt-6 space-y-6">
                {center.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-semibold">{faq.question}</dt>
                    <dd className="mt-2 text-sm text-muted leading-relaxed">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
