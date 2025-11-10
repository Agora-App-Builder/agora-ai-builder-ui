"use client"

import { Copy, Heart, Search, Settings, Share2, Trash2 } from "lucide-react"

import { IconButton } from "@/registry/agora-ui/ui/icon-button"

export function IconButtonDemo() {
  return (
    <div className="space-y-8">
      {/* Filled Style */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            Filled Variant
          </h3>
          <p className="text-muted-foreground text-xs">
            Primary background with foreground text
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Round</p>
            <div className="flex gap-3">
              <IconButton shape="round" variant="filled">
                <Copy />
              </IconButton>
              <IconButton shape="round" variant="filled">
                <Settings className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="filled">
                <Trash2 className="size-5" />
              </IconButton>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Square</p>
            <div className="flex gap-3">
              <IconButton shape="square" variant="filled">
                <Copy className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="filled">
                <Settings className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="filled">
                <Trash2 className="size-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Outlined Style */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            Outlined Variant
          </h3>
          <p className="text-muted-foreground text-xs">
            Border with primary color, subtle hover background
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Round</p>
            <div className="flex gap-3">
              <IconButton shape="round" variant="outlined">
                <Search className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="outlined">
                <Heart className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="outlined">
                <Share2 className="size-5" />
              </IconButton>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Square</p>
            <div className="flex gap-3">
              <IconButton shape="square" variant="outlined">
                <Search className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="outlined">
                <Heart className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="outlined">
                <Share2 className="size-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Style */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            Standard Variant
          </h3>
          <p className="text-muted-foreground text-xs">
            Minimal style with accent hover background
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Round</p>
            <div className="flex gap-3">
              <IconButton shape="round" variant="standard">
                <Copy className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="standard">
                <Settings className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="standard">
                <Trash2 className="size-5" />
              </IconButton>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Square</p>
            <div className="flex gap-3">
              <IconButton shape="square" variant="standard">
                <Copy className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="standard">
                <Settings className="size-5" />
              </IconButton>
              <IconButton shape="square" variant="standard">
                <Trash2 className="size-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-foreground text-sm font-semibold">
            Disabled State
          </h3>
          <p className="text-muted-foreground text-xs">
            All styles with disabled attribute
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Filled</p>
            <IconButton shape="round" variant="filled" disabled>
              <Copy className="size-5" />
            </IconButton>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">
              Outlined
            </p>
            <IconButton shape="round" variant="outlined" disabled>
              <Copy className="size-5" />
            </IconButton>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">
              Standard
            </p>
            <IconButton shape="round" variant="standard" disabled>
              <Copy className="size-5" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="bg-accent/5 space-y-4 rounded-lg p-4">
        <h3 className="text-foreground text-sm font-semibold">Usage</h3>
        <pre className="bg-muted text-muted-foreground overflow-x-auto rounded p-3 text-xs">
          {`import { IconButton } from "@/registry/agora-ui/ui/icon-button"
import { Copy } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Filled variant, round shape (default) */}
      <IconButton>
        <Copy className="size-5" />
      </IconButton>

      {/* Outlined variant, square shape */}
      <IconButton shape="square" variant="outlined">
        <Copy className="size-5" />
      </IconButton>

      {/* Standard variant, square shape */}
      <IconButton shape="square" variant="standard">
        <Copy className="size-5" />
      </IconButton>

      {/* Disabled */}
      <IconButton disabled>
        <Copy className="size-5" />
      </IconButton>
    </>
  )
}`}
        </pre>
      </div>
    </div>
  )
}
