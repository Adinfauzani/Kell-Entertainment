import Home from "@/components/home"
import FeaturedProjects from "@/components/featured-projects"

export const metadata = {
  title: "Home",
  description:
    "KELL Entertainment — media kreatif, produksi hiburan, bercerita visual, dan pengalaman digital.",
}

export default function HomePage() {
  return (
    <>
      <Home />
      <FeaturedProjects />
    </>
  )
}
