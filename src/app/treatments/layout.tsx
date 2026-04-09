import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Treatments & Specialties — Cardiac, Oncology, Neurology & More',
  description:
    'Explore world-class medical treatments available through NTL CareLink: cardiac surgery, cancer care, kidney transplant, robotic joint replacement, neurosurgery and more — at JCI-accredited hospitals in India, Thailand & Turkey.',
  path: '/treatments',
  keywords: [
    'cardiac surgery india',
    'cancer treatment india',
    'kidney transplant india',
    'liver transplant india',
    'robotic surgery india',
    'neurosurgery india',
    'IVF treatment india',
    'affordable cancer treatment abroad',
    'organ transplant cost india',
    'orthopedic surgery india',
  ],
});

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
