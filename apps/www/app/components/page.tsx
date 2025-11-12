import AgentVisualizerDemo from "@/registry/agora-ui/examples/agent-visualizer-demo"
import AvatarDemo from "@/registry/agora-ui/examples/avatar-demo"
import ButtonDemo from "@/registry/agora-ui/examples/button-demo"
import CardDemo from "@/registry/agora-ui/examples/card-demo"
import ChipDemo from "@/registry/agora-ui/examples/chip-demo"
import ConversationDemo from "@/registry/agora-ui/examples/conversation-demo"
import CustomIconsDemo from "@/registry/agora-ui/examples/custom-icons-demo"
import LiveWaveformDemo from "@/registry/agora-ui/examples/live-waveform-demo"
import MicButtonDemo from "@/registry/agora-ui/examples/mic-button-demo"
import MicSelectorDemo from "@/registry/agora-ui/examples/mic-selector-demo"
import ThemeDemoComponent from "@/registry/agora-ui/examples/theme-demo"

import { IconButtonDemo } from "../../registry/agora-ui/examples/icon-button-demo"
import ValuePickerDemo from "../../registry/agora-ui/examples/value-picker-demo"
import { ThemeToggle } from "./theme-toggle"

export default function ComponentsPage() {
  return (
    <main className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Agora UI Components
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Showcase of all available components in the agora-ui library
          </p>
        </div>

        {/* Button Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Icon Button</h2>
          </div>
          <div className="rounded-lg border p-6">
            <IconButtonDemo />
          </div>
        </section>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Button</h2>
            <p className="text-muted-foreground text-sm">
              A versatile button component with multiple variants, sizes, and
              border radius options
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ButtonDemo />
          </div>
        </section>

        {/* Card Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Card</h2>
          </div>
          <div className="rounded-lg border p-6">
            <CardDemo />
          </div>
        </section>

        {/* Theme Demo */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Dynamic Theme</h2>
            <p className="text-muted-foreground text-sm">
              Test the theme system by switching between different primary brand
              colors. This demonstrates how consuming apps can apply custom
              colors from their API at runtime.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ThemeDemoComponent />
          </div>
        </section> */}

        {/* Custom Icons */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Custom Icons</h2>
            <p className="text-muted-foreground text-sm">
              Learn how to use custom SVG icons in your components with Tailwind
              CSS for sizing and colors
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <CustomIconsDemo />
          </div>
        </section> */}

        {/* Chip Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Chip</h2>
            <p className="text-muted-foreground text-sm">
              A flexible wrapper component with rounded pill-shaped background
              for grouping controls
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ChipDemo />
          </div>
        </section>

        {/* Value Picker Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Value Picker</h2>
            <p className="text-muted-foreground text-sm">
              A generic dropdown to select a value from a list
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ValuePickerDemo />
          </div>
        </section>

        {/* Mic Button Component */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Mic Button</h2>
            <p className="text-muted-foreground text-sm">
              A button with mic icon and states (idle, inactive, processing, error)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <MicButtonDemo />
          </div>
        </section> */}

        {/* Mic Selector Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Mic Selector</h2>
            <p className="text-muted-foreground text-sm">
              A microphone selector component with automatic device detection,
              mute toggle, and waveform preview using Web Audio API
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <MicSelectorDemo />
          </div>
        </section>

        {/* Live Waveform Component */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Live Waveform</h2>
            <p className="text-muted-foreground text-sm">
              An animated waveform visualization with states (idle, processing, error)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <LiveWaveformDemo />
          </div>
        </section> */}

        {/* Avatar Component */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Avatar</h2>
            <p className="text-muted-foreground text-sm">
              A flexible avatar component that displays images, icons, or initials
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <AvatarDemo />
          </div>
        </section> */}

        {/* Agent Visualizer Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Agent Visualizer</h2>
            <p className="text-muted-foreground text-sm">
              An animated agent visualizer component that displays Lottie
              animations for different agent states
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <AgentVisualizerDemo />
          </div>
        </section>

        {/* Conversation Component */}
        {/* <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Conversation</h2>
            <p className="text-muted-foreground text-sm">
              A scrollable conversation component with user and assistant messages and streaming responses
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ConversationDemo />
          </div>
        </section> */}

        {/* Component Stats */}
        {/* <section className="space-y-4 border-t pt-8">
          <h2 className="text-2xl font-bold">Component Stats</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-card p-4">
              <p className="text-muted-foreground text-sm">Atomic</p>
              <p className="text-2xl font-bold">11</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-muted-foreground text-sm">Composite</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-muted-foreground text-sm">Examples</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-muted-foreground text-sm">Total</p>
              <p className="text-2xl font-bold">17</p>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  )
}
