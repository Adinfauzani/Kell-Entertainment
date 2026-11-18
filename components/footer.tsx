import Link from "next/link"
import { Mail, Link as LinkIcon } from "lucide-react"

import { footerLinks, socials, site } from "@/lib/data"

const logoMark = (
  <span className="relative flex items-center gap-1">
    <span className="h-5 w-0.5 bg-accent" />
    <span className="font-heading font-bold text-xl tracking-tight text-accent">KELL</span>
  </span>
)

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-foreground"
              aria-label="KELL Entertainment"
            >
              {logoMark}
              <span className="text-muted-foreground font-medium tracking-wide">Entertainment</span>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Creative media, entertainment production, visual storytelling,
              and digital experiences.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label={social.name}
                >
                  <LinkIcon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Pages
            </h4>
            <div className="space-y-4">
              {footerLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h4>
            <div className="space-y-4">
              {footerLinks.slice(5).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider text-muted-foreground">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Premium entertainment studio.</p>
        </div>
      </div>
    </footer>
  )
}
