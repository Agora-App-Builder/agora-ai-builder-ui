"use client"

import { Button } from "@/registry/agora-ui/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/agora-ui/ui/card"

export default function CardDemo() {
  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>This is a simple card component</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Cards are flexible containers for grouping content and actions.
          </p>
        </CardContent>
      </Card>

      {/* Card with Action */}
      <Card>
        <CardHeader>
          <CardTitle>Card with Action</CardTitle>
          <CardDescription>
            Click the button to perform an action
          </CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              Action
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The action button is positioned in the top right corner.
          </p>
        </CardContent>
      </Card>

      {/* Card with Footer */}
      <Card>
        <CardHeader>
          <CardTitle>Card with Footer</CardTitle>
          <CardDescription>This card has a footer section</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Cards can have headers, content areas, and footers for different
            layouts.
          </p>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" className="ml-auto">
            Learn More
          </Button>
        </CardFooter>
      </Card>

      {/* Full Example Card */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Card Example</CardTitle>
          <CardDescription>Shows all card components together</CardDescription>
          <CardAction>
            <Button size="sm" variant="ghost">
              ⋯
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            This card demonstrates all available components and features.
          </p>
          <p className="text-muted-foreground text-sm">
            You can customize each part independently with className props.
          </p>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
