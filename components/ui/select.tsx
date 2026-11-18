"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const SelectRoot = SelectPrimitive.Root
const SelectLabel = SelectPrimitive.Label
const SelectTrigger = SelectPrimitive.Trigger
const SelectValuePrimitive = SelectPrimitive.Value
const SelectIcon = SelectPrimitive.Icon
const SelectPortal = SelectPrimitive.Portal
const SelectBackdrop = SelectPrimitive.Backdrop
const SelectPositioner = SelectPrimitive.Positioner
const SelectPopup = SelectPrimitive.Popup
const SelectList = SelectPrimitive.List
const SelectItem = SelectPrimitive.Item
const SelectItemText = SelectPrimitive.ItemText
const SelectItemIndicator = SelectPrimitive.ItemIndicator
const SelectSeparator = SelectPrimitive.Separator
const SelectGroup = SelectPrimitive.Group
const SelectGroupLabel = SelectPrimitive.GroupLabel

interface SelectProps extends React.ComponentProps<typeof SelectRoot> {
  children?: React.ReactNode
  className?: string
}

interface SelectTriggerProps extends React.ComponentProps<typeof SelectTrigger> {
  children?: React.ReactNode
  className?: string
}

interface SelectContentProps extends React.ComponentProps<typeof SelectPopup> {
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

interface SelectGroupLabelProps extends React.ComponentProps<typeof SelectGroupLabel> {
  children?: React.ReactNode
  className?: string
}

interface SelectSeparatorProps extends React.ComponentProps<typeof SelectSeparator> {
  className?: string
}

interface SelectLabelProps extends React.ComponentProps<typeof SelectLabel> {
  children?: React.ReactNode
  className?: string
}

interface SelectItemTextProps extends React.ComponentProps<typeof SelectItemText> {
  children?: React.ReactNode
  className?: string
}

interface SelectItemIndicatorProps extends React.ComponentProps<typeof SelectItemIndicator> {
  children?: React.ReactNode
  className?: string
}

interface SelectPortalProps extends React.ComponentProps<typeof SelectPortal> {
  className?: string
}

interface SelectBackdropProps extends React.ComponentProps<typeof SelectBackdrop> {
  className?: string
}

interface SelectPositionerProps extends React.ComponentProps<typeof SelectPositioner> {
  className?: string
}

interface SelectListProps extends React.ComponentProps<typeof SelectList> {
  children?: React.ReactNode
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
      <SelectValuePrimitive className="text-muted-foreground line-clamp-1">{children}</SelectValuePrimitive>
      <SelectIcon className="ml-2 h-4 w-4 opacity-50">
        <ChevronDown />
      </SelectIcon>
    </SelectTrigger>
  )
}
SelectTriggerComponent.displayName = "SelectTrigger"

function SelectContentComponent({ className, children, ...props }: SelectContentProps) {
  return (
    <SelectPortal>
      <SelectBackdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
      />
      <SelectPositioner>
        <SelectPopup
          className={cn(
            "rounded-xl border border-border bg-background p-1 text-current shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
          )}
          {...props}
        >
          <SelectList className="[&_[data-select-item]]:px-3 [&_[data-select-item]]:py-2 max-h-60 overflow-y-auto">
            {children}
          </SelectList>
        </SelectPopup>
      </SelectPositioner>
    </SelectPortal>
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
      <SelectItemText className={cn("w-full", disabled && "text-muted-foreground")}>
        {children}
      </SelectItemText>
      {disabled ? null : (
        <SelectItemIndicator className="ml-auto text-muted-foreground h-3.5 w-3.5">
          <Check className="h-full w-full" />
        </SelectItemIndicator>
      )}
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

function SelectGroupLabelComponent({ className, children, ...props }: SelectGroupLabelProps) {
  return (
    <SelectGroupLabel
      {...props}
      className={cn(
        "px-3 py-1.5 text-xs font-semibold text-muted-foreground",
        className
      )}
    >
      {children}
    </SelectGroupLabel>
  )
}
SelectGroupLabelComponent.displayName = "SelectGroupLabel"

function SelectSeparatorComponent(props: SelectSeparatorProps) {
  return (
    <SelectSeparator
      {...props}
      className="border-border px-3 -mx-3 my-1"
    />
  )
}
SelectSeparatorComponent.displayName = "SelectSeparator"

function SelectLabelComponent({ className, children, ...props }: SelectLabelProps) {
  return (
    <SelectLabel
      {...props}
      className={cn("text-sm font-medium text-foreground", className)}
    >
      {children}
    </SelectLabel>
  )
}
SelectLabelComponent.displayName = "SelectLabel"

function SelectItemTextComponent({ children, ...props }: SelectItemTextProps) {
  return <SelectItemText {...props}>{children}</SelectItemText>
}
SelectItemTextComponent.displayName = "SelectItemText"

function SelectItemIndicatorComponent({ children, ...props }: SelectItemIndicatorProps) {
  return (
    <SelectItemIndicator {...props}>
      {children}
    </SelectItemIndicator>
  )
}
SelectItemIndicatorComponent.displayName = "SelectItemIndicator"

function SelectPortalComponent(props: SelectPortalProps) {
  return <SelectPortal {...props} />
}
SelectPortalComponent.displayName = "SelectPortal"

function SelectBackdropComponent(props: SelectBackdropProps) {
  return <SelectBackdrop {...props} />
}
SelectBackdropComponent.displayName = "SelectBackdrop"

function SelectPositionerComponent(props: SelectPositionerProps) {
  return <SelectPositioner {...props} />
}
SelectPositionerComponent.displayName = "SelectPositioner"

function SelectListComponent({ className, children, ...props }: SelectListProps) {
  return (
    <SelectList
      {...props}
      className={cn("max-h-60 overflow-y-auto", className)}
    >
      {children}
    </SelectList>
  )
}
SelectListComponent.displayName = "SelectList"

function Check({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
Check.displayName = "Check"

export {
  Select,
  SelectTriggerComponent as SelectTrigger,
  SelectContentComponent as SelectContent,
  SelectItemComponent as SelectItem,
  SelectGroupComponent as SelectGroup,
  SelectGroupLabelComponent as SelectGroupLabel,
  SelectSeparatorComponent as SelectSeparator,
  SelectLabelComponent as SelectLabel,
  SelectItemTextComponent as SelectItemText,
  SelectItemIndicatorComponent as SelectItemIndicator,
  SelectPortalComponent as SelectPortal,
  SelectBackdropComponent as SelectBackdrop,
  SelectPositionerComponent as SelectPositioner,
  SelectListComponent as SelectList,
}

function SelectValueComponent({ children, ...props }: React.ComponentProps<typeof SelectValuePrimitive>) {
  return <SelectValuePrimitive {...props}>{children}</SelectValuePrimitive>
}
SelectValueComponent.displayName = "SelectValue"

export { SelectValueComponent as SelectValue }
