"use client"

import { PhoneReceiver } from "@/registry/agora-ui/icons"
import { Button } from "@/registry/agora-ui/ui/button"

export default function CustomIconsDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Using Custom Icons</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Custom SVG icons can be used in your components with Tailwind classes
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h4 className="mb-4 font-semibold">Icon Sizing</h4>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <PhoneReceiver className="text-primary mx-auto size-4" />
            <p className="text-muted-foreground mt-2 text-xs">size-4</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-primary mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">size-6</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-primary mx-auto size-8" />
            <p className="text-muted-foreground mt-2 text-xs">size-8</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-primary mx-auto size-10" />
            <p className="text-muted-foreground mt-2 text-xs">size-10</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h4 className="mb-4 font-semibold">Icon Colors</h4>
        <div className="flex flex-wrap gap-4">
          <div className="text-center">
            <PhoneReceiver className="text-primary mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">Primary</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-destructive mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">Destructive</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-semantic-success mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">Success</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-semantic-warning mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">Warning</p>
          </div>
          <div className="text-center">
            <PhoneReceiver className="text-muted-foreground mx-auto size-6" />
            <p className="text-muted-foreground mt-2 text-xs">Muted</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h4 className="mb-4 font-semibold">In Buttons</h4>
        <div className="flex flex-wrap gap-3">
          <Button>
            <PhoneReceiver className="size-4" />
            Call Now
          </Button>
          <Button variant="secondary">
            <PhoneReceiver className="size-4" />
            Contact
          </Button>
          <Button size="icon" rounded>
            <PhoneReceiver className="size-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-3 font-semibold">How to Use</h3>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          {`// Import the custom icon
import { PhoneReceiver } from '@/registry/agora-ui/icons'

export function MyComponent() {
  return (
    <>
      {/* With size classes */}
      <PhoneReceiver className="size-6" />

      {/* With color */}
      <PhoneReceiver className="size-6 text-primary" />

      {/* In a button */}
      <button>
        <PhoneReceiver className="size-4" />
        Call
      </button>

      {/* Responsive sizing */}
      <PhoneReceiver className="size-4 sm:size-5 md:size-6" />
    </>
  )
}`}
        </pre>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
        <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
          📝 Adding More Custom Icons
        </h4>
        <ol className="list-inside list-decimal space-y-1 text-sm text-blue-800 dark:text-blue-200">
          <li>
            Add SVG file to <code>public/icons/my-icon.svg</code>
          </li>
          <li>
            Create React component in{" "}
            <code>registry/agora-ui/icons/MyIcon.tsx</code>
          </li>
          <li>
            Export from <code>registry/agora-ui/icons/index.ts</code>
          </li>
          <li>Use with Tailwind classes like any other icon</li>
        </ol>
      </div>
    </div>
  )
}
