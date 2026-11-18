"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
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
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navBg = scrolled
    ? "bg-background/90 backdrop-blur-lg border-b border-border/80 shadow-lg shadow-black/20"
    : "bg-background/60 backdrop-blur-md border-b border-border/60"

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <nav
        className={cn(
          "fixed top-6 left-[50%] -translate-x-1/2 z-50 w-full max-w-[880px] rounded-full p-1.5 transition-all duration-300 ease-out",
          navBg
        )}
        aria-label="Main navigation"
      >
        <div className="flex max-w-[850px] items-center justify-between px-4 py-2 mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-lg tracking-tight text-foreground"
            aria-label="KELL Entertainment"
          >
            {logoMark}
          </Link>

          <div className="hidden md:flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/30"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="relative px-3 py-1.5 rounded-full border border-accent bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-accent-hover hover:text-accent-foreground shadow-lg shadow-accent/25"
            >
              <Mail className="h-3 w-3 mr-1.5" /> Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <DrawerTrigger
              className="md:hidden p-1.5 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DrawerTrigger>
          </div>
        </div>
      </nav>

      <DrawerContent className="w-full sm:w-[280px] rounded-2xl border border-border bg-background shadow-2xl">
        <DrawerClose>
          <button className="p-2 rounded-sm" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </DrawerClose>
        <DrawerTitle className="mb-6">Menu</DrawerTitle>
        <div className="p-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm uppercase tracking-wider transition-colors",
                  isActive
                    ? "bg-accent/20 text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                )}
              >
                {link.name}
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
