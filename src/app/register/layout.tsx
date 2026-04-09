import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Book a Free Consultation — Start Your Medical Journey',
  description:
    'Book a free medical consultation with NTL CareLink. Tell us your condition and treatment needs — our expert coordinators will match you with the right hospital and specialist within 24 hours.',
  path: '/register',
  keywords: [
    'book medical consultation',
    'free medical opinion india',
    'register medical travel',
    'medical appointment booking',
    'healthcare consultation africa',
  ],
  noIndex: false,
});

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
