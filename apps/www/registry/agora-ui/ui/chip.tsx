"use client"

import * as React from "react"

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-black/40 px-4 py-3 backdrop-blur-sm"
        {...props}
      >
        {children}
      </div>
    )
  }
)

Chip.displayName = "Chip"
