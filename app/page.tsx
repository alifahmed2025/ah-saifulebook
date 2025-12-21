import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import PopularStories from "@/components/popular-stories"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PopularStories />
      <Footer />
    </div>
  )
}
