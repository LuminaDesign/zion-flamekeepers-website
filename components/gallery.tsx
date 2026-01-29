'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Mountain, Calendar } from 'lucide-react'

interface GalleryItem {
  id: number
  image: string
  title: string
  date: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://img.playbook.com/wrKBiwRPl7MJLxvUKlwqDmgOVIKv05QUVK32nlrZkVg/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvMDEw/ZmQyMjctN2E5MS00/ZDMxLTgwMjQtNmZh/YWFhYjFmMzI2P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MTk1/OTktOWRsTFZnRXdC/RVRFblRWTUhuWEU1/RDU4b3ZZeHolMkY2/OGxPT2VqJTJGeGN2/ejQlM0Q.webp',
    title: 'Arboretum Run Challenge',
    date: 'Every Saturday',
    description: 'Join our community hiking adventures through Nairobi\'s scenic trails',
  },
  {
    id: 2,
    image: 'https://img.playbook.com/Sd5PWrk_X-E7CkvQQKasUIgfPTGD1gXd4OfpvRbf8AY/w:750/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvcHJldmll/d3MvOWY3Y2IyZGQt/Y2I3My00ODZhLWIx/ZTQtM2MzZGMxMjVi/YzI3P3R0bD1ob3Vy/bHkmdmVyaWZ5PTE3/Njk2MDg3OTktU0ZT/MkIlMkJ2TGlackxm/QWRVMFJ0UnhYNU5l/SUoyQlhBRUdQTG8y/TzVaQiUyQlklM0Q.webp',
    title: 'Trail Adventures',
    date: 'Weekly Events',
    description: 'Experience nature while building strength and community',
  },
  {
    id: 3,
    image: 'https://img.playbook.com/iFBjqIGz6mCAhDYycUEdoZJFahs4xNK67hy4KhPJ9BQ/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZjIw/ZThkYjctNjRkZC00/ZjQzLTlkODItYmYz/MWM0ZDU3NzQ2P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MTk1/OTktbyUyQmolMkZZ/ZEV4OEd5dWFXeGQ0/ZCUyRlM3SUh3VDgy/V2s2d25ocmcxRU1k/bjZaRSUzRA.webp',
    title: 'Group Training',
    date: 'By Appointment',
    description: 'Collective sessions tailored to your fitness goals',
  },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Hub
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience our hiking adventures and group activities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group cursor-pointer border-border bg-card hover:shadow-xl transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-semibold">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-12"
          >
            Join the Next Hike
          </Button>
        </div>

        {/* Instagram Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Follow Our Journey
            </h3>
            <p className="text-muted-foreground">
              @the_zion_flamekeepers
            </p>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://img.playbook.com/MQ7yoicXTrg4bgSjjEzteltLUke0Ys0WzIWd5RkipSE/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvMTM1/M2E3ZDEtZWE1MC00/NDc3LTg3YzctZjMz/NTJkMTNhYmM4P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MDE1/OTktS0R3eXIybXNJ/eUtmRjNmajBUbzl2/OUxtayUyRjdZNEtK/cm5zNnlMQ3Bmb0ow/JTNE.webp',
              'https://img.playbook.com/AWlwjVDY4aCWDm1eNQGgyJwAcguh83qHjYYor6mtYPk/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZTZl/NmViMWItMWYwZi00/MWIyLWIyNzktNGU5/MWE0MTNmNzk0P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTktaFZXdWNPcUJp/UmRyT3dyaVlDMWpY/ZWVmQzFsdFJVRVJI/aWVjNXhUTFRXSSUz/RA.webp',
              'https://img.playbook.com/5RFW8NGsH2Ak6ENgp84KIRS6KJ1KXR6HEMhyNHfDl60/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvM2Vi/YTMyZWYtNDFmZS00/MjE2LTkxMDgtYmZi/N2Y4OTMyNGEyP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTktb3hiRGxLY0VJ/WkF4eENSMVhZNHQ4/VDZtWm1Na29hTzlT/bFo4ZHNPSm50YyUz/RA.webp',
              'https://img.playbook.com/tCN25NikXVXZL6GrwOcFp57KpHGdtha65grAQimx14E/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZjJi/ZTI1ZjYtYzllMi00/YzBmLWE0ZmQtOTM2/NmI3MDhkOTBmP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTktNHdoRzhLbnBv/TFREZU9ndmVnOGh1/Q0xHNk9OTDBBVjB0/VjFMNDZ6TnY5MCUz/RA.webp',
              'https://img.playbook.com/CqT71ieD_o_AYoOKuRCDyohUNBe1aXD_nZnH42Y6ffs/w:750/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvcHJldmll/d3MvZjFlZjdhOTct/NmQ3NC00NzhiLWEx/MWQtMzE1MjkyNjBm/Y2MxP3R0bD1ob3Vy/bHkmdmVyaWZ5PTE3/Njk2MjMxOTktVW1t/dCUyRmFWazNOOUwl/MkJKWlFhWFhFNkxw/MUZjTTRQUWJLZTVH/RmJhV1Q1NkUlM0Q.webp',
              'https://img.playbook.com/HrB_rQIXOjO_aGe0HlDYYysCQIK-Kz6h-6cbmf-rH2Q/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYmJl/Yjg4YTItODc4Ni00/OGY3LWEwYzAtMzBj/YmUzNWNlNTdkP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTktOEZQN2drNkhk/MGcwOG5rd1REWFNQ/cmtEb1EzZmxLelV3/R1NVZG9LclZQdyUz/RA.webp',
              'https://img.playbook.com/RYyRDNlMhyCMSZmNXLTGjByJg9-9UrOVV0RPrdkojYY/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZGQ4/NTI0NTctYTQzZC00/NjI4LTk1ZTUtNjBh/MWI5MGE3M2IwP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTkteHZ5MDVaZ0dJ/N1I3cWtmQU00RTZo/Z3Btc3R4ckJZbUdE/U2xrR2lhR0szVSUz/RA.webp',
              'https://img.playbook.com/jOjA9oxvyI_UuJRdth4zUchgdQ3DfWQ8cjPvWusXHGI/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYzU0/MTA2MDMtZjY0NC00/N2M1LTk4MzktNDVh/MTE2ZDc3ZjE2P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2MjMx/OTktRWJhNXNvckV6/OXJrOEVZTENKUFlS/NWltNVBoOVc2eFVs/clNCQVc0ZU1nYyUz/RA.webp',
            ].map((image, i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-lg overflow-hidden relative group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Community photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    ❤️
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/the_zion_flamekeepers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
            >
              View More on Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
