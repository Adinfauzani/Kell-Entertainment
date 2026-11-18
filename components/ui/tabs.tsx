"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cn } from "@/lib/utils"

const TabsRoot = TabsPrimitive.Root
const TabsTabPrimitive = TabsPrimitive.Tab
const TabsPanelPrimitive = TabsPrimitive.Panel
const TabsListPrimitive = TabsPrimitive.List

interface TabsProps extends React.ComponentProps<typeof TabsRoot> {
  children?: React.ReactNode
  className?: string
}

interface TabsListProps extends React.ComponentProps<typeof TabsListPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TabsTabProps extends React.ComponentProps<typeof TabsTabPrimitive> {
  children?: React.ReactNode
  className?: string
}

interface TabsPanelProps extends React.ComponentProps<typeof TabsPanelPrimitive> {
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
      className={cn(
        "inline-flex flex-wrap gap-2 -mx-1",
        className
      )}
    >
      {children}
    </TabsListPrimitive>
  )
}
TabsListComponent.displayName = "TabsList"

function TabsTabComponent({ className, children, ...props }: TabsTabProps) {
  return (
    <TabsTabPrimitive
      {...props}
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center rounded-sm border px-4 py-2 text-sm transition-colors data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",
        className
      )}
    >
      {children}
    </TabsTabPrimitive>
  )
}
TabsTabComponent.displayName = "TabsTab"

function TabsPanelComponent({ className, children, ...props }: TabsPanelProps) {
  return (
    <TabsPanelPrimitive
      {...props}
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none data-[state=active]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
    >
      {children}
    </TabsPanelPrimitive>
  )
}
TabsPanelComponent.displayName = "TabsPanel"

export {
  Tabs,
  TabsListComponent as TabsList,
  TabsTabComponent as TabsTrigger,
  TabsPanelComponent as TabsContent,
}
