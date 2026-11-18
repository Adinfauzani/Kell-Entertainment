import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms & Conditions",
  description: "KELL Entertainment Terms & Conditions.",
}

const sections = [
  {
    title: "Introduction",
    body:
      "These Terms of Service govern your use of the KELL Entertainment website. By accessing or using the site, you accept and agree to these terms. If you do not agree, please discontinue use of the site.",
  },
  {
    title: "Acceptance of Terms",
    body:
      "Your access to and use of the site is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users, and others who access or use the site.",
  },
  {
    title: "Website Usage",
    body:
      "You may use the site for lawful purposes only. You agree not to misuse the site, including by posting unlawful, harmful, or infringing content, or attempting to interfere with the proper functioning of the site.",
  },
  {
    title: "Intellectual Property Rights",
    body:
      "All content on this site — including audio, video, images, text, design, and trademarks — is owned by KELL Entertainment or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.",
  },
  {
    title: "Copyright and Media Usage",
    body:
      "Media displayed on this site is for personal, non-commercial viewing only. Any commercial use of KELL Entertainment media requires a separate licensing agreement.",
  },
  {
    title: "User Submissions",
    body:
      "By submitting content through our contact form, you grant KELL Entertainment a non-exclusive, royalty-free license to use, display, and respond to that content. You remain responsible for any content you submit.",
  },
  {
    title: "External Links",
    body:
      "The site may contain links to third-party websites. We are not responsible for the content or practices of external sites.",
  },
  {
    title: "Limitation of Liability",
    body:
      "To the fullest extent permitted by law, KELL Entertainment shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the site.",
  },
  {
    title: "Website Availability",
    body:
      "The site is provided \"as is\" without warranties of any kind. We do not warrant that the site will be error-free, uninterrupted, or free of viruses or other harmful components.",
  },
  {
    title: "Changes to Terms",
    body:
      "We may update these terms from time to time. Your continued use of the site after changes are posted constitutes acceptance of the revised terms. Details marked for legal review should be confirmed before publication.",
  },
  {
    title: "Governing Law",
    body:
      "These terms are governed by the laws of Indonesia, without regard to conflict of law principles.",
  },
  {
    title: "Contact Information",
    body:
      "If you have questions about these Terms of Service, please contact us at hello@kell.id.",
  },
]

export default function Terms() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-8 w-8 rounded-full bg-accent flex items-center justify-center">
              <span className="h-5 w-5 text-accent-foreground">T</span>
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Effective date: 18 November 2026. Certain details in this document
            are marked for legal review and should be confirmed before
            publication.
          </p>
          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </CardContent>
              </Card>
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
      </section>
    </div>
  )
}
