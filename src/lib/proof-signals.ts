import { reviewPlatforms } from "@/lib/trust-content";
import { certifications } from "@/lib/company-data";
import { testimonials } from "@/lib/testimonials-data";
import { getAllVerifiedReviews } from "@/lib/verified-reviews";

export interface VerifiedReview {
  platform: string;
  rating?: number;
  reviewCount?: number;
  href: string;
  label: string;
}

export interface AwardRecord {
  title: string;
  issuer: string;
  year: string;
  href?: string;
}

export interface PartnershipRecord {
  name: string;
  href?: string;
  logoPath?: string;
}

export interface MediaMention {
  outlet: string;
  title: string;
  href?: string;
  date?: string;
}

function buildVerifiedReviewsFromEnv(): VerifiedReview[] {
  return getAllVerifiedReviews().map((r) => ({
    platform: r.platform,
    rating: r.rating,
    reviewCount: r.reviewCount,
    href: r.href,
    label: r.label,
  }));
}

/** Only entries with real URLs/scores — populated from env when configured. */
export const verifiedReviews: VerifiedReview[] = buildVerifiedReviewsFromEnv();

/** Call when a platform profile goes live with a verified URL. */
export function registerVerifiedReview(entry: VerifiedReview): void {
  if (!verifiedReviews.some((r) => r.platform === entry.platform)) {
    verifiedReviews.push(entry);
  }
}

export const verifiedAwards: AwardRecord[] = [];

export const verifiedPartnerships: PartnershipRecord[] = [];

export const verifiedMediaMentions: MediaMention[] = [];

export function hasVerifiedReviews(): boolean {
  return verifiedReviews.length > 0;
}

export function hasClientTestimonials(): boolean {
  return testimonials.length > 0;
}

export function hasCertifications(): boolean {
  return certifications.length > 0;
}

/** Platforms with live profile URLs only */
export function getLiveReviewPlatforms() {
  return reviewPlatforms.filter((p) => p.href != null && p.href.length > 0);
}
