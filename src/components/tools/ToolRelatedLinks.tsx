import Link from "next/link";
import { getToolRelatedLinks } from "@/lib/tools/related-services";
import { ArrowRight } from "@/components/ui/Icons";

export function ToolRelatedLinks({ slug }: { slug: string }) {
  const links = getToolRelatedLinks(slug);
  if (links.length === 0) return null;

  return (
    <section className="rounded-2xl border border-border bg-surface-elevated p-6 print:hidden">
      <h3 className="font-display font-semibold">Related services & tools</h3>
      <p className="mt-1 text-sm text-muted">Continue your evaluation with these Maxwell resources.</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-start justify-between gap-2 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand-600/40"
            >
              <div>
                <span className="font-medium text-foreground group-hover:text-brand-600">{link.label}</span>
                {link.description && <p className="mt-0.5 text-xs text-muted">{link.description}</p>}
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted group-hover:text-brand-600" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
