/** @deprecated Use HeroMotionEnhancer with data-hero attributes on the visual container. */
export function HeroMotionColumn({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className} data-hero="visual">
      {children}
    </div>
  );
}

export const HeroMotionVisual = HeroMotionColumn;
