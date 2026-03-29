'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Mehta',
    role: 'Tech Entrepreneur',
    content: 'The level of professionalism and the quality of listings at SHINE NATIVE are unmatched. They truly understand what luxury real estate means in the Indian context.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Priya Kapoor',
    role: 'Interior Designer',
    content: 'As a designer, I appreciate the architectural beauty and structural integrity of the properties they showcase. Finding my dream studio was seamless.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Rajesh Khanna',
    role: 'Corporate Executive',
    content: 'I was looking for a very specific type of penthouse in South Mumbai, and SHINE NATIVE delivered exactly what I imagined, if not better. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1506794778684-2666a0350d60?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              Words of <span className="text-accent underline decoration-2 underline-offset-4">Excellence</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Trusted by India&apos;s finest minds</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="text-accent/20 absolute top-6 right-8" size={60} />
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-white/70 leading-relaxed mb-10 font-medium flex-grow">
                  &quot;{t.content}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/30 pointer-events-none">
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      width={48}
                      height={48}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.name}</h4>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
