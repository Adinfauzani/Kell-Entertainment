import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
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
  HeroImage,
  EditorialImage,
  ProjectPreview,
  GalleryImage,
} from "@/components/ui/image"
import { playIcon } from "@/components/ui/icons"
import { featuredProjects, mediaItems, navLinks } from "@/lib/data"

export const metadata = {
  title: "Home",
  description:
    "KELL Entertainment — creative media, entertainment production, visual storytelling, and digital experiences.",
}

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-32 lg:pt-48 lg:pb-64 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-[700px] h-[700px] rounded-full bg-accent/10 blur-[120px] -top-24 -left-24 animate-[pulse_8s_ease-in-out_infinite]"
          />
          <div
            className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px] -bottom-20 -right-20 animate-[pulse_10s_ease-in-out_infinite_reverse]"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div
              className={cn(
                "lg:col-span-5 xl:col-span-6 flex flex-col justify-center",
                "order-2 lg:order-1"
              )}
            >
              <Reveal
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="relative flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-accent"></span>
                </span>
                <Eyebrow className="mb-0">Now presenting</Eyebrow>
              </Reveal>

              <Reveal
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="max-w-lg"
              >
                <Display className="mb-6 text-balance">
                  KELL <span className="gold-text">Entertainment</span>
                </Display>
                <Body className="text-lg leading-relaxed mb-10 max-w-lg text-muted-foreground">
                  Creative media, entertainment production, visual storytelling,
                  and digital experiences built for the modern audience.
                </Body>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/gallery"
                    className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full sm:w-auto"
                  >
                    Explore Our Work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-border bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent h-11 px-6 text-base w-full sm:w-auto"
                  >
                    Contact Us
                  </Link>
                </div>
              </Reveal>

              <Reveal
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 flex items-center gap-3 text-xs font-medium uppercase tracking-wider"
              >
                <span className="h-px w-4 bg-border" />
                <Metadata as="span">KELL Entertainment &middot; 2026</Metadata>
              </Reveal>
            </div>

            <div
              className={cn(
                "lg:col-span-7 xl:col-span-6 flex flex-col items-center justify-center",
                "order-1 lg:order-2"
              )}
            >
              <Reveal
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/5] group"
              >
                <div className="absolute -inset-1 bg-accent/10 blur-[60px] rounded-2xl group-hover:bg-accent/15 transition-colors duration-500" />
                <div className="relative rounded-xl border border-accent/20 overflow-hidden shadow-2xl shadow-black/40">
                  <HeroImage
                    src="/hero.png"
                    alt="KELL Entertainment creative studio"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <Caption className="text-accent font-semibold uppercase tracking-wider">
                      KELL Entertainment
                    </Caption>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <Heading as="h2" className="mb-0">
                  About KELL
                </Heading>
                <Body className="leading-relaxed">
                  KELL Entertainment is an independent creative studio focused on
                  media production, visual storytelling, and digital experiences.
                  We work with artists, brands, and creators to produce work that
                  feels intentional and lasting.
                </Body>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent font-medium uppercase tracking-wider text-sm hover:underline"
                >
                  Learn more <span className="text-accent">→</span>
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-xl border border-border bg-surface overflow-hidden group">
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="Featured work from KELL Entertainment"
                  ratio="4/3"
                  lazyLoading={false}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8">
                    <span className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="h-5 w-5 text-accent-foreground">{playIcon}</span>
                    </span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-xs">
                      Featured Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-12">
            <div>
              <Heading as="h2">Featured Projects</Heading>
              <Body className="text-muted-foreground">
                Selected creative work from the KELL catalog.
              </Body>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectPreview
                key={project.id}
                src={project.cover}
                alt={project.title}
                title={project.title}
                category={project.category}
                href={`/gallery`}
                className="group"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Media */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Heading as="h2">Latest Media</Heading>
              <Body className="text-muted-foreground">
                Recent publications and releases.
              </Body>
            </div>
            <Link
              href="/media"
              className="text-sm font-medium uppercase tracking-wider text-accent hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaItems
              .filter((m) => m.featured)
              .slice(0, 3)
              .map((item) => (
                <GalleryImage
                  key={item.slug}
                  src={item.cover}
                  alt={item.title}
                  caption={item.title}
                  category={item.category}
                />
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto py-20 rounded-2xl border border-accent/30 bg-accent/5 text-center">
          <Heading as="h2" className="mb-4">
            Ready to collaborate?
          </Heading>
          <Body className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We are selective about the projects we take on. Tell us about yours.
          </Body>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
