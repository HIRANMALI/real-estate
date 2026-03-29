'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from '../ui/PropertyCard';
import { Property } from '@/types/property';
import { useState, useEffect, useCallback } from 'react';

type FeaturedListingsProps = {
  properties: Property[];
};

export default function FeaturedListings({ properties }: FeaturedListingsProps) {
  const featured = properties.filter(p => p.isFeatured).slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const updateVisibleItems = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) setVisibleItems(1); // One card on mobile & tablet for better focus, as requested (2 on tablet if strictly requested)
      else setVisibleItems(3);
    }
  }, []);

  // Correcting based on user request: 3 desktop, 2 tablet, 1 mobile
  const getVisibleItemsCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setVisibleItems(getVisibleItemsCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > featured.length - visibleItems ? 0 : next;
    });
  }, [featured.length, visibleItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? featured.length - visibleItems : next;
    });
  }, [featured.length, visibleItems]);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black mb-3 block">Exclusive Properties</span>
            <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight uppercase tracking-tight">
              Featured <span className="text-accent underline decoration-2 underline-offset-4">Highlights.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/listings" 
              className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-dark hover:text-accent transition-colors pb-1 border-b-2 border-accent/20 hover:border-accent"
            >
              Explore All
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrows - Visible on all screens */}
          <div className="absolute top-1/2 -left-5 md:-left-12 -translate-y-1/2 z-40">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-14 md:h-14 bg-white shadow-xl flex items-center justify-center hover:bg-dark hover:text-white transition-all rounded-full border border-dark/5 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 md:-right-12 -translate-y-1/2 z-40">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-14 md:h-14 bg-white shadow-xl flex items-center justify-center hover:bg-dark hover:text-white transition-all rounded-full border border-dark/5 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: visibleItems === 1 
                ? `calc(7.5vw - ${currentIndex * 85}vw - ${currentIndex * 1}rem)` // 7.5vw start + items + gaps
                : `-${currentIndex * (100 / visibleItems)}%` 
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 80 }}
              className="flex gap-4 sm:gap-6"
            >
              {featured.map((property, i) => (
                <div 
                  key={property.id} 
                  className="min-w-[85vw] sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.5rem)] flex-shrink-0"
                >
                  <PropertyCard property={property} index={i} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots (Endpoints) */}
        <div className="flex justify-center gap-3 mt-16">
          {Array.from({ length: featured.length - visibleItems + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === i ? 'w-12 bg-accent' : 'w-3 bg-dark/10 hover:bg-dark/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
