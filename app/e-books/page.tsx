"use client" // এই লাইনটি দিতেই হবে ইন্টারঅ্যাক্টিভিটি বা onClick ব্যবহারের জন্য

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, User, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function EBooksPage() {
  // Hydration এরর এড়ানোর জন্য এই মাউন্ট চেকটি প্রয়োজন
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const ebooks = [
    {
      id: 1,
      title: "Complete Works of Rabindranath Tagore",
      author: "Rabindranath Tagore",
      pages: "1,200 pages",
      description: "The complete collection of poems, stories, and essays by the Nobel laureate.",
      bgColor: "bg-amber-500",
      category: "Poetry & Literature",
      link: "https://www.rokomari.com/book/75125/rabindranath-rabindranathei"
    },
    {
      id: 2,
      title: "Modern Bengali Short Stories",
      author: "Various Authors",
      pages: "350 pages",
      description: "A curated collection of contemporary Bengali short stories from emerging writers.",
      bgColor: "bg-emerald-500",
      category: "Fiction",
      link: "https://www.rokomari.com/book/50825/desh-er-golpo-2003-2005" 
    },
    {
      id: 3,
      title: "History of Bengal",
      author: "Dr. Rahman Ahmed",
      pages: "500 pages",
      description: "A comprehensive guide to the rich history and culture of Bengal region.",
      bgColor: "bg-rose-500",
      category: "History",
      link: "https://www.rokomari.com/book/150573/history-of-bengal-mughal-period"
    },
    {
      id: 4,
      title: "Bengali Grammar & Literature",
      author: "Prof. Nasir Uddin",
      pages: "280 pages",
      description: "Essential guide for understanding Bengali grammar and literary techniques.",
      bgColor: "bg-violet-500",
      category: "Educational",
      link: "https://www.rokomari.com/book/263980/history-of-bengali-language-and-literature"
    },
  ]

  // সার্ভার আর ক্লায়েন্ট রেন্ডারিং ম্যাচ করার জন্য এই শর্তটি দেওয়া হয়েছে
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">E-Books Collection</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Download and read comprehensive e-books on Bengali literature, history, and culture
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search e-books by title, author, or category..."
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
            {ebooks.map((ebook) => (
              <Card
                key={ebook.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${ebook.bgColor} p-6 text-center`}>
                  <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
                  <span className="text-white text-sm font-medium">{ebook.category}</span>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{ebook.title}</h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{ebook.author}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{ebook.pages}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ebook.description}</p>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => {
                        if (ebook.link) {
                          window.open(ebook.link, "_blank");
                        } else {
                          alert("Reading link not available for this book yet!");
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