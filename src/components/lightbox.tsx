"use client"

import * as React from "react"
import { motion } from "motion/react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxItem {
  id: number | string
  image: string
  caption: string
  category: string
}

interface LightboxProps {
  open: boolean
  items: LightboxItem[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ open, items, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = React.useState(initialIndex)
  const current = items[index]

  if (!open) return null

  const next = () => {
    if (items.length <= 1) return
    setIndex((i) => (i + 1) % items.length)
  }
  const prev = () => {
    if (items.length <= 1) return
    setIndex((i) => (i - 1 + items.length) % items.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose()
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div
        className="relative flex flex-col items-center max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center justify-center gap-4 max-w-[80%] max-h-[80vh]">
          <button
            onClick={prev}
            disabled={items.length <= 1}
            className="p-2 rounded-full bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative flex items-center">
            {current && (
              <img
                src={current.image}
                alt={current.caption}
                className="max-w-full max-h-[80vh] rounded-lg border border-white/10 object-contain shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          <button
            onClick={next}
            disabled={items.length <= 1}
            className="p-2 rounded-full bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {current && (
          <div className="mt-6 text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-accent block mb-1">
              {current.category}
            </span>
            <h3 className="text-xl font-bold text-white">{current.caption}</h3>
            <p className="text-[10px] text-white/40 mt-4 uppercase tracking-wider">
              {index + 1} / {items.length}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
