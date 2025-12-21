import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 font-mono leading-tight">
          Discover the World of Bengali Literature
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Read, download, and enjoy thousands of stories and e-books in Bengali and English
        </p>

        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search stories, authors, or categories..."
              className="w-full h-12 sm:h-14 pl-4 pr-20 sm:pr-24 text-sm sm:text-base bg-white border-0 rounded-full shadow-lg"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 h-10 sm:h-12 px-4 sm:px-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-sm sm:text-base"
            >
              <Search className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
