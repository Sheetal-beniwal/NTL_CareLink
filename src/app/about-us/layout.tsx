import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us — Our Mission, Vision & Story',
  description:
    'Learn about NTL CareLink — Africa\'s most trusted medical travel company. Founded by Sultan Ngong, we bridge borders to bring world-class healthcare to patients in Kenya, Uganda, Tanzania, South Sudan and beyond.',
  path: '/about-us',
  keywords: [
    'about NTL CareLink',
    'Sultan Ngong founder',
    'medical travel company africa',
    'healthcare facilitator africa',
    'medical tourism company',
  ],
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
