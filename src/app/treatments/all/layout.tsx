import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All Treatments & Procedures — Full List of Medical Services',
  description:
    'Browse the complete list of medical specialities and surgical procedures available through NTL CareLink. Cardiac, oncology, neurology, orthopaedics, transplants, IVF and more — at world-class hospitals.',
  path: '/treatments/all',
  keywords: [
    'all medical treatments india',
    'surgery procedures india list',
    'medical procedures abroad',
    'bone marrow transplant india',
    'IVF fertility treatment india',
    'robotic heart surgery india',
    'spine surgery india',
    'radiosurgery india',
  ],
});

export default function TreatmentsAllLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
