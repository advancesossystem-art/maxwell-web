"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "maxwell-recently-viewed";
const MAX_ITEMS = 5;

type RecentItem = { href: string; title: string };

function readRecent(): RecentItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RecentItem[]) : [];
  } catch {
    return [];
  }
}

function writeRecent(items: RecentItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
  } catch {
    /* ignore */
  }
}

/** Phase N — track and display recently viewed pages */
export function RecentlyViewedTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/portal") || pathname.startsWith("/admin")) return;
    const title = document.title.replace(/\s*[|–-]\s*Maxwell.*$/i, "").trim() || pathname;
    const href = pathname;
    const existing = readRecent().filter((i) => i.href !== href);
    writeRecent([{ href, title }, ...existing]);
  }, [pathname]);

  return null;
}

export function RecentlyViewedRail({ className }: { className?: string }) {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    setItems(readRecent().slice(0, 4));
  }, []);

  if (items.length < 2) return null;

  return (
    <aside className={className} aria-label="Recently viewed">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
        Recently viewed
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-[var(--v6-text-secondary)] hover:text-[#4f46e5] line-clamp-1"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
