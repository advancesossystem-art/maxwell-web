import { Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

export const inputClass = cn(
  "w-full min-h-11 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-base text-foreground sm:text-sm",
  "placeholder:text-muted/50 transition-colors",
  "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25",
);

export const labelClass = "mb-2 block text-sm font-medium text-muted";

export function FormField({
  label,
  htmlFor,
  required,
  children,
  error,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  hint?: string;
}) {
  const errorId = error ? `${htmlFor}-error` : undefined;
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? <span className="text-brand-500" aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mb-2 text-xs text-[#94A3B8]">
          {hint}
        </p>
      ) : null}
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
          "aria-invalid": error ? true : undefined,
          "aria-describedby": describedBy,
          "aria-required": required ? true : undefined,
        });
      })}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-form-panel",
        className,
      )}
    >
      {children}
    </div>
  );
}
