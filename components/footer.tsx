"use client"

import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"
import { Mail, Camera, Music, Video, X } from "lucide-react"
import { site, navLinks, socials } from "@/lib/data"
import { cn } from "@/lib/utils"

const logoMark = (
  <span className="relative flex items-center gap-1">
    <span className="h-6 w-0.5 bg-accent" />
    <Image
      src="/Kell.png"
      alt="KELL"
      width={48}
      height={48}
      className="h-12 w-auto"
    />
  </span>
)

const SocialIcon = ({ name, href, children }: { name: string; href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-muted-foreground hover:bg-accent/20 hover:border-accent/30 hover:text-accent transition-all duration-300"
    aria-label={name}
  >
    {children}
  </a>
)

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Camera className="h-4.5 w-4.5" />,
  TikTok: <Music className="h-4.5 w-4.5" />,
  X: <X className="h-4.5 w-4.5" />,
  YouTube: <Video className="h-4.5 w-4.5" />,
}

const FooterLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link
    href={href}
    className={cn(
      "text-sm text-muted-foreground hover:text-accent transition-colors duration-300",
      className
    )}
  >
    {children}
  </Link>
)

const FooterColumnTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h4 id={id} className="mb-6 text-xs font-semibold tracking-wider text-foreground capitalize">
    {children}
  </h4>
)

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      {/* Optional Cinematic Brand Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 py-8 border-b border-border/20"
      >
        <p className="mx-auto max-w-7xl text-center text-xs font-mono tracking-wide text-muted-foreground/60">
          Creativity. Vision. Entertainment.
        </p>
      </motion.div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-14"
        >
          {/* A. Brand Introduction */}
          <div className="space-y-8 lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading font-bold text-2xl lg:text-3xl tracking-tight text-foreground"
              aria-label="KELL Entertainment"
            >
              {logoMark}
              <span className="hidden lg:inline text-muted-foreground font-medium tracking-wide">Entertainment</span>
            </Link>

            <p className="text-base leading-relaxed text-muted-foreground max-w-xs">
              Creating experiences through creative media, entertainment production, and visual storytelling.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <SocialIcon key={social.name} name={social.name} href={social.href}>
                  {socialIcons[social.name]}
                </SocialIcon>
              ))}
              <SocialIcon name="Email" href={`mailto:${site.email}`}>
                <Mail className="h-4.5 w-4.5" />
              </SocialIcon>
            </div>
          </div>

          {/* B. Navigation - Explore */}
          <nav aria-label="Explore">
            <FooterColumnTitle>Explore</FooterColumnTitle>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* C. Services / Brand Focus - What We Do */}
          <section aria-labelledby="what-we-do">
            <FooterColumnTitle id="what-we-do">What We Do</FooterColumnTitle>
            <ul className="space-y-4">
              <li><FooterLink href="/media?category=creative-projects">Creative Media</FooterLink></li>
              <li><FooterLink href="/media?category=entertainment">Entertainment Production</FooterLink></li>
              <li><FooterLink href="/media?category=creative-projects">Visual Storytelling</FooterLink></li>
              <li><FooterLink href="/gallery">Digital Experiences</FooterLink></li>
            </ul>
          </section>

          {/* D. Contact - Get In Touch */}
          <section aria-labelledby="get-in-touch" className="space-y-6">
            <FooterColumnTitle id="get-in-touch">Get In Touch</FooterColumnTitle>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Have a project or creative collaboration in mind? Let&apos;s create something meaningful.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-highlight transition-colors"
            >
              Contact Us
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                →
              </motion.span>
            </Link>
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs font-mono text-muted-foreground/60">
                {site.email}
              </p>
            </div>
          </section>
        </motion.div>

        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-border/30 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-muted-foreground/70">
            <p className="text-center md:text-left">© 2026 KELL Entertainment. All rights reserved.</p>
            <nav aria-label="Legal" className="flex flex-wrap justify-center md:justify-end gap-6">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}