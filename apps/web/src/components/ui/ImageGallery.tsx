'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group">
        <Image
          src={images[activeImage]}
          alt="Property Main Image"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors" />
        
        <button 
          onClick={() => openLightbox(activeImage)}
          className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <Maximize2 size={24} className="text-dark" />
        </button>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={cn(
              "relative h-20 md:h-28 rounded-sm overflow-hidden border-2 transition-all",
              activeImage === i ? "border-accent scale-95" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="200px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
            >
              <X size={40} />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={images[activeImage]}
                alt="Property Full View"
                fill
                className="object-contain"
              />
              
              {/* Navigation */}
              <button 
                onClick={() => setActiveImage((activeImage - 1 + images.length) % images.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden md:flex text-white hover:text-accent"
              >
                <ChevronLeft size={60} />
              </button>
              <button 
                onClick={() => setActiveImage((activeImage + 1) % images.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden md:flex text-white hover:text-accent"
              >
                <ChevronRight size={60} />
              </button>
            </div>
            
            <div className="absolute bottom-10 text-white font-bold tracking-widest uppercase text-xs">
              {activeImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
