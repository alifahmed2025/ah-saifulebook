import { FileText, Smartphone, Download, Languages, Users, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Vast Collection",
      description: "Thousands of stories and e-books in Bengali and English from renowned authors",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Read anytime, anywhere with our responsive design that works on all devices",
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description: "Download your favorite stories and e-books to read offline at your convenience",
    },
    {
      icon: Languages,
      title: "Multi-Language",
      description: "Enjoy content in both Bengali and English with our seamless language switching",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a vibrant community of readers, share reviews, and discuss your favorite stories",
    },
    {
      icon: RotateCcw,
      title: "Reading Progress",
      description: "Sync your reading progress across devices and pick up right where you left off",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-mono">
            Why Choose AH Saiful?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our platform offers the best reading experience for Bengali literature enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3 sm:mb-4 font-mono leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
