"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  Display,
  Heading,
  Body,
  Eyebrow,
  Caption,
} from "@/components/ui/typography"
import { EditorialImage, HeroImage } from "@/components/ui/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { playIcon } from "@/components/ui/icons"
import { teamMembers } from "@/lib/data"

const values = [
  {
    title: "Creativity",
    body: "Menghargai ide dan keberanian untuk menciptakan sesuatu yang baru.",
  },
  {
    title: "Collaboration",
    body: "Percaya bahwa karya yang baik dapat tumbuh melalui kerja sama.",
  },
  {
    title: "Authenticity",
    body: "Mengutamakan keaslian ide, karakter, dan perspektif.",
  },
  {
    title: "Growth",
    body: "Menjadikan setiap proses sebagai kesempatan untuk belajar dan berkembang.",
  },
  {
    title: "Expression",
    body: "Memberikan ruang bagi setiap individu untuk menyampaikan cerita dan gagasannya.",
  },
]

const philosophy = [
  "Kami percaya kreativitas adalah praktik, bukan sekadar produk.",
  "Kami percaya kolaborasi lebih berarti daripada kompetisi.",
  "Kami percaya menyelesaikan apa yang dimulai dengan sungguh-sungguh dan tenang.",
]

const whatWeDo = [
  {
    title: "Podcast Production",
    description:
      "Menghadirkan ruang percakapan melalui podcast yang membahas ide, pengalaman, perspektif, dan berbagai topik menarik dari sudut pandang generasi muda.",
    href: "/media?category=creative-projects",
  },
  {
    title: "Video Series Production",
    description:
      "Mengembangkan dan memproduksi video series dengan konsep serta cerita yang dikemas secara kreatif, menarik, dan relevan dengan audiens.",
    href: "/media?category=entertainment",
  },
  {
    title: "Creative Media Production",
    description:
      "Mengolah gagasan menjadi konten audiovisual melalui proses kreatif, mulai dari pengembangan konsep hingga produksi dan publikasi.",
    href: "/gallery",
  },
  {
    title: "Creative Collaboration",
    description:
      "Membuka peluang kolaborasi untuk individu maupun komunitas yang memiliki semangat dan ketertarikan dalam dunia kreatif.",
    href: "/contact",
  },
]

export default function About() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden px-6" style={{ paddingTop: "var(--spacing-20)", paddingBottom: "var(--spacing-24)" }}>
        <div className="absolute inset-0 -z-10">
          <div className="w-[800px] h-[800px] rounded-full bg-accent/10 blur-[160px] -top-40 -left-40 animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="w-[700px] h-[700px] rounded-full bg-accent/5 blur-[120px] -bottom-40 -right-40 animate-[pulse_12s_ease_in_out_infinite_reverse]" />
        </div>

        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 lg:pt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/5 px-3 py-1"
              >
                <Eyebrow>KELL Entertainment</Eyebrow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <Display as="h1">Tentang <span className="text-gradient-gold">KELL Entertainment</span></Display>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted-foreground max-w-xl"
              >
                <Body className="text-lg">A Place Where Creativity Finds Its Voice.</Body>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground/70"
              >
                <Caption>Didirikan 20 Oktober 2026</Caption>
                <span className="w-px h-4 bg-border/50" />
                <Caption>Studio Kreatif Gen Z</Caption>
                <span className="w-px h-4 bg-border/50" />
                <Caption>Jakarta, Indonesia</Caption>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-2xl border border-border/50 bg-surface overflow-hidden group"
                style={{ maxWidth: "var(--hero-image-max)", marginLeft: "auto" }}
              >
                <HeroImage
                  src="/images/placeholder.svg"
                  alt="KELL Entertainment creative studio workspace"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="h-14 w-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="h-6 w-6 text-accent-foreground">{playIcon}</span>
                    </span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                      Our Story
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-y border-border/50 bg-surface/30" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 text-accent"
              >
                <Eyebrow>Siapa Kami</Eyebrow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Heading as="h2">KELL Entertainment adalah sebuah wadah kreatif yang berfokus pada pengembangan karya dan produksi konten audiovisual, khususnya podcast dan video series.</Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 text-muted-foreground"
              >
                <Body>Kami hadir sebagai ruang bagi generasi muda untuk menuangkan ide, mengekspresikan kreativitas, serta menghadirkan cerita dan perspektif baru melalui karya.</Body>
                <Body>Kami percaya bahwa setiap orang memiliki cerita, gagasan, dan potensi yang layak untuk ditampilkan. Karena itu, KELL Entertainment dibangun dengan semangat kolaborasi, keberanian berekspresi, dan keinginan untuk menciptakan sesuatu yang bermakna.</Body>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-2xl border border-border/50 bg-surface overflow-hidden"
              >
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="KELL Entertainment team collaborating"
                  ratio="3/4"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] rounded-2xl border border-border/50 bg-surface overflow-hidden"
              >
                <EditorialImage
                  src="/images/placeholder.svg"
                  alt="KELL Entertainment founding story"
                  ratio="4/3"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="h-14 w-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="h-6 w-6 text-accent-foreground">{playIcon}</span>
                    </span>
                    <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                      Founded October 20, 2026
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 lg:order-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xl font-mono">01</span>
                <Eyebrow>Our Story</Eyebrow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Heading as="h2">Berawal dari Sekumpulan Ide, Tumbuh Menjadi Sebuah Karya.</Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 text-muted-foreground"
              >
                <Body>KELL Entertainment berawal dari perkumpulan sejumlah anak muda Gen Z yang memiliki ketertarikan dan semangat yang sama: ingin menciptakan sesuatu dan menampilkan karya mereka kepada lebih banyak orang.</Body>
                <Body>Dari berbagai percakapan, ide, dan keinginan untuk berekspresi, muncul sebuah gagasan untuk membangun ruang kreatif yang dapat menjadi tempat berkumpul, berkolaborasi, dan menghasilkan karya.</Body>
                <Body>Keinginan sederhana tersebut kemudian berkembang menjadi sebuah langkah nyata. Pada <strong>20 Oktober 2026</strong>, KELL Entertainment resmi didirikan sebagai wadah untuk mengembangkan kreativitas melalui podcast, video series, dan berbagai bentuk produksi konten kreatif lainnya.</Body>
                <Body>Kami memulai perjalanan ini dengan satu keyakinan: bahwa karya tidak harus menunggu sempurna untuk mulai ditampilkan. Setiap ide memiliki kesempatan untuk berkembang, dan setiap proses adalah bagian dari perjalanan kreatif.</Body>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-border/50 bg-surface/30" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <Eyebrow>Purpose</Eyebrow>
                <Heading as="h2">Visi & Misi</Heading>
            <Body className="mt-6 text-muted-foreground max-w-xl mx-auto">Kami dibangun di atas fondasi tujuan yang jelas: memberdayakan generasi muda melalui ruang kreatif yang bermakna.</Body>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 lg:p-10 rounded-2xl border border-border/50 bg-background/50 space-y-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xl font-mono">V</span>
                <div>
                  <Heading as="h3" className="text-xl">Visi</Heading>
                  <Caption className="mt-1">Ke mana kami menuju</Caption>
                </div>
              </div>
              <Body className="text-muted-foreground text-lg leading-relaxed pt-2">
                Menjadi wadah kreatif yang mampu mendorong generasi muda untuk berani berkarya, menghadirkan cerita yang inspiratif, serta membangun ekosistem produksi konten yang inovatif dan relevan dengan perkembangan zaman.
              </Body>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 lg:p-10 rounded-2xl border border-border/50 bg-background/50 space-y-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xl font-mono">M</span>
                <div>
                  <Heading as="h3" className="text-xl">Misi</Heading>
                  <Caption className="mt-1">Bagaimana kami sampai di sana</Caption>
                </div>
              </div>
              <ol className="space-y-4 text-muted-foreground leading-relaxed pt-2">
                {[
                  "Empowering Young Creators — Membuka ruang bagi generasi muda untuk mengembangkan potensi, ide, dan kreativitas.",
                  "Producing Meaningful Content — Menghasilkan podcast dan video series yang menarik, berkualitas, dan memiliki nilai bagi audiens.",
                  "Building Creative Collaboration — Mendorong kolaborasi antarindividu dengan berbagai latar belakang, perspektif, dan kemampuan.",
                  "Encouraging Creative Expression — Menciptakan lingkungan yang mendukung kebebasan berekspresi dan keberanian dalam menampilkan karya.",
                  "Growing Together — Terus belajar, berkembang, dan beradaptasi dalam industri kreatif dan media digital.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-accent font-mono text-xs mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <Eyebrow>Yang Kami Lakukan</Eyebrow>
            <Heading as="h2" className="mt-4">Lebih dari Konten.<br />Kami Menciptakan Pengalaman.</Heading>
            <Body className="mt-6 text-muted-foreground max-w-xl mx-auto">Setiap proyek yang kami tangani bukan sekadar menghasilkan konten, melainkan menciptakan pengalaman yang bermakna bagi audiens dan kolaborator.</Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whatWeDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-6 lg:p-8 rounded-2xl border border-border/50 bg-surface transition-all duration-500 hover:border-accent/20"
              >
                <div className="mb-5">
                  <span className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {playIcon}
                  </span>
                </div>
                <Link href={item.href} className="block font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                  {item.title}
                </Link>
                <Body className="text-muted-foreground text-sm leading-relaxed">{item.description}</Body>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-border/50 bg-surface/30" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <Eyebrow>Nilai-Nilai</Eyebrow>
            <Heading as="h2" className="mt-4">Nilai-Nilai Kami</Heading>
            <Body className="mt-6 text-muted-foreground max-w-xl mx-auto">Prinsip-prinsip yang memandu setiap keputusan, kolaborasi, dan karya yang kami hasilkan.</Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-surface hover:border-accent/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm font-mono">
                    {value.title.charAt(0)}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">{value.title}</h3>
                </div>
                <Body className="text-muted-foreground text-sm leading-relaxed">{value.body}</Body>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Team */}
      <section style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <Eyebrow>Tim</Eyebrow>
            <Heading as="h2" className="mt-4">Orang-orang di Balik KELL.</Heading>
            <Body className="mt-6 text-muted-foreground max-w-xl mx-auto">Kami dibangun oleh individu-individu yang berbagi visi: menciptakan ruang kreatif yang bermakna untuk generasi muda.</Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="group overflow-hidden hover:border-accent/30 transition-all">
                  <div className="relative aspect-square overflow-hidden">
                    <EditorialImage
                      src={member.image}
                      alt={member.name}
                      ratio="1/1"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base font-semibold">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-accent text-sm font-medium uppercase tracking-wider">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Body className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </Body>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <Eyebrow>Filosofi</Eyebrow>
            <Heading as="h2" className="mt-4">Filosofi Kreatif</Heading>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto space-y-8"
          >
            {philosophy.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 text-lg text-muted-foreground leading-relaxed block"
              >
                <span className="absolute left-0 top-0.5 h-4 w-0.5 bg-accent" />
                {line}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-y border-border/50 bg-surface/30 relative overflow-hidden" style={{ paddingTop: "calc(var(--section-gap) * 1.5)", paddingBottom: "calc(var(--section-gap) * 1.5)" }}>
        <div className="absolute inset-0 -z-10">
          <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] -top-20 -left-20" />
          <div className="w-[500px] h-[500px] rounded-full bg-accent/3 blur-[100px] -bottom-20 -right-20" />
        </div>

        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 mb-10"
            >
              <Eyebrow>Asal</Eyebrow>
              <Heading as="h2">Setiap Cerita Hebat Dimulai dari Suatu Tempat.</Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-muted-foreground max-w-xl mx-auto mb-10"
            >
              <Body>KELL Entertainment mungkin berawal dari sekumpulan anak muda dengan ide dan keinginan yang sama. Namun, kami percaya bahwa sesuatu yang besar dapat dimulai dari langkah sederhana.</Body>
              <Body>Kami tidak hanya ingin membuat konten. Kami ingin membangun ruang tempat ide bertemu, cerita tercipta, dan karya mendapatkan panggungnya.</Body>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-xl font-semibold tracking-tight text-foreground mb-4"
            >
              This is KELL Entertainment. This is where our stories begin.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-mono text-muted-foreground/60 uppercase tracking-wider mb-12"
            >
              Didirikan pada 20 Oktober 2026.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-16 lg:py-20 rounded-2xl border border-accent/20 bg-accent/5 text-center backdrop-blur-xl"
              style={{ background: "rgba(9, 9, 11, 0.4)", borderColor: "rgba(194, 133, 46, 0.2)" }}
            >
              <Heading as="h2" className="mb-4">Let&rsquo;s make something.</Heading>
              <Body className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
                Kami selektif dalam memilih proyek. Hubungi kami dengan ide Anda dan kami akan merespons ketika kami dapat memberikan perhatian yang layak.
              </Body>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 uppercase tracking-wider border-transparent bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 active:bg-accent-deep h-11 px-6 text-base w-full sm:w-auto group"
              >
                Hubungi Kami
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
