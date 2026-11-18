"use client"

import * as React from "react"
import { Separator as ThemesSeparator } from "@radix-ui/themes"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ThemesSeparator> & { className?: string }
>(({ className, ...props }, ref) => (
  <ThemesSeparator
    ref={ref}
    className={cn(
      "flex w-full shrink-0 cursor-default select-none items-center rounded-md border border-border bg-background py-[1px]",
      className
    )}
    {...props}
  />
))
Separator.displayName = "Separator"

const SeparatorLine = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 h-[1px] grow border-border bg-border", className)}
    {...props}
  />
))
SeparatorLine.displayName = "SeparatorLine"

export { Separator, SeparatorLine }
