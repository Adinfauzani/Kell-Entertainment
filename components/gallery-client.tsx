"use client"

import * as React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog"
import { Heading, Caption } from "@/components/ui/typography"
import type { GalleryItem } from "@/lib/data"

interface GalleryClientProps {
  items: GalleryItem[]
}

export function GalleryClient({ items }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [currentItem, setCurrentItem] = React.useState<GalleryItem | null>(null)

  const openLightbox = (item: GalleryItem) => {
    setCurrentItem(item)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <ImageLightbox
              src={item.image}
              alt={item.caption}
              caption={item.caption}
              category={item.category}
            />
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center py-20">
            <Caption>No images in this category.</Caption>
          </div>
        )}
      </div>

      {currentItem && (
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="p-4 max-w-full p-0 bg-transparent border-none shadow-none">
              <DialogClose>
                <button
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close lightbox"
                  onClick={() => setLightboxOpen(false)}
                >
                  <span className="sr-only">Close</span>
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </button>
              </DialogClose>
              <div className="flex flex-col items-center justify-center max-h-[90vh] gap-4">
                <img
                  src={currentItem.image}
                  alt={currentItem.caption}
                  className="max-w-full max-h-[70vh] rounded-lg border border-white/10 object-contain shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
                <Caption className="text-accent">{currentItem.category}</Caption>
                <Heading as="h3" className="text-xl font-bold text-white">
                  {currentItem.caption}
                </Heading>
              </div>
            </DialogContent>
          </Dialog>
      )}
    </>
  )
}

function ImageLightbox({
  src,
  alt,
  caption,
  category,
}: {
  src: string
  alt: string
  caption?: string
  category?: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-surface">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        style={{ aspectRatio: "3/4" }}
        loading="lazy"
        decoding="async"
      />
      {category && (
        <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
          {category}
        </span>
      )}
    </div>
  )
}
