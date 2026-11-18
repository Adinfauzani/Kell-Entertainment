"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/themes"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const DialogRoot = DialogPrimitive.Dialog.Root
const DialogTriggerPrimitive = DialogPrimitive.Dialog.Trigger
const DialogClosePrimitive = DialogPrimitive.Dialog.Close
const DialogContentPrimitive = DialogPrimitive.Dialog.Content
const DialogTitlePrimitive = DialogPrimitive.Dialog.Title
const DialogDescriptionPrimitive = DialogPrimitive.Dialog.Description

interface DrawerProps extends React.ComponentProps<typeof DialogRoot> {
  children?: React.ReactNode
  className?: string
}

function Drawer({ className, ...props }: DrawerProps) {
  return (
    <DialogRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
Drawer.displayName = "Drawer"

function DrawerCloseComponent(props: React.ComponentProps<typeof DialogClosePrimitive>) {
  return (
    <DialogClosePrimitive
      {...props}
      className={cn("p-2 rounded-sm", props.className)}
    />
  )
}
DrawerCloseComponent.displayName = "DrawerClose"

function DrawerContentComponent({ className, ...props }: React.ComponentProps<typeof DialogContentPrimitive>) {
  return (
    <DialogContentPrimitive
      className={cn(
        "w-full sm:w-[260px] rounded-t-xl border border-border bg-background shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2",
        className
      )}
      {...props}
    />
  )
}
DrawerContentComponent.displayName = "DrawerContent"

function DrawerTitleComponent(props: React.ComponentProps<typeof DialogTitlePrimitive>) {
  return (
    <DialogTitlePrimitive
      {...props}
      className={cn("text-2xl font-bold font-heading tracking-tight", props.className)}
    />
  )
}
DrawerTitleComponent.displayName = "DrawerTitle"

function DrawerDescriptionComponent(props: React.ComponentProps<typeof DialogDescriptionPrimitive>) {
  return (
    <DialogDescriptionPrimitive
      {...props}
      className={cn("text-sm text-muted-foreground leading-relaxed", props.className)}
    />
  )
}
DrawerDescriptionComponent.displayName = "DrawerDescription"

function DrawerTriggerComponent(props: React.ComponentProps<typeof DialogTriggerPrimitive>) {
  return <DialogTriggerPrimitive {...props} />
}
DrawerTriggerComponent.displayName = "DrawerTrigger"

export {
  Drawer,
  DrawerTriggerComponent as DrawerTrigger,
  DrawerCloseComponent as DrawerClose,
  DrawerContentComponent as DrawerContent,
  DrawerTitleComponent as DrawerTitle,
  DrawerDescriptionComponent as DrawerDescription,
}
