import Header from "@/components/header"
import Footer from "@/components/footer"
import { User, BookOpen, Award, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function AuthorsPage() {
  const authors = [
    {
      id: 1,
      name: "Ahmed Hossain",
      bio: "Renowned Bengali author known for his vivid portrayal of rural life and social issues.",
      stories: 45,
      followers: "12.5K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Fiction & Drama",
      awards: ["Bangla Academy Award", "Ekushey Padak"],
    },
    {
      id: 2,
      name: "Fatema Begum",
      bio: "Mystery writer who has captivated readers with her thrilling detective stories set in Bangladesh.",
      stories: 32,
      followers: "8.7K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Mystery & Thriller",
      awards: ["National Book Award", "Crime Writers Award"],
    },
    {
      id: 3,
      name: "Rahim Khan",
      bio: "Romantic novelist whose love stories have touched millions of hearts across Bengal.",
      stories: 28,
      followers: "15.2K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Romance & Poetry",
      awards: ["Romantic Writers Guild Award"],
    },
    {
      id: 4,
      name: "Nasir Ahmed",
      bio: "Historical fiction writer specializing in Bengal's rich cultural heritage and freedom struggle.",
      stories: 38,
      followers: "9.8K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Historical Fiction",
      awards: ["Independence Day Honor", "Cultural Heritage Award"],
    },
    {
      id: 5,
      name: "Rashida Khatun",
      bio: "Contemporary writer focusing on women's issues and social reform in modern Bangladesh.",
      stories: 22,
      followers: "6.4K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Social Drama",
      awards: ["Women Writers Award", "Social Impact Award"],
    },
    {
      id: 6,
      name: "Karim Rahman",
      bio: "Young author known for his urban stories that reflect the changing face of Bangladesh.",
      stories: 19,
      followers: "4.9K",
      avatar: "/placeholder.svg?height=100&width=100",
      speciality: "Urban Fiction",
      awards: ["Emerging Writer Award"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Authors Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">Featured Authors</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Meet the talented writers who bring Bengali literature to life with their incredible stories
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search authors by name or speciality..."
                className="w-full h-12 pl-4 pr-12 text-base bg-white border-0 rounded-full shadow-lg"
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

      {/* Authors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {authors.map((author) => (
              <Card
                key={author.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-accent/10">
                    <img
                      src={author.avatar || "/placeholder.svg"}
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 font-mono">{author.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{author.speciality}</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{author.bio}</p>

                  <div className="flex justify-center gap-6 mb-4 text-sm">
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <BookOpen className="h-4 w-4 mr-1 text-accent" />
                        <span className="font-semibold text-foreground">{author.stories}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">Stories</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <User className="h-4 w-4 mr-1 text-accent" />
                        <span className="font-semibold text-foreground">{author.followers}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">Followers</span>
                    </div>
                  </div>

                  {author.awards.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="h-4 w-4 mr-1 text-accent" />
                        <span className="text-sm font-medium text-foreground">Awards</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{author.awards.join(", ")}</div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">View Stories</Button>
                    <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
                      Follow
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
