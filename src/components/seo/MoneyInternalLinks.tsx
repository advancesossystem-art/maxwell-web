import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  mergeMoneyInternalLinks,
  type MoneyInternalLink,
} from "@/lib/seo/money-internal-links";

type MoneyInternalLinksProps = {
  path: string;
  links?: readonly MoneyInternalLink[];
  title?: string;
  className?: string;
};

/** Visible related-money link strip for commercial pages. */
export function MoneyInternalLinks({
  path,
  links = [],
  title = "Related pages",
  className = "",
}: MoneyInternalLinksProps) {
  const merged = mergeMoneyInternalLinks(path, links);
  if (!merged.length) return null;

  return (
    <section className={`border-b border-slate-100 bg-[#f8fafc] py-12 ${className}`}>
      <Container>
        <p className="mb-3 text-sm font-semibold text-slate-700">{title}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {merged.map((r) => (
            <Link key={r.href} href={r.href} className="text-sm text-indigo-600 hover:underline">
              {r.label} →
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
