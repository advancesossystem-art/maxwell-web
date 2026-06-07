import Link from "next/link";
import { getToolRelatedLinks } from "@/lib/tools/related-services";
import { ArrowRight } from "@/components/ui/Icons";

export function ToolRelatedLinks({ slug }: { slug: string }) {
  const links = getToolRelatedLinks(slug);
  if (links.length === 0) return null;

  return (
    <section className="tool-section print:hidden">
      <h3 className="tool-section__title">Related services & tools</h3>
      <p className="tool-section__body">Continue your evaluation with these Maxwell resources.</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-start justify-between gap-2 rounded-xl border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] p-4 transition-colors hover:border-[#4f46e5]/35"
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
