"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "@/lib/utils"

const PopoverRoot = PopoverPrimitive.Root
const PopoverTriggerPrimitive = PopoverPrimitive.Trigger
const PopoverPortalPrimitive = PopoverPrimitive.Portal
const PopoverPopupPrimitive = PopoverPrimitive.Popup

interface HoverCardProps extends React.ComponentProps<typeof PopoverRoot> {
  children?: React.ReactNode
  className?: string
}

interface HoverCardTriggerProps extends React.ComponentProps<typeof PopoverTriggerPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface HoverCardContentProps extends React.ComponentProps<typeof PopoverPopupPrimitive> {
  children?: React.ReactNode
  className?: string
}

function HoverCard({ className, ...props }: HoverCardProps) {
  return (
    <PopoverRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
HoverCard.displayName = "HoverCard"

function HoverCardTriggerComponent({ className, children, ...props }: HoverCardTriggerProps) {
  return (
    <PopoverTriggerPrimitive
      {...props}
      className={cn("inline-flex", className)}
    >
      {children}
    </PopoverTriggerPrimitive>
  )
}
HoverCardTriggerComponent.displayName = "HoverCardTrigger"

function HoverCardContentComponent({ className, children, ...props }: HoverCardContentProps) {
  return (
    <PopoverPortalPrimitive>
      <PopoverPopupPrimitive
        {...props}
        className={cn(
          "z-50 rounded-xl border border-border bg-background p-4 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
      >
        {children}
      </PopoverPopupPrimitive>
    </PopoverPortalPrimitive>
  )
}
HoverCardContentComponent.displayName = "HoverCardContent"

export {
  HoverCard,
  HoverCardTriggerComponent as HoverCardTrigger,
  HoverCardContentComponent as HoverCardContent,
}
