import { MetadataRoute } from 'next';
import { hospitals } from '@/data/hospitals';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ntlcarelink.com';

  const staticRoutes = [
    '',
    '/about-us',
    '/contact-support',
    '/destinations',
    '/doctors',
    '/hospitals',
    '/register',
    '/testimonials',
    '/treatments',
    '/treatments/all',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const hospitalRoutes = hospitals.map((hospital) => ({
    url: `${baseUrl}/hospitals/${hospital.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...hospitalRoutes];
}
