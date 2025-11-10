"use client"

import { Phone, X } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"
import { Chip } from "@/registry/agora-ui/ui/chip"

export default function ChipDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Icon Buttons in Chip */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Icon Control Group</p>
        <div>
          <Chip>
            <Button>
              <Phone className="size-4" />
            </Button>
            <Button>
              <X className="size-4" />
            </Button>
          </Chip>
        </div>
      </div>
    </div>
  )
}
