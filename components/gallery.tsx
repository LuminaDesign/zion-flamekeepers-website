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
    image: 'https://img.playbook.com/Fyvs_n_pNpoaLYrh27fQ5BZZACBYoq14tS0uJVuMP7Y/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZjdk/M2VlNDAtZjk0NS00/MTM2LWFhMWMtY2Q3/NDg1ZTRjNGJlP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktYTlRaEdTZU91/aWtPeiUyRmc4emVI/UVFjb3hobEw0bnFI/JTJGWVpnYjB6UjZV/RTQlM0Q.webp',
    title: 'Trail Adventures',
    date: 'Weekly Events',
    description: 'Experience nature while building strength and community',
  },
  {
    id: 3,
    image: 'https://img.playbook.com/iSu6mC9iOB2O2sZbKZe8ZgyL30NuROjqO60ymBAuxlQ/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvMTM1/M2E3ZDEtZWE1MC00/NDc3LTg3YzctZjMz/NTJkMTNhYmM4P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktUFJtZ2h0T1VT/MmVrWFNDUGE1MTVM/aXQ5TCUyQkY1WXlI/ZmVoNTJ2blBFYmZz/JTNE.webp',
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
              'https://img.playbook.com/LzERTevxdsCYk9Iv-mKg1xUk7B85-KDU4UsSd-lC5Tc/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvMDFh/NWM4ZTMtN2VmMy00/ZjVjLWJjNWMtMWRk/YzNiZTM5N2YwP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktcGh1NlNMMzJJ/ZCUyQm5vbHpUSlc2/d01ZaU90TjFyWmpK/RVdNb3dabkhvTTZz/JTNE.webp',
                'https://img.playbook.com/IeHGiwzgpeBVW2SyIMVuMSUJbYvgcXYpXa9GKuJEMz0/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYjY3/ODI0ZjAtYmExMS00/MDE0LTg0MWItODU0/YjU3NTRlODQ0P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktODg0czloa1E1/a1k4b2xUcEVqJTJG/NDFsUjN2cHlwclhM/cXFqQTJzMkV4QzFN/JTNE.webp',
                'https://img.playbook.com/chtw6xhwu15uAFfNIZWupEK64mlFRwofhoMVJuNGxjQ/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvODYz/YzdkZDUtZTY4ZS00/NTdmLWEzNWQtMjAz/Y2UyMzhjZmNjP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTE1/OTktNGQ5UXZlRVBi/UnlDOFFFRTRmTVlK/UFB2WSUyRjEwZXgl/MkZ2MFRhJTJCanQ2/QSUyQnc4JTNE.webp',
                'https://img.playbook.com/lkN1hVXSsntmnlbdjBKV_m9a8NESHOugPmxz7kotMd4/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYzI3/YTY2MGMtMmIyNi00/YjU5LWEyYzctNjc3/ZGMzZjVlZmQ5P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktbXc4d3ZkQnhm/NXc3ZTZNbjZFV3Ru/cmJnNk1mSGxkTlBQ/eDEydzZTaWxkOCUz/RA.webp',
                'https://img.playbook.com/SE7hUaVft_wEAB3QEyJ7AktepcA1eQz3clJZlsVwE9s/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYzhk/ZjhkOGEtZGZlNS00/MDI2LTgxOTItZmJm/YjllNDEyNzNlP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktVHNneVFqTW9K/czJ3T21Vc3BXVTl6/Yk0xdTlVZ3R6M296/WlltVm4zTUY5byUz/RA.webp',
                'https://img.playbook.com/1gqYC1erQtNGycegdssrIKrrcUpYRjz25UF8TJwZFS8/w:500/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvcHJldmll/d3MvODc1MjA4ZTUt/MzhiMC00N2M3LThk/ZTUtZWNjZGU4NDhh/NjhkP3R0bD1ob3Vy/bHkmdmVyaWZ5PTE3/Njk2OTUxOTktZHZO/SzNMdlBtVnVzSm03/TlclMkJYQ2ZtVGMl/MkJPRVRiNDBRMXk5/NEthbUF2SG8lM0Q.webp',
                'https://img.playbook.com/Fyvs_n_pNpoaLYrh27fQ5BZZACBYoq14tS0uJVuMP7Y/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZjdk/M2VlNDAtZjk0NS00/MTM2LWFhMWMtY2Q3/NDg1ZTRjNGJlP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktYTlRaEdTZU91/aWtPeiUyRmc4emVI/UVFjb3hobEw0bnFI/JTJGWVpnYjB6UjZV/RTQlM0Q.webp',
                'https://img.playbook.com/SyBygv7hyn0Sem_DehT4tFcJ1aff5j6bfrOR0jQwb_k/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvMmQz/N2FmYjAtNDRkZC00/MDdjLWI1YjgtNTZm/N2I4NjU3MTdhP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktcktmV240NklR/YkZjRDVRJTJGbU5Y/NEFZODltVGlvRUty/cXRWSFVMRjRFOW5z/JTNE.webp',
                'https://img.playbook.com/GEYQ9-jEE2q6RRrGRoH9KHhWIXNhS2xTro1yqhW5N3M/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYzU0/MTA2MDMtZjY0NC00/N2M1LTk4MzktNDVh/MTE2ZDc3ZjE2P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktTXlsdyUyRmdR/aGFqdVZMUU84eHk0/cUVDQSUyQmNINnNF/VzlSc1lvNEdHdlox/SUklM0Q.webp',
                'https://img.playbook.com/E68gQ_v8Sb_VDb85HTlvctmFz1YMQf8tEoxLJxQGnuE/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYTRj/ZGU3ZjctNTkxYy00/N2Y5LWE4ZjgtZTMx/MjM2MWM5ZGI1P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktUG4xbEh4VlJ4/eiUyRllvNmtrM2R3/N0daSlQ1UGtrdTRw/YU8zanR4aFlxeHQ4/JTNE.webp',
                'https://img.playbook.com/W3_VKliPsfUilM2rRpz_Dqou_EfkbF8IzoRpxN8UGoA/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZjI0/MjNhMWItNjYyOS00/ZWI4LTkzNGUtMTIx/MWI2YjJkMGQ2P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktUHhpQk5xT1hm/VSUyQnZ6eVREcyUy/QlUyb3NoeWdpVzBW/U1dqNFUzaG5FMFVY/OFklM0Q.webp',
                'https://img.playbook.com/lOtP0Lj4gnLNMI3xyhryEBRSqx35ZDMHlt3IKm86RwU/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvYzVk/YzExZDktM2RlZi00/ODUwLWIyZGYtMDRh/YjA1YTVlNWRiP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk2OTUx/OTktb0FQYUd5OVNq/S052MDNoeDhudlJU/blZsaXFEbkx5ayUy/RjJNSlc4dWtRYldV/JTNE.webp',
                'https://img.playbook.com/600FdhXwJ7vlfQEAMJxsmhuZwRkAdd2EEFaUp9Z2e5w/w:500/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvcHJldmll/d3MvZmU2NzM2MmEt/NzFjZi00MDQ1LTgz/NzItNmY5NzQyNTkw/MTJjP3R0bD1ob3Vy/bHkmdmVyaWZ5PTE3/Njk2OTg3OTktWiUy/RnV6bTNFVCUyQkFz/NHM3aGJpRmhkcjlZ/aUZBc0t5cHcyMTkw/WjRYd1RSOEUlM0Q.webp',
                'https://img.playbook.com/zp_KmvuxBtMwaYmTG2K79m7hqVw_owpUU7VhANb4IjA/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvNzlm/OTFiOGQtODg0ZS00/MDYwLWJkN2ItYThl/YjI0ZjY1OWQ5P3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk3MDU5/OTktelJCbXFYRHkl/MkJhdXdxdHBzd29H/NiUyRldZZVRObzNN/Y3pUVXpnZU9Hd1pG/b0klM0Q.webp',
                'https://img.playbook.com/Dn93rumjRxs6Z6rlCi-zjXdkbunbC7dnMWLaIhEZ7fE/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvNDRk/YjIwYmUtYjkyYS00/ZTNkLThhNjMtY2Rh/OWVlZjViMmQxP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk3MDU5/OTktYVFyNXNHVG1T/MmpkN3B1V1AyR1JF/TkVjYUNCd2E5JTJG/bFFOYmhoQmclMkZC/MWMlM0Q.webp',
                'https://img.playbook.com/fIUR9QADDsJhFggSIYh-RE4odXOobyWQP3cNZDybF8A/w:1000/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvZDJm/ZmMyYjQtZDcxMi00/YTcxLTkzM2MtMzQ1/MTYyNWFmMTYyP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3Njk3MDU5/OTktRmV3UU9jZmJL/YXJ6akl2ckhIMnhp/dW9xOFVxNkNmNU1y/bVVtTDBsZGxDcyUz/RA.webp',
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
