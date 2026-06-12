import { reviewPlatforms } from "@/lib/trust-content";
import { certifications } from "@/lib/company-data";
import { testimonials } from "@/lib/testimonials-data";

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

/** Only entries with real URLs/scores are listed — no fabricated proof. */
export const verifiedReviews: VerifiedReview[] = [];

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

export function hasAnyProofSignal(): boolean {
  return (
    hasVerifiedReviews() ||
    hasClientTestimonials() ||
    hasCertifications() ||
    verifiedAwards.length > 0 ||
    verifiedPartnerships.length > 0 ||
    verifiedMediaMentions.length > 0
  );
}
