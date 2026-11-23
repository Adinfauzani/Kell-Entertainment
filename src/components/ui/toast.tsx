"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

type ToastVariant = "default" | "destructive" | "success"

interface ToastItem {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
  action?: React.ReactNode
}

interface ToastActionProps {
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

interface ToastCloseProps {
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

interface ToastViewportProps {
  className?: string
}

type ActionType =
  | { type: "ADD_TOAST"; toast: ToastItem }
  | { type: "UPDATE_TOAST"; toast: Partial<ToastItem> }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string }

interface ToastStateData {
  toasts: ToastItem[]
}

const TOAST_LIMIT = 5
let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ type: "REMOVE_TOAST", toastId })
  }, 10000)
  toastTimeouts.set(toastId, timeout)
}

let memoryState: ToastStateData = { toasts: [] }
const listeners: Array<(state: ToastStateData) => void> = []

function dispatch(action: ActionType) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

export const reducer = (state: ToastStateData, action: ActionType): ToastStateData => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }
    case "DISMISS_TOAST": {
      const { toastId } = action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((t) => addToRemoveQueue(t.id))
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t } : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

function toast({ ...props }: Omit<ToastItem, "id">) {
  const id = genId()

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: { ...props, id },
  })

  return { id, dismiss }
}

function useToast() {
  const [state, setState] = React.useState<ToastStateData>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState<ToastStateData>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [state])

  return (
    <div className="fixed top-0 right-0 z-50 p-4 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {state.toasts.map((toastItem) => (
          <motion.div
            key={toastItem.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xs pointer-events-auto"
          >
            <ToastElement toast={toastItem} onClose={() => dismissToast(toastItem.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
ToastProvider.displayName = "ToastProvider"

function dismissToast(id: string) {
  dispatch({ type: "DISMISS_TOAST", toastId: id })
}

const variantStyles: Record<ToastVariant, string> = {
  default: "border-border bg-background text-foreground",
  destructive: "border-destructive bg-destructive text-destructive-foreground",
  success: "border-accent bg-accent text-accent-foreground",
}

function ToastElement({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-xl border p-4 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
        variantStyles[toast.variant ?? "default"]
      )}
    >
      <div className="flex shrink-0 items-center justify-center h-6 w-6 rounded-full bg-background/50 text-accent">
        {toast.variant === "destructive" ? (
          <span className="h-3 w-3">!</span>
        ) : toast.variant === "success" ? (
          <span className="h-3 w-3">✓</span>
        ) : (
          <span className="h-3 w-3">i</span>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        {toast.title && <h3 className="text-sm font-medium">{toast.title}</h3>}
        {toast.description && (
          <p className="text-xs opacity-80">{toast.description}</p>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-accent/10 rounded-sm"
        aria-label="Close toast"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}

function ToastViewport({ className }: ToastViewportProps) {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-50 p-4 flex flex-col gap-2 pointer-events-none",
        className
      )}
    />
  )
}
ToastViewport.displayName = "ToastViewport"

function ToastClose({ buttonProps }: ToastCloseProps) {
  return (
    <button
      className={cn(
        "absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-accent/10 rounded-sm",
        buttonProps?.className
      )}
      {...buttonProps}
      aria-label="Close toast"
    >
      <X className="h-3 w-3" />
    </button>
  )
}
ToastClose.displayName = "ToastClose"

function ToastAction({ buttonProps }: ToastActionProps) {
  return (
    <button
      className={cn(
        "ml-auto text-sm text-accent hover:underline",
        buttonProps?.className
      )}
      {...buttonProps}
    />
  )
}
ToastAction.displayName = "ToastAction"

export type {
  ToastItem as Toast,
  ToastActionProps,
  ToastCloseProps,
  ToastViewportProps,
}
export { ToastProvider, ToastViewport, ToastClose, ToastAction, useToast, toast }
