"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "motion/react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "uppercase tracking-wider rounded-full [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        gold: "bg-accent text-accent-foreground hover:bg-accent-hover active:bg-accent-deep hover:shadow-[0_8px_24px_-4px_rgba(194,133,46,0.4)] hover:-translate-y-0.5",
        "gold-outline":
          "data-[variant=outline]:border-border data-[variant=outline]:bg-transparent data-[variant=outline]:text-foreground data-[variant=outline]:hover:border-accent data-[variant=outline]:hover:bg-accent/10 data-[variant=outline]:hover:text-accent hover:-translate-y-0.5",
        ghost: "data-[variant=ghost]:border-transparent data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-foreground data-[variant=ghost]:hover:bg-accent/10 data-[variant=ghost]:hover:text-accent hover:-translate-y-0.5",
        subtle:
          "data-[variant=soft]:border-border data-[variant=soft]:bg-secondary data-[variant=soft]:text-muted-foreground data-[variant=soft]:hover:bg-accent/10 data-[variant=soft]:hover:text-accent data-[variant=soft]:hover:border-accent hover:-translate-y-0.5",
        editorial:
          "data-[variant=solid]:bg-accent data-[variant=solid]:text-accent-foreground data-[variant=solid]:hover:bg-accent-hover data-[variant=solid]:hover:shadow-[0_0_40px_rgba(194,133,46,0.4)] data-[variant=solid]:hover:shadow-accent/40 active:bg-accent-deep hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "gold-outline",
      size: "default",
    },
  }
)

type ButtonVariant = "gold" | "gold-outline" | "ghost" | "subtle" | "editorial"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "variant" | "size"> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children: React.ReactNode
}

function Button({
  className,
  variant = "gold-outline",
  size = "default",
  asChild = false,
  children,
  whileHover,
  whileTap,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  const defaultWhileHover = { scale: 1.02 }
  const defaultWhileTap = { scale: 0.98 }

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<React.HTMLAttributes<HTMLElement>>
    return (
      <motion.button
        className={cn(child.props.className, classes)}
        whileHover={whileHover ?? defaultWhileHover}
        whileTap={whileTap ?? defaultWhileTap}
        {...props}
      >
        {child.props.children}
      </motion.button>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={whileHover ?? defaultWhileHover}
      whileTap={whileTap ?? defaultWhileTap}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { Button, buttonVariants }
