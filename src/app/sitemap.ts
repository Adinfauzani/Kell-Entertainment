import { MetadataRoute } from "next"
import { mediaItems } from "@/lib/data"

const baseUrl = "https://kell.id"

const routes = ["", "/about", "/media", "/gallery", "/contact", "/privacy-policy", "/terms"]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-11-18T00:00:00.000Z",
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const mediaRoutes = mediaItems.map((item) => ({
    url: `${baseUrl}/media/${item.slug}`,
    lastModified: `${item.date}T00:00:00.000Z`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...mediaRoutes]
}
