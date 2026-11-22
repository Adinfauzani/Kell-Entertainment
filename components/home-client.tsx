"use client"

import { motion } from "motion/react"
import Link from "next/link"
import {
  Display,
  Heading,
  Body,
} from "@/components/ui/typography"
import {
  HeroImage,
  EditorialImage,
  ProjectPreview,
  GalleryImage,
} from "@/components/ui/image"
import { playIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { featuredProjects, mediaItems, teamMembers } from "@/lib/data"
import { useRef, useEffect, useState } from "react"

export function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
    el.addEventListener("mousemove", handleMove)
    return () => el.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section ref={heroRef} className="relative px-6 pt-16 pb-32 lg:pt-24 lg:pb-32 overflow-hidden min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-[900px] h-[900px] rounded-full bg-accent/10 blur-[160px] -top-40 -left-40 animate-[pulse_10s_ease-in_out_infinite]"
          />
          <div
            className="w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] -bottom-40 -right-40 animate-[pulse_12s_ease_in_out_infinite_reverse]"
          />
          {/* Mouse-follow glow */}
          <motion.div
            className="absolute pointer-events-none -z-10 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[200px] translate-x-[-50%] translate-y-[-50%]"
            style={{
              left: mousePos.x,
              top: mousePos.y,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:w-[42%] text-balance">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2"
              style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                Available for Projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
              style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <Display className="text-balance" style={{ fontFamily: "var(--font-fredoka)", fontWeight: "700" }}>
                KELL <span className="text-gradient-gold">Entertainment</span>
              </Display>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground"
            >
              <Body className="mb-0">
                Creative media, entertainment production, visual storytelling,
                and digital experiences built for the modern audience.
              </Body>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button variant="gold" size="lg" className="font-mono inline-flex items-center gap-2 w-full sm:w-auto group" style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <Link href="/about" className="inherit text-foreground">
                  About
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              <Link href="/contact" className="font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-highlight transition-colors flex items-center gap-2 group" style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <Mail className="h-4 w-4" /> Contact
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-border" />
                <span className="text-xs font-mono text-muted-foreground">
                  KELL Entertainment &middot; 2026
                </span>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2 lg:w-[58%]">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative group w-full max-w-[720px]"
              style={{
                perspective: 1000,
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8
                e.currentTarget.style.setProperty("--rx", `${y}deg`)
                e.currentTarget.style.setProperty("--ry", `${-x}deg`)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--rx", "0deg")
                e.currentTarget.style.setProperty("--ry", "0deg")
              }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-2 bg-[radial-gradient(circle_at_center,var(--accent-soft)/20,transparent_80%)] blur-[110px] opacity-60"
                />
                <div
                  className="relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `rotateX(calc(var(--rx, 0deg))) rotateY(calc(var(--ry, 0deg)))`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <HeroImage
                    src="/hero.png"
                    alt="KELL Entertainment creative studio"
                    className="w-full h-auto object-contain block relative z-10 rounded-xl border border-border/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
                    priority
                    fill={false}
                    width={666}
                    height={375}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 55vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <Heading as="h2" className="mb-0">
                  About KELL
                </Heading>
                <Body className="leading-relaxed">
                  KELL Entertainment is an independent creative studio focused on
                  media production, visual storytelling, and digital experiences.
                  We collaborate with artists, brands, and creators to produce
                  work that feels intentional and lasting.
                </Body>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent font-medium uppercase tracking-wider text-sm group"
                  style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Learn more
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] rounded-xl border border-border bg-surface overflow-hidden group"
                style={{ 
                  transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
                  background: "rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(24px)",
                  borderColor: "rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(194,133,46,0.15)"
                  e.currentTarget.style.borderColor = "rgba(194,133,46,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
                }}
              >
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="Featured work from KELL Entertainment"
                  ratio="4/3"
                  lazyLoading={false}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                    className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8"
                    style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(194,133,46,0.6)"
                      e.currentTarget.style.backgroundColor = "rgba(194,133,46,0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(194,133,46,0.3)"
                      e.currentTarget.style.backgroundColor = "rgba(194,133,46,0.05)"
                    }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                      className="h-12 w-12 rounded-full bg-accent flex items-center justify-center"
                    >
                      <span className="h-5 w-5 text-accent-foreground">{playIcon}</span>
                    </motion.span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-xs">
                      Featured Work
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <Heading as="h2" className="mb-4">
              The Team
            </Heading>
            <Body className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A tight-knit crew of creators, producers, and strategists who believe in the craft.
            </Body>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_40px_-10px_rgba(194,133,46,0.15)]"
                style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <EditorialImage
                    src={member.image}
                    alt={member.name}
                    ratio="3/4"
                    lazyLoading={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {member.socials && (
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                          aria-label={social.label}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            {social.label === "Instagram" && (
                              <>
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                              </>
                            )}
                            {social.label === "LinkedIn" && (
                              <>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                              </>
                            )}
                            {social.label === "Vimeo" && (
                              <path d="M18 12a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h4" />
                            )}
                            {social.label === "X" && (
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-xs font-mono uppercase tracking-wider text-accent">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-12"
          >
            <div>
              <Heading as="h2">Featured Projects</Heading>
              <Body className="text-muted-foreground">
                Selected creative work from the KELL catalog.
              </Body>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectPreview
                  src={project.cover}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  href={`/gallery`}
                  className="group"
                  style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Media */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <Heading as="h2">Latest Media</Heading>
              <Body className="text-muted-foreground">
                Recent publications and releases.
              </Body>
            </div>
            <Link
              href="/media"
              className="text-sm font-medium uppercase tracking-wider text-accent hover:underline inline-flex items-center gap-1 group"
              style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              View all
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-3 gap-6"
          >
            {mediaItems
              .filter((m) => m.featured)
              .slice(0, 3)
              .map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GalleryImage
                    src={item.cover}
                    alt={item.title}
                    caption={item.title}
                    category={item.category}
                    className=""
                    style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto py-20 rounded-2xl border border-accent/30 bg-accent/5 text-center"
          style={{ 
            transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(24px)",
            borderColor: "rgba(255, 255, 255, 0.1)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(194,133,46,0.5)"
            e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(194,133,46,0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(194,133,46,0.3)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <Heading as="h2" className="mb-4">
            Ready to collaborate?
          </Heading>
          <Body className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We are selective about the projects we take on. Tell us about yours.
          </Body>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full group"
            style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Start a Conversation
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}