"use client"

import { FileText, User, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function PopularStories() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Fiction", "Romance", "Mystery", "Historical", "Short Stories"]

  // 🔹 STORIES WITH PDF PATH
  const stories = [
    {
      id: 1,
      title: "Zertifikat B1 neu-Schreiben.pdf",
      author: "Ahmed Hossain",
      readTime: "45 min",
      description:
        "A beautiful tale of life along the Padma river. This story captures the essence of rural Bengal and its people.",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      pdf: "/stories/Zertifikat B1 neu-Schreiben.pdf",
    },
    {
      id: 2,
      title: "Aspekte B2. Wortliste",
      author: "Fatema Begum",
      readTime: "1 hr 20 min",
      description:
        "A gripping mystery set in the bustling streets of old Dhaka, where secrets lurk in every corner.",
      bgColor: "bg-red-500",
      textColor: "text-white",
      pdf: "/stories/Aspekte B2. Wortliste.pdf",
    },
    {
      id: 3,
      title: "Netzwek Neu B1 Losungen - K7-12",
      author: "Rahim Khan",
      readTime: "30 min",
      description:
        "A heartwarming romance that blossoms during the rainy season in the tea gardens of Sylhet.",
      bgColor: "bg-green-500",
      textColor: "text-white",
      pdf: "/stories/Netzwek Neu B1 Losungen - K7-12.pdf",
    },
    {
      id: 4,
      title: "Short Stories in German for Beginners Book (1)",
      author: "Nasir Ahmed",
      readTime: "55 min",
      description:
        "An emotional journey through the life of Bengal's forgotten poets and their timeless verses.",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      pdf: "/stories/Short Stories in German for Beginners Book (1).pdf",
    },
  ]

  // 🔹 PDF OPEN FUNCTION
  const handleReadOnline = (pdfPath: string) => {
    window.open(pdfPath, "_blank")
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-mono">
            Popular Stories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our most loved stories from talented authors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${story.bgColor} p-4 sm:p-6 text-center`}>
                <FileText className={`h-10 w-10 sm:h-12 sm:w-12 ${story.textColor} mx-auto mb-2 sm:mb-4`} />
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 font-mono">
                  {story.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {story.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {story.readTime}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {story.description}
                </p>

                <Button
                  className="w-full bg-accent text-accent-foreground"
                  onClick={() => handleReadOnline(story.pdf)}
                >
                  Read Online (PDF)
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
