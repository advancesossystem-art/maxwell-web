"use client";

import Script from "next/script";

export function CalendlyEmbed({
  url,
  height = 700,
  title = "Schedule a meeting",
}: {
  url: string;
  height?: number;
  title?: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-white">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div
        className="calendly-inline-widget w-full"
        data-url={url}
        title={title}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
    </div>
  );
}
