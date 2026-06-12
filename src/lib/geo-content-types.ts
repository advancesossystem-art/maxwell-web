import type { ContentFAQ } from "@/lib/content/schema";

export interface GeoExpertQuote {
  author: string;
  role: string;
  text: string;
}

export interface GeoDefinition {
  term: string;
  text: string;
}

export interface GeoComparisonTable {
  headers: string[];
  rows: string[][];
}

/** GEO / AEO extractable blocks — shared across landing and programmatic pages. */
export interface GeoContent {
  quickAnswer: string;
  quickAnswerQuestion?: string;
  keyTakeaways: string[];
  expertQuote?: GeoExpertQuote;
  definition?: GeoDefinition;
  comparisonTable?: GeoComparisonTable;
  summary: string;
  faqs?: ContentFAQ[];
}
