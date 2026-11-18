"use client"

import * as React from "react"
import { Lightbox } from "@/components/lightbox"
import type { GalleryItem } from "@/lib/data"

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxIndex, setLightboxIndex] = React.useState(0)

  const lightboxItems = items.map((item) => ({
    id: item.id,
    image: item.image,
    caption: item.caption,
    category: item.category,
  }))

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={item.id}
            onClick={() => {
              setLightboxIndex(i)
              setLightboxOpen(true)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLightboxIndex(i)
                setLightboxOpen(true)
              }
            }}
            role="button"
            tabIndex={0}
            className="group relative aspect-[4/5] rounded-xl border border-border bg-surface overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:border-accent/60"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
            </div>
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="relative z-10 text-xs font-medium uppercase tracking-wider text-accent">
                {item.category}
              </span>
              <h3 className="relative z-10 text-lg font-bold text-foreground mt-1 leading-tight">
                {item.caption}
              </h3>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center py-20">
            <p className="text-muted-foreground">No images in this category.</p>
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
