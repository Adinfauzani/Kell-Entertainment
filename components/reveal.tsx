"use client"

import * as React from "react"
import { motion } from "motion/react"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  initial?: React.ComponentProps<typeof motion.div>["initial"]
  animate?: React.ComponentProps<typeof motion.div>["animate"]
  transition?: React.ComponentProps<typeof motion.div>["transition"]
}

export function Reveal({
  children,
  className,
  initial,
  animate,
  transition,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={initial ?? { opacity: 0, y: 30 }}
      animate={animate ?? { opacity: 1, y: 0 }}
      transition={transition ?? { duration: 0.8 }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.div>
  )
}
