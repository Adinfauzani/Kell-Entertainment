import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  Display,
  Heading,
  Subheading,
  Body,
  Eyebrow,
  Caption,
  Metadata,
} from "@/components/ui/typography"
import {
  EditorialImage,
  ImageLightbox,
} from "@/components/ui/image"
import { playIcon } from "@/components/ui/icons"

export const metadata = {
  title: "About",
  description:
    "About KELL Entertainment — identity, vision, mission, and creative philosophy.",
}

const values = [
  {
    title: "Intentionality",
    body: "Every frame, cut, and decision is made with purpose. We do not create for the sake of output.",
  },
  {
    title: "Restraint",
    body: "Less noise, more signal. We remove what does not serve the story.",
  },
  {
    title: "Longevity",
    body: "Work that outlives the trend cycle. Built to be revisited, not scrolled past.",
  },
]

const philosophy = [
  "We believe creativity is a practice, not a product.",
  "We believe in collaboration over competition.",
  "We believe in finishing what we start, quietly and well.",
]

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent mb-8"
          >
            KELL Entertainment
          </Reveal>
          <Reveal
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            About KELL Entertainment
          </Reveal>
          <Reveal
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            KELL Entertainment is an independent creative studio focused on media
            production, visual storytelling, and digital experiences. We partner
            with artists, brands, and creators to produce work that feels
            intentional and lasting.
          </Reveal>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Reveal
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-2 text-accent font-medium uppercase tracking-wider text-sm"
              >
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-accent"></span>
                </span>
                Brand Story
              </Reveal>
              <Reveal
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-4xl font-bold tracking-tight leading-[1.15]"
              >
                Built around a point of view.
              </Reveal>
              <Reveal
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-muted-foreground leading-relaxed"
              >
                KELL Entertainment began as a response to oversaturated creative
                output — work made for algorithms rather than people. We take the
                opposite approach: fewer projects, deeper consideration, and a
                point of view that does not chase the moment.
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[3/4] rounded-xl border border-border bg-surface overflow-hidden">
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="Our approach at KELL Entertainment"
                  ratio="3/4"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8">
                    <span className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="h-5 w-5 text-accent-foreground">{playIcon}</span>
                    </span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-xs">
                      Our Approach
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Reveal
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                <Heading as="h3">Vision</Heading>
                <Body className="text-muted-foreground leading-relaxed">
                  To be the quiet standard for premium creative media — work
                  recognized not by volume, but by the care behind it.
                </Body>
              </Reveal>
              <Reveal
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <Heading as="h3">Mission</Heading>
                <Body className="text-muted-foreground leading-relaxed">
                  To produce media, visuals, and experiences that creators and
                  audiences return to — long after the first view.
                </Body>
              </Reveal>
            </div>
            <div className="space-y-8">
              <Reveal
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4"
              >
                <Heading as="h3">Core Values</Heading>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  {values.map((value) => (
                    <li key={value.title} className="flex gap-3">
                      <span className="shrink-0 text-accent font-mono text-xs">
                        {value.title}
                      </span>
                      {value.body}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <Heading as="h2" className="text-4xl font-bold tracking-tight mb-12 text-center">
            Creative Philosophy
          </Heading>
          <ul className="max-w-2xl mx-auto space-y-8">
            {philosophy.map((line, i) => (
              <li key={i}>
                <Reveal
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-10 text-lg text-muted-foreground leading-relaxed block"
                >
                  <span className="absolute left-0 top-0.5 h-3.5 w-0.5 bg-accent" />
                  {line}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" className="text-4xl font-bold tracking-tight mb-12 text-center">
            Brand Identity
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Background",
                value: "#09090B",
                desc: "Dominant, near-black canvas.",
              },
              {
                name: "Primary Gold",
                value: "#C2852E",
                desc: "Main accent for emphasis.",
              },
              {
                name: "Classic Gold",
                value: "#DCA046",
                desc: "Hover and interaction states.",
              },
              {
                name: "Champagne Gold",
                value: "#F8D374",
                desc: "Highlights and details.",
              },
              {
                name: "Deep Gold",
                value: "#6B3C0B",
                desc: "Shadows and depth.",
              },
              {
                name: "Soft Gold",
                value: "#FCE6A0",
                desc: "Subtle atmospheric highlights.",
              },
            ].map((swatch) => (
              <div
                key={swatch.name}
                className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors"
              >
                <Caption className="text-muted-foreground uppercase tracking-wider mb-2">
                  {swatch.name}
                </Caption>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-sm border border-border" style={{ backgroundColor: swatch.value }} />
                  <span className="font-mono text-xs text-foreground">{swatch.value}</span>
                </div>
                <Caption className="text-xs text-muted-foreground leading-relaxed">
                  {swatch.desc}
                </Caption>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto py-20 rounded-2xl border border-accent/30 bg-accent/5 text-center">
          <Heading as="h2" className="mb-4">
            Let&rsquo;s make something.
          </Heading>
          <Body className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We are selective about the projects we take on. Reach out with your
            idea and we will respond when we can give it proper attention.
          </Body>
          <Button asChild variant="gold" size="lg" className="w-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
