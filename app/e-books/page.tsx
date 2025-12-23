"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, User, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function EBooksPage() {
  // hydration error avoid
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 🔹 EBOOK DATA WITH PDF PATH
  const ebooks = [
    {
      id: 1,
      title: "মুক্ত বাতাসের খোঁজে",
      author: "Rabindranath Tagore",
      pages: "1,200 pages",
      description:
        "The complete collection of poems, stories, and essays by the Nobel laureate.",
      bgColor: "bg-amber-500",
      category: "Poetry & Literature",
      pdf: "/ebooks/মুক্ত বাতাসের খোঁজে.pdf",
    },
    {
      id: 2,
      title: "B1_Uebungssatz_Erwachsene",
      author: "Various Authors",
      pages: "350 pages",
      description:
        "A curated collection of contemporary Bengali short stories from emerging writers.",
      bgColor: "bg-emerald-500",
      category: "Fiction",
      pdf: "/ebooks/B1_Uebungssatz_Erwachsene.pdf",
    },
    {
      id: 3,
      title: "Basic german",
      author: "Dr. Rahman Ahmed",
      pages: "500 pages",
      description:
        "A comprehensive guide to the rich history and culture of Bengal region.",
      bgColor: "bg-rose-500",
      category: "History",
      pdf: "/ebooks/Basic german.pdf",
    },
    {
      id: 4,
      title: "Grammatik_Deutsch",
      author: "Prof. Nasir Uddin",
      pages: "280 pages",
      description:
        "Essential guide for understanding Bengali grammar and literary techniques.",
      bgColor: "bg-violet-500",
      category: "Educational",
      pdf: "/ebooks/Grammatik_Deutsch.pdf",
    },
  ]

  if (!mounted) return null

  // 🔹 PDF OPEN FUNCTION
  const openPDF = (pdfPath: string) => {
    window.open(pdfPath, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">
            E-Books Collection
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Read Bengali literature, history, and educational books online as PDF
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search e-books..."
                className="w-full h-12 pl-4 pr-12 text-base bg-white rounded-full text-black"
              />
              <Button className="absolute right-1 top-1 h-10 px-6 rounded-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EBOOK GRID */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ebooks.map((ebook) => (
              <Card
                key={ebook.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${ebook.bgColor} p-6 text-center`}>
                  <BookOpen className="h-12 w-12 text-white mx-auto mb-3" />
                  <span className="text-white text-sm">
                    {ebook.category}
                  </span>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-mono">
                    {ebook.title}
                  </h3>

                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {ebook.author}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {ebook.pages}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {ebook.description}
                  </p>

                  {/* 🔹 READ PDF BUTTON */}
                  <Button
                    className="w-full bg-accent text-accent-foreground"
                    onClick={() => openPDF(ebook.pdf)}
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
