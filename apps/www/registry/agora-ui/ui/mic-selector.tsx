"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, ChevronDown, Mic, MicOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { useAudioDevices } from "@/registry/agora-ui/hooks/use-audio-devices"
import { Button } from "@/registry/agora-ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/agora-ui/ui/dropdown-menu"
import { IconButton } from "@/registry/agora-ui/ui/icon-button"
import { LiveWaveform } from "@/registry/agora-ui/ui/live-waveform"
import type { MicButtonState } from "@/registry/agora-ui/ui/mic-button"

import { Chip } from "./chip"

export interface MicSelectorProps {
  value?: string
  onValueChange?: (deviceId: string) => void
  muted?: boolean
  onMutedChange?: (muted: boolean) => void
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
  value,
  onValueChange,
  muted,
  onMutedChange,
  disabled = false,
  className,
  showErrorBadge = false,
}: MicSelectorProps) {
  const [state, setState] = useState<
    "idle" | "listening" | "success" | "error"
  >("idle")
  const { devices, loading, error, hasPermission, loadDevices } =
    useAudioDevices()
  const [selectedDevice, setSelectedDevice] = useState<string>(value || "")
  const [internalMuted, setInternalMuted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Use controlled muted if provided, otherwise use internal state
  const isMuted = muted !== undefined ? muted : internalMuted

  // console.log("supriya state: ", state)
  // console.log("supriya error: ", error)
  // console.log("supriya hasPermission: ", hasPermission)

  // Update internal state when controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedDevice(value)
    }
  }, [value])

  // Select first device by default
  const defaultDeviceId = devices[0]?.deviceId || ""
  useEffect(() => {
    if (!selectedDevice && defaultDeviceId) {
      const newDevice = defaultDeviceId
      setSelectedDevice(newDevice)
      onValueChange?.(newDevice)
    }
  }, [defaultDeviceId, selectedDevice, onValueChange])

  const currentDevice = devices.find((d) => d.deviceId === selectedDevice) ||
    devices[0] || {
      label: loading ? "Loading..." : "No microphone",
      deviceId: "",
    }

  const handleDeviceSelect = (deviceId: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    setSelectedDevice(deviceId)
    onValueChange?.(deviceId)
  }

  const handleDropdownOpenChange = async (open: boolean) => {
    setIsDropdownOpen(open)
    if (open && !hasPermission && !loading) {
      await loadDevices()
    }
  }

  const toggleMute = () => {
    const newMuted = !isMuted
    if (muted === undefined) {
      setInternalMuted(newMuted)
    }
    onMutedChange?.(newMuted)
  }

  const isError = state === "error" || !hasPermission
  const showWaveform = !isMuted

  return (
    <Chip>
      <div>
        <IconButton
          onClick={toggleMute}
          shape="round"
          variant="standard"
          size={"sm"}
          disabled={isError}
        >
          {isMuted || isError ? (
            <MicOff className="text-error size-4" />
          ) : (
            <Mic className="size-4" />
          )}
        </IconButton>
        {isError && (
          <div className="bg-warning absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full">
            <span className="text-font text-xs leading-none font-bold">!</span>
          </div>
        )}
      </div>
      <div className="w-10">
        <LiveWaveform
          active={!muted}
          deviceId={selectedDevice || defaultDeviceId}
          height={15}
          barWidth={3}
          barGap={1}
        />
      </div>
      <DropdownMenu onOpenChange={handleDropdownOpenChange}>
        <DropdownMenuTrigger asChild>
          <ChevronDown className="size-6 flex-shrink-0" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" side="top" className="w-72">
          {loading ? (
            <div className="text-muted-foreground px-4 py-3 text-center text-sm">
              Loading devices...
            </div>
          ) : error ? (
            <div className="text-error px-4 py-3 text-center text-sm">
              Error: {error}
            </div>
          ) : devices.length === 0 ? (
            <div className="text-muted-foreground px-4 py-3 text-center text-sm">
              No microphones available
            </div>
          ) : (
            <>
              {devices.map((device) => (
                <DropdownMenuItem
                  key={device.deviceId}
                  onClick={(e) => handleDeviceSelect(device.deviceId, e)}
                  onSelect={(e) => e.preventDefault()}
                  className="flex cursor-pointer items-center justify-between"
                  disabled={loading && isError}
                >
                  <span className="truncate">{device.label}</span>
                  {selectedDevice === device.deviceId && (
                    <Check className="size-5 flex-shrink-0" />
                  )}
                </DropdownMenuItem>
              ))}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Chip>
  )
}
