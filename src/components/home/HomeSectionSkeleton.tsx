export function HomeSectionSkeleton() {
  return (
    <div className="v6-section animate-pulse" aria-hidden="true">
      <div className="v6-container space-y-4 py-8">
        <div className="h-4 w-24 rounded bg-[var(--v6-border)]" />
        <div className="h-8 w-full max-w-md rounded bg-[var(--v6-border)]" />
        <div className="h-4 w-full max-w-2xl rounded bg-[var(--v6-border)]" />
        <div className="mt-6 h-40 w-full rounded-2xl bg-[var(--v6-border)]" />
      </div>
    </div>
  );
}
