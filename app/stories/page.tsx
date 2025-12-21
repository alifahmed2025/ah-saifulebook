"use client" // এই লাইনটি Event Handler Error সমাধান করবে

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, User, Clock, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function StoriesPage() {
  // Hydration Error সমাধান করার জন্য এই State টি ব্যবহার করা হয়েছে
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stories = [
    {
      id: 1,
      title: "The River's Tale",
      author: "Ahmed Hossain",
      readTime: "45 min",
      description: "A beautiful tale of life along the Padma river. This story captures the essence of rural Bengal and its people.",
      bgColor: "bg-blue-500",
      category: "Fiction",
      link: "https://www.rokomari.com/book/237945/mahanadi-the-tale-of-a-river"
    },
    {
      id: 2,
      title: "Shadows of Love",
      author: "Fatema Begum",
      readTime: "1 hr 20 min",
      description: "A gripping mystery set in the bustling streets of old Dhaka, where secrets lurk in every corner.",
      bgColor: "bg-red-500",
      category: "Mystery",
      link: "https://www.rokomari.com/book/464544/shadow-of-love"
    },
    {
      id: 3,
      title: "Monsoon (Hardcover)",
      author: "Rahim Khan",
      readTime: "30 min",
      description: "A heartwarming romance that blossoms during the rainy season in the tea gardens of Sylhet.",
      bgColor: "bg-green-500",
      category: "Romance",
      link: "https://www.rokomari.com/book/342524/monsoon"
    },
    {
      id: 4,
      title: "The Last Poet",
      author: "Nasir Ahmed",
      readTime: "55 min",
      description: "An emotional journey through the life of Bengal's forgotten poets and their timeless verses.",
      bgColor: "bg-purple-500",
      category: "Historical",
      link: "https://www.rokomari.com/book/456200/the-last-poet-of-kashmir"
    },
    {
      id: 5,
      title: "Leadership Chronicles(Hardcover)",
      author: "Rashida Khatun",
      readTime: "1 hr 15 min",
      description: "Stories from rural Bangladesh that showcase the beauty and struggles of village life.",
      bgColor: "bg-indigo-500",
      category: "Fiction",
      link: "https://www.rokomari.com/book/382072/leadership-chronicles"
    },
    {
      id: 6,
      title: "Dream New Dreams (Paperback)",
      author: "Karim Rahman",
      readTime: "40 min",
      description: "A young man's journey from village to city in search of dreams and opportunities.",
      bgColor: "bg-teal-500",
      category: "Drama",
      link: "https://www.rokomari.com/book/99806/dream-new-dreams"
    },
  ]

  // ব্রাউজার পুরোপুরি লোড না হওয়া পর্যন্ত রেন্ডার হবে না (Hydration Safety)
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">All Stories</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explore our vast collection of Bengali and English stories from talented authors
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search stories by title, author, or category..."
                className="w-full h-12 pl-4 pr-12 text-base bg-white border-0 rounded-full shadow-lg text-black"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-10 px-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stories.map((story) => (
              <Card
                key={story.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${story.bgColor} p-6 text-center`}>
                  <FileText className="h-12 w-12 text-white mx-auto mb-4" />
                  <span className="text-white text-sm font-medium">{story.category}</span>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{story.title}</h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{story.description}</p>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => {
                        if (story.link !== "#") {
                          window.open(story.link, "_blank");
                        } else {
                          alert("Link not added yet!");
                        }
                      }}
                    >
                      Read Online
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
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