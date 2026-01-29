import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.svg"
                  alt="Zion Flamekeepers"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="font-bold text-lg">Zion Flamekeepers</span>
            </div>
            <p className="text-sm opacity-80 mb-6">
              Premier Fitness & Wellness Coaching in Nairobi. Ignite your strength. Fuel your wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/the_zion_flamekeepers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/254758957926"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Group Fitness
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Yoga Classes
                </a>
              </li>
              <li>
                <a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">
                  Group Hiking
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sports Nutrition
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Details</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+254758957926"
                className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>0758 957 926</span>
              </a>
              <a
                href="mailto:zionflamekeepers@gmail.com"
                className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>zionflamekeepers@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 text-center text-sm opacity-80">
          <p>
            © {currentYear} The Zion Flamekeepers. All rights reserved. | Nairobi, Kenya
          </p>
          <p className="mt-2">Ignite Your Strength. Fuel Your Wellness. 🔥</p>
        </div>
      </div>
    </footer>
  )
}
