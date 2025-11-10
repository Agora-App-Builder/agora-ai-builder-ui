"use client"

import { useState } from "react"

import { MicSelector } from "@/registry/agora-ui/ui/mic-selector"

export default function MicSelectorDemo() {
  const [selectedDevice, setSelectedDevice] = useState<string>()
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Description */}
      <div className="rounded-lg border p-4">
        <p className="mb-2 text-sm font-medium">
          Mic Selector with Audio Devices
        </p>
      </div>

      {/* Basic Example */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Basic Selector</p>
        <p className="text-muted-foreground mb-3 text-xs">
          Auto-detects microphones. Click to open dropdown and select device.
        </p>
        <div className="flex items-center gap-2">
          <MicSelector
            value={selectedDevice}
            onValueChange={setSelectedDevice}
            muted={isMuted}
            onMutedChange={setIsMuted}
          />
        </div>
        {selectedDevice && (
          <p className="text-muted-foreground mt-3 text-sm">
            Selected device ID:{" "}
            <strong>{selectedDevice.slice(0, 16)}...</strong>
          </p>
        )}
        {isMuted && (
          <p className="text-muted-foreground mt-2 text-sm">
            Status: <strong>🔇 Muted</strong>
          </p>
        )}
      </div>
    </div>
  )
}
