import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Team from '@/components/team'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
