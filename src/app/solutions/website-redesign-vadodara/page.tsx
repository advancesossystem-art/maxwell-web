import { keywordMoneyPages } from "@/lib/keyword-money-pages";
import { KeywordMoneyRoute, keywordMoneyMetadata } from "@/components/seo/KeywordMoneyRoute";

const def = keywordMoneyPages.redesignVadodara;

export const metadata = keywordMoneyMetadata(def);

export default function Page() {
  return <KeywordMoneyRoute def={def} />;
}
