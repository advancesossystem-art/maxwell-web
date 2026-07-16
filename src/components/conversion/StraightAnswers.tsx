import Link from "next/link";
import { straightAnswers } from "@/lib/straight-answers-data";

type StraightAnswersProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function StraightAnswers({
  title = "Straight Answers",
  description = "The questions Gujarat manufacturers ask on WhatsApp — answered honestly, before you commit.",
  className = "",
}: StraightAnswersProps) {
  return (
    <section className={`v6-section ${className}`} aria-labelledby="straight-answers-heading">
      <div className="v6-container max-w-3xl">
        <p className="v6-eyebrow">Before you commit</p>
        <h2 id="straight-answers-heading" className="v6-section-title mt-2">
          {title}
        </h2>
        {description ? <p className="v6-lead mt-3">{description}</p> : null}
        <dl className="mt-8 space-y-6">
          {straightAnswers.map((item) => (
            <div key={item.question} className="rounded-xl border border-[var(--v6-border)] bg-white p-5">
              <dt className="font-display text-base font-semibold text-[var(--v6-text)]">
                &ldquo;{item.question}&rdquo;
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{item.answer}</dd>
              {item.link ? (
                <dd className="mt-3">
                  <Link href={item.link.href} className="text-sm font-semibold text-[#4f46e5] hover:underline">
                    {item.link.label} →
                  </Link>
                </dd>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
