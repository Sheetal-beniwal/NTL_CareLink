import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Support — 24/7 Medical Travel Assistance',
  description:
    'Reach NTL CareLink\'s dedicated support team 24/7. Call, WhatsApp or email us for medical coordination, visa assistance, hospital appointments, and expert guidance on your healthcare journey.',
  path: '/contact-support',
  keywords: [
    'contact NTL CareLink',
    'medical travel support',
    'healthcare helpline africa',
    'medical tourism contact',
    '24/7 medical assistance',
  ],
});

export default function ContactSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
