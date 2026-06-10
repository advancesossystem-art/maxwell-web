import type { TestimonialRecord } from "@/lib/testimonials-data";
import { formatTestimonialAttribution } from "@/lib/client-attribution";

function roleInitials(role: string) {
  return role
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ testimonial, featured = false }: { testimonial: TestimonialRecord; featured?: boolean }) {
  const attribution = formatTestimonialAttribution({
    role: testimonial.role,
    companyType: testimonial.companyType,
    industry: testimonial.industry,
    region: testimonial.region,
  });

  if (!featured) {
    return (
      <blockquote className="v6-card p-6">
        <p className="text-sm text-[var(--v6-text-secondary)]">&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="mt-4 text-sm font-semibold text-[var(--v6-text)]">{attribution}</footer>
      </blockquote>
    );
  }

  return (
    <article className="v6-card p-8 sm:p-10 lg:p-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-600/15 font-display text-lg font-bold text-brand-600"
          aria-hidden
        >
          {roleInitials(testimonial.role)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xl font-medium leading-relaxed text-[var(--v6-text)] sm:text-2xl sm:leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8 border-t border-[var(--v6-border)] pt-6">
            <p className="font-display text-base font-semibold text-[var(--v6-text)]">{attribution}</p>
            <p className="mt-2 text-xs font-medium text-amber-600">{testimonial.outcome}</p>
          </footer>
        </div>
      </div>
    </article>
  );
}
