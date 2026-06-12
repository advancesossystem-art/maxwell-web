import { AnswersHub } from "@/components/answers/AnswersHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Maxwell Answers — ERP, CRM & Software Questions Answered",
  description:
    "Direct answers on ERP for manufacturing, implementation cost, ERP vs CRM, Excel limits, timelines, and ROI — from Maxwell Electrodeal delivery experts.",
  path: "/answers",
  keywords: ["ERP FAQ", "ERP cost India", "ERP vs CRM", "ERP ROI", "when to replace Excel"],
});

export default function AnswersPage() {
  return <AnswersHub />;
}
