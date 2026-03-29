import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { properties } from '@/data/properties';
import ImageGallery from '@/components/ui/ImageGallery';
import PropertyCard from '@/components/ui/PropertyCard';
import Badge from '@/components/ui/Badge';
import { Bed, Bath, Maximize, MapPin, Calendar, Building, ParkingCircle, Info, CheckCircle2 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface PropertyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return { title: 'Property Not Found' };

  return {
    title: `${property.title} in ${property.locality}, ${property.city}`,
    description: property.description.substring(0, 160),
    openGraph: {
      images: [property.images[0]],
    },
  };
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return notFound();

  const relatedProperties = properties
    .filter((p) => p.id !== property.id && (p.city === property.city || p.type === property.type))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-bg">
      {/* Header Info (Mobile Only) */}
      <div className="lg:hidden container mx-auto px-4 py-8 bg-surface border-b border-border">
        <div className="flex flex-wrap gap-2 mb-4">
          {property.badge && <Badge variant="accent">{property.badge}</Badge>}
          <Badge variant="dark">{property.type}</Badge>
        </div>
        <h1 className="text-3xl font-black text-dark mb-2 uppercase tracking-tight">{property.title}</h1>
        <div className="flex items-center gap-2 text-muted text-sm mb-4">
          <MapPin size={16} className="text-accent" />
          <span>{property.locality}, {property.city}</span>
        </div>
        <div className="text-2xl font-black text-accent uppercase tracking-tight">{property.priceLabel}</div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <ImageGallery images={property.images} />

            {/* Desktop Header Info */}
            <div className="hidden lg:block space-y-4">
              <div className="flex flex-wrap gap-3 mb-6">
                {property.badge && <Badge variant="accent" className="px-4 py-1.5">{property.badge}</Badge>}
                <Badge variant="dark" className="px-4 py-1.5">{property.type}</Badge>
                <Badge variant="outline" className="px-4 py-1.5 uppercase tracking-widest">{property.status}</Badge>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-5xl font-black text-dark mb-4 uppercase tracking-tighter">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted text-lg">
                    <MapPin size={20} className="text-accent" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="text-right">
                    <div className="text-4xl font-black text-accent mb-2 uppercase tracking-tight">{property.priceLabel}</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Price on Inquiry</div>
                </div>
              </div>
            </div>

            {/* Key Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                  <Bed className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Bedrooms</p>
                  <p className="text-lg font-bold text-dark">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                  <Bath className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Bathrooms</p>
                  <p className="text-lg font-bold text-dark">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                  <Maximize className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Area</p>
                  <p className="text-lg font-bold text-dark">{property.areaSqFt} Sq Ft</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
                  <ParkingCircle className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Parking</p>
                  <p className="text-lg font-bold text-dark">{property.parking ? 'Available' : 'No'}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-dark flex items-center gap-3 uppercase tracking-widest">
                <Info size={24} className="text-accent" />
                Description
              </h3>
              <p className="text-lg text-muted font-light leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Details Table */}
            <div className="bg-white border border-border p-8 rounded-sm space-y-6">
              <h3 className="text-xl font-black text-dark border-b border-border pb-4 uppercase tracking-widest">Property Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                <DetailItem label="Property ID" value={property.id} icon={Building} />
                <DetailItem label="Furnishing" value={property.furnishing} icon={Building} />
                <DetailItem label="Status" value={property.status} icon={CheckCircle2} />
                <DetailItem label="Posted On" value={new Date(property.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} icon={Calendar} />
                {property.floor && <DetailItem label="Floor" value={property.floor} icon={Building} />}
                {property.yearBuilt && <DetailItem label="Year Built" value={property.yearBuilt.toString()} icon={Calendar} />}
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-dark uppercase tracking-widest">Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-white border border-border rounded-sm hover:border-accent transition-colors">
                    <CheckCircle2 className="text-accent" size={18} />
                    <span className="text-sm font-medium text-dark uppercase tracking-widest text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-dark uppercase tracking-widest">Location</h3>
              <div className="h-[400px] w-full bg-slate-200 rounded-sm overflow-hidden relative group">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) invert(0.05)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=DUMMY_KEY&q=${encodeURIComponent(property.address)}`}
                ></iframe>
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-black text-2xl uppercase tracking-[0.2em]">Refined Living Awaits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* Sidebar Action Button replaced with simple View more/Contact link if needed */}
              <div className="bg-white p-6 rounded-sm border border-border space-y-4">
                <h4 className="text-lg font-black text-dark uppercase tracking-[0.2em] text-center">Interested?</h4>
                <p className="text-muted text-xs text-center">Contact our specialists for a private viewing and personalized presentation.</p>
                <Link 
                  href="/contact" 
                  className="w-full inline-block bg-dark text-white text-center py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-dark transition-all"
                >
                  Contact Expert
                </Link>
              </div>
              
              {/* Agent Card (Dummy) */}
              <div className="bg-dark p-6 rounded-sm border border-white/10 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-accent uppercase tracking-[0.1em]">Aditya Singhania</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Luxury Portfolio Manager</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-sm font-bold uppercase tracking-widest transition-all">
                    View Portfolio
                  </button>
                  <button className="w-full py-3 bg-accent/20 text-accent hover:bg-accent hover:text-dark border border-accent/20 rounded-sm text-sm font-bold uppercase tracking-widest transition-all">
                    Direct Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        {relatedProperties.length > 0 && (
          <div className="mt-24 pt-24 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-3 block">Related Property</span>
                <h2 className="text-4xl font-black text-dark uppercase tracking-tight">
                  Similar <span className="text-accent">Curations.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailItem({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
      <div className="flex items-center gap-3 text-muted">
        <Icon size={18} className="text-accent" />
        <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <span className="font-bold text-dark">{value}</span>
    </div>
  );
}
