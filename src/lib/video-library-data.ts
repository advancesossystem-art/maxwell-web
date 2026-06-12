/**
 * Video library entries — only add entries with real, embeddable URLs.
 * No placeholder or fabricated videos per trust policy.
 */
export interface VideoEntry {
  id: string;
  title: string;
  description: string;
  category: "erp" | "crm" | "ai" | "project" | "industry" | "founder";
  embedUrl?: string;
  pageHref?: string;
  publishedAt?: string;
}

/** Published when real Maxwell YouTube/Vimeo URLs are available. */
export const videoLibrary: VideoEntry[] = [];

export function hasVideoLibrary(): boolean {
  return videoLibrary.some((v) => v.embedUrl);
}
