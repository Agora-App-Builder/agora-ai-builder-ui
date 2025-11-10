import { registryItemSchema, type Registry } from "shadcn/schema"
import { z } from "zod"

import { lib } from "@/registry/registry-lib"
import { ui } from "@/registry/registry-ui"

export const registry = {
  name: "agora-ui",
  homepage: "https://github.com/agora/agora-ai-builder-ui",
  items: z.array(registryItemSchema).parse([...ui, ...lib]),
} satisfies Registry
