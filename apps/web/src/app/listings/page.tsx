'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import PropertyCardSkeleton from '@/components/ui/PropertyCardSkeleton';
import FilterBar from '@/components/ui/FilterBar';
import { ChevronDown, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ListingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(9);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 9, properties.length));
      setIsLoading(false);
    }, 800);
  };

  const displayedProperties = properties.slice(0, displayCount);

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-bg">
      {/* Header Section */}
      <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
        <div className="noise-overlay absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">Our Collection</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Exclusive <span className="text-accent">Properties.</span>
            </h1>
            <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
              Explore our handpicked selection of 25+ premium real estate listings across India&apos;s most prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <FilterBar />

      {/* Main Grid Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10 border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-dark">{properties.length}</span>
              <span className="text-xs uppercase tracking-widest text-muted font-bold">Properties Found</span>
            </div>
            
            <div className="flex items-center gap-6">
              {/* View Switch */}
              <div className="hidden md:flex items-center bg-white border border-border p-1 rounded-sm shadow-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn("p-1.5 rounded-sm transition-all", viewMode === 'grid' ? "bg-accent text-dark" : "text-muted hover:text-dark")}
                >
                  <LayoutGrid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn("p-1.5 rounded-sm transition-all", viewMode === 'list' ? "bg-accent text-dark" : "text-muted hover:text-dark")}
                >
                  <List size={16} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">Sort By:</span>
                <button className="flex items-center gap-2 text-sm font-bold text-dark group">
                  Newest
                  <ChevronDown size={16} className="text-accent group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className={cn(
            "grid gap-8 mb-16",
            viewMode === 'grid' 
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" 
              : "grid-cols-1"
          )}>
            <AnimatePresence mode="popLayout">
              {isLoading && displayedProperties.length === 0 ? (
                Array.from({ length: 9 }).map((_, i) => (
                  <PropertyCardSkeleton key={`skeleton-${i}`} />
                ))
              ) : (
                <>
                  {displayedProperties.map((property, i) => (
                    <PropertyCard key={property.id} property={property} index={i % 9} />
                  ))}
                  {isLoading && Array.from({ length: 3 }).map((_, i) => (
                    <PropertyCardSkeleton key={`skeleton-more-${i}`} />
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {displayCount < properties.length && (
            <div className="flex justify-center">
              <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="group relative px-12 py-5 bg-white border border-dark text-dark overflow-hidden font-bold uppercase tracking-[0.2em] text-xs transition-all hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isLoading ? 'Loading More...' : 'Load More Properties'}
                  {!isLoading && <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-dark w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Cities Strip (Minimal) */}
      <section className="bg-bg py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['Mumbai', 'Pune', 'Bengaluru', 'Delhi NCR', 'Surat', 'Hyderabad', 'Jaipur', 'Ahmedabad'].map(city => (
              <span key={city} className="text-xl font-black text-dark uppercase tracking-widest">{city}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
