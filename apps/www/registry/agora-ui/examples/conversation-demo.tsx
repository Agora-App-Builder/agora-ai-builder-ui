"use client"

import { useEffect, useState } from "react"
import { MessageCircle, User } from "lucide-react"

import { Avatar } from "@/registry/agora-ui/ui/avatar"
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/registry/agora-ui/ui/conversation"
import { Message, MessageContent } from "@/registry/agora-ui/ui/message"
import { Response } from "@/registry/agora-ui/ui/response"

const allMessages = [
  {
    id: "1",
    role: "user" as const,
    text: "Hey, I need help with my order",
  },
  {
    id: "2",
    role: "assistant" as const,
    tokens: [
      "Hi!",
      " I'd",
      " be",
      " happy",
      " to",
      " help",
      " you",
      " with",
      " your",
      " order.",
      " Could",
      " you",
      " please",
      " provide",
      " your",
      " order",
      " number?",
    ],
    text: "Hi! I'd be happy to help you with your order. Could you please provide your order number?",
  },
  {
    id: "3",
    role: "user" as const,
    text: "It's ORDER-12345",
  },
  {
    id: "4",
    role: "assistant" as const,
    tokens: [
      "Thank",
      " you!",
      " Let",
      " me",
      " pull",
      " up",
      " your",
      " order",
      " details.",
      " I",
      " can",
      " see",
      " that",
      " your",
      " order",
      " was",
      " placed",
      " on",
      " March",
      " 15th",
      " and",
      " is",
      " currently",
      " being",
      " processed.",
      " It",
      " should",
      " ship",
      " within",
      " the",
      " next",
      " 1-2",
      " business",
      " days.",
      " Is",
      " there",
      " anything",
      " specific",
      " you'd",
      " like",
      " to",
      " know",
      " about",
      " this",
      " order?",
    ],
    text: "Thank you! Let me pull up your order details. I can see that your order was placed on March 15th and is currently being processed. It should ship within the next 1-2 business days. Is there anything specific you'd like to know about this order?",
  },
  {
    id: "5",
    role: "user" as const,
    text: "Can I change the shipping address?",
  },
  {
    id: "6",
    role: "assistant" as const,
    tokens: [
      "Absolutely!",
      " Since",
      " the",
      " order",
      " hasn't",
      " shipped",
      " yet,",
      " I",
      " can",
      " update",
      " the",
      " shipping",
      " address",
      " for",
      " you.",
      " What",
      " would",
      " you",
      " like",
      " the",
      " new",
      " address",
      " to",
      " be?",
    ],
    text: "Absolutely! Since the order hasn't shipped yet, I can update the shipping address for you. What would you like the new address to be?",
  },
]

export default function ConversationDemo() {
  const [messages, setMessages] = useState<typeof allMessages>([])
  const [streamingMessageIndex, setStreamingMessageIndex] = useState<
    number | null
  >(null)
  const [streamingContent, setStreamingContent] = useState("")

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []
    let currentMessageIndex = 0

    const addNextMessage = () => {
      if (currentMessageIndex >= allMessages.length) return

      const message = allMessages[currentMessageIndex]

      if (
        message.role === "assistant" &&
        "tokens" in message &&
        message.tokens
      ) {
        setStreamingMessageIndex(currentMessageIndex)
        setStreamingContent("")

        let currentContent = ""
        let tokenIndex = 0

        const streamInterval = setInterval(() => {
          if (tokenIndex < message.tokens.length) {
            currentContent += message.tokens[tokenIndex]
            setStreamingContent(currentContent)
            tokenIndex++
          } else {
            clearInterval(streamInterval)
            setMessages((prev) => [...prev, message])
            setStreamingMessageIndex(null)
            setStreamingContent("")
            currentMessageIndex++

            timeouts.push(setTimeout(addNextMessage, 500))
          }
        }, 100)

        intervals.push(streamInterval)
      } else {
        setMessages((prev) => [...prev, message])
        currentMessageIndex++

        timeouts.push(setTimeout(addNextMessage, 800))
      }
    }

    timeouts.push(setTimeout(addNextMessage, 1000))

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  return (
    <div className="w-full space-y-4">
      <Conversation className="rounded-lg border">
        <ConversationContent>
          {messages.length === 0 && streamingMessageIndex === null ? (
            <ConversationEmptyState
              title="Start a conversation"
              description="This is a simulated conversation with streaming responses"
            />
          ) : (
            <>
              {messages.map((message) => (
                <Message
                  from={message.role}
                  key={message.id}
                  avatar={
                    message.role === "assistant" ? (
                      <Avatar
                        size="md"
                        icon={<MessageCircle className="h-5 w-5" />}
                        bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
                      />
                    ) : (
                      <Avatar
                        size="md"
                        icon={<User className="h-5 w-5" />}
                        bgColor="bg-gradient-to-br from-green-500 to-green-600"
                      />
                    )
                  }
                >
                  <MessageContent>
                    <Response>{message.text}</Response>
                  </MessageContent>
                </Message>
              ))}
              {streamingMessageIndex !== null && (
                <Message
                  from={allMessages[streamingMessageIndex].role}
                  key={`streaming-${streamingMessageIndex}`}
                  avatar={
                    allMessages[streamingMessageIndex].role === "assistant" ? (
                      <Avatar
                        size="md"
                        icon={<MessageCircle className="h-5 w-5" />}
                        bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
                      />
                    ) : (
                      <Avatar
                        size="md"
                        icon={<User className="h-5 w-5" />}
                        bgColor="bg-gradient-to-br from-green-500 to-green-600"
                      />
                    )
                  }
                >
                  <MessageContent>
                    <Response>{streamingContent || "\u200B"}</Response>
                  </MessageContent>
                </Message>
              )}
            </>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {/* Info */}
      <div className="rounded-lg border p-4">
        <p className="mb-2 text-sm font-medium">About Conversation</p>
        <div className="text-muted-foreground space-y-1 text-xs">
          <p>
            A scrollable conversation component with auto-scroll to bottom.
            Shows user and assistant messages with avatars and token-based
            streaming for realistic conversation simulation.
          </p>
          <p className="mt-2">
            <strong>Features:</strong> Auto-scroll, streaming responses, avatar
            integration, empty state, scroll-to-bottom button
          </p>
          <p className="mt-2">
            <strong>Avatars:</strong> Assistant messages display MessageCircle
            icon in blue, user messages display User icon in green
          </p>
        </div>
      </div>
    </div>
  )
}
