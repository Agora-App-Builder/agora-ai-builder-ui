"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/agora-ui/ui/button"

export interface ConversationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Height of the conversation container
   * @default "h-[400px]"
   */
  height?: string
}

const ConversationContext = React.createContext<{
  scrollRef: React.RefObject<HTMLDivElement>
} | null>(null)

const useConversation = () => {
  const context = React.useContext(ConversationContext)
  if (!context) {
    throw new Error("useConversation must be used within Conversation")
  }
  return context
}

export const Conversation = React.forwardRef<HTMLDivElement, ConversationProps>(
  ({ className, height = "h-[400px]", ...props }, ref) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [showScrollButton, setShowScrollButton] = React.useState(false)

    const scrollToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }

    React.useEffect(() => {
      const handleScroll = () => {
        if (scrollRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
          const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
          setShowScrollButton(!isNearBottom)
        }
      }

      const observer = new MutationObserver(() => {
        setTimeout(scrollToBottom, 0)
      })

      if (scrollRef.current) {
        observer.observe(scrollRef.current, { childList: true, subtree: true })
        scrollRef.current.addEventListener("scroll", handleScroll)
      }

      return () => {
        observer.disconnect()
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", handleScroll)
        }
      }
    }, [])

    return (
      <ConversationContext.Provider value={{ scrollRef }}>
        <div
          ref={ref}
          className={cn(
            "relative flex flex-col overflow-hidden",
            height,
            className
          )}
          {...props}
        >
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            {props.children}
          </div>
          {showScrollButton && (
            <ConversationScrollButton onClick={scrollToBottom} />
          )}
        </div>
      </ConversationContext.Provider>
    )
  }
)

Conversation.displayName = "Conversation"

export interface ConversationContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Padding class
   * @default "p-4"
   */
  padding?: string
}

export const ConversationContent = React.forwardRef<
  HTMLDivElement,
  ConversationContentProps
>(({ className, padding = "p-4", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-4", padding, className)}
    {...props}
  />
))

ConversationContent.displayName = "ConversationContent"

export interface ConversationEmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon to display
   */
  icon?: React.ReactNode

  /**
   * Title text
   * @default "No messages yet"
   */
  title?: React.ReactNode

  /**
   * Description text
   * @default "Start a conversation to see messages here"
   */
  description?: React.ReactNode
}

export const ConversationEmptyState = React.forwardRef<
  HTMLDivElement,
  ConversationEmptyStateProps
>(
  (
    {
      className,
      icon,
      title = "No messages yet",
      description = "Start a conversation to see messages here",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full flex-col items-center justify-center gap-3 p-8 text-center",
        className
      )}
      {...props}
    >
      {icon && <div className="flex justify-center">{icon}</div>}
      <div className="space-y-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
)

ConversationEmptyState.displayName = "ConversationEmptyState"

export interface ConversationScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ConversationScrollButton = React.forwardRef<
  HTMLButtonElement,
  ConversationScrollButtonProps
>(({ className, ...props }, ref) => {
  const { scrollRef } = useConversation()

  return (
    <Button
      ref={ref}
      size="icon"
      rounded
      className={cn(
        "absolute bottom-4 left-1/2 -translate-x-1/2 shadow-md",
        className
      )}
      onClick={() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      }}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </Button>
  )
})

ConversationScrollButton.displayName = "ConversationScrollButton"
