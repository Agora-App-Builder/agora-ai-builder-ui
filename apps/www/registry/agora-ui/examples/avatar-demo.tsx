"use client"

import { MessageCircle, Mic, User } from "lucide-react"

import { Avatar } from "@/registry/agora-ui/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Sizes */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Sizes</p>
        <div className="flex items-center gap-4">
          <Avatar size="sm" initials="JD" />
          <Avatar size="md" initials="JD" />
          <Avatar size="lg" initials="JD" />
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-3">
        <p className="text-sm font-medium">With Icons</p>
        <div className="flex items-center gap-4">
          <Avatar
            size="md"
            icon={<Mic className="h-5 w-5" />}
            bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <Avatar
            size="md"
            icon={<MessageCircle className="h-5 w-5" />}
            bgColor="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <Avatar
            size="md"
            icon={<User className="h-5 w-5" />}
            bgColor="bg-gradient-to-br from-green-500 to-green-600"
          />
        </div>
      </div>

      {/* With Initials */}
      <div className="space-y-3">
        <p className="text-sm font-medium">With Initials</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar
              initials="JD"
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <span className="text-muted-foreground text-xs">JD</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              initials="AB"
              bgColor="bg-gradient-to-br from-pink-500 to-pink-600"
            />
            <span className="text-muted-foreground text-xs">AB</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              initials="XY"
              bgColor="bg-gradient-to-br from-orange-500 to-orange-600"
            />
            <span className="text-muted-foreground text-xs">XY</span>
          </div>
        </div>
      </div>

      {/* Auto-generate from Name */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Auto-generated from Name</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar
              name="John Doe"
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <span className="text-muted-foreground text-xs">John Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              name="Alice Brown"
              bgColor="bg-gradient-to-br from-pink-500 to-pink-600"
            />
            <span className="text-muted-foreground text-xs">Alice Brown</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              name="Xavier Young"
              bgColor="bg-gradient-to-br from-orange-500 to-orange-600"
            />
            <span className="text-muted-foreground text-xs">Xavier Young</span>
          </div>
        </div>
      </div>

      {/* With Image */}
      <div className="space-y-3">
        <p className="text-sm font-medium">With Image</p>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            alt="User Avatar"
            size="md"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
            alt="User Avatar"
            size="md"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop"
            alt="User Avatar"
            size="md"
          />
        </div>
      </div>

      {/* Fallback Behavior (Priority) */}
      <div className="space-y-3">
        <p className="text-sm font-medium">
          Priority Order (Image {">"} Icon {">"} Initials)
        </p>
        <div className="space-y-2">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
              icon={<Mic className="h-5 w-5" />}
              initials="JD"
            />
            <span>Image wins (shows image)</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Avatar
              icon={<Mic className="h-5 w-5" />}
              initials="JD"
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <span>Icon wins (shows icon)</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Avatar
              initials="JD"
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <span>Shows initials (fallback)</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">About Avatar</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <p>
            A flexible avatar component that can display images, icons, or
            initials. Priority order: Image → Icon → Initials → Default.
          </p>
          <p className="mt-2">
            <strong>Props:</strong> src, icon, initials, name, size (sm/md/lg),
            bgColor
          </p>
          <p className="mt-2">
            <strong>Sizes:</strong> sm (32px), md (40px), lg (48px)
          </p>
          <p className="mt-2">
            <strong>Auto-initials:</strong> Pass name prop to auto-generate
            initials from first letters
          </p>
        </div>
      </div>
    </div>
  )
}
