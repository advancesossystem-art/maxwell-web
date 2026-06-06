import Link from "next/link";
import type { ContentBlock } from "@/lib/content/schema";
import { slugifyHeading } from "@/lib/content/utils";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-content max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const id = slugifyHeading(block.text);
            if (block.level === 2) {
              return (
                <h2 key={i} id={id} className="mt-12 font-display text-2xl font-bold tracking-tight scroll-mt-28">
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={i} id={id} className="mt-8 font-display text-xl font-semibold scroll-mt-28">
                {block.text}
              </h3>
            );
          }
          case "paragraph":
            return (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "list":
            if (block.ordered) {
              return (
                <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-muted">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="mt-6 rounded-2xl border border-brand-600/20 bg-brand-50/50 p-6"
              >
                {block.title && <p className="font-display font-semibold text-brand-800">{block.title}</p>}
                <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="mt-6 border-l-4 border-brand-600/40 pl-6">
                <p className="italic text-muted">{block.text}</p>
                {block.attribution && (
                  <cite className="mt-2 block text-sm text-muted not-italic">— {block.attribution}</cite>
                )}
              </blockquote>
            );
          case "cta":
            return (
              <div
                key={i}
                className="mt-10 rounded-2xl border border-brand-600/15 bg-gradient-to-br from-brand-50 to-surface p-8"
              >
                <h3 className="font-display text-xl font-bold">{block.title}</h3>
                <p className="mt-2 text-muted">{block.description}</p>
                <Link
                  href={block.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
                >
                  {block.label}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
