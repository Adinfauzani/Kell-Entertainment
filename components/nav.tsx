"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerPortal, DrawerClose, DrawerBackdrop, DrawerViewport, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
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

  return (
    <>
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
          </div>
        </div>
      </nav>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-accent/10">
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-accent/10"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerViewport>
            <DrawerContent>
              <DrawerClose>
                <button className="p-2 rounded-sm" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
              <DrawerTitle>Menu</DrawerTitle>
              <div className="p-6 space-y-2 overflow-y-auto h-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-sm px-4 py-3 text-sm uppercase tracking-wider transition-colors",
                      pathname === link.href
                        ? "bg-accent/20 text-accent font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </DrawerViewport>
        </DrawerPortal>
      </Drawer>
    </>
  )
}
