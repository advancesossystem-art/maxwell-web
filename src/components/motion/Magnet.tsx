"use client";

import { useCallback, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

/** Mouse-following magnetic hover (Jack portfolio pattern). */
export function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inRange =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (!inRange) {
        setActive(false);
        setTransform("translate3d(0, 0, 0)");
        return;
      }

      setActive(true);
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / strength;
      const dy = (e.clientY - cy) / strength;
      setTransform(`translate3d(${dx}px, ${dy}px, 0)`);
    },
    [padding, reduce, strength],
  );

  const onLeave = useCallback(() => {
    setActive(false);
    setTransform("translate3d(0, 0, 0)");
  }, []);

  const style: CSSProperties = reduce
    ? {}
    : {
        transform,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      };

  return (
    <div
      ref={ref}
      className={cn("inline-flex", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
    >
      {children}
    </div>
  );
}
