import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "hello-world",
    description: "A simple Hello World component",
    type: "registry:ui",
    files: [
      {
        path: "ui/hello-world.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    description:
      "A button component built with Radix UI and styled with Tailwind CSS",
    type: "registry:ui",
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover",
    description: "A popover component built with Radix UI",
    type: "registry:ui",
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    description: "A combobox component for searchable dropdowns",
    type: "registry:ui",
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "agent-picker",
    description: "A dropdown component to select agents from a list",
    type: "registry:ui",
    registryDependencies: ["button", "popover", "command"],
    files: [
      {
        path: "ui/agent-picker.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/agent-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card",
    description: "A composable card component for grouping content",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chip",
    description:
      "A flexible wrapper component with rounded pill-shaped background for grouping controls",
    type: "registry:ui",
    registryDependencies: ["button", "mic-selector"],
    files: [
      {
        path: "ui/chip.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/chip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu",
    description: "A dropdown menu component built with Radix UI",
    type: "registry:ui",
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "mic-button",
    description:
      "A button component with mic icon and states (idle, inactive, processing, error)",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/mic-button.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/mic-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "mic-selector",
    description:
      "A button with dropdown menu for selecting items, with mic icon and states",
    type: "registry:ui",
    registryDependencies: ["button", "dropdown-menu", "mic-button"],
    files: [
      {
        path: "ui/mic-selector.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/mic-selector-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "live-waveform",
    description:
      "An animated waveform visualization component with states (idle, processing, error)",
    type: "registry:ui",
    files: [
      {
        path: "ui/live-waveform.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/live-waveform-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "conversation",
    description:
      "A scrollable conversation component for displaying user and assistant messages",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/conversation.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "message",
    description: "Message component for displaying individual chat messages",
    type: "registry:ui",
    files: [
      {
        path: "ui/message.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "response",
    description: "Response component for displaying message content text",
    type: "registry:ui",
    files: [
      {
        path: "ui/response.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    description:
      "A flexible avatar component that displays images, icons, or initials",
    type: "registry:ui",
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
      {
        path: "examples/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "conversation-demo",
    description:
      "A complete conversation component demo with streaming messages",
    type: "registry:ui",
    registryDependencies: ["conversation", "message", "response", "avatar"],
    files: [
      {
        path: "examples/conversation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
