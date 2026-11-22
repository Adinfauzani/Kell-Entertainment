import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Fredoka } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${plusJakarta.variable} ${fredoka.variable} h-full antialiased`}
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
