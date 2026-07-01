"use client";

import { useLayoutEffect } from "react";

const CHUNK_RELOAD_KEY = "mw-chunk-reload";
const CONSENT_SCRIPT_ID = "mw-consent-defaults";

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

function loadConsentDefaults() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CONSENT_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = CONSENT_SCRIPT_ID;
  script.src = "/consent-defaults.js";
  script.async = false;
  document.head.appendChild(script);
}

/** Runs before analytics tags without rendering <script> in the React tree (React 19). */
export function EarlyClientSetup() {
  useLayoutEffect(() => {
    registerChunkReloadListener();
    loadConsentDefaults();
  }, []);

  return null;
}
