export type Property = {
  id: string;
  slug: string;
  title: string;
  type: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'Penthouse' | 'Farmhouse';
  status: 'For Sale' | 'For Rent';
  badge?: 'Featured' | 'New' | 'Reduced' | 'Sold Out';
  price: number;           // in INR
  priceLabel: string;      // e.g. "₹2.4 Cr" or "₹45,000/mo"
  city: string;
  locality: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  floor?: string;
  totalFloors?: number;
  parking: boolean;
  furnishing: 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished';
  images: string[];        // use Unsplash URLs
  description: string;
  amenities: string[];     // e.g. ['Swimming Pool', 'Gym']
  yearBuilt?: number;
  isFeatured: boolean;
  postedDate: string;      // ISO date string
};
