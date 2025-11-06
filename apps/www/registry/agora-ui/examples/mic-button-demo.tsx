"use client"

import { useState } from "react"

import {
  MicButton,
  type MicButtonState,
} from "@/registry/agora-ui/ui/mic-button"

export default function MicButtonDemo() {
  const [state, setState] = useState<MicButtonState>("idle")

  return (
    <div className="w-full max-w-lg space-y-6">
      {/* State Controls */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Select State</p>
        <div className="space-y-2">
          {(["idle", "listening", "processing", "error"] as const).map((s) => (
            <label
              key={s}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors"
            >
              <input
                type="radio"
                name="state"
                value={s}
                checked={state === s}
                onChange={(e) => setState(e.target.value as MicButtonState)}
                className="h-4 w-4"
              />
              <span className="capitalize">{s}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Component Display */}
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground mb-4 text-sm">
          State:{" "}
          <span className="text-foreground font-medium capitalize">
            {state}
          </span>
        </p>
        <div className="flex items-center gap-4">
          <MicButton state={state} />
          <MicButton state={state} size="default" />
          <MicButton state={state} size="lg" />
          <MicButton state={state} size="icon" />
        </div>
      </div>

      {/* States Description */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">State Descriptions</p>
        <p className="text-muted-foreground mb-3 text-xs">
          All states include a chevron icon on the right for dropdown
          indication.
        </p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>idle:</strong> Shows mic icon + chevron
          </div>
          <div>
            <strong>listening:</strong> Shows mic icon + animated blue waveform
            + chevron
          </div>
          <div>
            <strong>processing:</strong> Shows mic icon + static gray waveform +
            chevron
          </div>
          <div>
            <strong>error:</strong> Shows mic-off icon + chevron in red
          </div>
        </div>
      </div>

      {/* Error Badge */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">
          Error with Badge (Permission Denied)
        </p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <p>When permission is denied or device access fails:</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MicButton state="error" showErrorBadge={false} />
              <span>Without badge</span>
            </div>
            <div className="flex items-center gap-2">
              <MicButton state="error" showErrorBadge={true} />
              <span>With badge (permission denied)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="rounded-lg border p-4">
        <p className="mb-4 text-sm font-medium">Variants</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MicButton state="idle" variant="outline" />
            <span className="text-muted-foreground text-xs">outline</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="idle" variant="ghost" />
            <span className="text-muted-foreground text-xs">ghost</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="idle" variant="default" />
            <span className="text-muted-foreground text-xs">default</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="error" variant="destructive" />
            <span className="text-muted-foreground text-xs">destructive</span>
          </div>
        </div>
      </div>
    </div>
  )
}
