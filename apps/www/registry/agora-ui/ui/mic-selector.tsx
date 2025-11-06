"use client"

import * as React from "react"
import { Check, ChevronDown, Mic, MicOff } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/agora-ui/ui/dropdown-menu"
import { LiveWaveform } from "@/registry/agora-ui/ui/live-waveform"
import type { MicButtonState } from "@/registry/agora-ui/ui/mic-button"

export interface SelectItem {
  value: string
  label: string
}

export interface MicSelectorProps {
  items: SelectItem[]
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  className?: string
  /**
   * Current state of the mic selector (idle, listening, processing, error)
   * @default "idle"
   */
  state?: MicButtonState
  /**
   * Show error badge when in error state (indicates permission denied)
   * @default false
   */
  showErrorBadge?: boolean
}

export function MicSelector({
  items,
  value,
  onValueChange,
  disabled = false,
  className,
  state = "idle",
  showErrorBadge = false,
}: MicSelectorProps) {
  const isListening = state === "listening"
  const isProcessing = state === "processing"
  const isError = state === "error"
  const isActive = isListening || isProcessing

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          disabled={disabled || items.length === 0 || isError}
          className={cn(
            "relative inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
            // Idle and active states
            !isError &&
              "border-input bg-background hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            // Error state
            isError &&
              "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 cursor-not-allowed",
            // Disabled
            (disabled || items.length === 0) && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          {isError ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          {isActive && (
            <LiveWaveform
              active={isListening}
              barColor={isProcessing ? "#94a3b8" : "#3b82f6"}
              fadeEdges={false}
            />
          )}
          <ChevronDown className="h-4 w-4 flex-shrink-0" />

          {/* Error badge - orange circle with exclamation */}
          {isError && showErrorBadge && (
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900">
              <span className="text-xs leading-none font-bold">!</span>
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="top" className="w-72">
        {items.length === 0 ? (
          <div className="text-muted-foreground py-6 text-center text-sm">
            No items available
          </div>
        ) : (
          items.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => onValueChange?.(item.value)}
              className="flex items-center justify-between"
              disabled={state === "processing" || state === "error"}
            >
              <span className="truncate">{item.label}</span>
              {value === item.value && (
                <Check className="h-4 w-4 flex-shrink-0" />
              )}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
