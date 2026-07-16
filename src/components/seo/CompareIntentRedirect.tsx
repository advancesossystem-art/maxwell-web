import Link from "next/link";
import type { IntentRedirectBlock } from "@/lib/seo/programmatic/types";

export function CompareIntentRedirect({ block }: { block: IntentRedirectBlock }) {
  return (
    <aside className="border-b border-amber-200 bg-amber-50 py-8">
      <div className="v6-container max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">Quick note</p>
        <p className="mt-2 text-base font-medium text-amber-950">{block.message}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {block.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg bg-amber-900 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
