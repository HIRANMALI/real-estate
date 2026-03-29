import Hero from '@/components/sections/Hero';
import Image from 'next/image';
import StatsBar from '@/components/sections/StatsBar';
import FeaturedListings from '@/components/sections/FeaturedListings';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import { properties } from '@/data/properties';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedListings properties={properties} />
      
      <WhyChooseUs />
      
      {/* Cities Highlight */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black mb-3 block">Premium Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark uppercase tracking-tight">
              Major Cities <span className="text-accent underline decoration-2 underline-offset-4">Presence.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&q=80&w=800', count: 12 },
              { name: 'Pune', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800', count: 8 },
              { name: 'Bengaluru', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', count: 15 },
              { name: 'Delhi NCR', img: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=800', count: 10 },
            ].map((city) => (
              <Link 
                key={city.name} 
                href={`/listings?city=${city.name}`}
                className="group relative h-80 rounded-sm overflow-hidden shadow-lg"
              >
                <Image 
                  src={city.img} 
                  alt={city.name} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white mb-1 uppercase">{city.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-black">{city.count} verified listings</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
