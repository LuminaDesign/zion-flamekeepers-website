import React from "react"
import { Card } from '@/components/ui/card'
import {
  Dumbbell,
  Flame,
  Waves,
  Users,
  Heart,
  Mountain,
} from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  items: string[]
}

const services: Service[] = [
  {
    title: 'Performance Training',
    description: 'Unlock your peak potential',
    icon: <Dumbbell className="w-8 h-8" />,
    items: ['Personal Training', 'Strength & Conditioning', 'Spin Classes'],
  },
  {
    title: 'Holistic Movement',
    description: 'Mind and body alignment',
    icon: <Flame className="w-8 h-8" />,
    items: ['Aqua Aerobics', 'Step Aerobics', 'Floor Aerobics', 'Yoga'],
  },
  {
    title: 'Recovery & Health',
    description: 'Restore and recharge',
    icon: <Heart className="w-8 h-8" />,
    items: ['Sports Massage', 'Sports Nutrition'],
  },
  {
    title: 'Corporate & Groups',
    description: 'Build strength together',
    icon: <Users className="w-8 h-8" />,
    items: ['Team Building', 'Group Hiking'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services Portfolio
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive fitness and wellness solutions tailored to your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 hover:shadow-lg transition-shadow border-border bg-card"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
