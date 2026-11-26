import { getLatestVideos } from "@/lib/youtube"
import { EditorialImage } from "@/components/ui/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Heading, Body } from "@/components/ui/typography"

export default async function FeaturedProjects() {
  const videos = await getLatestVideos(5)

  if (videos.length === 0) {
    return (
      <section className="px-6 py-24">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="mb-12">
            <Heading as="h2">Proyek Unggulan</Heading>
            <Body className="text-muted-foreground">
              Video terbaru dari channel YouTube KELL.
            </Body>
          </div>
          <div className="text-center text-muted-foreground py-12">
            Video akan segera tersedia.
          </div>
        </div>
      </section>
    )
  }

  const [featured, ...rest] = videos

  return (
    <section className="px-6 py-24">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="mb-12">
          <Heading as="h2">Proyek Unggulan</Heading>
          <Body className="text-muted-foreground">
            Video terbaru dari channel YouTube KELL.
          </Body>
        </div>

        {/* Featured video */}
        <a
          href={`https://www.youtube.com/watch?v=${featured.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-12"
        >
          <Card className="overflow-hidden hover:border-accent/30 transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video overflow-hidden">
                <EditorialImage
                  src={featured.thumbnail}
                  alt={featured.title}
                  ratio="16/9"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
                  Video
                </span>
              </div>
              <CardContent className="flex flex-col justify-center p-6 lg:p-8">
                <Heading as="h3" className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-3">
                  {featured.title}
                </Heading>
                <Body className="text-muted-foreground text-sm mt-4 leading-relaxed line-clamp-4">
                  {featured.description || "Tonton video terbaru dari channel YouTube KELL Entertainment."}
                </Body>
              </CardContent>
            </div>
          </Card>
        </a>

        {/* Rest in 3 columns */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="overflow-hidden hover:border-accent/30 transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <EditorialImage
                      src={video.thumbnail}
                      alt={video.title}
                      ratio="16/9"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute left-3 top-3 z-10 rounded-sm border border-border bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
                      Video
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base font-semibold line-clamp-2 group-hover:text-accent transition-colors">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
