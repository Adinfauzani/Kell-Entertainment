import * as React from "react"
import { cn } from "@/lib/utils"

interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  as?: "h1" | "h2"
}

export function Display({ className, children, as: Comp = "h1", ...props }: DisplayProps) {
  return (
    <Comp
      {...props}
      className={cn(
        "kell-display text-foreground tracking-tight",
        className
      )}
    >
      {children}
    </Comp>
  )
}
Display.displayName = "Display"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  as?: "h1" | "h2" | "h3"
}

export function Heading({ className, children, as: Comp = "h2", ...props }: HeadingProps) {
  return (
    <Comp
      {...props}
      className={cn(
        "kell-heading text-foreground tracking-tight",
        className
      )}
    >
      {children}
    </Comp>
  )
}
Heading.displayName = "Heading"

interface SubheadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  as?: "h3" | "h4"
}

export function Subheading({ className, children, as: Comp = "h3", ...props }: SubheadingProps) {
  return (
    <Comp
      {...props}
      className={cn(
        "kell-subheading text-foreground tracking-tight",
        className
      )}
    >
      {children}
    </Comp>
  )
}
Subheading.displayName = "Subheading"

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  as?: "p" | "div"
}

export function Body({ className, children, as: Comp = "p", ...props }: BodyProps) {
  return (
    <Comp
      {...props}
      className={cn("kell-body text-foreground leading-relaxed", className)}
    >
      {children}
    </Comp>
  )
}
Body.displayName = "Body"

interface CaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  as?: "p" | "span"
}

export function Caption({ className, children, as: Comp = "p", ...props }: CaptionProps) {
  return (
    <Comp
      {...props}
      className={cn("kell-caption", className)}
    >
      {children}
    </Comp>
  )
}
Caption.displayName = "Caption"

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  as?: "p" | "span"
}

export function Eyebrow({ className, children, as: Comp = "p", ...props }: EyebrowProps) {
  return (
    <Comp
      {...props}
      className={cn("kell-eyebrow uppercase tracking-widest", className)}
    >
      {children}
    </Comp>
  )
}
Eyebrow.displayName = "Eyebrow"

interface MetadataProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  as?: "span" | "div"
}

export function Metadata({ className, children, as: Comp = "span", ...props }: MetadataProps) {
  return (
    <Comp
      {...props}
      className={cn("kell-metadata uppercase tracking-wider", className)}
    >
      {children}
    </Comp>
  )
}
Metadata.displayName = "Metadata"
