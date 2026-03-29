'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Building2, IndianRupee, ArrowRight, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import InquiryForm from '@/components/ui/InquiryForm';

export default function Hero() {
  const containerRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section ref={containerRef} className="relative h-auto lg:h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-dark pt-20 lg:pt-16">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
          alt="Premium City Skyline"
          fill
          priority
          className="object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Noise Texture */}
      <div className="noise-overlay absolute inset-0 z-10 opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <span className="text-[8px] uppercase tracking-[0.3em] text-accent font-black mb-3 block">
                Your One-Stop Real Estate & Property Consultancy
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight uppercase max-w-2xl">
                TRUSTED SOLUTIONS FOR BUSINESSES, <br className="hidden md:block" />
                PROJECTS, AND <span className="text-accent underline decoration-2 underline-offset-4">HOMEOWNERS</span> SINCE 1997
              </h1>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <Link 
                  href="/listings"
                  className="bg-white text-dark hover:bg-accent hover:text-dark px-6 py-3.5 font-bold flex items-center justify-center gap-2 transition-all rounded-sm uppercase tracking-widest text-[10px]"
                >
                  <span>Search Property</span>
                  <Search size={14} />
                </Link>
                <Link 
                  href="/contact"
                  className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-dark px-6 py-3.5 font-bold flex items-center justify-center gap-2 transition-all rounded-sm uppercase tracking-widest text-[10px]"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Mobile/Tablet Inquiry Trigger */}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsFormOpen(true)}
                className="lg:hidden w-full max-w-md bg-white p-0.5 rounded-sm shadow-2xl overflow-hidden mt-10 group"
              >
                <div className="bg-dark px-6 py-5 border-b border-white/5 text-left flex justify-between items-center group-hover:bg-dark/90 transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-widest">Inquire Now</h3>
                    <p className="text-white/40 text-[9px] mt-0.5 tracking-wider uppercase font-medium">Personalized Expert Consultations</p>
                  </div>
                  <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
                    <ArrowRight className="text-dark" size={20} />
                  </div>
                </div>
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-8 text-white/30 uppercase tracking-[0.2em] text-[8px] font-bold"
            >
              <div className="flex flex-col items-center md:items-start gap-0.5">
                <span className="text-white text-base font-bold">25+</span>
                <span>Premium Projects</span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-0.5 border-x border-white/10 px-8">
                <span className="text-white text-base font-bold">27</span>
                <span>Years Legacy</span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-0.5">
                <span className="text-white text-base font-bold">100%</span>
                <span>Verified Data</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Inquiry Form (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-3xl z-[-1] rounded-full" />
              <div className="bg-white p-0.5 rounded-sm shadow-2xl overflow-hidden scale-95 lg:scale-90 origin-right">
                <div className="bg-dark px-6 py-4 border-b border-white/5">
                  <h3 className="text-base font-bold text-white uppercase tracking-widest">Inquire Now</h3>
                  <p className="text-white/40 text-[9px] mt-0.5 tracking-wider uppercase font-medium">Personalized Expert Consultations</p>
                </div>
                <InquiryForm showTitle={false} className="border-none shadow-none !p-8 lg:!p-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Inquiry Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[20005] bg-black/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full max-w-lg bg-white rounded-t-xl sm:rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-dark px-6 py-5 border-b border-white/5 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-widest">Inquire Now</h3>
                  <p className="text-white/40 text-[9px] mt-0.5 tracking-wider uppercase font-medium">Personalized Expert Consultations</p>
                </div>
                <button 
                  onClick={() => setIsFormOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10">
                <InquiryForm showTitle={false} className="border-none shadow-none !p-0 pb-12" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-accent/60 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}
