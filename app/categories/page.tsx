import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, BookOpen, Heart, SearchIcon, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Fiction",
      description: "Imaginative stories and novels that transport you to different worlds",
      icon: FileText,
      count: "1,250+ stories",
      bgColor: "bg-blue-500",
      stories: ["The River's Tale", "Village Chronicles", "City Dreams"],
    },
    {
      id: 2,
      name: "Romance",
      description: "Love stories that touch the heart and celebrate human connections",
      icon: Heart,
      count: "850+ stories",
      bgColor: "bg-rose-500",
      stories: ["Monsoon Love", "Garden of Hearts", "Eternal Promise"],
    },
    {
      id: 3,
      name: "Mystery",
      description: "Thrilling tales of suspense, crime, and detective work",
      icon: SearchIcon,
      count: "650+ stories",
      bgColor: "bg-purple-500",
      stories: ["Shadows of Dhaka", "The Missing Manuscript", "Night Detective"],
    },
    {
      id: 4,
      name: "Historical",
      description: "Stories set in the past that bring history to life",
      icon: Clock,
      count: "450+ stories",
      bgColor: "bg-amber-500",
      stories: ["The Last Poet", "Bengal Chronicles", "Freedom Fighters"],
    },
    {
      id: 5,
      name: "Poetry",
      description: "Beautiful verses and poems in Bengali and English",
      icon: BookOpen,
      count: "300+ poems",
      bgColor: "bg-green-500",
      stories: ["Morning Verses", "Sunset Reflections", "River Songs"],
    },
    {
      id: 6,
      name: "Short Stories",
      description: "Quick reads perfect for busy schedules",
      icon: Users,
      count: "2,100+ stories",
      bgColor: "bg-indigo-500",
      stories: ["Daily Tales", "Quick Reads", "Lunch Break Stories"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Categories Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">Story Categories</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explore stories organized by genres and themes to find exactly what you're looking for
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`${category.bgColor} p-6 text-center`}>
                  <category.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">{category.name}</h3>
                  <span className="text-white/90 text-sm">{category.count}</span>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Popular Stories:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.stories.map((story, index) => (
                        <li key={index}>• {story}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/categories/${category.name.toLowerCase()}`}>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Explore {category.name}
                    </Button>
                  </Link>
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
