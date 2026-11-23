const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

export interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

export async function getLatestVideos(maxResults = 3): Promise<YouTubeVideo[]> {
  "use cache"
  if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
    return []
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/search")
  url.searchParams.set("part", "snippet")
  url.searchParams.set("channelId", YOUTUBE_CHANNEL_ID)
  url.searchParams.set("order", "date")
  url.searchParams.set("type", "video")
  url.searchParams.set("maxResults", String(maxResults))
  url.searchParams.set("key", YOUTUBE_API_KEY)

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!res.ok) {
    return []
  }

  const data = await res.json()
  return (data.items || []).map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
    publishedAt: item.snippet.publishedAt,
  }))
}
