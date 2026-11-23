import * as React from "react"
import { Mic, Film, Camera, Users } from "lucide-react"

export function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

export const playIcon = <PlayIcon />

export function PodcastIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Mic {...props} strokeWidth={1.5} size={24} />
}

export function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Film {...props} strokeWidth={1.5} size={24} />
}

export function MediaIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Camera {...props} strokeWidth={1.5} size={24} />
}

export function CollaborationIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Users {...props} strokeWidth={1.5} size={24} />
}
