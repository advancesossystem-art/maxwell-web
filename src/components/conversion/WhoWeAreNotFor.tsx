import { whoWeAreNotFor } from "@/lib/straight-answers-data";

type WhoWeAreNotForProps = {
  className?: string;
};

export function WhoWeAreNotFor({ className = "" }: WhoWeAreNotForProps) {
  return (
    <section className={`v6-section v6-section--raised ${className}`} aria-labelledby="who-not-for-heading">
      <div className="v6-container max-w-3xl">
        <h2 id="who-not-for-heading" className="v6-section-title">
          {whoWeAreNotFor.title}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Not a fit</p>
            <ul className="mt-4 space-y-3">
              {whoWeAreNotFor.notFor.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--v6-text-secondary)]">
                  <span className="shrink-0 font-bold text-red-500" aria-hidden>
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">We do</p>
            <ul className="mt-4 space-y-3">
              {whoWeAreNotFor.weDo.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--v6-text-secondary)]">
                  <span className="shrink-0 font-bold text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
