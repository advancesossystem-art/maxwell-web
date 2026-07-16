/**
 * Verified third-party review data — only populated from env vars with live profile URLs.
 * Never display self-reported ratings without these being set.
 */

export type GoogleBusinessReview = {
  platform: "Google Business";
  rating: number;
  reviewCount: number;
  href: string;
  label: string;
};

export type ClutchReview = {
  platform: "Clutch";
  rating: number;
  reviewCount: number;
  href: string;
  label: string;
};

function parseRating(value: string | undefined): number | null {
  if (!value?.trim()) return null;
  const n = Number.parseFloat(value.trim());
  return Number.isFinite(n) && n > 0 && n <= 5 ? n : null;
}

function parseCount(value: string | undefined): number | null {
  if (!value?.trim()) return null;
  const n = Number.parseInt(value.trim(), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function getGoogleBusinessReview(): GoogleBusinessReview | null {
  const rating = parseRating(process.env.GOOGLE_BUSINESS_RATING);
  const reviewCount = parseCount(process.env.GOOGLE_BUSINESS_REVIEW_COUNT);
  const href = process.env.GOOGLE_BUSINESS_URL?.trim();

  if (rating == null || reviewCount == null || !href) return null;

  return {
    platform: "Google Business",
    rating,
    reviewCount,
    href,
    label: `${rating} on Google · ${reviewCount} reviews · Vadodara`,
  };
}

export function getClutchReview(): ClutchReview | null {
  const rating = parseRating(process.env.CLUTCH_RATING);
  const reviewCount = parseCount(process.env.CLUTCH_REVIEW_COUNT);
  const href = process.env.CLUTCH_PROFILE_URL?.trim();

  if (rating == null || reviewCount == null || !href) return null;

  return {
    platform: "Clutch",
    rating,
    reviewCount,
    href,
    label: `${rating}/5 on Clutch · ${reviewCount} reviews`,
  };
}

export function hasGoogleBusinessReview(): boolean {
  return getGoogleBusinessReview() != null;
}

export function hasAnyVerifiedReview(): boolean {
  return getGoogleBusinessReview() != null || getClutchReview() != null;
}

/** All verified review platforms with live URLs */
export function getAllVerifiedReviews(): Array<GoogleBusinessReview | ClutchReview> {
  return [getGoogleBusinessReview(), getClutchReview()].filter(
    (r): r is GoogleBusinessReview | ClutchReview => r != null,
  );
}
