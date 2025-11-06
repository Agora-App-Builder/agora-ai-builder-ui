"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface LiveWaveformProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the waveform is actively animating
   * @default false
   */
  active?: boolean

  /**
   * Width of each bar in pixels
   * @default 2
   */
  barWidth?: number

  /**
   * Gap between bars in pixels
   * @default 1
   */
  barGap?: number

  /**
   * Color of the bars (hex, rgb, or color name)
   * @default "#3b82f6"
   */
  barColor?: string

  /**
   * Height of the waveform container in pixels
   * @default 20
   */
  height?: number

  /**
   * Whether to fade the edges of the waveform
   * @default true
   */
  fadeEdges?: boolean
}

export const LiveWaveform = React.forwardRef<HTMLDivElement, LiveWaveformProps>(
  (
    {
      active = false,
      barWidth = 2,
      barGap = 1,
      barColor = "#3b82f6",
      height = 20,
      fadeEdges = true,
      className,
      ...props
    },
    ref
  ) => {
    // Generate 12 bars for compact waveform (matches eleven labs style)
    const barCount = 12
    const bars = Array.from({ length: barCount }, (_, i) => i)

    const getBarHeight = (index: number): number => {
      if (!active) {
        return 0.2 // Minimal height when inactive
      }

      // Create smooth wave animation using sine wave
      // Each bar has a different phase for cascading effect
      const phase = (index / barCount) * Math.PI * 2
      const time = Date.now() / 1000
      const waveValue = Math.sin(phase + time * 3) // 3 is the speed
      // Map sine wave from [-1, 1] to [0.2, 1] for visual effect
      return 0.2 + ((waveValue + 1) / 2) * 0.8
    }

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-end justify-center", className)}
        style={{
          height: `${height}px`,
          gap: `${barGap}px`,
          position: "relative",
        }}
        {...props}
      >
        <style>{`
          @keyframes smoothWave {
            0% {
              transform: scaleY(0.2);
            }
            25% {
              transform: scaleY(0.8);
            }
            50% {
              transform: scaleY(1);
            }
            75% {
              transform: scaleY(0.4);
            }
            100% {
              transform: scaleY(0.2);
            }
          }

          .live-waveform-bar {
            flex-shrink: 0;
            background-color: ${barColor};
            border-radius: 2px;
            transform-origin: bottom;
            transition: ${active ? "none" : "transform 0.3s ease-out"};
          }

          .live-waveform-bar.active {
            animation: smoothWave 0.8s ease-in-out infinite;
          }

          ${
            fadeEdges
              ? `
            .live-waveform-container::before,
            .live-waveform-container::after {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              width: 20px;
              pointer-events: none;
            }

            .live-waveform-container::before {
              left: 0;
              background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
            }

            .live-waveform-container::after {
              right: 0;
              background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
            }
          `
              : ""
          }
        `}</style>

        {bars.map((i) => (
          <div
            key={i}
            className={cn("live-waveform-bar", { active })}
            style={{
              width: `${barWidth}px`,
              height: `${height * getBarHeight(i)}px`,
              animationDelay: `${(i / barCount) * 0.8}s`,
            }}
          />
        ))}
      </div>
    )
  }
)

LiveWaveform.displayName = "LiveWaveform"
