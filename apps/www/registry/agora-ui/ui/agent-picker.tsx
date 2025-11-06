"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/agora-ui/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/agora-ui/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/agora-ui/ui/popover"

interface Agent {
  id: string
  name: string
  description?: string
}

interface AgentPickerProps {
  agents: Agent[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function AgentPicker({
  agents,
  value,
  onValueChange,
  placeholder = "Select an agent...",
  className,
  open,
  onOpenChange,
}: AgentPickerProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const setIsOpen = isControlled ? onOpenChange : setInternalOpen

  const selectedAgent = agents.find((a) => a.id === value)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className={cn("w-full justify-between", className)}
        >
          {selectedAgent ? (
            <span className="truncate">{selectedAgent.name}</span>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder="Search agents..." />
          <CommandList>
            <CommandEmpty>No agent found.</CommandEmpty>
            <CommandGroup>
              {agents.map((agent) => (
                <CommandItem
                  key={agent.id}
                  value={agent.id}
                  onSelect={() => {
                    onValueChange?.(agent.id)
                    setIsOpen?.(false)
                  }}
                  className="flex items-center justify-between"
                >
                  <span>{agent.name}</span>
                  <Check
                    className={cn(
                      "ml-2 size-4 shrink-0",
                      value === agent.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { AgentPicker, type Agent }
