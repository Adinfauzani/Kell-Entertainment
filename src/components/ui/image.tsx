import Image from "next/image"
import { cn } from "@/lib/utils"
import { Caption, Heading } from "@/components/ui/typography"
import { motion } from "motion/react"

const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
  width?: number
  height?: number
}

export function HeroImage({
  src,
  alt,
  className,
  fill = true,
  priority = false,
  sizes,
  width,
  height,
}: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      width={width}
      height={height}
      className={cn(
        fill ? "absolute inset-0 object-cover object-center" : "object-contain object-center block",
        className
      )}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  )
}
HeroImage.displayName = "HeroImage"

interface EditorialImageProps {
  src: string
  alt: string
  className?: string
  ratio?: "3/4" | "4/3" | "16/9" | "1/1"
  lazyLoading?: boolean
  width?: number
  height?: number
}

export function EditorialImage({
  src,
  alt,
  className,
  ratio = "3/4",
  lazyLoading = true,
  width,
  height,
}: EditorialImageProps) {
  const aspectRatios: Record<string, string> = {
    "3/4": "aspect-[3/4]",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "1/1": "aspect-[1/1]",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface",
        aspectRatios[ratio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        loading={lazyLoading ? "lazy" : "eager"}
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  )
}
EditorialImage.displayName = "EditorialImage"

interface ProjectPreviewProps {
  src: string
  alt: string
  title: string
  category?: string
  href?: string
  className?: string
  style?: React.CSSProperties
}

export function ProjectPreview({
  src,
  alt,
  title,
  category,
  href,
  className,
  style,
}: ProjectPreviewProps) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-xl border border-border bg-surface", className)}
      style={style ?? { transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {category && (
          <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
            {category}
          </span>
        )}
        {href && (
          <a
            href={href}
            className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`View ${title}`}
          />
        )}
      </div>
      {title && (
        <div className="mt-4">
          <Caption className="text-muted-foreground uppercase tracking-wider">{category}</Caption>
          <Heading as="h3" className="text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </Heading>
        </div>
      )}
    </motion.div>
  )
}
ProjectPreview.displayName = "ProjectPreview"

interface GalleryImageProps {
  src: string
  alt: string
  caption?: string
  category?: string
  className?: string
  style?: React.CSSProperties
}

export function GalleryImage({
  src,
  alt,
  caption,
  category,
  className,
  style,
}: GalleryImageProps) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-xl border border-border bg-surface", className)}
      style={style ?? { transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform">
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
        </motion.div>
        {category && (
          <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
            {category}
          </span>
        )}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <Caption className="relative z-10 text-accent">{category}</Caption>
            <Heading as="h3" className="relative z-10 text-lg font-bold text-foreground mt-1 leading-tight">
              {caption}
            </Heading>
          </div>
        )}
      </div>
    </motion.div>
  )
}
GalleryImage.displayName = "GalleryImage"

interface ImageLightboxProps {
  src: string
  alt: string
  category?: string
  className?: string
}

export function ImageLightbox({
  src,
  alt,
  category,
  className,
}: ImageLightboxProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg border border-border bg-surface", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
        style={{ aspectRatio: "3/4" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      {category && (
        <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-black/40 backdrop-blur-xl border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
          {category}
        </span>
      )}
    </div>
  )
}
ImageLightbox.displayName = "ImageLightbox"
