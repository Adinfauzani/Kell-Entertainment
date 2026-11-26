const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

export interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0
  const hours = parseInt(match[1] || "0", 10)
  const minutes = parseInt(match[2] || "0", 10)
  const seconds = parseInt(match[3] || "0", 10)
  return hours * 3600 + minutes * 60 + seconds
}

export async function getLatestVideos(maxResults = 5): Promise<YouTubeVideo[]> {
  "use cache"
  if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
    return []
  }

  const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search")
  searchUrl.searchParams.set("part", "snippet")
  searchUrl.searchParams.set("channelId", YOUTUBE_CHANNEL_ID)
  searchUrl.searchParams.set("order", "date")
  searchUrl.searchParams.set("type", "video")
  searchUrl.searchParams.set("maxResults", String(maxResults + 5))
  searchUrl.searchParams.set("key", YOUTUBE_API_KEY)

  const searchRes = await fetch(searchUrl.toString(), { next: { revalidate: 3600 } })
  if (!searchRes.ok) {
    return []
  }

  const searchData = await searchRes.json()
  const items = searchData.items || []
  if (items.length === 0) return []

  const videoIds = items.map((item: any) => item.id.videoId).join(",")
  const detailsUrl = new URL("https://www.googleapis.com/youtube/v3/videos")
  detailsUrl.searchParams.set("part", "contentDetails")
  detailsUrl.searchParams.set("id", videoIds)
  detailsUrl.searchParams.set("key", YOUTUBE_API_KEY)

  const detailsRes = await fetch(detailsUrl.toString(), { next: { revalidate: 3600 } })
  if (!detailsRes.ok) {
    return items.slice(0, maxResults).map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
      publishedAt: item.snippet.publishedAt,
    }))
  }

  const detailsData = await detailsRes.json()
  const durationMap = new Map<string, number>()
  for (const v of detailsData.items || []) {
    durationMap.set(v.id, parseDuration(v.contentDetails?.duration || "PT0S"))
  }

  return items
    .filter((item: any) => (durationMap.get(item.id.videoId) ?? 0) >= 60)
    .slice(0, maxResults)
    .map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
      publishedAt: item.snippet.publishedAt,
    }))
}
