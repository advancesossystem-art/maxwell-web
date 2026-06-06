import Link from "next/link";
import type { ReactNode } from "react";

/** Shared MDX-style components for content rendering and future .mdx migration */
export const mdxComponents = {
  h2: (props: { children?: ReactNode; id?: string }) => (
    <h2 id={props.id} className="mt-12 font-display text-2xl font-bold tracking-tight scroll-mt-28">
      {props.children}
    </h2>
  ),
  h3: (props: { children?: ReactNode; id?: string }) => (
    <h3 id={props.id} className="mt-8 font-display text-xl font-semibold scroll-mt-28">
      {props.children}
    </h3>
  ),
  p: (props: { children?: ReactNode }) => (
    <p className="mt-4 text-base leading-relaxed text-muted">{props.children}</p>
  ),
  ul: (props: { children?: ReactNode }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">{props.children}</ul>
  ),
  ol: (props: { children?: ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted">{props.children}</ol>
  ),
  a: (props: { href?: string; children?: ReactNode }) => (
    <Link href={props.href ?? "#"} className="font-medium text-brand-600 hover:underline">
      {props.children}
    </Link>
  ),
  blockquote: (props: { children?: ReactNode }) => (
    <blockquote className="mt-6 border-l-4 border-brand-600/40 pl-6 italic text-muted">
      {props.children}
    </blockquote>
  ),
  code: (props: { children?: ReactNode }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-foreground">{props.children}</code>
  ),
};

export type MdxComponents = typeof mdxComponents;
