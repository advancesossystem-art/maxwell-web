import Link from "next/link";
import { certifications } from "@/lib/company-data";
import { testimonials } from "@/lib/testimonials-data";
import {
  hasClientTestimonials,
  hasVerifiedReviews,
  verifiedAwards,
  verifiedMediaMentions,
  verifiedPartnerships,
  verifiedReviews,
} from "@/lib/proof-signals";

/**
 * Displays proof only when real data exists — never fabricated ratings or logos.
 */
export function ProofSignalsBar({ compact }: { compact?: boolean }) {
  const showReviews = hasVerifiedReviews();
  const showTestimonials = hasClientTestimonials();
  const showCerts = certifications.length > 0;
  const showAwards = verifiedAwards.length > 0;
  const showPartners = verifiedPartnerships.length > 0;
  const showMedia = verifiedMediaMentions.length > 0;

  if (!showReviews && !showTestimonials && !showCerts && !showAwards && !showPartners && !showMedia) {
    return null;
  }

  return (
    <aside
      className={compact ? "rounded-xl border border-border bg-surface-elevated p-4" : "border-b border-border py-8"}
      aria-label="Verified proof signals"
    >
      <div className={compact ? "" : "v6-container"}>
        {!compact && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Verified proof</p>
        )}
        <div className={`flex flex-wrap gap-4 ${compact ? "" : "mt-4"}`}>
          {showReviews &&
            verifiedReviews.map((r) => (
              <a
                key={r.platform}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v6-chip hover:border-brand-500/50"
              >
                {r.platform}
                {r.rating != null && ` · ${r.rating}/5`}
                {r.reviewCount != null && ` (${r.reviewCount})`}
              </a>
            ))}
          {showTestimonials && (
            <Link href="/reviews" className="v6-chip hover:border-brand-500/50">
              {testimonials.filter((t) => t.verified).length}+ client testimonials
            </Link>
          )}
          {showCerts &&
            certifications.slice(0, 3).map((c) => (
              <span key={c} className="v6-chip">
                {c}
              </span>
            ))}
          {showAwards &&
            verifiedAwards.map((a) => (
              <span key={a.title} className="v6-chip">
                {a.title} ({a.year})
              </span>
            ))}
          {showPartners &&
            verifiedPartnerships.map((p) =>
              p.href ? (
                <a key={p.name} href={p.href} className="v6-chip hover:border-brand-500/50">
                  {p.name}
                </a>
              ) : (
                <span key={p.name} className="v6-chip">
                  {p.name}
                </span>
              ),
            )}
          {showMedia &&
            verifiedMediaMentions.map((m) =>
              m.href ? (
                <a key={m.title} href={m.href} className="v6-chip hover:border-brand-500/50">
                  {m.outlet}
                </a>
              ) : (
                <span key={m.title} className="v6-chip">
                  {m.outlet}
                </span>
              ),
            )}
        </div>
      </div>
    </aside>
  );
}
