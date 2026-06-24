import { formatTestimonialAttribution } from "@/lib/client-attribution";
import { cn } from "@/lib/utils";

type ClientQuoteCardProps = {
  quote: string;
  role: string;
  author?: string;
  company?: string;
  industry?: string;
  companyType?: string;
  region?: string;
  accent?: string;
  subtitle?: string;
  className?: string;
};

export function ClientQuoteCard({
  quote,
  role,
  author,
  company,
  industry,
  companyType,
  region,
  accent = "#4f46e5",
  subtitle,
  className,
}: ClientQuoteCardProps) {
  const initial = (author ?? industry ?? role).charAt(0).toUpperCase();
  const attribution =
    author && company
      ? `${author}, ${company}`
      : author
        ? author
        : role
          ? formatTestimonialAttribution({ role, companyType, industry, region })
          : null;

  return (
    <blockquote
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-[var(--v6-shadow-md)] lg:p-8",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: accent }} aria-hidden />
      <svg
        className="mb-4 h-8 w-8 opacity-20"
        style={{ color: accent }}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.031-1.094-1.584-2.321-1.584-4.311 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
      <div className="mb-4 flex gap-1" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-4 w-4 text-[#4f46e5]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-lg font-medium leading-relaxed text-[var(--v6-text)] lg:text-xl">&ldquo;{quote}&rdquo;</p>
      {attribution ? (
        <footer className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--v6-border)] pt-5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
            style={{ backgroundColor: accent }}
            aria-hidden
          >
            {initial}
          </div>
          <div>
            <p className="font-display font-semibold text-[var(--v6-text)]">{attribution}</p>
            {subtitle ? <p className="mt-0.5 text-sm text-[var(--v6-text-muted)]">{subtitle}</p> : null}
          </div>
        </footer>
      ) : null}
    </blockquote>
  );
}
