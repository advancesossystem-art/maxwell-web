import type { ContentCategorySlug } from "./schema";
import { getAuthorById, type Author } from "./authors";
import { founderProfile } from "@/lib/trust/founder-profile";

const categoryAuthorMap: Record<ContentCategorySlug, string> = {
  erp: "sneha-reddy",
  crm: "ananya-iyer",
  ai: "rahul-verma",
  "mobile-apps": "vikram-desai",
  cloud: "mohit-agarwal",
  saas: "priya-sharma",
  "software-development": "amit-patel",
  "web-development": "amit-patel",
  "digital-transformation": "arun-kulkarni",
};

/** Map legacy maxwell-team IDs to category specialists for E-E-A-T. */
export function resolveContentAuthorId(authorId: string, category: ContentCategorySlug): string {
  if (authorId !== "maxwell-team") return authorId;
  return categoryAuthorMap[category] ?? founderProfile.slug;
}

export function getContentAuthor(authorId: string, category: ContentCategorySlug): Author {
  const id = resolveContentAuthorId(authorId, category);
  return getAuthorById(id) ?? getAuthorById(founderProfile.slug)!;
}
