"use client"

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 uppercase tracking-wider",
  {
    variants: {
      variant: {
        gold: "border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep",
        "gold-outline": "border-border bg-transparent text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent/10 hover:text-accent",
        subtle:
          "border-border bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent",
        editorial:
          "border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(194,133,46,0.4)] hover:shadow-accent/40 active:bg-accent-deep",
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

interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant = "gold-outline",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<{
      className?: string
    }>
    return React.cloneElement(child, {
      className: cn(child.props.className, classes),
    })
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={classes}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
