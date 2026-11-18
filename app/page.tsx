import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { playIcon } from "@/components/ui/icons"
import { featuredProjects, mediaItems } from "@/lib/data"

export const metadata = {
  title: "Home",
  description:
    "KELL Entertainment — creative media, entertainment production, visual storytelling, and digital experiences.",
}

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] -top-20 -left-20 animate-[pulse_8s_ease-in-out_infinite]"
          />
          <div
            className="w-[500px] h-[500px] rounded-full bg-accent/5 blur-[80px] -bottom-10 -right-10 animate-[pulse_10s_ease-in-out_infinite_reverse]"
          />
        </div>

        <div className="max-w-7xl mx-auto">
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
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Now presenting
            </span>
          </Reveal>

          <Reveal
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-6xl font-bold tracking-tight leading-[1.05] text-foreground mb-6 text-balance">
              KELL{" "}
              <span className="gold-text">Entertainment</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Creative media, entertainment production, visual storytelling,
              and digital experiences built for the modern audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/gallery" className="w-full">
                  Explore Our Work
                </Link>
              </Button>
              <Button variant="subtle" asChild size="lg">
                <Link href="/contact" className="w-full">
                  Contact Us
                </Link>
              </Button>
            </div>
          </Reveal>
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
                <h2 className="font-heading text-4xl font-bold tracking-tight">
                  About KELL
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  KELL Entertainment is an independent creative studio focused on
                  media production, visual storytelling, and digital experiences.
                  We work with artists, brands, and creators to produce work that
                  feels intentional and lasting.
                </p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
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
              <h2 className="font-heading text-4xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Selected creative work from the KELL catalog.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:border-accent/60">
                <div className="relative aspect-[3/4] rounded-lg border border-border bg-surface overflow-hidden mb-4 group-hover:border-accent/40">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                      <span className="h-4 w-4">{playIcon}</span>
                    </span>
                  </div>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader className="p-0 pt-0 pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mt-1">
                    {project.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Media */}
      <section className="px-6 py-24 bg-surface/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight">
                Latest Media
              </h2>
              <p className="text-muted-foreground">
                Recent publications and releases.
              </p>
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
                <Card key={item.slug} className="group">
                  <div className="relative aspect-[3/4] rounded-lg border border-border bg-surface overflow-hidden mb-4">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardHeader className="p-0 pt-0 pb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.date}</span>
                      <span>{item.author}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto py-20 rounded-2xl border border-accent/30 bg-accent/5 text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We are selective about the projects we take on. Tell us about yours.
          </p>
          <Button asChild size="lg" className="w-full">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
