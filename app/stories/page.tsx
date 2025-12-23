"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, User, Clock, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function StoriesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 🔹 STORY DATA WITH PDF PATH
  const stories = [
    {
      id: 1,
      title: "Aspekte B2. Wortliste",
      author: "Ahmed Hossain",
      readTime: "45 min",
      description:
        "A beautiful tale of life along the Padma river. This story captures the essence of rural Bengal and its people.",
      bgColor: "bg-blue-500",
      category: "Fiction",
      pdf: "/stories/Aspekte B2. Wortliste.pdf",
    },
    {
      id: 2,
      title: "B2_Wortliste",
      author: "Fatema Begum",
      readTime: "1 hr 20 min",
      description:
        "A gripping mystery set in the bustling streets of old Dhaka, where secrets lurk in every corner.",
      bgColor: "bg-red-500",
      category: "Mystery",
      pdf: "/stories/B2_Wortliste.pdf",
    },
    {
      id: 3,
      title: "German-Short-Stories-for-Beginners-Book-1",
      author: "Rahim Khan",
      readTime: "30 min",
      description:
        "A heartwarming romance that blossoms during the rainy season in the tea gardens of Sylhet.",
      bgColor: "bg-green-500",
      category: "Romance",
      pdf: "/stories/German-Short-Stories-for-Beginners-Book-1.pdf",
    },
    {
      id: 4,
      title: "Netzwek Neu B1 Losungen - K7-12",
      author: "Nasir Ahmed",
      readTime: "55 min",
      description:
        "An emotional journey through the life of Bengal's forgotten poets and their timeless verses.",
      bgColor: "bg-purple-500",
      category: "Historical",
      pdf: "/stories/Netzwek Neu B1 Losungen - K7-12.pdf",
    },
    {
      id: 5,
      title: "NWneu_B1_K1-6_transkript_video",
      author: "Rashida Khatun",
      readTime: "1 hr 15 min",
      description:
        "Stories from rural Bangladesh that showcase the beauty and struggles of village life.",
      bgColor: "bg-indigo-500",
      category: "Fiction",
      pdf: "/stories/NWneu_B1_K1-6_transkript_video.pdf",
    },
    {
      id: 6,
      title: "Short Stories in German for Beginners Book (1)",
      author: "Karim Rahman",
      readTime: "40 min",
      description:
        "A young man's journey from village to city in search of dreams and opportunities.",
      bgColor: "bg-teal-500",
      category: "Drama",
      pdf: "/stories/Short Stories in German for Beginners Book (1).pdf",
    },
  ]

  if (!mounted) return null

  // 🔹 OPEN PDF FUNCTION
  const openPDF = (pdfPath: string) => {
    window.open(pdfPath, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">
            All Stories
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explore our collection of stories and read them as PDF
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search stories..."
                className="w-full h-12 pl-4 pr-12 bg-white rounded-full text-black"
              />
              <Button className="absolute right-1 top-1 h-10 px-6 rounded-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stories.map((story) => (
              <Card
                key={story.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${story.bgColor} p-6 text-center`}>
                  <FileText className="h-12 w-12 text-white mx-auto mb-3" />
                  <span className="text-white text-sm">
                    {story.category}
                  </span>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-mono">
                    {story.title}
                  </h3>

                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {story.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {story.readTime}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {story.description}
                  </p>

                  {/* 🔹 READ PDF BUTTON */}
                  <Button
                    className="w-full bg-accent text-accent-foreground"
                    onClick={() => openPDF(story.pdf)}
                  >
                    Read Online (PDF)
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
