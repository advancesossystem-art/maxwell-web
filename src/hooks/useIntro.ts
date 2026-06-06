"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dispatchIntroComplete } from "@/lib/intro/events";
import {
  getIntroModeFromEnv,
  isIntroDisabled,
  INTRO_TIMING,
  resolveIntroModeClient,
  type IntroMode,
} from "@/lib/intro/config";
import {
  hasSeenIntro,
  markIntroSeen,
  shouldForceIntro,
} from "@/lib/intro/storage";

export const INTRO_Z_INDEX = 999999;

export type IntroState = "playing" | "revealing" | "complete" | "skipped";

export type IntroContextValue = {
  state: IntroState;
  mode: IntroMode;
  complete: () => void;
  skip: () => void;
  /** Homepage hero may animate in (content paints under overlay) */
  revealed: boolean;
};

export const IntroContext = createContext<IntroContextValue | null>(null);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resolveShouldPlay(mode: IntroMode): boolean {
  if (typeof window === "undefined") return false;
  if (isIntroDisabled(mode)) return false;
  if (prefersReducedMotion()) return false;
  if (shouldForceIntro()) return true;
  return !hasSeenIntro();
}

function syncDocumentIntroState(state: IntroState, mode: IntroMode): void {
  const root = document.documentElement;
  if (state === "playing") {
    root.removeAttribute("data-intro-pending");
    root.setAttribute("data-intro", "playing");
    root.setAttribute("data-intro-mode", mode);
    document.body.style.overflow = "hidden";
    return;
  }
  if (state === "revealing") {
    root.setAttribute("data-intro", "revealing");
    document.body.style.overflow = "hidden";
    return;
  }
  root.removeAttribute("data-intro");
  root.removeAttribute("data-intro-mode");
  document.body.style.overflow = "";
}

function getInitialIntroState(enabled: boolean, mode: IntroMode): IntroState {
  if (!enabled || isIntroDisabled(mode)) return "complete";
  if (typeof window === "undefined") return "complete";
  if (!resolveShouldPlay(mode)) return "skipped";
  return "playing";
}

export function useIntro({ enabled }: { enabled: boolean }) {
  const envMode = getIntroModeFromEnv();
  const [mode, setMode] = useState<IntroMode>(envMode);
  const [state, setState] = useState<IntroState>(() =>
    getInitialIntroState(enabled, envMode),
  );

  useEffect(() => {
    setMode(resolveIntroModeClient(envMode));
  }, [envMode]);

  useEffect(() => {
    if (!enabled || isIntroDisabled(mode)) {
      setState("complete");
      return;
    }

    if (shouldForceIntro()) {
      console.log("INTRO REPLAY");
    }

    if (!resolveShouldPlay(mode)) {
      setState("skipped");
      dispatchIntroComplete();
      return;
    }

    setState((current) => {
      if (current === "playing" || current === "revealing") return current;
      return "playing";
    });
  }, [enabled, mode]);

  useEffect(() => {
    if (enabled && (state === "skipped" || state === "complete")) {
      dispatchIntroComplete();
    }
  }, [enabled, state]);

  useEffect(() => {
    syncDocumentIntroState(state === "complete" ? "skipped" : state, mode);
    return () => {
      if (state === "playing" || state === "revealing") {
        document.documentElement.removeAttribute("data-intro");
        document.documentElement.removeAttribute("data-intro-mode");
        document.body.style.overflow = "";
      }
    };
  }, [state, mode]);

  const finish = useCallback(() => {
    markIntroSeen();
    console.log("INTRO COMPLETE");
    setState("complete");
  }, []);

  const complete = useCallback(() => {
    const revealMs = INTRO_TIMING[mode === "minimal" ? "minimal" : "full"].reveal * 1000;
    setState("revealing");
    dispatchIntroComplete();
    window.setTimeout(finish, revealMs);
  }, [finish, mode]);

  const skip = useCallback(() => {
    dispatchIntroComplete();
    finish();
  }, [finish]);

  const revealed = useMemo(
    () =>
      state === "playing" ||
      state === "revealing" ||
      state === "complete" ||
      state === "skipped",
    [state],
  );

  return useMemo(
    () => ({ state, mode, complete, skip, revealed }),
    [state, mode, complete, skip, revealed],
  );
}

export function useIntroContext(): IntroContextValue {
  const ctx = useContext(IntroContext);
  if (!ctx) {
    return {
      state: "complete",
      mode: getIntroModeFromEnv(),
      complete: () => undefined,
      skip: () => undefined,
      revealed: true,
    };
  }
  return ctx;
}
