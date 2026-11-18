"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"

const DialogRoot = DialogPrimitive.Root
const DialogTriggerPrimitive = DialogPrimitive.Trigger
const DialogPortalPrimitive = DialogPrimitive.Portal
const DialogClosePrimitive = DialogPrimitive.Close
const DialogBackdropPrimitive = DialogPrimitive.Backdrop
const DialogViewportPrimitive = DialogPrimitive.Viewport
const DialogPopupPrimitive = DialogPrimitive.Popup
const DialogTitlePrimitive = DialogPrimitive.Title
const DialogDescriptionPrimitive = DialogPrimitive.Description

interface DialogProps extends React.ComponentProps<typeof DialogRoot> {
  children?: React.ReactNode
  className?: string
}

interface DialogTriggerProps extends React.ComponentProps<typeof DialogTriggerPrimitive> {
  className?: string
}

interface DialogPortalProps extends React.ComponentProps<typeof DialogPortalPrimitive> {
  className?: string
}

interface DialogCloseProps extends React.ComponentProps<typeof DialogClosePrimitive> {
  className?: string
}

interface DialogBackdropProps extends React.ComponentProps<typeof DialogBackdropPrimitive> {
  className?: string
}

interface DialogViewportProps extends React.ComponentProps<typeof DialogViewportPrimitive> {
  className?: string
}

interface DialogPopupProps extends React.ComponentProps<typeof DialogPopupPrimitive> {
  className?: string
}

interface DialogTitleProps extends React.ComponentProps<typeof DialogTitlePrimitive> {
  className?: string
}

interface DialogDescriptionProps extends React.ComponentProps<typeof DialogDescriptionPrimitive> {
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

function DialogTriggerComponent(props: DialogTriggerProps) {
  return <DialogTriggerPrimitive {...props} />
}
DialogTriggerComponent.displayName = "DialogTrigger"

function DialogPortalComponent(props: DialogPortalProps) {
  return <DialogPortalPrimitive {...props} />
}
DialogPortalComponent.displayName = "DialogPortal"

function DialogCloseComponent(props: DialogCloseProps) {
  return <DialogClosePrimitive {...props} />
}
DialogCloseComponent.displayName = "DialogClose"

function DialogBackdropComponent(props: DialogBackdropProps) {
  return (
    <DialogBackdropPrimitive
      className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        props.className
      )}
      {...props}
    />
  )
}
DialogBackdropComponent.displayName = "DialogBackdrop"

function DialogViewportComponent(props: DialogViewportProps) {
  return (
    <DialogViewportPrimitive
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-6",
        props.className
      )}
      {...props}
    />
  )
}
DialogViewportComponent.displayName = "DialogViewport"

function DialogPopupComponent({ className, ...props }: DialogPopupProps) {
  return (
    <DialogPopupPrimitive
      className={cn(
        "w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}
DialogPopupComponent.displayName = "DialogPopup"

function DialogTitleComponent(props: DialogTitleProps) {
  return (
    <DialogTitlePrimitive
      {...props}
      className={cn("text-2xl font-bold font-heading tracking-tight", props.className)}
    />
  )
}
DialogTitleComponent.displayName = "DialogTitle"

function DialogDescriptionComponent(props: DialogDescriptionProps) {
  return (
    <DialogDescriptionPrimitive
      {...props}
      className={cn("text-sm text-muted-foreground leading-relaxed", props.className)}
    />
  )
}
DialogDescriptionComponent.displayName = "DialogDescription"

export {
  Dialog,
  DialogTriggerComponent as DialogTrigger,
  DialogPortalComponent as DialogPortal,
  DialogCloseComponent as DialogClose,
  DialogBackdropComponent as DialogBackdrop,
  DialogViewportComponent as DialogViewport,
  DialogPopupComponent as DialogPopup,
  DialogTitleComponent as DialogTitle,
  DialogDescriptionComponent as DialogDescription,
}
