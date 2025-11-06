"use client"

import { useState } from "react"

import { LiveWaveform } from "@/registry/agora-ui/ui/live-waveform"

export default function LiveWaveformDemo() {
  const [active, setActive] = useState(true)

  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Active Toggle */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Animation State</p>
        <label className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            className="h-4 w-4"
          />
          <span>Active</span>
        </label>
      </div>

      {/* Default */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Default</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform active={active} />
        </div>
        <p className="text-muted-foreground text-xs">
          barWidth={`{4}`}, barGap={`{2}`}, barColor=&quot;#3b82f6&quot;,
          height={`{100}`}, fadeEdges={`{true}`}
        </p>
      </div>

      {/* Custom Blue */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Custom Blue (Larger)</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform
            active={active}
            barWidth={6}
            barGap={3}
            barColor="#2563eb"
            height={120}
          />
        </div>
        <p className="text-muted-foreground text-xs">
          barWidth={`{6}`}, barGap={`{3}`}, barColor=&quot;#2563eb&quot;,
          height={`{120}`}
        </p>
      </div>

      {/* Purple/Vibrant */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Purple Vibrant</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform
            active={active}
            barWidth={5}
            barGap={2}
            barColor="#a855f7"
            height={90}
            fadeEdges={false}
          />
        </div>
        <p className="text-muted-foreground text-xs">
          barColor=&quot;#a855f7&quot;, fadeEdges={`{false}`}
        </p>
      </div>

      {/* Compact */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Compact</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform
            active={active}
            barWidth={3}
            barGap={1}
            barColor="#06b6d4"
            height={60}
          />
        </div>
        <p className="text-muted-foreground text-xs">
          barWidth={`{3}`}, barGap={`{1}`}, height={`{60}`}
        </p>
      </div>

      {/* Info */}
      <div className="rounded-lg border p-4">
        <p className="mb-2 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-1 text-xs">
          <div>
            <strong>active:</strong> Boolean to enable/disable animation
          </div>
          <div>
            <strong>barWidth:</strong> Width of each bar in pixels (default: 4)
          </div>
          <div>
            <strong>barGap:</strong> Space between bars in pixels (default: 2)
          </div>
          <div>
            <strong>barColor:</strong> Color of bars as hex/rgb/color name
            (default: #3b82f6)
          </div>
          <div>
            <strong>height:</strong> Height of waveform in pixels (default: 100)
          </div>
          <div>
            <strong>fadeEdges:</strong> Fade effect on left/right edges
            (default: true)
          </div>
        </div>
      </div>
    </div>
  )
}
