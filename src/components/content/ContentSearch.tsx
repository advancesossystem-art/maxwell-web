"use client";

import { useMemo, useState } from "react";
import type { SearchDocument } from "@/lib/content/search";
import type { ContentCategorySlug } from "@/lib/content/schema";
import { ContentCard } from "@/components/content/ContentCard";
import { FilterPill } from "@/components/design/FilterPill";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function ContentSearch({
  documents,
  categories,
  placeholder = "Search articles, guides, resources…",
}: {
  documents: SearchDocument[];
  categories: { slug: ContentCategorySlug; name: string }[];
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ContentCategorySlug | "all">("all");

  const filtered = useMemo(() => {
    let list = documents;
    if (category !== "all") {
      list = list.filter((d) => d.category === category);
    }
    const q = query.trim().toLowerCase();
    if (!q) return list;
    const terms = q.split(/\s+/);
    return list.filter((doc) =>
      terms.every(
        (t) =>
          doc.title.toLowerCase().includes(t) ||
          doc.excerpt.toLowerCase().includes(t) ||
          doc.tags.some((tag) => tag.toLowerCase().includes(t)),
      ),
    );
  }, [documents, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search content"
          className="card-premium flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#64748b] focus:border-brand-500/40 focus:outline-none focus:ring-2 focus:ring-brand-500/25"
        />
        <div className="flex flex-wrap gap-2">
          <FilterPill label="All" active={category === "all"} onClick={() => setCategory("all")} />
          {categories.map((c) => (
            <FilterPill
              key={c.slug}
              label={c.name}
              active={category === c.slug}
              onClick={() => setCategory(c.slug)}
            />
          ))}
        </div>
      </div>

      <p className={cn("mt-6", typography.caption)}>
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <ContentCard key={`${doc.type}-${doc.slug}`} doc={doc} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-body">No content matches your search. Try different keywords.</p>
      )}
    </div>
  );
}
