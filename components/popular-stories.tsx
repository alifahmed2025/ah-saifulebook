"use client"

import { FileText, User, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function PopularStories() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Fiction", "Romance", "Mystery", "Historical", "Short Stories"]

  const stories = [
    {
      id: 1,
      title: "The River's Tale",
      author: "Ahmed Hossain",
      readTime: "45 min",
      description: "A beautiful tale of life along the Padma river. This story captures the essence of rural Bengal and its people.",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      link: "https://www.rokomari.com/book/50825/desh-er-golpo-2003-2005" // এখানে লিঙ্ক বসানো হয়েছে
    },
    {
      id: 2,
      title: "Shadows of Dhaka",
      author: "Fatema Begum",
      readTime: "1 hr 20 min",
      description: "A gripping mystery set in the bustling streets of old Dhaka, where secrets lurk in every corner.",
      bgColor: "bg-red-500",
      textColor: "text-white",
      link: "https://www.rokomari.com/book/464544/shadow-of-love"
    },
    {
      id: 3,
      title: "Monsoon (Hardcover)",
      author: "Rahim Khan",
      readTime: "30 min",
      description: "A heartwarming romance that blossoms during the rainy season in the tea gardens of Sylhet.",
      bgColor: "bg-green-500",
      textColor: "text-white",
      link: "https://www.rokomari.com/book/342524/monsoon"
    },
    {
      id: 4,
      title: "The Last Poet",
      author: "Nasir Ahmed",
      readTime: "55 min",
      description: "An emotional journey through the life of Bengal's forgotten poets and their timeless verses.",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      link: "https://www.rokomari.com/book/456200/the-last-poet-of-kashmir"
    },
  ]

  // লিঙ্ক হ্যান্ডেল করার ফাংশন
  const handleReadOnline = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    } else {
      alert("গল্পটি পড়ার লিঙ্ক এখনো যুক্ত করা হয়নি।");
    }
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
              className={`px-3 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "text-muted-foreground hover:text-foreground hover:border-accent"
              }`}
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
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 font-mono leading-tight">
                  {story.title}
                </h3>

                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="truncate">{story.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{story.readTime}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {story.description}
                </p>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base h-9 sm:h-10"
                    onClick={() => handleReadOnline(story.link)} // ক্লিক ইভেন্ট অ্যাড করা হয়েছে
                  >
                    Read Online
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-accent hover:text-accent-foreground bg-transparent h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}