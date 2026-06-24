import Link from "next/link";
import Image from "next/image";

export interface ProjectScreenshot {
  /** Path under /public when asset is available, e.g. /projects/manufacturing-erp/dashboard.webp */
  src?: string;
  alt: string;
  caption: string;
  category: "dashboard" | "mobile" | "crm" | "erp" | "web" | "automation";
}

interface ProjectScreenshotSlotsProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

/**
 * Framework for real project screenshots — renders slots when src is provided.
 * No fake or generated dashboard images.
 */
export function ProjectScreenshotSlots({ screenshots, projectTitle }: ProjectScreenshotSlotsProps) {
  if (screenshots.length === 0) return null;

  const withAssets = screenshots.filter((s) => s.src);
  if (withAssets.length === 0) {
    return (
      <section className="py-12" aria-label="Project screenshots">
        <div className="v6-container">
          <h2 className="font-display text-xl font-bold">Project screenshots</h2>
          <p className="mt-2 text-sm text-muted">
            Client screens shown under NDA.{" "}
            <Link href="/book-consultation?source=work-screenshots" className="font-medium text-brand-600 hover:underline">
              Request a full demo walkthrough →
            </Link>
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((slot) => (
              <li
                key={slot.caption}
                className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface-elevated p-6 text-center"
              >
                <span className="v6-chip capitalize">{slot.category}</span>
                <p className="mt-3 text-sm font-medium text-[var(--v6-text)]">{slot.caption}</p>
                <p className="mt-1 text-xs text-muted">Available on consultation</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" aria-label="Project screenshots">
      <div className="v6-container">
        <h2 className="font-display text-xl font-bold">Project screenshots</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {withAssets.map((shot) => (
            <figure key={shot.src} className="overflow-hidden rounded-xl border border-border">
              <Image
                src={shot.src!}
                alt={shot.alt}
                width={1200}
                height={750}
                className="w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
