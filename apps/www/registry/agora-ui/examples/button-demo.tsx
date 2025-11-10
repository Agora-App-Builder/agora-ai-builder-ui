"use client"

import { Mic, Copy, Trash2 } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"

export default function ButtonDemo() {
  return (
    <div className="w-full max-w-4xl space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">Variants</h3>
          <p className="text-muted-foreground text-xs">
            Three style variants for different use cases
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            With Icons
          </h3>
          <p className="text-muted-foreground text-xs">
            Buttons can include icons alongside text
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">
            <Mic className="size-4" />
            Record
          </Button>
          <Button variant="secondary">
            <Copy className="size-4" />
            Copy
          </Button>
          <Button variant="destructive">
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            Disabled State
          </h3>
          <p className="text-muted-foreground text-xs">
            Buttons can be disabled to prevent interaction
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Default Disabled</Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
          <Button variant="destructive" disabled>
            Destructive Disabled
          </Button>
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            With Label
          </h3>
          <p className="text-muted-foreground text-xs">
            Optional label prop below button text
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button label="Click me">Default</Button>
          <Button variant="secondary" label="Submit form">
            <Mic className="size-4" />
            Submit
          </Button>
        </div>
      </div>

      {/* Usage Reference */}
      <div className="bg-accent/5 space-y-4 rounded-lg p-4">
        <h3 className="text-foreground text-sm font-semibold">Usage</h3>
        <pre className="bg-muted text-muted-foreground overflow-x-auto rounded p-3 text-xs">
          {`import { Button } from "@/registry/agora-ui/ui/button"
import { Mic } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Variant - default, secondary, destructive */}
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>

      {/* With Icon */}
      <Button>
        <Mic className="size-4" />
        Record
      </Button>

      {/* With Label */}
      <Button label="Click to submit">Submit</Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </>
  )
}`}
        </pre>
      </div>

      {/* Props Reference */}
      <div className="rounded-lg border p-4">
        <h3 className="mb-3 text-sm font-semibold">Props Reference</h3>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>variant:</strong> "default" | "secondary" | "destructive"
            (default: "default")
          </div>
          <div>
            <strong>size:</strong> "default" (default: "default")
          </div>
          <div>
            <strong>label:</strong> string - optional text displayed below button
            (default: undefined)
          </div>
          <div>
            <strong>labelClassName:</strong> string - custom classes for label
            (default: undefined)
          </div>
          <div>
            <strong>disabled:</strong> boolean - disables the button (default:
            false)
          </div>
          <div>
            <strong>asChild:</strong> boolean - render as a different element
            (requires Slot wrapper) (default: false)
          </div>
          <div>
            <strong>className:</strong> string - additional Tailwind classes for
            overrides
          </div>
        </div>
      </div>
    </div>
  )
}
