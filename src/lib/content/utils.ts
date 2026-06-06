import type { ContentBlock, ContentItem } from "./schema";

export function blocksToPlainText(blocks: ContentBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "heading":
          return b.text;
        case "paragraph":
          return b.text;
        case "list":
          return b.items.join(" ");
        case "callout":
        case "quote":
          return b.text;
        case "cta":
          return `${b.title} ${b.description}`;
        default:
          return "";
      }
    })
    .join(" ");
}

export function calculateReadingTime(blocks: ContentBlock[], extraWords = 0): number {
  const words = blocksToPlainText(blocks).split(/\s+/).filter(Boolean).length + extraWords;
  return Math.max(1, Math.ceil(words / 200));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildTableOfContents(blocks: ContentBlock[]): { id: string; label: string }[] {
  return blocks
    .filter((b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading" && b.level === 2)
    .map((b) => ({ id: slugifyHeading(b.text), label: b.text }));
}

export function formatPublishDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getContentPath(item: ContentItem): string {
  switch (item.type) {
    case "article":
      return `/blog/${item.slug}`;
    case "guide":
      return `/guides/${item.slug}`;
    case "resource":
      return `/resources/${item.slug}`;
    case "report":
      return `/reports/${item.slug}`;
  }
}
