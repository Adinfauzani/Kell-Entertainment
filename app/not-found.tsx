import Link from "next/link"
import { Button } from "@/components/ui/button"

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
        <Button variant="gold" asChild className="w-full">
          <Link href="/" className="block">
            Return home
          </Link>
        </Button>
      </div>
    </div>
  )
}
