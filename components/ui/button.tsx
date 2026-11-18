"use client"

import * as React from "react"
import { Button as ThemesButton } from "@radix-ui/themes"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "uppercase tracking-wider [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        gold: "data-[colorScheme=gold]:bg-accent data-[colorScheme=gold]:text-accent-foreground",
        "gold-outline":
          "data-[variant=outline]:border-border data-[variant=outline]:bg-transparent data-[variant=outline]:text-foreground data-[variant=outline]:hover:border-accent data-[variant=outline]:hover:bg-accent/10 data-[variant=outline]:hover:text-accent",
        ghost: "data-[variant=ghost]:border-transparent data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-foreground data-[variant=ghost]:hover:bg-accent/10 data-[variant=ghost]:hover:text-accent",
        subtle:
          "data-[variant=soft]:border-border data-[variant=soft]:bg-secondary data-[variant=soft]:text-muted-foreground data-[variant=soft]:hover:bg-accent/10 data-[variant=soft]:hover:text-accent data-[variant=soft]:hover:border-accent",
        editorial:
          "data-[variant=solid]:bg-accent data-[variant=solid]:text-accent-foreground data-[variant=solid]:hover:bg-accent-hover data-[variant=solid]:hover:shadow-[0_0_40px_rgba(194,133,46,0.4)] data-[variant=solid]:hover:shadow-accent/40 active:bg-accent-deep",
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

type RadixVariant = "outline" | "ghost" | "classic" | "solid" | "soft" | "surface"
type RadixSize = "1" | "2" | "3" | "4"

const variantMap: Record<ButtonVariant, RadixVariant> = {
  gold: "solid",
  "gold-outline": "outline",
  ghost: "ghost",
  subtle: "soft",
  editorial: "solid",
}

const sizeMap: Record<ButtonSize, RadixSize> = {
  default: "2",
  sm: "1",
  lg: "3",
  icon: "2",
}

interface ButtonProps
  extends Omit<React.ComponentProps<typeof ThemesButton>, "variant" | "size"> {
  variant?: ButtonVariant
  size?: ButtonSize
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
    <ThemesButton
      variant={variantMap[variant]}
      size={sizeMap[size]}
      className={classes}
      {...props}
    >
      {children}
    </ThemesButton>
  )
}

export { Button, buttonVariants }
