"use client"

import { useState } from "react"

import {
  applyCustomTheme,
  type RemoteThemeConfig,
} from "@/lib/theme/apply-theme"
import { Button } from "@/registry/agora-ui/ui/button"

const themePresets: Record<string, RemoteThemeConfig> = {
  blue: {
    PRIMARY_ACTION_BRAND_COLOR: "#099dfd",
  },
  pink: {
    PRIMARY_ACTION_BRAND_COLOR: "#E62079",
  },
  green: {
    PRIMARY_ACTION_BRAND_COLOR: "#36b37e",
  },
}

export default function ThemeDemo() {
  const [selectedTheme, setSelectedTheme] = useState<string>("blue")

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName)
    const config = themePresets[themeName]
    applyCustomTheme(config)
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground mb-3 text-sm">
          Select a theme to dynamically update the primary brand color:
        </p>
        <div className="flex gap-2">
          {Object.keys(themePresets).map((themeName) => (
            <button
              key={themeName}
              onClick={() => handleThemeChange(themeName)}
              className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-all ${
                selectedTheme === themeName
                  ? "bg-primary text-primary-foreground ring-primary ring-2 ring-offset-2"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {themeName}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Component Preview</h3>
        <p className="text-muted-foreground text-sm">
          These components dynamically use the primary brand color. Change the
          theme above to see them update in real-time.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-3 text-lg font-semibold">Current Theme Config</h3>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          {JSON.stringify(themePresets[selectedTheme], null, 2)}
        </pre>
      </div>

      <div className="text-muted-foreground bg-muted rounded p-3 text-xs">
        <p className="mb-1 font-medium">How it works:</p>
        <p>
          The theme config is applied using{" "}
          <code className="bg-background rounded px-1 py-0.5">
            applyCustomTheme()
          </code>
          , which sets CSS variables on the document root. All components
          automatically use these variables for styling.
        </p>
      </div>
    </div>
  )
}
