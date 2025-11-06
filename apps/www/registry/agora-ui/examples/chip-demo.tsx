"use client"

import { Phone, X } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"
import { Chip } from "@/registry/agora-ui/ui/chip"
import {
  MicSelector,
  type SelectItem,
} from "@/registry/agora-ui/ui/mic-selector"

const voiceItems: SelectItem[] = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
]

export default function ChipDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Controls Group - MicSelector + EndCall (like your image) */}
      <div className="space-y-3">
        <p className="text-sm font-medium">
          Controls Group (MicSelector + EndCall)
        </p>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 p-12">
          <Chip>
            <MicSelector
              items={voiceItems}
              value="english"
              placeholder="Select language..."
            />
            <Button size="icon" variant="destructive" rounded>
              <Phone className="h-4 w-4" />
            </Button>
          </Chip>
        </div>
      </div>

      {/* Multiple Buttons in Chip */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Button Controls</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-8">
          <Chip>
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="default" size="sm">
              Play
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </Chip>
        </div>
      </div>

      {/* Icon Buttons in Chip */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Icon Control Group</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-8">
          <Chip>
            <Button size="icon" variant="outline">
              <Phone className="h-4 w-4" />
            </Button>
            <Button size="icon" rounded variant="secondary">
              <X className="h-4 w-4" />
            </Button>
          </Chip>
        </div>
      </div>

      {/* Mixed Controls */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Mixed Controls</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-8">
          <Chip>
            <Button variant="ghost" size="sm">
              Settings
            </Button>
            <Button size="icon" rounded variant="default">
              <Phone className="h-4 w-4" />
            </Button>
          </Chip>
        </div>
      </div>

      {/* Info */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">About Chip Component</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <p>
            A flexible wrapper component with a fixed rounded pill-shaped
            background. Use it to group related controls together.
          </p>
          <p className="mt-2">
            <strong>Styling:</strong> rounded-full background with
            semi-transparent dark color and backdrop blur.
          </p>
          <p className="mt-2">
            <strong>Usage:</strong> Pass any children (buttons, selectors, etc.)
            and they'll be arranged horizontally within the chip.
          </p>
          <p className="mt-2">
            <strong>Future:</strong> Icon, onClose, variant props can be added
            later as needed.
          </p>
        </div>
      </div>
    </div>
  )
}
