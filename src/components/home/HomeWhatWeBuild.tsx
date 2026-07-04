import Link from "next/link";
import { HomeSection } from "@/components/home/HomeSection";
import { IconAI, IconERP, IconGlobe, ArrowRight } from "@/components/ui/Icons";

const cards = [
  {
    icon: IconGlobe,
    heading: "Websites for Businesses & Manufacturers",
    body: "Product catalog websites, B2B landing pages, and corporate sites built on Next.js — optimized for Google and mobile. Starting from ₹75,000.",
    tag: "Most popular for manufacturers",
    tagClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    linkLabel: "See website projects",
    href: "/services/website-development",
  },
  {
    icon: IconERP,
    heading: "Custom Software, ERP & CRM",
    body: "Bespoke software built around your workflows — inventory, production, GST, CRM pipelines, and everything in between.",
    tag: "Popular for manufacturers & logistics",
    tagClass: "bg-[#4f46e5]/10 text-[#4f46e5] border-[#4f46e5]/20",
    linkLabel: "Explore software services",
    href: "/services/custom-software-development",
  },
  {
    icon: IconAI,
    heading: "AI Solutions & Automation",
    body: "Document AI, computer vision for shop floors, demand forecasting, and workflow automation that removes the work your team dreads.",
    tag: "Growing demand in 2026",
    tagClass: "bg-amber-50 text-amber-800 border-amber-200",
    linkLabel: "See AI services",
    href: "/services/ai-solutions",
  },
] as const;

export function HomeWhatWeBuild() {
  return (
    <HomeSection tone="white" aria-label="What we build">
      <h2 className="v6-section-title v6-section-title--wide text-balance">What We Build</h2>
      <p className="v6-lead mt-4 max-w-3xl">
        From a ₹75,000 manufacturer website to a ₹50L enterprise ERP — we build exactly what your business needs,
        nothing more.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.heading}
              className="v6-card group flex h-full min-w-0 flex-col overflow-hidden p-6 transition-colors hover:border-[#4f46e5]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 text-[#4f46e5]">
                <Icon />
              </div>
              <span
                className={`mt-5 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold ${card.tagClass}`}
              >
                {card.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--v6-text)]">{card.heading}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{card.body}</p>
              <Link
                href={card.href}
                aria-label={`${card.linkLabel} — ${card.heading}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#4f46e5] hover:underline"
              >
                {card.linkLabel} →
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-[var(--v6-text-secondary)]">
        Not sure what you need?{" "}
        <Link
          href="/get-estimate?source=what-we-build"
          className="font-semibold text-[#4f46e5] hover:underline"
        >
          Get a free assessment →
        </Link>
      </p>
    </HomeSection>
  );
}
