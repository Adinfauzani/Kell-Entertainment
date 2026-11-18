"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbox } from "@/components/lightbox"
import type { MediaItem } from "@/lib/data"

interface MediaGridProps {
  items: MediaItem[]
}

export function MediaGrid({ items }: MediaGridProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxIndex, setLightboxIndex] = React.useState(0)

  const lightboxItems = items.map((item) => ({
    id: item.slug,
    image: item.cover,
    caption: item.title,
    category: item.category,
  }))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Card
            key={item.slug}
            onClick={() => openLightbox(i)}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            role="button"
            tabIndex={0}
            className="group hover:border-accent/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative aspect-[3/4] rounded-lg border border-border bg-surface overflow-hidden mb-4 group-hover:border-accent/40">
              <span className="absolute left-3 top-3 rounded-sm border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
                {item.category}
              </span>
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
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
            <CardFooter>
              <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                <span>{item.date}</span>
                <span>{item.author}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center py-20">
            <p className="text-muted-foreground">No media found.</p>
          </div>
        )}
      </div>
      <Lightbox
        open={lightboxOpen}
        items={lightboxItems}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
