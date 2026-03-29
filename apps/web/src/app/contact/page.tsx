import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Luxury Real Estate',
  description: 'Get in touch with our luxury property specialists for personalized assistance in finding your dream home.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-bg">
      {/* Hero Header */}
      <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
        <div className="noise-overlay absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Contact <span className="text-accent">Our Experts.</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Whether you are looking to buy, rent, or invest, our dedicated team is here to guide you through every step of the journey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-black text-dark mb-8 uppercase tracking-widest">Office Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-dark">Main Headquarter</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    123 Luxury Lane, 15th Floor, Platinum Tower, <br />
                    BKC, Mumbai - 400051, Maharashtra
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-dark">Business Hours</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Monday — Friday: 9:00 AM - 8:00 PM <br />
                    Saturday: 10:00 AM - 6:00 PM <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-dark uppercase tracking-widest">Direct Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="tel:+919999999999" className="flex items-center gap-4 p-5 bg-white border border-border rounded-sm hover:border-accent group transition-all">
                  <Phone className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Phone Number</p>
                    <p className="text-lg font-bold text-dark">+91 999 999 9999</p>
                  </div>
                </a>
                <a href="mailto:contact@shinenative.com" className="flex items-center gap-4 p-5 bg-white border border-border rounded-sm hover:border-accent group transition-all">
                  <Mail className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Email Address</p>
                    <p className="text-lg font-bold text-dark">contact@shinenative.com</p>
                  </div>
                </a>
              </div>
              <a href="https://wa.me/919999999999" target="_blank" className="flex items-center gap-4 p-5 bg-[#25D366]/5 border border-[#25D366]/20 rounded-sm hover:bg-[#25D366]/10 group transition-all">
                <MessageCircle className="text-[#25D366] group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#25D366]/60">WhatsApp Support</p>
                  <p className="text-lg font-bold text-dark">Instant Property Inquiry</p>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">Follow Our Updates</h4>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
                  <Link key={i} href="#" className="p-4 bg-white border border-border hover:bg-dark hover:text-white transition-all rounded-sm group shadow-sm">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.1)' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=DUMMY_KEY&q=Bandra+Kurla+Complex,Mumbai"
        ></iframe>
        <div className="absolute inset-x-0 bottom-0 py-8 bg-dark/80 backdrop-blur-md border-t border-white/10 flex items-center justify-center">
            <p className="text-accent font-black text-2xl tracking-[0.2em] uppercase">Visit Our Gallery in Mumbai</p>
        </div>
      </section>
    </div>
  );
}
