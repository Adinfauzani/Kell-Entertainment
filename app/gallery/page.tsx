import Link from "next/link"
import { galleryItems, galleryCategories } from "@/lib/data"
import { Heading, Body, Caption } from "@/components/ui/typography"
import { GalleryClient } from "@/components/gallery-client"

export const metadata = {
  title: "Gallery",
  description: "KELL Entertainment visual portfolio and project gallery.",
}

interface PageProps {
  searchParams?: { category?: string }
}

export default function GalleryPage({ searchParams }: PageProps) {
  const category = searchParams?.category ?? "all"

  const filtered =
    category === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === category)

  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-20 pb-24 lg:pt-28 lg:pb-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16">
            <div>
              <Heading as="h1">Gallery</Heading>
              <Body className="text-lg text-muted-foreground">
                A visual record of projects, events, and moments from KELL
                Entertainment.
              </Body>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            <Link
              href={category === "all" ? "/gallery" : "/gallery?category=all"}
              className="rounded-sm border px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors"
            >
              All
            </Link>
            {galleryCategories.map((c) => {
              const active = category === c.value
              return (
                <Link
                  key={c.value}
                  href={`/gallery?category=${c.value}`}
                  className={`rounded-sm border px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors ${
                    active
                      ? "border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                      : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {c.label}
                </Link>
              )
            })}
          </div>

          <GalleryClient items={filtered} />
        </div>
      </section>
    </div>
  )
}
