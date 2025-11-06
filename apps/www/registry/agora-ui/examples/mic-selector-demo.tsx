"use client"

import { useState } from "react"

import {
  MicSelector,
  type SelectItem,
} from "@/registry/agora-ui/ui/mic-selector"

const voiceItems: SelectItem[] = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Mandarin Chinese" },
]

export default function MicSelectorDemo() {
  const [selectedVoice, setSelectedVoice] = useState<string>("english")
  const [state, setState] = useState<
    "idle" | "listening" | "processing" | "error"
  >("idle")

  return (
    <div className="w-full max-w-lg space-y-6">
      {/* Basic Example */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Basic Selector</p>
        <p className="text-muted-foreground mb-3 text-xs">
          Mic button + chevron. Click to open dropdown and select voice.
        </p>
        <div className="flex items-center gap-2">
          <MicSelector
            items={voiceItems}
            value={selectedVoice}
            onValueChange={setSelectedVoice}
          />
        </div>
        {selectedVoice && (
          <p className="text-muted-foreground mt-3 text-sm">
            Selected:{" "}
            <strong>
              {voiceItems.find((v) => v.value === selectedVoice)?.label}
            </strong>
          </p>
        )}
      </div>

      {/* State Examples */}
      <div className="space-y-3">
        <p className="text-sm font-medium">States</p>
        <div className="space-y-2">
          {(["idle", "listening", "processing", "error"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setState(s)}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors"
            >
              <input
                type="radio"
                name="state"
                value={s}
                checked={state === s}
                onChange={(e) =>
                  setState(
                    e.target.value as
                      | "idle"
                      | "listening"
                      | "processing"
                      | "error"
                  )
                }
                className="h-4 w-4"
              />
              <span className="capitalize">{s}</span>
            </button>
          ))}
        </div>
      </div>

      {/* State Display */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">
          States: <span className="text-foreground capitalize">{state}</span>
        </p>
        <div className="flex items-center gap-3">
          <MicSelector
            items={voiceItems}
            value={selectedVoice}
            onValueChange={setSelectedVoice}
            state={state}
          />
        </div>
        <div className="text-muted-foreground mt-4 space-y-2 text-xs">
          <p>
            <strong>idle:</strong> Normal mic button, fully interactive
          </p>
          <p>
            <strong>listening:</strong> Mic button with animated blue waveform
          </p>
          <p>
            <strong>processing:</strong> Mic button with static gray waveform
          </p>
          <p>
            <strong>error:</strong> Mic-off icon with red styling
          </p>
        </div>
      </div>

      {/* Error Badge Example */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">
          Error with Permission Denied Badge
        </p>
        <div className="text-muted-foreground mb-3 text-xs">
          Use{" "}
          <code className="bg-muted rounded px-1 py-0.5">showErrorBadge</code>{" "}
          prop to show permission error indicator
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <MicSelector
              items={voiceItems}
              value={selectedVoice}
              onValueChange={setSelectedVoice}
              state="error"
              showErrorBadge={false}
            />
            <span className="text-muted-foreground text-xs">Without badge</span>
          </div>
          <div className="flex flex-col gap-2">
            <MicSelector
              items={voiceItems}
              value={selectedVoice}
              onValueChange={setSelectedVoice}
              state="error"
              showErrorBadge={true}
            />
            <span className="text-muted-foreground text-xs">
              Permission denied
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
