"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { AgentVisualizer } from "@/registry/agora-ui/ui/agent-visualizer"

const states = [
  "not-joined",
  "joining",
  "ambient",
  "listening",
  "analyzing",
  "talking",
  "disconnected",
] as const

export default function AgentVisualizerDemo() {
  const [selectedState, setSelectedState] =
    useState<(typeof states)[number]>("listening")
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="w-full max-w-4xl space-y-8">
      {/* State Selector */}
      <div className="space-y-3">
        <p className="text-sm font-medium">States</p>
        <div className="flex flex-wrap gap-2">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                selectedState === state
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {state
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Sizes</p>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Current State Display */}
      <div className="space-y-3 rounded-lg border p-6">
        <p className="text-sm font-medium">
          Current State:{" "}
          <span className="text-foreground capitalize">
            {selectedState
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
        </p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-8">
          <AgentVisualizer state={selectedState} size={selectedSize} />
        </div>
      </div>

      {/* All States Grid */}
      <div className="space-y-3">
        <p className="text-sm font-medium">All States (Medium Size)</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {states.map((state) => (
            <div
              key={state}
              className="bg-muted flex flex-col items-center gap-3 rounded-lg border p-4"
            >
              <AgentVisualizer state={state} size="md" />
            </div>
          ))}
        </div>
      </div>

      {/* Size Variants */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Size Variants</p>
        <div className="flex items-end justify-center gap-8 rounded-lg border p-6">
          <div className="flex flex-col items-center gap-2">
            <AgentVisualizer state="listening" size="sm" />
            <span className="text-muted-foreground text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AgentVisualizer state="listening" size="md" />
            <span className="text-muted-foreground text-xs">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AgentVisualizer state="listening" size="lg" />
            <span className="text-muted-foreground text-xs">Large</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">About Agent Visualizer</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <p>
            A component that displays animated Lottie visualizations for
            different agent states. The animation and text automatically update
            based on the selected state.
          </p>
          <p className="mt-2">
            <strong>Props:</strong> state (required), size (sm/md/lg, default:
            md)
          </p>
          <p className="mt-2">
            <strong>States:</strong> not-joined, joining, ambient, listening,
            analyzing, talking, disconnected
          </p>
          <p className="mt-2">
            <strong>Sizes:</strong> sm (128px), md (192px), lg (256px)
          </p>
          <p className="mt-2">
            <strong>Text:</strong> Automatically derived from state (e.g.,
            &quot;listening&quot; → &quot;Listening&quot;)
          </p>
        </div>
      </div>
    </div>
  )
}
