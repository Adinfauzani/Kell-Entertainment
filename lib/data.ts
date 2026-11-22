export const site = {
  name: "KELL Entertainment",
  shortName: "KELL",
  description:
    "KELL Entertainment — creative media, entertainment production, visual storytelling, and digital experiences.",
  url: "https://kell.id",
  email: "hello@kell.id",
}

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
]

export const socials = [
  { name: "Instagram", href: "https://instagram.com/kell" },
  { name: "TikTok", href: "https://tiktok.com/@kell" },
  { name: "X", href: "https://x.com/kell" },
  { name: "YouTube", href: "https://youtube.com/@kell" },
]

export type MediaCategory = "news" | "entertainment" | "creative-projects" | "announcements" | "behind-the-scenes"

export interface MediaItem {
  slug: string
  title: string
  category: MediaCategory
  cover: string
  excerpt: string
  date: string
  author: string
  content: string
  featured?: boolean
}

export const mediaItems: MediaItem[] = [
  {
    slug: "opening-the-frame",
    title: "Opening the Frame",
    category: "creative-projects",
    cover: "/images/placeholder.svg",
    excerpt:
      "A first look at the visual language behind KELL Entertainment — framing stories through light, motion, and intent.",
    date: "2026-05-12",
    author: "KELL Editorial",
    content:
      "Opening the Frame marks the debut editorial piece from KELL Entertainment. This project explores how cinematic composition shapes perception, using natural light and deliberate framing to tell stories without words.",
    featured: true,
  },
  {
    slug: "golden-hour-session",
    title: "Golden Hour Session",
    category: "entertainment",
    cover: "/images/placeholder.svg",
    excerpt:
      "An evening production captured during golden hour, exploring warmth, shadow, and the edge between day and night.",
    date: "2026-04-28",
    author: "KELL Production",
    content:
      "Shot entirely during the golden hour window, this session experiments with color temperature and silhouette to create a moody, timeless visual tone.",
    featured: true,
  },
  {
    slug: "behind-the-curtain",
    title: "Behind the Curtain",
    category: "behind-the-scenes",
    cover: "/images/placeholder.svg",
    excerpt:
      "A rare look inside a KELL Entertainment production — from setup to final cut.",
    date: "2026-03-15",
    author: "KELL Editorial",
    content:
      "What happens between takes? This behind-the-scenes feature documents the crew, the gear, and the quiet moments that shape a production.",
    featured: false,
  },
  {
    slug: "brand-evolution",
    title: "Brand Evolution",
    category: "announcements",
    cover: "/images/placeholder.svg",
    excerpt:
      "The story behind the KELL Entertainment visual identity — black, gold, and editorial restraint.",
    date: "2026-02-01",
    author: "KELL Studio",
    content:
      "Why black and gold? Why editorial minimalism? This essay walks through the decisions behind the KELL Entertainment brand identity.",
    featured: false,
  },
  {
    slug: "silent-reel",
    title: "Silent Reel",
    category: "creative-projects",
    cover: "/images/placeholder.svg",
    excerpt:
      "A black-and-white study in movement, rhythm, and negative space.",
    date: "2026-01-10",
    author: "KELL Editorial",
    content:
      "Silent Reel strips away color and sound to focus on form. A study in how movement alone can carry a narrative.",
    featured: false,
  },
]

export type GalleryCategory = "projects" | "events" | "photography" | "behind-the-scenes" | "promotional"

export interface GalleryItem {
  id: number
  title: string
  category: GalleryCategory
  image: string
  caption: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Studio Session One",
    category: "projects",
    image: "/images/placeholder.svg",
    caption: "A controlled lighting setup during an early KELL production.",
  },
  {
    id: 2,
    title: "Opening Night",
    category: "events",
    image: "/images/placeholder.svg",
    caption: "Guests arriving at the KELL Entertainment launch event.",
  },
  {
    id: 3,
    title: "Portrait Study",
    category: "photography",
    image: "/images/placeholder.svg",
    caption: "Editorial portrait shot on 35mm film stock.",
  },
  {
    id: 4,
    title: "Rig Check",
    category: "behind-the-scenes",
    image: "/images/placeholder.svg",
    caption: "Camera crew preparing gear before the day's first shot.",
  },
  {
    id: 5,
    title: "Launch Poster",
    category: "promotional",
    image: "/images/placeholder.svg",
    caption: "Key art for the inaugural KELL Entertainment campaign.",
  },
  {
    id: 6,
    title: "Control Room",
    category: "projects",
    image: "/images/placeholder.svg",
    caption: "Post-production suite during final color grading.",
  },
  {
    id: 7,
    title: "Backstage Moment",
    category: "events",
    image: "/images/placeholder.svg",
    caption: "A candid moment before stepping onto the stage.",
  },
  {
    id: 8,
    title: "Urban Frame",
    category: "photography",
    image: "/images/placeholder.svg",
    caption: "Architecture and light in the city at twilight.",
  },
]

export type ProjectCategory = "film" | "music" | "brand" | "editorial"

export interface ProjectItem {
  id: number
  title: string
  category: ProjectCategory
  cover: string
  excerpt: string
}

export const featuredProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Opening the Frame",
    category: "film",
    cover: "/images/placeholder.svg",
    excerpt: "Cinematic composition as storytelling.",
  },
  {
    id: 2,
    title: "Golden Hour Session",
    category: "music",
    cover: "/images/placeholder.svg",
    excerpt: "Warmth, shadow, and the edge of night.",
  },
  {
    id: 3,
    title: "Silent Reel",
    category: "editorial",
    cover: "/images/placeholder.svg",
    excerpt: "Movement, rhythm, negative space.",
  },
]

export const mediaCategories: { value: MediaCategory; label: string }[] = [
  { value: "news", label: "News" },
  { value: "entertainment", label: "Entertainment" },
  { value: "creative-projects", label: "Creative Projects" },
  { value: "announcements", label: "Announcements" },
  { value: "behind-the-scenes", label: "Behind the Scenes" },
]

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "projects", label: "Projects" },
  { value: "events", label: "Events" },
  { value: "photography", label: "Photography" },
  { value: "behind-the-scenes", label: "Behind the Scenes" },
  { value: "promotional", label: "Promotional Materials" },
]

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  socials?: { label: string; href: string }[]
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tri Puspita",
    role: "Eksekutif Produser",
    bio: "Mengelola produksi end-to-end, memastikan setiap proyek berjalan tepat waktu dan sesuai visi kreatif.",
    image: "/images/profile/EKSEKUTIF PRODUSER(TRI PUSPITA).jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/tripuspita" },
      { label: "LinkedIn", href: "https://linkedin.com/in/tripuspita" },
    ],
  },
  {
    id: 2,
    name: "Wawan Darmawan",
    role: "Produser",
    bio: "Mengkoordinasikan seluruh aspek produksi dari pre-production hingga pasca produksi dengan teliti.",
    image: "/images/profile/PRODUSER(Wawan Darmawan).jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/wawandarmawan" },
      { label: "LinkedIn", href: "https://linkedin.com/in/wawandarmawan" },
    ],
  },
  {
    id: 3,
    name: "Yudittia Aldi",
    role: "Creative Kell & Co-Host",
    bio: "Memimpin visi kreatif KELL Entertainment dan menghadirkan perspektif segar di setiap episode podcast.",
    image: "/images/profile/Creative kell , Co host, YUDITTIA(aldi).jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/yudittia" },
    ],
  },
  {
    id: 4,
    name: "Rivaldo Sitorus",
    role: "Host & Actor",
    bio: "Aktor peran Anak Jalanan di Film LO JUAL GUE BELI KEMBALI, Raden Kian Santang di Season 2 Series ELEGI CINTA TIARA, dan Film LO JUAL GUE BELI KEMBALI.",
    image: "/images/profile/HOST aktor RIVALDO SITORUS.jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/rivaldositorus" },
    ],
  },
  {
    id: 5,
    name: "Kholbi Achshani",
    role: "Co-Host",
    bio: "Membawa energi dan perspektif unik di setiap percakapan podcast KELL Entertainment.",
    image: "/images/profile/CO HOST (KHOLBI ACHSANI).jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/kholbi" },
    ],
  },
  {
    id: 6,
    name: "Sony Wakwau",
    role: "Co-Host",
    bio: "Menghadirkan dinamika segar dan wawasan mendalam sebagai co-host podcast KELL.",
    image: "/images/profile/CO HOST (SONY WAKWAU).jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/sony_wakwau" },
    ],
  },
  {
    id: 7,
    name: "Joko Gusti Samudra",
    role: "Co-Host",
    bio: "Melengkapi tim host dengan gaya bicara khas dan ketertarikan pada cerita-cerita generasi muda.",
    image: "/images/profile/JOKO GUSTI SAMUDRA CO HOST.jpeg",
    socials: [
      { label: "Instagram", href: "https://instagram.com/jokogusti" },
    ],
  },
]
