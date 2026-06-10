export type ContentCategorySlug =
  | "web-development"
  | "software-development"
  | "ai"
  | "erp"
  | "crm"
  | "cloud"
  | "saas"
  | "mobile-apps"
  | "digital-transformation";

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "info" | "tip" | "warning"; title?: string; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "cta"; title: string; description: string; href: string; label: string };

export interface ContentFAQ {
  question: string;
  answer: string;
}

export interface ContentBase {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  authorId: string;
  category: ContentCategorySlug;
  tags: string[];
  readingTimeMinutes: number;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  noIndex?: boolean;
  relatedSlugs?: string[];
  faqs?: ContentFAQ[];
}

export interface Article extends ContentBase {
  type: "article";
  sections: ContentBlock[];
  tableOfContents?: { id: string; label: string }[];
}

export interface Guide extends ContentBase {
  type: "guide";
  sections: ContentBlock[];
  chapters: { title: string; id: string }[];
  downloadMagnetId?: string;
}

export interface Resource extends ContentBase {
  type: "resource";
  resourceType: "checklist" | "framework" | "template" | "guide-pdf";
  format: string;
  pageCount?: number;
  gated: boolean;
  downloadMagnetId: string;
  previewSections: ContentBlock[];
  benefits: string[];
}

export interface Report extends ContentBase {
  type: "report";
  industry: string;
  sections: ContentBlock[];
  keyFindings: string[];
  gated: boolean;
  downloadMagnetId?: string;
}

export type ContentItem = Article | Guide | Resource | Report;

export type ContentType = ContentItem["type"];
