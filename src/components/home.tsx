"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { CreativeRollingText } from "@/components/creative-rolling-text"
import {
  Display,
  Heading,
  Body,
  Eyebrow,
  Caption,
} from "@/components/ui/typography"
import { HeroImage, EditorialImage } from "@/components/ui/image"
import { playIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/data"
import { Mail } from "lucide-react"
export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="px-6 pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-balance">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 inline-flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <Caption className="uppercase tracking-wider">
                  <CreativeRollingText />
                </Caption>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <Display className="text-balance">
                  KELL <span className="text-gradient-gold">Entertainment</span>
                </Display>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground"
              >
                <Body className="mb-0">
                  Media kreatif, produksi hiburan, bercerita visual,
                  dan pengalaman digital untuk audiens modern.
                </Body>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              >
                <Button variant="gold" size="lg" className="font-mono inline-flex items-center gap-2 w-full sm:w-auto group">
                  <Link href="/about" className="inherit text-foreground">
                    Tentang
                  </Link>
                </Button>
                <Button variant="gold-outline" size="lg" className="font-mono inline-flex items-center gap-2 w-full sm:w-auto group">
                  <Link href="/contact" className="inherit">
                    Kontak
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[640px]"
              >
                <HeroImage
                  src="/images/galerry/salsabila.jpeg"
                  alt="KELL Entertainment creative studio"
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-border/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
                  priority
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="px-6 py-24 border-y border-border/50 bg-surface/30">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-accent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xl font-mono">01</span>
                <Eyebrow>Our Story</Eyebrow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <Heading as="h2" className="mb-0">
                  Founded October 20, 2026.
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted-foreground leading-relaxed"
              >
                <Body className="mb-6">
                  KELL Entertainment adalah studio kreatif Gen Z yang dibangun untuk menghasilkan karya bermakna — podcast, serial video, dan produksi audiovisual. Kami hadir sebagai ruang untuk berekspresi dan mewujudkan ide.
                </Body>
                <Body className="mb-0">
                  Setiap proyek dimulai dari percakapan. Setiap ide layak mendapat panggung. Di sinilah cerita terbentuk.
                </Body>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] rounded-2xl border border-border/50 bg-surface overflow-hidden"
              >
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="KELL Entertainment founding story"
                  ratio="4/3"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="h-14 w-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="h-6 w-6 text-accent-foreground">{playIcon}</span>
                    </span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                      Our Story
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 border-y border-border/50 bg-surface/30">
        <div className="max-w-[var(--container-max)] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <Eyebrow>Tim</Eyebrow>
            <Heading as="h2" className="mt-4">
              Orang-orang di Balik KELL.
            </Heading>
            <Body className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Tim erat dari kreator, produser, dan strategis yang percaya pada karya.
            </Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-accent/20"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <EditorialImage
                    src={member.image}
                    alt={member.name}
                    ratio="3/4"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <Caption className="uppercase tracking-wider text-accent font-medium">
                      {member.role}
                    </Caption>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <Body className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </Body>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
