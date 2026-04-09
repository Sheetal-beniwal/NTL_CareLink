import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Patient Testimonials — Real Stories of Healing & Recovery',
  description:
    'Read life-changing testimonials from NTL CareLink patients across Kenya, Uganda, South Sudan, Tanzania and beyond. Real success stories of cardiac surgery, kidney transplants, cancer treatment and more.',
  path: '/testimonials',
  keywords: [
    'medical tourism testimonials',
    'patient reviews india hospital',
    'NTL CareLink patient stories',
    'medical travel success stories',
    'cardiac surgery success story africa',
    'organ transplant testimonial',
  ],
});

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
