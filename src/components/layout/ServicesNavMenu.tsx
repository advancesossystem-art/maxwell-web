"use client";

import Link from "next/link";
import { servicesNavGroups } from "@/lib/navigation-services";
import { cn } from "@/lib/utils";

type ServicesNavMenuProps = {
  style: React.CSSProperties;
  onNavigate?: () => void;
};

export function ServicesNavMenu({ style, onNavigate }: ServicesNavMenuProps) {
  return (
    <div
      className="max-h-[min(80vh,32rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--v6-border)] bg-white p-4 shadow-xl"
      style={style}
      role="menu"
      aria-labelledby="services-menu-button"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesNavGroups.map((group) => (
          <div key={group.title}>
            <p className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
              {group.title}
            </p>
            <ul className="mt-2 space-y-0.5">
              {group.links.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={onNavigate}
                    className={cn(
                      "block rounded-lg px-2 py-2 text-sm font-medium text-[var(--v6-text)]",
                      "transition-colors hover:bg-[#f1f5f9] hover:text-[#4f46e5]",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-[var(--v6-border)] pt-3">
        <Link
          href="/services"
          onClick={onNavigate}
          className="block rounded-lg px-2 py-2 text-sm font-semibold text-[#4f46e5] hover:bg-[#f1f5f9]"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}
