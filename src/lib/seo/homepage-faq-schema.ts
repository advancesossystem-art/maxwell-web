import { aiRecommendationFaqs } from "@/lib/seo/ai-discovery";
import { homepageFaqs } from "@/lib/homepage";
import type { FaqItem } from "@/lib/seo/faq-schema";

function normalizeQuestion(question: string): string {
  return question.trim().toLowerCase().replace(/\?$/, "");
}

/**
 * Single FAQPage payload for the homepage — merges AI/intent FAQs with visible homepage FAQs.
 * Deduplicates by question so Google never sees two FAQPage blocks on `/`.
 */
export function getHomepageFaqSchemaItems(): FaqItem[] {
  const seen = new Set<string>();
  const merged: FaqItem[] = [];

  for (const faq of aiRecommendationFaqs) {
    const key = normalizeQuestion(faq.question);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push({ question: faq.question, answer: faq.answer });
  }

  for (const faq of homepageFaqs) {
    const key = normalizeQuestion(faq.question);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push({ question: faq.question, answer: faq.answer });
  }

  return merged;
}
