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
]
