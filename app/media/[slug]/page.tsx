import Link from "next/link"
import { notFound } from "next/navigation"
import { mediaItems } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { playIcon } from "@/components/ui/icons"
import { EditorialImage, ImageLightbox } from "@/components/ui/image"
import { Heading, Body, Caption, Metadata } from "@/components/ui/typography"

export const generateStaticParams = () => {
  return mediaItems.map((item) => ({ slug: item.slug }))
}

export default function MediaDetail({ params }: { params: { slug: string } }) {
  const item = mediaItems.find((m) => m.slug === params.slug)

  if (!item) {
    notFound()
  }

  const related = mediaItems.filter((m) => m.slug !== item.slug).slice(0, 3)

  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-20 pb-24 lg:pt-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-[700px] h-[700px] rounded-full bg-accent/10 blur-[120px] -top-30 -left-30"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-accent"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">
              {item.category}
            </span>
          </div>
          <Heading as="h1" className="text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            {item.title}
          </Heading>
          <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-10">
            <Metadata>{item.date}</Metadata>
            <span className="h-3.5 w-0.5 bg-border mx-2" />
            <Metadata>{item.author}</Metadata>
          </div>
          <div className="relative aspect-[16/9] rounded-xl border border-border bg-surface overflow-hidden mb-10">
            <EditorialImage
              src={item.cover}
              alt={item.title}
              ratio="16/9"
              lazyLoading={false}
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5">
                <span className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="h-7 w-7 text-accent-foreground">{playIcon}</span>
                </span>
                <span className="text-accent font-semibold uppercase tracking-wider text-xs">
                  Watch {item.title}
                </span>
              </div>
            </div>
          </div>
          <div className="prose prose-invert text-muted-foreground leading-relaxed">
            {item.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <Heading as="h2" className="text-3xl font-bold tracking-tight">
              Related
            </Heading>
            <Link href="/media" className="text-sm font-medium uppercase tracking-wider text-accent hover:underline">
              All media
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Card key={item.slug} className="group hover:border-accent/50">
                <ImageLightbox
                  key={item.slug}
                  src={item.cover}
                  alt={item.title}
                  category={item.category}
                />
                <CardHeader className="p-0 pt-0 pb-2">
                  <Link href={`/media/${item.slug}`}>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
