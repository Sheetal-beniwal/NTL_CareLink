import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Find Specialist Doctors — Expert Physicians in India, Thailand & Turkey',
  description:
    'Browse NTL CareLink\'s network of internationally trained specialist doctors in cardiology, oncology, neurology, orthopaedics and more. Get a free medical opinion from India\'s top physicians.',
  path: '/doctors',
  keywords: [
    'specialist doctors india',
    'find doctor india',
    'cardiologist india',
    'oncologist india',
    'neurosurgeon india',
    'orthopaedic surgeon india',
    'best doctors in india for africans',
    'medical second opinion india',
  ],
});

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
