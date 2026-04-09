import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Top Partner Hospitals — JCI Accredited Facilities in India, Thailand & Turkey',
  description:
    'Explore NTL CareLink\'s curated network of JCI-accredited hospitals: Apollo, Medanta, Fortis, Artemis, Bumrungrad, Memorial and more. World-class care at affordable costs.',
  path: '/hospitals',
  keywords: [
    'best hospitals in india',
    'JCI accredited hospitals india',
    'Apollo hospital india',
    'Medanta hospital',
    'Fortis hospital',
    'Artemis hospital gurugram',
    'Bumrungrad hospital bangkok',
    'Memorial hospital istanbul',
    'affordable hospitals abroad',
  ],
});

export default function HospitalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
