"use client"

import { Mic, X } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"

export default function ButtonDemo() {
  return (
    <div className="w-full max-w-4xl space-y-8">
      {/* Rounded Prop */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Rounded Prop (boolean)</h3>
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              Icon Only - Circular (rounded=true)
            </p>
            <div className="flex items-center gap-3">
              <Button size="icon" rounded variant="default">
                <Mic className="h-4 w-4" />
              </Button>
              <Button size="icon" rounded variant="destructive">
                <X className="h-4 w-4" />
              </Button>
              <Button size="icon" rounded variant="outline">
                <Mic className="h-4 w-4" />
              </Button>
              <Button size="icon" rounded variant="secondary">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              With Text - Pill Shape (rounded=true)
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button rounded variant="default">
                <Mic className="h-4 w-4" />
                Recording
              </Button>
              <Button rounded variant="outline">
                <Mic className="h-4 w-4" />
                Listen
              </Button>
              <Button rounded variant="secondary">
                Submit
              </Button>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              Default Rounded (rounded=false)
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">
                <Mic className="h-4 w-4" />
                Default
              </Button>
              <Button variant="outline">
                <Mic className="h-4 w-4" />
                Outline
              </Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">Sm</Button>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Default Disabled</Button>
          <Button variant="destructive" disabled>
            Destructive Disabled
          </Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>

      {/* Combinations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Combinations</h3>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default" rounded size="sm">
              Primary Pill
            </Button>
            <Button variant="destructive" size="default">
              Destructive Default
            </Button>
            <Button variant="outline" rounded size="lg">
              Outline Rounded
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" rounded>
              Secondary Rounded
            </Button>
            <Button variant="ghost">Ghost Default</Button>
            <Button variant="link" rounded>
              Link Rounded
            </Button>
          </div>
        </div>
      </div>

      {/* Props Reference */}
      <div className="rounded-lg border p-4">
        <h3 className="mb-3 text-sm font-semibold">Props Reference</h3>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>variant:</strong> default | secondary | destructive |
            outline | ghost | link (default: default)
          </div>
          <div>
            <strong>size:</strong> sm | default | lg | icon (default: default)
          </div>
          <div>
            <strong>rounded:</strong> boolean - true for fully rounded
            (pill/circle), false for default rounded corners (default: false)
          </div>
          <div>
            <strong>disabled:</strong> boolean - disables the button
          </div>
          <div>
            <strong>asChild:</strong> boolean - render as a different element
            (requires Slot wrapper)
          </div>
          <div>
            <strong>className:</strong> string - additional Tailwind classes
          </div>
        </div>
      </div>
    </div>
  )
}
