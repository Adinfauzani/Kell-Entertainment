import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Roboto, JetBrains_Mono } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    template: "%s — KELL Entertainment",
    default: "KELL Entertainment — Media Kreatif & Hiburan",
  },
  description:
    "Temukan KELL Entertainment, brand hiburan kreatif yang menampilkan media, bercerita visual, proyek kreatif, dan pengalaman digital.",
  openGraph: {
    siteName: "KELL Entertainment",
    title: "KELL Entertainment — Media Kreatif & Hiburan",
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
    <html lang="id" className={`${plusJakarta.variable} ${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}>
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
