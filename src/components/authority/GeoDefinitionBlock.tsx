interface GeoDefinitionBlockProps {
  term: string;
  definition: string;
}

/** Short, extractable definition block for AEO/GEO. */
export function GeoDefinitionBlock({ term, definition }: GeoDefinitionBlockProps) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-5" itemScope itemType="https://schema.org/DefinedTerm">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Definition</p>
      <p className="mt-2 font-display text-lg font-semibold text-[var(--v6-text)]" itemProp="name">
        {term}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted" itemProp="description">
        {definition}
      </p>
    </div>
  );
}

export function ExpertCommentary({ author, role, quote }: { author: string; role: string; quote: string }) {
  const showAttribution = author.trim().length > 0 || role.trim().length > 0;
  return (
    <blockquote className="border-l-4 border-brand-500 pl-5">
      <p className="text-sm italic leading-relaxed text-[var(--v6-text-secondary)]">&ldquo;{quote}&rdquo;</p>
      {showAttribution ? (
        <footer className="mt-3 text-sm">
          {author.trim().length > 0 ? <cite className="font-medium not-italic text-[var(--v6-text)]">{author}</cite> : null}
          {role.trim().length > 0 ? <span className="text-muted"> — {role}</span> : null}
        </footer>
      ) : null}
    </blockquote>
  );
}
