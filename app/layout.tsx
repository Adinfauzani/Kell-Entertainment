import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic"],
})

export const metadata: Metadata = {
  title: {
    template: "%s — KELL Entertainment",
    default: "KELL Entertainment — Creative Media & Entertainment",
  },
  description:
    "Discover KELL Entertainment, a creative entertainment brand showcasing media, visual storytelling, creative projects, and digital experiences.",
  openGraph: {
    siteName: "KELL Entertainment",
    title: "KELL Entertainment — Creative Media & Entertainment",
    description:
      "Discover KELL Entertainment, a creative entertainment brand showcasing media, visual storytelling, creative projects, and digital experiences.",
    type: "website",
    locale: "en_ID",
  },
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme accentColor="gold" grayColor="slate" radius="medium" scaling="100%" appearance="dark">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
