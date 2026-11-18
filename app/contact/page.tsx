"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input, Label } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Mail, MapPin } from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/toast"
import {
  Heading as TypographyHeading,
  Body as TypographyBody,
} from "@/components/ui/typography"

const CATEGORIES = [
  { value: "general", label: "General Inquiry" },
  { value: "collaboration", label: "Business Collaboration" },
  { value: "media", label: "Media Inquiry" },
  { value: "other", label: "Other" },
] as const

type FormData = {
  fullName: string
  email: string
  subject: string
  category: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const validate = (data: FormData): FieldErrors => {
  const errors: FieldErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!data.fullName.trim()) errors.fullName = "Full name is required."
  else if (data.fullName.trim().length < 2)
    errors.fullName = "Full name must be at least 2 characters."

  if (!data.email.trim()) errors.email = "Email address is required."
  else if (!emailRegex.test(data.email.trim()))
    errors.email = "Please enter a valid email address."

  if (!data.subject.trim()) errors.subject = "Subject is required."
  else if (data.subject.trim().length < 3)
    errors.subject = "Subject must be at least 3 characters."

  if (!data.category) errors.category = "Please select an inquiry category."

  if (!data.message.trim()) errors.message = "Message is required."
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters."

  return errors
}

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kell.id",
    href: "mailto:hello@kell.id",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
]

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [submitting, setSubmitting] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement & { name: keyof FormData }
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof FieldErrors]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const fieldErrors = validate(formData)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitting(false)
      setDialogOpen(true)
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "success",
      })
      setFormData({ fullName: "", email: "", subject: "", category: "", message: "" })
    } catch {
      setSubmitting(false)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <TypographyHeading as="h1" className="text-4xl font-bold tracking-tight">
                  Contact
                </TypographyHeading>
                <TypographyBody className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Get in touch for bookings, collaborations, media inquiries,
                  or general questions.
                </TypographyBody>
              </div>

              <div className="space-y-6">
                {infoItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-sm bg-accent/10 p-2 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.label}</h3>
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Separator className="my-8" />

              <div className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Instagram",
                  "TikTok",
                  "X",
                  "YouTube",
                ].map((platform) => (
                  <span key={platform} className="flex items-center gap-2">
                    <span className="w-px h-3 bg-muted-foreground" />
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogContent>
                <DialogClose>
                  <button
                    className="p-2 rounded-sm"
                    aria-label="Close confirmation"
                    onClick={() => setDialogOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </button>
                </DialogClose>
                <DialogTitle>Message Sent</DialogTitle>
                <DialogDescription>
                  Thank you for reaching out. We will get back to you shortly.
                </DialogDescription>
                <Link
                  href="/"
                  onClick={() => setDialogOpen(false)}
                  className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full mt-6"
                >
                  Back to home
                </Link>
              </DialogContent>
            </Dialog>

            <form onSubmit={handleSubmit} className="space-y-5">
              <TypographyHeading as="h2" className="text-2xl font-bold tracking-tight mb-2">
                Send a message
              </TypographyHeading>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className={
                      errors.fullName && "border-destructive/50 focus-visible:ring-destructive/50"
                    }
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-destructive">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className={
                      errors.email && "border-destructive/50 focus-visible:ring-destructive/50"
                    }
                  />
                  {errors.email && (
                    <p className="text-[11px] text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Collaboration proposal"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className={
                    errors.subject && "border-destructive/50 focus-visible:ring-destructive/50"
                  }
                />
                {errors.subject && (
                  <p className="text-[11px] text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Inquiry Category</Label>
                <Select
                  defaultValue=""
                  onValueChange={(v: unknown) =>
                    setFormData((prev) => ({ ...prev, category: String(v) }))
                  }
                >
                  <SelectTrigger
                    id="category"
                    name="category"
                    disabled={submitting}
                    className={
                      errors.category &&
                        "border-destructive/50 focus-visible:ring-destructive/50"
                    }
                  >
                    <span className="text-muted-foreground line-clamp-1">
                      Select a category
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="collaboration">
                      Business Collaboration
                    </SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-[11px] text-destructive">{errors.category}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="block w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.message && (
                  <p className="text-[11px] text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={submitting}
                  className="w-full shadow-lg shadow-accent/25"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
