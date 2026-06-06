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
  const attribution = formatTestimonialAttribution(testimonial.role, testimonial.industry);

  if (!featured) {
    return (
      <blockquote className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
        <p className="text-sm text-[#A5B4CC]">&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="mt-4 text-sm font-semibold text-white">{attribution}</footer>
      </blockquote>
    );
  }

  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 lg:p-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-600/20 font-display text-lg font-bold text-brand-400"
          aria-hidden
        >
          {roleInitials(testimonial.role)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl sm:leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8 border-t border-white/[0.06] pt-6">
            <p className="font-display text-base font-semibold text-white">{attribution}</p>
            <p className="mt-2 text-xs font-medium text-amber-400/90">{testimonial.outcome}</p>
          </footer>
        </div>
      </div>
    </article>
  );
}
