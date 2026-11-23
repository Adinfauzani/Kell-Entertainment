"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/themes"
import { cn } from "@/lib/utils"

const DialogRoot = DialogPrimitive.Dialog.Root
const DialogTriggerPrimitive = DialogPrimitive.Dialog.Trigger
const DialogClosePrimitive = DialogPrimitive.Dialog.Close
const DialogContentPrimitive = DialogPrimitive.Dialog.Content
const DialogTitlePrimitive = DialogPrimitive.Dialog.Title
const DialogDescriptionPrimitive = DialogPrimitive.Dialog.Description

interface DialogProps extends React.ComponentProps<typeof DialogRoot> {
  children?: React.ReactNode
  className?: string
}

function Dialog({ className, ...props }: DialogProps) {
  return (
    <DialogRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
Dialog.displayName = "Dialog"

function DialogCloseComponent(props: React.ComponentProps<typeof DialogClosePrimitive>) {
  return (
    <DialogClosePrimitive
      {...props}
      className={cn("p-2 rounded-sm", props.className)}
    />
  )
}
DialogCloseComponent.displayName = "DialogClose"

function DialogContentComponent({ className, ...props }: React.ComponentProps<typeof DialogContentPrimitive>) {
  return (
    <DialogContentPrimitive
      className={cn(
        "w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}
DialogContentComponent.displayName = "DialogContent"

function DialogTitleComponent(props: React.ComponentProps<typeof DialogTitlePrimitive>) {
  return (
    <DialogTitlePrimitive
      {...props}
      className={cn("text-2xl font-bold font-heading tracking-tight", props.className)}
    />
  )
}
DialogTitleComponent.displayName = "DialogTitle"

function DialogDescriptionComponent(props: React.ComponentProps<typeof DialogDescriptionPrimitive>) {
  return (
    <DialogDescriptionPrimitive
      {...props}
      className={cn("text-sm text-muted-foreground leading-relaxed", props.className)}
    />
  )
}
DialogDescriptionComponent.displayName = "DialogDescription"

function DialogTriggerComponent(props: React.ComponentProps<typeof DialogTriggerPrimitive>) {
  return <DialogTriggerPrimitive {...props} />
}
DialogTriggerComponent.displayName = "DialogTrigger"

export {
  Dialog,
  DialogTriggerComponent as DialogTrigger,
  DialogCloseComponent as DialogClose,
  DialogContentComponent as DialogContent,
  DialogTitleComponent as DialogTitle,
  DialogDescriptionComponent as DialogDescription,
}
