import Link from "next/link"

export const metadata = {
  title: "404 — Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-160px)] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="flex items-center justify-center gap-2 text-accent mb-8">
          <span className="text-6xl font-bold">404</span>
        </div>
        <h1 className="font-heading text-5xl font-bold tracking-tight mb-6">
          Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          The page you are looking for does not exist. It may have been moved
          or removed.
        </p>
        <Link
          href="/"
          className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
