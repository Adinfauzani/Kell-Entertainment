"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/themes"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const SelectRoot = SelectPrimitive.Select.Root
const SelectGroup = SelectPrimitive.Select.Group
const SelectLabel = SelectPrimitive.Select.Label
const SelectTrigger = SelectPrimitive.Select.Trigger
const SelectContent = SelectPrimitive.Select.Content
const SelectItem = SelectPrimitive.Select.Item
const SelectSeparator = SelectPrimitive.Select.Separator

interface SelectProps extends React.ComponentProps<typeof SelectRoot> {
  children?: React.ReactNode
  className?: string
}

interface SelectTriggerProps extends React.ComponentProps<typeof SelectTrigger> {
  children?: React.ReactNode
  className?: string
}

interface SelectContentProps extends React.ComponentProps<typeof SelectContent> {
  children?: React.ReactNode
  className?: string
}

interface SelectItemProps extends React.ComponentProps<typeof SelectItem> {
  children?: React.ReactNode
  value: string
  disabled?: boolean
  className?: string
}

interface SelectGroupProps extends React.ComponentProps<typeof SelectGroup> {
  children?: React.ReactNode
  className?: string
}

interface SelectLabelProps extends React.ComponentProps<typeof SelectLabel> {
  children?: React.ReactNode
  className?: string
}

interface SelectSeparatorProps extends React.ComponentProps<typeof SelectSeparator> {
  className?: string
}

function Select({ className, ...props }: SelectProps) {
  return (
    <SelectRoot
      {...(props as Record<string, unknown>)}
    />
  )
}
Select.displayName = "Select"

function SelectTriggerComponent({ className, children, ...props }: SelectTriggerProps) {
  return (
    <SelectTrigger
      {...props}
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
      <span className="ml-2 h-4 w-4 opacity-50">
        <ChevronDown />
      </span>
    </SelectTrigger>
  )
}
SelectTriggerComponent.displayName = "SelectTrigger"

function SelectContentComponent({ className, children, ...props }: SelectContentProps) {
  return (
    <SelectContent
      {...props}
      className={cn(
        "rounded-xl border border-border bg-background p-1 text-current shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
    >
      {children}
    </SelectContent>
  )
}
SelectContentComponent.displayName = "SelectContent"

function SelectItemComponent({ className, children, value, disabled, ...props }: SelectItemProps) {
  return (
    <SelectItem
      value={value}
      disabled={disabled}
      {...props}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
    >
      {children}
    </SelectItem>
  )
}
SelectItemComponent.displayName = "SelectItem"

function SelectGroupComponent({ className, children, ...props }: SelectGroupProps) {
  return (
    <SelectGroup
      {...props}
      className={cn("px-2", className)}
    >
      {children}
    </SelectGroup>
  )
}
SelectGroupComponent.displayName = "SelectGroup"

function SelectLabelComponent({ className, children, ...props }: SelectLabelProps) {
  return (
    <SelectLabel
      {...props}
      className={cn(
        "px-3 py-1.5 text-xs font-semibold text-muted-foreground",
        className
      )}
    >
      {children}
    </SelectLabel>
  )
}
SelectLabelComponent.displayName = "SelectLabel"

function SelectSeparatorComponent(props: SelectSeparatorProps) {
  return (
    <SelectSeparator
      {...props}
      className="border-border px-3 -mx-3 my-1"
    />
  )
}
SelectSeparatorComponent.displayName = "SelectSeparator"

export {
  Select,
  SelectTriggerComponent as SelectTrigger,
  SelectContentComponent as SelectContent,
  SelectItemComponent as SelectItem,
  SelectGroupComponent as SelectGroup,
  SelectLabelComponent as SelectLabel,
  SelectSeparatorComponent as SelectSeparator,
}
