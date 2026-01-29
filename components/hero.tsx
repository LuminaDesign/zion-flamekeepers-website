import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='https://img.playbook.com/PpQzJL63PwhaklrnUq6wi28o4ygU0o7slkRSVojJdiM/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvNTVh/MjE4YWYtNTExNy00/NjdkLTg0Y2MtOTI1/ZTQ1ZWI5N2RjP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTg3/OTktbUI1UmpDSG9h/S1lNRjJPNUclMkJi/NlA3WThGQVhySk1Q/UEUyNlBJUFphajM4/JTNE.webp'
          alt="Zion Flamekeepers Coaching Team - Arboretum Run"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            IGNITE YOUR
            <span className="text-primary"> STRENGTH</span>
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            FUEL YOUR WELLNESS.
          </h1>

          <p className="text-xl text-gray-100 mb-10 max-w-xl">
            Premier Fitness & Wellness coaching. We provide the tools; you keep the flame burning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8"
            >
              View Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base font-semibold px-8 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
