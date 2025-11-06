"use client"

import * as React from "react"
import { Mic, MicOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { LiveWaveform } from "@/registry/agora-ui/ui/live-waveform"

export type MicButtonState = "idle" | "listening" | "processing" | "error"

export interface MicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Current state of the mic button
   * @default "idle"
   */
  state?: MicButtonState

  /**
   * Icon to display (defaults to Mic icon)
   */
  icon?: React.ReactNode

  /**
   * Show error badge (orange circle with exclamation) when in error state
   * Indicates permission denied or device access error
   * @default false
   */
  showErrorBadge?: boolean
}

export const MicButton = React.forwardRef<HTMLButtonElement, MicButtonProps>(
  (
    {
      state = "idle",
      icon = <Mic className="h-4 w-4" />,
      showErrorBadge = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isListening = state === "listening"
    const isProcessing = state === "processing"
    const isError = state === "error"
    const isActive = isListening || isProcessing

    return (
      <button
        ref={ref}
        disabled={disabled || isError}
        className={cn(
          "relative inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
          // Idle and active states
          !isError &&
            "border-input bg-background hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          // Error state
          isError &&
            "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 cursor-not-allowed",
          // Disabled state
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isError ? <MicOff className="h-4 w-4" /> : icon}
        {isActive && (
          <LiveWaveform
            active={isListening}
            barColor={isProcessing ? "#94a3b8" : "#3b82f6"}
            fadeEdges={false}
          />
        )}

        {/* Error badge - orange circle with exclamation */}
        {isError && showErrorBadge && (
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900">
            <span className="text-xs leading-none font-bold">!</span>
          </div>
        )}
      </button>
    )
  }
)

MicButton.displayName = "MicButton"
