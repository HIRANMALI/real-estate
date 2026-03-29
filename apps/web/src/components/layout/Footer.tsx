import Link from 'next/link';
import { Home, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'About Us', href: '/contact' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '#' },
];

const propertyTypes = [
  { name: 'Apartments', href: '/listings?type=Apartment' },
  { name: 'Villas', href: '/listings?type=Villa' },
  { name: 'Plots', href: '/listings?type=Plot' },
  { name: 'Commercial', href: '/listings?type=Commercial' },
];

const cities = [
  { name: 'Mumbai', href: '/listings?city=Mumbai' },
  { name: 'Pune', href: '/listings?city=Pune' },
  { name: 'Ahmedabad', href: '/listings?city=Ahmedabad' },
  { name: 'Bengaluru', href: '/listings?city=Bengaluru' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Tagline */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <BrandLogo size={40} className="transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold tracking-tight text-white">
                SHINE NATIVE
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Curating the finest luxury properties across India. Experience excellence in real estate with our premium editorial property portal.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-dark transition-all rounded-full group">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-dark transition-all rounded-full group">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-dark transition-all rounded-full group">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-dark transition-all rounded-full group">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Property Types</h4>
              <ul className="space-y-4">
                {propertyTypes.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  123 Luxury Lane, BKC, Mumbai 400051
                </span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  +91 75740 02596
                </span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  contact@shinenative.com
                </span>
              </li>
              <li className="flex gap-4 items-center group">
                <MessageCircle className="text-accent shrink-0" size={18} />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  WhatsApp Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities Bar */}
        <div className="py-8 border-t border-white/10 border-b mb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Our Presence:</span>
            {cities.map((city) => (
              <Link key={city.name} href={city.href} className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider">
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 tracking-wider uppercase">
          <p>© 2026 SHINE NATIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
