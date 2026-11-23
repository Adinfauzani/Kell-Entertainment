import Link from "next/link"
import { Heading, Body, Caption, Metadata, Display } from "@/components/ui/typography"

export const metadata = {
  title: "Privacy Policy",
  description: "KELL Entertainment Privacy Policy.",
}

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body:
      "This Privacy Policy explains how KELL Entertainment collects, uses, discloses, and protects your information when you visit our website or contact us. We are committed to being transparent about our practices and protecting your privacy.",
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    body:
      "We collect personal information you provide directly, such as your name and email address when you submit our contact form. We also collect non-personal, aggregated data such as browser type and interaction with the site to improve your experience.",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body:
      "We use your information to respond to your inquiries, communicate about our work, and analyze site traffic to improve content and user experience. We do not sell or rent your personal information to third parties.",
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    body:
      "Our site may use cookies or similar technologies to remember preferences and analyze traffic. You can control cookie preferences through your browser settings.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body:
      "We may use trusted service providers to operate the website and deliver services. These providers are subject to confidentiality obligations and are not permitted to use your data for their own purposes.",
  },
  {
    id: "data-security",
    title: "Data Storage and Security",
    body:
      "We implement appropriate technical and organizational measures to protect your information. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body:
      "We retain personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body:
      "You may request access to, correction of, or deletion of your personal data at any time. You may also opt out of marketing communications by contacting us.",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body:
      "Our site is not directed to children under 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    body:
      "We may update this Privacy Policy from time to time. Your continued use of the site after changes are posted constitutes acceptance of the revised policy.",
  },
  {
    id: "contact",
    title: "Contact Information",
    body:
      "If you have questions about this Privacy Policy or your data, please contact us at hello@kell.id.",
  },
]

export default function Privacy() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3 hidden lg:block">
              <Caption className="mb-4 uppercase tracking-wider text-accent font-medium">
                Contents
              </Caption>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="h-5 w-5 text-accent-foreground">P</span>
                </span>
                <Display className="mb-0">Privacy Policy</Display>
              </div>
              <Body className="text-lg text-muted-foreground leading-relaxed mb-12">
                Effective date: 18 November 2026. This policy applies to the KELL
                Entertainment website.
              </Body>

              <div className="space-y-8 max-w-2xl">
                {sections.map((section) => (
                  <div key={section.id} id={section.id}>
                    <Heading as="h3" className="text-2xl font-bold tracking-tight mb-4">
                      {section.title}
                    </Heading>
                    <Body className="leading-relaxed text-muted-foreground">
                      {section.body}
                    </Body>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-border/50 flex items-center gap-2 text-sm text-muted-foreground">
                <span>hello@kell.id</span>
                <span className="text-accent/60">•</span>
                <Link href="/" className="hover:underline">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
