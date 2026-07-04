"use client";

import { useLayoutEffect } from "react";

const CHUNK_RELOAD_KEY = "mw-chunk-reload";

function registerChunkReloadListener() {
  if (typeof window === "undefined") return;

  window.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLScriptElement) || !target.src) return;
      if (!target.src.includes("/_next/static/chunks/")) return;
      if (sessionStorage.getItem(CHUNK_RELOAD_KEY)) return;
      sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
      location.reload();
    },
    true,
  );
}

/** Lightweight setup that avoids <script> in React tree and heavy third-party work. */
export function EarlyClientSetup() {
  useLayoutEffect(() => {
    registerChunkReloadListener();
  }, []);

  return null;
}
