import ButtonDemo from "@/registry/agora-ui/examples/button-demo"
import CardDemo from "@/registry/agora-ui/examples/card-demo"
import ChipDemo from "@/registry/agora-ui/examples/chip-demo"
import AgentPickerDemo from "@/registry/agora-ui/examples/agent-picker-demo"
import MicButtonDemo from "@/registry/agora-ui/examples/mic-button-demo"
import MicSelectorDemo from "@/registry/agora-ui/examples/mic-selector-demo"
import LiveWaveformDemo from "@/registry/agora-ui/examples/live-waveform-demo"
import AvatarDemo from "@/registry/agora-ui/examples/avatar-demo"
import ConversationDemo from "@/registry/agora-ui/examples/conversation-demo"
import { ThemeToggle } from "./theme-toggle"

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mb-8 flex justify-end">
        <ThemeToggle />
      </div>
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
            <h2 className="text-2xl font-bold">Button</h2>
            <p className="text-muted-foreground text-sm">
              A versatile button component with multiple variants, sizes, and border radius options
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
            <p className="text-muted-foreground text-sm">
              A composable card component for grouping content
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <CardDemo />
          </div>
        </section>

        {/* Chip Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Chip</h2>
            <p className="text-muted-foreground text-sm">
              A flexible wrapper component with rounded pill-shaped background for grouping controls
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ChipDemo />
          </div>
        </section>

        {/* Agent Picker Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Agent Picker</h2>
            <p className="text-muted-foreground text-sm">
              A searchable dropdown to select agents from a list (Popover-based)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <AgentPickerDemo />
          </div>
        </section>

        {/* Mic Button Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Mic Button</h2>
            <p className="text-muted-foreground text-sm">
              A button with mic icon and states (idle, inactive, processing, error)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <MicButtonDemo />
          </div>
        </section>

        {/* Mic Selector Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Mic Selector</h2>
            <p className="text-muted-foreground text-sm">
              A button with dropdown menu for quick selection using MicButton (Composite)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <MicSelectorDemo />
          </div>
        </section>

        {/* Live Waveform Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Live Waveform</h2>
            <p className="text-muted-foreground text-sm">
              An animated waveform visualization with states (idle, processing, error)
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <LiveWaveformDemo />
          </div>
        </section>

        {/* Avatar Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Avatar</h2>
            <p className="text-muted-foreground text-sm">
              A flexible avatar component that displays images, icons, or initials
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <AvatarDemo />
          </div>
        </section>

        {/* Conversation Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Conversation</h2>
            <p className="text-muted-foreground text-sm">
              A scrollable conversation component with user and assistant messages and streaming responses
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <ConversationDemo />
          </div>
        </section>

        {/* Component Stats */}
        <section className="space-y-4 border-t pt-8">
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
        </section>
      </div>
    </main>
  )
}
