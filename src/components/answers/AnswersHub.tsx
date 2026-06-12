import Link from "next/link";
import { getAllAnswers } from "@/lib/answers-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function AnswersHub() {
  const answers = getAllAnswers();

  return (
    <>
      <PageHero
        eyebrow="Maxwell Answers"
        title={
          <>
            Question-first <AccentGradient>authority content</AccentGradient>
          </>
        }
        description="Direct answers on ERP, CRM, digital transformation, and software — structured for search engines and AI citation."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {answers.map((answer) => (
            <Card key={answer.slug} href={`/answers/${answer.slug}`} padding="lg">
              <Caption className="text-brand-500">Direct answer</Caption>
              <H3 className="mt-2 group-hover:text-brand-400 transition-colors">{answer.question}</H3>
              <Caption className="mt-3 line-clamp-3">{answer.shortAnswer}</Caption>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          More answers in the{" "}
          <Link href="/knowledge-center" className="text-brand-600 hover:text-brand-500">
            Knowledge Center
          </Link>
          .
        </p>
      </PageSection>
    </>
  );
}
