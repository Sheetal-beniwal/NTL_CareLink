// ─── Global SEO Configuration ────────────────────────────────────────────────
// Central source-of-truth for all SEO-related constants and helpers.
// Import and use `buildMetadata()` in every page or layout.

import type { Metadata } from 'next';

export const BASE_URL = 'https://www.ntlcarelink.com';
export const SITE_NAME = 'NTL CareLink';
export const DEFAULT_OG_IMAGE = '/og-image.jpg'; // place 1200×630 image in /public
export const TWITTER_HANDLE = '@ntlcarelink';

export const GLOBAL_KEYWORDS = [
  'medical tourism india',
  'affordable surgery abroad',
  'treatment in india from africa',
  'cost of surgery in india',
  'best hospitals in india for surgery',
  'cardiac surgery cost in india',
  'orthopedic surgery abroad',
  'medical tourism kenya',
  'medical tourism uganda',
  'medical tourism tanzania',
  'NTL CareLink',
  'healthcare in india',
  'top hospitals india',
  'specialist doctors india',
  'medical travel facilitation',
];

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Builds a fully-featured Next.js Metadata object.
 * Includes: title, description, keywords, canonical, Open Graph, Twitter Card, robots.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: [...GLOBAL_KEYWORDS, ...keywords],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

/**
 * Generates JSON-LD for Breadcrumbs
 */
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${BASE_URL}${item.item}`,
    })),
  };
}

/**
 * Generates JSON-LD for Medical Organization / Business
 */
export function generateMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/ntl_logo.jpeg`,
    description: 'Connecting patients to world-class medical care in India, Thailand, and Turkey.',
    telephone: '+918146654185',
    email: 'ntlcarelinkglobal@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
    priceRange: '$$',
  };
}
