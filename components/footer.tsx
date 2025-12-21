import { BookOpen, Facebook, Twitter, Instagram, Youtube, ChevronRight, MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const quickLinks = ["Home", "Stories", "E-Books", "Categories", "Authors"]
  const categories = ["Fiction", "Romance", "Mystery", "Historical", "Poetry"]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              <span className="text-lg sm:text-xl font-bold font-mono">AH Saiful</span>
            </div>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed max-w-sm">
              Promoting Bengali literature through modern technology and accessible digital formats since 2025.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-mono">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors group text-sm sm:text-base"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="truncate">{link}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-mono">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase()}`}
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors group text-sm sm:text-base"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="truncate">{category}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-mono">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">+880 1234 567890</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base break-all">contact@ahsaiful.com</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base break-all">www.ahsaiful.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed">
            © 2025 AH Saiful. All Rights Reserved. | Powered by LargeSoft Tech™
          </p>
        </div>
      </div>
    </footer>
  )
}
