import { MediaGrid } from "@/components/media-grid"
import { mediaItems, mediaCategories } from "@/lib/data"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Eyebrow, Heading, Body } from "@/components/ui/typography"

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
              <Eyebrow>Media</Eyebrow>
              <Heading as="h1">Media</Heading>
              <Body className="text-lg text-muted-foreground">
                Publications, releases, and stories from the KELL catalog.
              </Body>
            </div>
          </div>

          <div className="mb-12">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All categories</TabsTrigger>
                {mediaCategories.map((c) => (
                  <TabsTrigger key={c.value} value={c.value}>
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {mediaCategories.map((c) => (
                <TabsContent key={c.value} value={c.value} className="hidden">
                  {filtered.filter((i) => i.category === c.value).length > 0 ? (
                    <p>Showing {c.label.toLowerCase()}.</p>
                  ) : null}
                </TabsContent>
              ))}
              <TabsContent value="all" className="hidden">
                <p>All media publications.</p>
              </TabsContent>
            </Tabs>
          </div>

          <MediaGrid items={filtered} />
        </div>
      </section>
    </div>
  )
}
