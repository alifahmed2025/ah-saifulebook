import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "New Collection of Contemporary Bengali Short Stories Released",
      excerpt:
        "We're excited to announce the release of 50 new contemporary Bengali short stories from emerging writers across Bangladesh and West Bengal.",
      author: "Editorial Team",
      date: "January 15, 2025",
      readTime: "3 min read",
      category: "New Release",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "AH Saiful Platform Reaches 100,000 Active Readers",
      excerpt:
        "We've reached a major milestone with over 100,000 active readers enjoying Bengali literature on our platform. Thank you for your continued support!",
      author: "AH Saiful Team",
      date: "January 12, 2025",
      readTime: "2 min read",
      category: "Milestone",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Interview with Award-Winning Author Fatema Begum",
      excerpt:
        "In an exclusive interview, mystery writer Fatema Begum shares her writing process and inspiration behind her latest thriller 'Shadows of Dhaka'.",
      author: "Rashid Ahmed",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Interview",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Mobile App Update: Enhanced Reading Experience",
      excerpt:
        "Our latest mobile app update includes dark mode, improved typography, and offline reading capabilities for a better user experience.",
      author: "Tech Team",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "Update",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Bengali Literature Festival 2025 Partnership Announced",
      excerpt:
        "AH Saiful is proud to partner with the Bengali Literature Festival 2025, bringing digital access to festival content and author sessions.",
      author: "Partnership Team",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "New Poetry Section Launch with 500+ Classic Poems",
      excerpt:
        "Discover the beauty of Bengali poetry with our new dedicated section featuring over 500 classic and contemporary poems from renowned poets.",
      author: "Content Team",
      date: "January 3, 2025",
      readTime: "3 min read",
      category: "New Feature",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* News Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">News & Updates</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, author interviews, and platform updates from AH Saiful
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 font-mono line-clamp-2">{article.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
