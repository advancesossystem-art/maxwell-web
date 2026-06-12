"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { EASE_OUT_EXPO, scaledMs } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/components/motion/FadeIn";

export function ModalBackdrop({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    el.style.opacity = "0";
    const anim = animate(el, {
      opacity: [0, 1],
      duration: scaledMs(250),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [reduce]);

  return <div ref={ref} className={className} onClick={onClick} aria-hidden />;
}

export function ModalPanel({
  children,
  className,
  panelRef,
  onClick,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  panelRef?: React.Ref<HTMLDivElement>;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = innerRef.current;
    if (!el || reduce) return;
    el.style.opacity = "0";
    el.style.transform = "translate3d(0, 12px, 0)";
    const anim = animate(el, {
      opacity: [0, 1],
      y: [12, 0],
      duration: scaledMs(300),
      ease: EASE_OUT_EXPO,
    });
    return () => {
      anim.pause();
    };
  }, [reduce]);

  const setRef = (node: HTMLDivElement | null) => {
    innerRef.current = node;
    if (typeof panelRef === "function") panelRef(node);
    else if (panelRef && "current" in panelRef) {
      panelRef.current = node;
    }
  };

  return (
    <div ref={setRef} className={className} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
