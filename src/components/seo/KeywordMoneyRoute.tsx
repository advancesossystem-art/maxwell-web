import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";
import { createMetadata } from "@/lib/metadata";
import type { KeywordMoneyDef } from "@/lib/keyword-money-pages";

export function keywordMoneyMetadata(def: KeywordMoneyDef) {
  return createMetadata(def.meta);
}

export function KeywordMoneyRoute({ def }: { def: KeywordMoneyDef }) {
  return <IndustrialServicePage {...def.page} />;
}
