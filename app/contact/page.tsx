"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input, Label } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Send } from "lucide-react"

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
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [submitting, setSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  )
  const [serverMessage, setServerMessage] = React.useState("")

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
      setStatus("idle")
      return
    }

    setSubmitting(true)
    setStatus("idle")

    // Simulate server round-trip + spam check (honeypot handled server-side)
    await new Promise((r) => setTimeout(r, 1200))

    const ok = Math.random() > 0.1
    setSubmitting(false)
    if (ok) {
      setStatus("success")
      setServerMessage("Thank you. Your message has been sent.")
      setFormData({ fullName: "", email: "", subject: "", category: "", message: "" })
    } else {
      setStatus("error")
      setServerMessage(
        "Something went wrong. Please try again or email us directly."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="bg-background text-foreground">
        <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-accent/10 p-3 text-accent">
                <Send className="h-8 w-8" />
              </div>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight mb-4">
              Message Sent
            </h1>
            <p className="text-muted-foreground mb-10">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent font-medium uppercase tracking-wider text-sm hover:underline"
            >
              Back to home <span className="text-accent">→</span>
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Contact
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Get in touch for bookings, collaborations, media inquiries,
                  or general questions.
                </p>
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

            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-heading text-2xl font-bold tracking-tight mb-2">
                Send a message
              </h2>

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
                    className={cnInput(
                      errors.fullName && "border-destructive/50 focus-visible:ring-destructive/50"
                    )}
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
                    className={cnInput(
                      errors.email && "border-destructive/50 focus-visible:ring-destructive/50"
                    )}
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
                  className={cnInput(
                    errors.subject && "border-destructive/50 focus-visible:ring-destructive/50"
                  )}
                />
                {errors.subject && (
                  <p className="text-[11px] text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Inquiry Category</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="block w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
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

              {/* Honeypot spam field — hidden from users */}
              <div className="absolute -top-10 -left-10">
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />
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

              {serverMessage && (
                <p
                  className={`text-sm ${status === "error" ? "text-destructive" : "text-accent"}`}
                >
                  {serverMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function cnInput(extra?: string) {
  return `block w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${extra ?? ""}`
}
