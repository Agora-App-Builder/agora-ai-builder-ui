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

      <div className="rounded-lg border p-6">
        <h3 className="mb-3 text-lg font-semibold">Implementation Guide</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          In your consuming application, fetch the theme config from your API
          and apply it on app initialization:
        </p>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          {`// app.tsx or main.tsx
import { useEffect } from 'react'
import {
  applyCustomTheme,
  type RemoteThemeConfig
} from 'agora-ui/lib/theme/apply-theme'

export default function App() {
  useEffect(() => {
    const initializeTheme = async () => {
      try {
        // Fetch your API config
        const token = localStorage.getItem('authToken')
        const response = await fetch(
          'https://your-api.com/v1/project/config',
          {
            headers: {
              authorization: \`Bearer \${token}\`,
              'content-type': 'application/json',
            },
          }
        )

        const config: RemoteThemeConfig = await response.json()

        // Apply the theme colors to CSS variables
        applyCustomTheme(config)
      } catch (error) {
        console.error('Failed to load theme config:', error)
      }
    }

    initializeTheme()
  }, [])

  return <YourAppComponents />
}`}
        </pre>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-3 text-lg font-semibold">API Config Format</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Your API should return a config object with optional color fields:
        </p>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          {`{
  "PRIMARY_COLOR": "#099dfd",
  "PRIMARY_ACTION_BRAND_COLOR": "#E62079",
  "FONT_COLOR": "#FFFFFF",
  "PRIMARY_FONT_COLOR": "#363636",
  "SECONDARY_FONT_COLOR": "#FFFFFF",
  "BACKGROUND_COLOR": "#111111",
  "ICON_BG_COLOR": "#242529",
  "TOOLBAR_COLOR": "#111111",
  "INPUT_FIELD_BACKGROUND_COLOR": "#181818",
  "INPUT_FIELD_BORDER_COLOR": "#262626",
  "CARD_LAYER_1_COLOR": "#1d1d1d",
  "CARD_LAYER_2_COLOR": "#262626",
  "CARD_LAYER_3_COLOR": "#2d2d2d",
  "CARD_LAYER_4_COLOR": "#333333",
  "CARD_LAYER_5_COLOR": "#808080",
  "VIDEO_AUDIO_TILE_COLOR": "#222222",
  "VIDEO_AUDIO_TILE_OVERLAY_COLOR": "#000004",
  "VIDEO_AUDIO_TILE_TEXT_COLOR": "#ffffff",
  "VIDEO_AUDIO_TILE_AVATAR_COLOR": "#bdd0db",
  "SEMANTIC_ERROR": "#ff414d",
  "SEMANTIC_SUCCESS": "#36b37e",
  "SEMANTIC_WARNING": "#ffab00",
  "SEMANTIC_NEUTRAL": "#808080"
}`}
        </pre>
      </div>

      <div className="space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
          💡 Key Points
        </h3>
        <ul className="list-inside list-disc space-y-1 text-sm text-blue-800 dark:text-blue-200">
          <li>All color fields in the API config are optional</li>
          <li>Only provide colors to override; others use defaults</li>
          <li>Colors must be valid hex format (e.g., "#099dfd")</li>
          <li>Apply theme early in your app lifecycle</li>
          <li>Use separate API responses for light and dark modes</li>
          <li>Components automatically update—no manual re-renders needed</li>
        </ul>
      </div>
    </div>
  )
}
