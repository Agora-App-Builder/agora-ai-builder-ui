import { type Registry } from "shadcn/schema"

export const lib: Registry["items"] = [
  {
    name: "apply-theme",
    type: "registry:lib",
    description:
      "Theme utility for dynamically applying API-provided custom colors to CSS variables at runtime",
    files: [
      {
        path: "lib/theme/apply-theme.ts",
        type: "registry:lib",
      },
    ],
  },
]
