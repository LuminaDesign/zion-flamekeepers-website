'use client'

import Image from 'next/image'
import { Mail, Phone, Instagram } from 'lucide-react'
import { XIcon } from '@/components/icons/x-icon'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  contact: {
    email?: string
    phone?: string
    instagram?: string
    tiktok?: string
    twitter?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    
    name: 'Raff Fitness',
    role: 'Holistic Wellness Coach',
    bio: 'Results-driven fitness and wellness professional with Diploma in Fitness Science and multiple specialized certifications. Expert in personalized training, nutrition guidance, yoga, sports massage, and aqua aerobics, committed to transforming lives through holistic wellness practices.',
    image: 'https://i.ibb.co/rKSyGpRw/Raf-Fitness.jpg',
    contact: {
      email: 'raff@zionflame.com',
      instagram: '@raffitness',
    },
  },
  {
    id: 2,
    name: 'AG Fitpro',
    role: 'Fitness Coach & Founder',
    bio: 'Professional fitness coach with profound expertise in personal training, special population coaching, and fitness camps. Dedicated to inspiring positive life changes and helping clients achieve their fitness goals through tailored programs and expert coaching.',
    image: 'https://i.ibb.co/bRJ3n96X/AG-FIT-PRO.jpg',
    contact: {
      email: 'agfitpro2@gmail.com',
      phone: '+254759865974',
      instagram: '@agfitpro',
      tiktok: '@agfitpro',
      twitter: '@agfitpro',
    },
  },
  {
    id: 3,
    name: 'Dennis K. Limo',
    role: 'Strength & Conditioning Specialist',
    bio: 'Results-driven fitness professional with strong foundation in Biology, Chemistry, and Fitness Science. Specializes in personalized training programs, muscle building, body recomposition, and injury rehabilitation with science-backed methodologies.',
    image: 'https://i.ibb.co/cSbv5KX1/Dennis-K-Limo.jpg',
    contact: {
      email: 'limodeen03@gmail.com',
      phone: '0727 700 169',
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Our Elite Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified coaches bring years of expertise and passion to help you achieve your fitness goals. Each member brings unique specializations and unwavering commitment to your wellness journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Contact Links */}
                <div className="flex gap-3 flex-wrap">
                  {member.contact.email && (
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                  {member.contact.phone && (
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Phone"
                    >
                      <Phone size={18} />
                    </a>
                  )}
                  {member.contact.instagram && (
                    <a
                      href={`https://instagram.com/${member.contact.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.contact.twitter && (
                    <a
                      href={`https://x.com/${member.contact.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="X"
                    >
                      <XIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Note */}
        <div className="mt-16 text-center p-8 bg-card rounded-2xl border border-border">
          <p className="text-foreground mb-4">
            Our team of certified fitness professionals is continually expanding with specialized experts in various disciplines.
          </p>
          <p className="text-muted-foreground">
            Whether you're looking for personal training, group classes, yoga, nutrition guidance, or specialized coaching, our diverse team has you covered.
          </p>
        </div>
      </div>
    </section>
  )
}
