"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/data"
import { Menu, X, Mail } from "lucide-react"

const logoMark = (
  <span className="relative flex items-center gap-1">
    <span className="h-5 w-0.5 bg-accent" />
    <span className="font-heading font-bold text-xl tracking-tight text-accent">KELL</span>
  </span>
)

export function Nav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="flex max-w-7xl items-center justify-between px-6 py-4 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-foreground"
          aria-label="KELL Entertainment"
        >
          {logoMark}
          <span className="text-muted-foreground font-medium tracking-wide">Entertainment</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors hover:text-accent",
                pathname === link.href
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-4 py-2 text-accent-foreground text-xs font-semibold uppercase tracking-wider shadow-lg shadow-accent/25 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-3.5 w-3.5" /> Contact
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-accent/10"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-49 bg-background/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[260px] flex flex-col border-l border-border bg-background"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-heading font-bold text-lg text-foreground">Menu</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-accent/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-2 overflow-y-auto h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-sm px-4 py-3 text-sm uppercase tracking-wider transition-colors hover:bg-accent/10",
                    pathname === link.href
                      ? "bg-accent/20 text-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
