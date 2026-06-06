"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ExportGate } from "@/components/tools/ExportGate";
import { isExportUnlocked, saveToolResult } from "@/lib/tools/storage";
import { trackToolExport } from "@/lib/tools/analytics";

export function ExportToolbar({
  toolSlug,
  toolName,
  resultSummary,
  resultData,
}: {
  toolSlug: string;
  toolName: string;
  resultSummary: string;
  resultData: Record<string, unknown>;
}) {
  const [gateOpen, setGateOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [saved, setSaved] = useState(false);

  const checkUnlocked = () => isExportUnlocked(toolSlug) || unlocked;

  function requireUnlock(action: () => void) {
    if (checkUnlocked()) {
      action();
      return;
    }
    setGateOpen(true);
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 print:hidden">
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            requireUnlock(() => {
              window.print();
              trackToolExport(toolSlug, "print");
            })
          }
        >
          Print / PDF
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            requireUnlock(() => {
              saveToolResult(toolSlug, resultData);
              setSaved(true);
              trackToolExport(toolSlug, "save");
            })
          }
        >
          {saved ? "Saved ✓" : "Save results"}
        </Button>
        <Button size="sm" onClick={() => setGateOpen(true)}>
          Email summary
        </Button>
      </div>
      <ExportGate
        toolSlug={toolSlug}
        toolName={toolName}
        resultSummary={resultSummary}
        resultData={resultData}
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        onUnlocked={() => setUnlocked(true)}
      />
    </>
  );
}
