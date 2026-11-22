"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/data"
import { Menu, X, Mail } from "lucide-react"

const logoMark = (
  <span className="relative flex items-center gap-1">
    <span className="h-4 w-0.5 bg-accent" />
    <Image
      src="/Kell.png"
      alt="KELL"
      width={40}
      height={40}
      className="h-10 w-auto"
    />
  </span>
)

export function Nav() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setScrolled(currentScrollY > 20)
    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <motion.nav
        className={cn(
          "fixed left-0 right-0 top-4 z-50 hidden justify-center px-6 md:flex",
          "transition-all duration-500"
        )}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className={cn(
            "mx-auto flex max-w-[920px] w-full items-center justify-between rounded-full px-6 py-2.5 transition-all duration-500",
            "bg-black/60 backdrop-blur-2xl border border-white/15 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)]",
            scrolled && "py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-lg tracking-tight text-foreground"
            style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            aria-label="KELL Entertainment"
          >
            {logoMark}
          </Link>

          <motion.div
            className="hidden md:flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.filter((link) => link.name !== "Contact").map((link) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                    )}
                    style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 rounded-full hover:scale-105"
              aria-label="Contact"
            >
              <Link href="/contact" className="inherit">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <DrawerTrigger
              className="md:hidden p-1.5 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DrawerTrigger>
          </div>
        </motion.div>
      </motion.nav>

      <DrawerContent className="w-full sm:w-[280px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl bg-black/60 backdrop-blur-2xl border-white/15">
        <DrawerClose>
          <motion.button
            className="p-2 rounded-sm hover:bg-accent/10 hover:text-accent transition-colors"
            aria-label="Close menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
        </DrawerClose>
        <DrawerTitle className="mb-6 font-heading text-lg">Menu</DrawerTitle>
        <div className="p-4 space-y-1 overflow-y-auto scrollbar-hide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm tracking-wider",
                    isActive
                      ? "bg-accent/15 text-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  )}
                  style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-indicator"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
