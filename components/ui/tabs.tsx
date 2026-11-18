"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/themes"
import { cn } from "@/lib/utils"

const TabsRoot = TabsPrimitive.Tabs.Root
const TabsListPrimitive = TabsPrimitive.Tabs.List
const TabsTriggerPrimitive = TabsPrimitive.Tabs.Trigger
const TabsContentPrimitive = TabsPrimitive.Tabs.Content

interface TabsProps extends React.ComponentProps<typeof TabsRoot> {
  children?: React.ReactNode
  className?: string
}

interface TabsListProps extends React.ComponentProps<typeof TabsListPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TabsTriggerProps extends React.ComponentProps<typeof TabsTriggerPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TabsContentProps extends React.ComponentProps<typeof TabsContentPrimitive> {
  children?: React.ReactNode
  className?: string
}

function Tabs({ className, ...props }: TabsProps) {
  return <TabsRoot className={cn(className)} {...props} />
}
Tabs.displayName = "Tabs"

function TabsListComponent({ className, children, ...props }: TabsListProps) {
  return (
    <TabsListPrimitive
      {...props}
      className={cn("inline-flex flex-wrap gap-2 -mx-1", className)}
    >
      {children}
    </TabsListPrimitive>
  )
}
TabsListComponent.displayName = "TabsList"

function TabsTriggerComponent({ className, children, ...props }: TabsTriggerProps) {
  return (
    <TabsTriggerPrimitive
      {...props}
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center rounded-sm border px-4 py-2 text-sm transition-colors data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",
        className
      )}
    >
      {children}
    </TabsTriggerPrimitive>
  )
}
TabsTriggerComponent.displayName = "TabsTrigger"

function TabsContentComponent({ className, children, ...props }: TabsContentProps) {
  return (
    <TabsContentPrimitive
      {...props}
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none data-[state=active]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
    >
      {children}
    </TabsContentPrimitive>
  )
}
TabsContentComponent.displayName = "TabsContent"

export {
  Tabs,
  TabsListComponent as TabsList,
  TabsTriggerComponent as TabsTrigger,
  TabsContentComponent as TabsContent,
}
