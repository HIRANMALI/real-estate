'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property } from '@/types/property';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Badge from './Badge';

type PropertyCardProps = {
  property: Property;
  index?: number;
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-sm flex flex-col h-full"
    >
      {/* Image Section */}
      <Link href={`/listings/${property.slug}`} className="relative block h-80 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.badge && (
            <div className={cn(
              "px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm shadow-xl",
              property.badge === 'Featured' ? "bg-accent text-dark" : "bg-white text-dark"
            )}>
              {property.badge}
            </div>
          )}
          <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white rounded-sm shadow-xl border border-white/10">
            {property.type}
          </div>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <p className="text-white text-2xl font-black uppercase tracking-tight">
            {property.priceLabel}
          </p>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-muted mb-3">
          <MapPin size={12} className="text-accent" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
            {property.locality}, {property.city}
          </span>
        </div>
        
        <Link href={`/listings/${property.slug}`}>
          <h3 className="text-xl font-black text-dark mb-3 group-hover:text-accent transition-colors line-clamp-1 uppercase tracking-tight">
            {property.title}
          </h3>
        </Link>
        
        <p className="text-muted/60 text-[11px] line-clamp-2 mb-6 flex-grow leading-relaxed uppercase tracking-wider font-medium">
          {property.description.substring(0, 100)}...
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-0 border-t border-black/5 pt-6">
          <div className="flex flex-col items-center gap-1.5">
            <Bed size={14} className="text-accent" />
            <span className="text-[9px] font-black uppercase tracking-widest text-dark">{property.bedrooms} Bed</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-black/5 px-2">
            <Bath size={14} className="text-accent" />
            <span className="text-[9px] font-black uppercase tracking-widest text-dark">{property.bathrooms} Bath</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Maximize size={14} className="text-accent" />
            <span className="text-[9px] font-black uppercase tracking-widest text-dark">{property.areaSqFt} SqFt</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
