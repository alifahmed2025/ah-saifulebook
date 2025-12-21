import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, Users, Award, Target, Heart, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const stats = [
    { icon: BookOpen, label: "Stories & E-Books", value: "5,000+" },
    { icon: Users, label: "Active Readers", value: "100K+" },
    { icon: Award, label: "Featured Authors", value: "500+" },
    { icon: Globe, label: "Countries Reached", value: "25+" },
  ]

  const team = [
    {
      name: "AH Saiful",
      role: "Founder & CEO",
      bio: "Passionate about preserving and promoting Bengali literature through modern technology.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Dr. Rashida Ahmed",
      role: "Content Director",
      bio: "Literature professor with 20+ years of experience in Bengali literary studies.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Karim Hassan",
      role: "Technology Lead",
      bio: "Full-stack developer dedicated to creating seamless reading experiences.",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* About Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-mono">About AH Saiful</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Dedicated to preserving, promoting, and sharing the rich heritage of Bengali literature with the world
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-mono">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AH Saiful, we believe that Bengali literature deserves a modern platform that honors its rich tradition
              while making it accessible to readers worldwide. Our mission is to bridge the gap between classic and
              contemporary Bengali writing, providing a digital home for stories that have shaped our culture and
              continue to inspire new generations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-mono">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AH Saiful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Cultural Preservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to preserving the rich heritage of Bengali literature for future generations through
                  digital archiving and modern accessibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Quality Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every story and e-book on our platform is carefully curated to ensure the highest quality of writing
                  and authentic representation of Bengali culture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Global Accessibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe Bengali literature should be accessible to readers worldwide, breaking down geographical
                  and technological barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-mono">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals working to bring Bengali literature to the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-accent/10">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-mono">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 font-mono">
            Join Our Literary Journey
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're a reader, writer, or literature enthusiast, we'd love to hear from you. Let's work together
            to celebrate Bengali literature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ahsaiful.com"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/stories"
              className="bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Stories
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
