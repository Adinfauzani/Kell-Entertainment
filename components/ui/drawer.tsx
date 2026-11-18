"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const DrawerRoot = DrawerPrimitive.Root
const DrawerTriggerPrimitive = DrawerPrimitive.Trigger
const DrawerPortalPrimitive = DrawerPrimitive.Portal
const DrawerClosePrimitive = DrawerPrimitive.Close
const DrawerBackdropPrimitive = DrawerPrimitive.Backdrop
const DrawerViewportPrimitive = DrawerPrimitive.Viewport
const DrawerContentPrimitive = DrawerPrimitive.Content
const DrawerTitlePrimitive = DrawerPrimitive.Title
const DrawerDescriptionPrimitive = DrawerPrimitive.Description

interface DrawerProps extends React.ComponentProps<typeof DrawerRoot> {
  children?: React.ReactNode
  className?: string
}

interface DrawerTriggerProps extends React.ComponentProps<typeof DrawerTriggerPrimitive> {
  className?: string
}

interface DrawerPortalProps extends React.ComponentProps<typeof DrawerPortalPrimitive> {
  className?: string
}

interface DrawerCloseProps extends React.ComponentProps<typeof DrawerClosePrimitive> {
  className?: string
}

interface DrawerBackdropProps extends React.ComponentProps<typeof DrawerBackdropPrimitive> {
  className?: string
}

interface DrawerViewportProps extends React.ComponentProps<typeof DrawerViewportPrimitive> {
  className?: string
}

interface DrawerContentProps extends React.ComponentProps<typeof DrawerContentPrimitive> {
  className?: string
}

interface DrawerTitleProps extends React.ComponentProps<typeof DrawerTitlePrimitive> {
  className?: string
}

interface DrawerDescriptionProps extends React.ComponentProps<typeof DrawerDescriptionPrimitive> {
  className?: string
}

function Drawer({ className, ...props }: DrawerProps) {
  return (
    <DrawerRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
Drawer.displayName = "Drawer"

function DrawerTriggerComponent(props: DrawerTriggerProps) {
  return <DrawerTriggerPrimitive {...props} />
}
DrawerTriggerComponent.displayName = "DrawerTrigger"

function DrawerPortalComponent(props: DrawerPortalProps) {
  return <DrawerPortalPrimitive {...props} />
}
DrawerPortalComponent.displayName = "DrawerPortal"

function DrawerCloseComponent(props: DrawerCloseProps) {
  return <DrawerClosePrimitive {...props} />
}
DrawerCloseComponent.displayName = "DrawerClose"

function DrawerBackdropComponent(props: DrawerBackdropProps) {
  return (
    <DrawerBackdropPrimitive
      className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        props.className
      )}
      {...props}
    />
  )
}
DrawerBackdropComponent.displayName = "DrawerBackdrop"

function DrawerViewportComponent(props: DrawerViewportProps) {
  return (
    <DrawerViewportPrimitive
      className={cn(
        "fixed inset-0 z-50 flex items-end",
        props.className
      )}
      {...props}
    />
  )
}
DrawerViewportComponent.displayName = "DrawerViewport"

function DrawerContentComponent({ className, ...props }: DrawerContentProps) {
  return (
    <DrawerContentPrimitive
      className={cn(
        "w-full sm:w-[260px] rounded-t-xl border border-border bg-background shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2",
        className
      )}
      {...props}
    />
  )
}
DrawerContentComponent.displayName = "DrawerContent"

function DrawerTitleComponent(props: DrawerTitleProps) {
  return (
    <DrawerTitlePrimitive
      {...props}
      className={cn("text-2xl font-bold font-heading tracking-tight", props.className)}
    />
  )
}
DrawerTitleComponent.displayName = "DrawerTitle"

function DrawerDescriptionComponent(props: DrawerDescriptionProps) {
  return (
    <DrawerDescriptionPrimitive
      {...props}
      className={cn("text-sm text-muted-foreground leading-relaxed", props.className)}
    />
  )
}
DrawerDescriptionComponent.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerTriggerComponent as DrawerTrigger,
  DrawerPortalComponent as DrawerPortal,
  DrawerCloseComponent as DrawerClose,
  DrawerBackdropComponent as DrawerBackdrop,
  DrawerViewportComponent as DrawerViewport,
  DrawerContentComponent as DrawerContent,
  DrawerTitleComponent as DrawerTitle,
  DrawerDescriptionComponent as DrawerDescription,
}
