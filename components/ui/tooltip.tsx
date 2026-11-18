"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cn } from "@/lib/utils"

const TooltipRoot = TooltipPrimitive.Root
const TooltipTriggerPrimitive = TooltipPrimitive.Trigger
const TooltipPopupPrimitive = TooltipPrimitive.Popup
const TooltipArrowPrimitive = TooltipPrimitive.Arrow

interface TooltipProps extends React.ComponentProps<typeof TooltipRoot> {
  children?: React.ReactNode
  className?: string
}

interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipTriggerPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TooltipContentProps extends React.ComponentProps<typeof TooltipPopupPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TooltipArrowProps extends React.ComponentProps<typeof TooltipArrowPrimitive> {
  children?: React.ReactNode
  className?: string
}

function Tooltip({ className, ...props }: TooltipProps) {
  return (
    <TooltipRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
Tooltip.displayName = "Tooltip"

function TooltipTriggerComponent({ className, children, ...props }: TooltipTriggerProps) {
  return (
    <TooltipTriggerPrimitive
      {...props}
      className={cn(className)}
    >
      {children}
    </TooltipTriggerPrimitive>
  )
}
TooltipTriggerComponent.displayName = "TooltipTrigger"

function TooltipContentComponent({ className, children, ...props }: TooltipContentProps) {
  return (
    <TooltipPopupPrimitive
      {...props}
      className={cn(
        "relative z-50 rounded-sm border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
    >
      {children}
    </TooltipPopupPrimitive>
  )
}
TooltipContentComponent.displayName = "TooltipContent"

function TooltipArrowComponent(props: TooltipArrowProps) {
  return <TooltipArrowPrimitive {...props} />
}
TooltipArrowComponent.displayName = "TooltipArrow"

export {
  Tooltip,
  TooltipTriggerComponent as TooltipTrigger,
  TooltipContentComponent as TooltipContent,
  TooltipArrowComponent as TooltipArrow,
}
