import { competitorComparison } from "@/lib/company-data";
import { ResponsiveScrollTable } from "@/components/design/ResponsiveScrollTable";

const maxScore = 5;

export function ComparisonTable() {
  const { criteria, options } = competitorComparison;

  return (
    <>
    <ResponsiveScrollTable>
      <table className="w-full min-w-[640px] border-collapse">
        <caption className="sr-only">
          Comparison of software development options by criteria. Scores are shown out of {maxScore}.
        </caption>
        <thead>
          <tr>
            <th scope="col" className="p-3 text-left text-sm font-medium text-muted">
              Criteria
            </th>
            {options.map((opt) => (
              <th
                key={opt.name}
                scope="col"
                className={`p-3 text-center text-sm font-display font-semibold ${
                  "highlight" in opt && opt.highlight ? "text-brand-700 bg-brand-50/50" : ""
                }`}
              >
                {opt.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((criterion) => (
            <tr key={criterion} className="border-t border-border">
              <th scope="row" className="p-3 text-left text-sm font-medium">
                {criterion}
              </th>
              {options.map((opt) => {
                const score = opt.scores[criterion as keyof typeof opt.scores];
                return (
                  <td
                    key={opt.name}
                    className={`p-3 text-center ${"highlight" in opt && opt.highlight ? "bg-brand-50/30" : ""}`}
                  >
                    <div className="mx-auto flex max-w-[80px] items-center gap-1">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                        <div
                          className={`h-full rounded-full ${"highlight" in opt && opt.highlight ? "bg-brand-600" : "bg-muted/40"}`}
                          style={{ width: `${(score / maxScore) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium w-4">{score}</span>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </ResponsiveScrollTable>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((opt) => (
          <div
            key={opt.name}
            className={`rounded-xl border p-4 text-sm ${
              "highlight" in opt && opt.highlight ? "border-brand-600/30 bg-brand-50/50" : "border-border"
            }`}
          >
            <p className="font-display font-semibold">{opt.name}</p>
            <p className="mt-2 text-muted">{opt.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
