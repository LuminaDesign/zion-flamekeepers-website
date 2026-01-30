import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Flame, Shield, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Community',
      description: 'Building a supportive family of fitness enthusiasts',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Discipline',
      description: 'Committed excellence in every training session',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Longevity',
      description: 'Sustainable practices for lasting health and wellness',
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src='https://i.ibb.co/VpMTTRJF/The-zion-Flame-Keepers.jpg'
              alt="The Zion Flamekeepers Coaching Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Flamekeepers
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              We are a team of certified fitness and wellness coaches dedicated to transforming
              lives through personalized training and holistic health approaches. Our philosophy
              combines physical grit with mental wellness, ensuring sustainable results.
            </p>

            <p className="text-lg text-muted-foreground mb-10">
              Every coach brings extensive experience and a genuine passion for helping our
              community achieve their wellness goals. We believe in the power of discipline,
              community support, and long-term health practices.
            </p>

            <div className="space-y-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="p-4 border-border bg-muted/30 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}