/**
 * GEO / AI-overview friendly direct answer under H2.
 * 2–3 sentences only — keeps extractable answer length tight.
 */
export function DirectAnswerBlock({
  answer,
  className,
}: {
  answer: string;
  className?: string;
}) {
  return (
    <p
      className={
        className ??
        "mb-4 max-w-3xl rounded-lg border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-base leading-relaxed text-slate-800"
      }
      data-speakable="direct-answer"
    >
      {answer}
    </p>
  );
}
