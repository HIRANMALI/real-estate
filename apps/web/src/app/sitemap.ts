import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luxury-real-estate.com';

  const propertyUrls = properties.map((property) => ({
    url: `${baseUrl}/listings/${property.slug}`,
    lastModified: new Date(property.postedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...propertyUrls,
  ];
}
