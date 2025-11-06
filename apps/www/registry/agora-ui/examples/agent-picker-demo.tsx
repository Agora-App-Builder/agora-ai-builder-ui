"use client"

import { useState } from "react"

import { AgentPicker, type Agent } from "@/registry/agora-ui/ui/agent-picker"

const agents: Agent[] = [
  {
    id: "lenny-language-tutor",
    name: "Lenny Language Tutor",
    description:
      "Your AI for learning new languages with interactive lessons and real-time feedback.",
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    description: "Expert in data analysis and visualization.",
  },
  {
    id: "code-helper",
    name: "Code Helper",
    description: "Assists with programming and debugging.",
  },
  {
    id: "creative-writer",
    name: "Creative Writer",
    description: "Helps with creative writing and storytelling.",
  },
]

export default function AgentPickerDemo() {
  const [selectedAgent, setSelectedAgent] = useState<string>(
    "lenny-language-tutor"
  )
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-lg">
      <AgentPicker
        agents={agents}
        value={selectedAgent}
        onValueChange={(value) => {
          setSelectedAgent(value)
          setOpen(false)
        }}
        open={open}
        onOpenChange={setOpen}
        placeholder="Select an agent..."
      />
      {selectedAgent && (
        <div className="mt-4 rounded-lg border p-4">
          <p className="text-sm font-medium">Selected Agent:</p>
          <p className="mt-2 text-lg font-semibold">
            {agents.find((a) => a.id === selectedAgent)?.name}
          </p>
          {agents.find((a) => a.id === selectedAgent)?.description && (
            <p className="text-muted-foreground mt-2 text-sm">
              {agents.find((a) => a.id === selectedAgent)?.description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
