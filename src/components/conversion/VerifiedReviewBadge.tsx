import Link from "next/link";
import { getAllVerifiedReviews } from "@/lib/verified-reviews";

type VerifiedReviewBadgeProps = {
  className?: string;
  compact?: boolean;
};

/** Shows Google/Clutch rating only when env vars are configured with live URLs. */
export function VerifiedReviewBadge({ className = "", compact = false }: VerifiedReviewBadgeProps) {
  const reviews = getAllVerifiedReviews();
  const google = reviews.find((r) => r.platform === "Google Business");

  if (!google) return null;

  if (compact) {
    return (
      <a
        href={google.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 hover:border-amber-300 ${className}`}
      >
        <span aria-hidden>★</span>
        {google.rating} · {google.reviewCount} Google reviews · Vadodara
      </a>
    );
  }

  return (
    <a
      href={google.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:border-amber-300 ${className}`}
    >
      <span className="text-lg text-amber-500" aria-hidden>
        ★
      </span>
      <span>
        {google.rating} stars · {google.reviewCount} Google reviews · Vadodara
      </span>
      <span className="text-xs font-medium text-amber-700">View →</span>
    </a>
  );
}

/** Trust highlights shown when no verified reviews exist yet */
export function HeroTrustHighlights({ className = "" }: { className?: string }) {
  const reviews = getAllVerifiedReviews();

  return (
    <ul className={`flex flex-wrap gap-2 text-xs text-[var(--v6-text-secondary)] ${className}`} aria-label="Trust highlights">
      {reviews.length > 0 ? (
        reviews.map((r) => (
          <li key={r.platform}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5 font-semibold hover:border-amber-300 hover:text-amber-800"
            >
              {r.label}
            </a>
          </li>
        ))
      ) : null}
      <li className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5">
        <span className="font-semibold text-[var(--v6-text)]">GST invoice</span>
        <span className="mx-1 text-[var(--v6-text-muted)]">·</span>
        You own the code
      </li>
      <li className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5">
        <span className="font-semibold text-[var(--v6-text)]">Vadodara office</span>
        <span className="mx-1 text-[var(--v6-text-muted)]">·</span>
        <Link href="/contact" className="hover:text-[#4f46e5]">
          Visit us
        </Link>
      </li>
      <li className="rounded-full border border-[var(--v6-border)] bg-white px-3 py-1.5">
        <a
          href="https://drashtichemical.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#4f46e5] hover:underline"
        >
          Live client site →
        </a>
      </li>
    </ul>
  );
}
