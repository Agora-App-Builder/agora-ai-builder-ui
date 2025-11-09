"use client"

import { Button } from "@/registry/agora-ui/ui/button"
import { Card, CardContent, CardTitle } from "@/registry/agora-ui/ui/card"

export default function CardDemo() {
  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Basic Card */}
      <Card></Card>

      {/* Card with Title */}
      <Card>
        <CardTitle>Basic Card</CardTitle>
      </Card>

      {/* Full Example Card */}
      <Card>
        <CardTitle>Basic Card</CardTitle>
        <CardContent>
          <p className="text-sm">
            Cards are flexible containers for grouping content and actions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
