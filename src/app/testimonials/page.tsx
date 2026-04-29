import dbConnect from '@/lib/db';
import SiteContent from '@/models/SiteContent';
import TestimonialsClient from './TestimonialsClient';
import { buildMetadata } from '@/lib/seo';

export const revalidate = 0;

export const metadata = buildMetadata({
  title: 'Patient Testimonials — Voices of Recovery',
  description: 'Discover the life-changing experiences of thousands of patients who crossed borders to find world-class medical excellence with NTL CareLink.',
  path: '/testimonials',
});

export default async function TestimonialsPage() {
  await dbConnect();
  const doc = await SiteContent.findOne({ pageId: 'home', sectionId: 'testimonials' }).lean();

  return <TestimonialsClient data={doc?.content} />;
}
