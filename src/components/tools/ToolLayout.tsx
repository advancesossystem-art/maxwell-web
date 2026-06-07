"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ToolFormPanel({
  eyebrow = "Step 1 · Inputs",
  title,
  description,
  children,
  footer,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("tool-panel", className)}>
      <div className="tool-panel__header">
        <p className="tool-panel__eyebrow">{eyebrow}</p>
        <h2 className="tool-panel__title">{title}</h2>
        {description ? <p className="tool-panel__desc">{description}</p> : null}
      </div>
      <div className="tool-panel__body">{children}</div>
      {footer ? <div className="tool-panel__footer">{footer}</div> : null}
    </div>
  );
}

export function ToolResultsLayout({
  title,
  summary,
  toolbar,
  children,
  footer,
  className,
}: {
  title: string;
  summary?: string;
  toolbar?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div id="tool-report" className={cn("tool-results", className)}>
      <div className="tool-results__hero">
        <div>
          <h2 className="tool-results__title">{title}</h2>
          {summary ? <p className="tool-results__summary">{summary}</p> : null}
        </div>
        {toolbar}
      </div>
      {children}
      {footer}
    </div>
  );
}

export function ToolField({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="tool-field-group">
      <label htmlFor={htmlFor} className="tool-field-label">
        {label}
      </label>
      {hint ? <p className="tool-field-hint">{hint}</p> : null}
      {children}
    </div>
  );
}

export function ToolRangeField({
  label,
  htmlFor,
  hint,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
}) {
  const display = formatValue ? formatValue(value) : `${value}%`;

  return (
    <ToolField label={label} htmlFor={htmlFor} hint={hint}>
      <input
        id={htmlFor}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="tool-range"
      />
      <div className="tool-range-meta">
        <span>{min}%</span>
        <span className="tool-range-value">{display}</span>
        <span>{max}%</span>
      </div>
    </ToolField>
  );
}

export function ToolOptionCard({
  selected,
  onClick,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn("tool-option", selected && "tool-option--selected")}
    >
      <div className="tool-option__title">{title}</div>
      {description ? <p className="tool-option__desc">{description}</p> : null}
    </button>
  );
}
