"use client";

import Link from "next/link";
import { getRecommendedServices, getRecommendedTools } from "@/lib/recommended-services";
import { getServiceBySlug } from "@/lib/services-data";
import { FadeIn } from "@/components/motion/FadeIn";

type RecommendedServicesBlockProps = {
  serviceSlug: string;
  title?: string;
};

export function RecommendedServicesBlock({
  serviceSlug,
  title = "Recommended services",
}: RecommendedServicesBlockProps) {
  const services = getRecommendedServices(serviceSlug);
  const tools = getRecommendedTools(serviceSlug);

  return (
    <section className="mt-16 border-t border-[var(--v6-border)] pt-12" aria-label={title}>
      <FadeIn>
        <h2 className="font-display text-xl font-semibold text-[var(--v6-text)]">{title}</h2>
        <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">
          Teams evaluating {getServiceBySlug(serviceSlug)?.title ?? "this service"} often explore these next.
        </p>
      </FadeIn>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((rec) => {
          const svc = getServiceBySlug(rec.slug);
          if (!svc) return null;
          return (
            <li key={rec.slug}>
              <Link href={`/services/${rec.slug}`} className="v6-card block min-w-0 overflow-hidden p-5 hover:border-[#4f46e5]/30">
                <p className="font-display font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5]">
                  {svc.title}
                </p>
                <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">{rec.reason}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
          Recommended tools
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={`/tools/${tool.slug}`}
                className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[#4f46e5] hover:border-[#4f46e5]/30"
              >
                {tool.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
