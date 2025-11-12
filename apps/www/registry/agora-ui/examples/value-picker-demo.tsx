"use client"

import { useState } from "react"

import { ValuePicker, type Item } from "@/registry/agora-ui/ui/value-picker"

const items: Item[] = [
  {
    id: "option-1",
    name: "Option 1",
  },
  {
    id: "option-2",
    name: "Option 2",
  },
  {
    id: "option-3",
    name: "Option 3",
  },
  {
    id: "option-4",
    name: "Option 4",
  },
  {
    id: "option-5",
    name: "Option 5",
  },
  {
    id: "option-6",
    name: "Option 5",
  },
  {
    id: "option-7",
    name: "Option 5",
  },
  {
    id: "option-5",
    name: "Option 5",
  },
  {
    id: "option-8",
    name: "Option 5",
  },
  {
    id: "option-9",
    name: "Option 5",
  },
]

export default function ValuePickerDemo() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    "option-1"
  )

  return (
    <div className="w-full max-w-lg space-y-4">
      <ValuePicker
        label="Select a value"
        items={items}
        value={selectedValue}
        onValueChange={setSelectedValue}
        placeholder="Choose an option..."
      />

      {selectedValue && (
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">Selected Value:</p>
          <p className="mt-2 text-lg font-semibold">
            {items.find((i) => i.id === selectedValue)?.name}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            ID: {selectedValue}
          </p>
        </div>
      )}
    </div>
  )
}
