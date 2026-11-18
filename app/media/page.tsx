import { MediaGrid } from "@/components/media-grid"
import { mediaItems, mediaCategories } from "@/lib/data"

export const metadata = {
  title: "Media",
  description: "KELL Entertainment media publications and releases.",
}

interface PageProps {
  searchParams?: { q?: string; category?: string }
}

export default function MediaPage({ searchParams }: PageProps) {
  const q = (searchParams?.q ?? "").toLowerCase()
  const category = searchParams?.category ?? "all"

  const filtered = mediaItems.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q)
    const matchesCat = category === "all" || item.category === category
    return matchesQuery && matchesCat
  })

  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-20 pb-24 lg:pt-28 lg:pb-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16">
            <div className="max-w-lg">
              <h1 className="font-heading text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                Media
              </h1>
              <p className="text-lg text-muted-foreground">
                Publications, releases, and stories from the KELL catalog.
              </p>
            </div>
          </div>

          <form
            method="GET"
            className="grid md:grid-cols-12 gap-6 mb-12 border border-border/50 p-4 rounded-xl bg-surface/50"
          >
            <div className="md:col-span-4 lg:col-span-3 flex flex-col">
              <label
                htmlFor="category"
                className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={category}
                className="block w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">All categories</option>
                {mediaCategories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex items-end">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21l-4.35-4.35" />
                  </svg>
                </span>
                <input
                  id="search"
                  name="q"
                  defaultValue={q}
                  placeholder="Search media…"
                  className="block w-full pl-10 rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-5 w-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <MediaGrid items={filtered} />
        </div>
      </section>
    </div>
  )
}
