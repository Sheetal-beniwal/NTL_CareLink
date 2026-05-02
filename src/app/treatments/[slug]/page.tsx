import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { specialties } from '@/data/treatments';
import { hospitals as hospitalsData } from '@/data/hospitals';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import SEOStructuredData from '@/app/Components/SEOStructuredData';
import { 
  CheckCircle2, 
  ChevronRight, 
  Building2, 
  Star, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  ClipboardList,
  Phone
} from 'lucide-react';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';

export async function generateStaticParams() {
  return specialties.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const specialty = specialties.find((s) => s.id === params.slug);
  if (!specialty) return {};

  return buildMetadata({
    title: `${specialty.label} — World-Class Treatment & Specialists`,
    description: specialty.description,
    path: `/treatments/${specialty.id}`,
    keywords: [`${specialty.label} surgery`, `${specialty.label} cost india`, `${specialty.label} specialist`],
  });
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const specialty = specialties.find((s) => s.id === params.slug);
  if (!specialty) notFound();

  const matchedHospitals = hospitalsData.filter((h) => specialty.hospitals.includes(h.id));

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Treatments', item: '/treatments' },
    { name: specialty.label, item: `/treatments/${specialty.id}` },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: specialty.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOStructuredData data={breadcrumb} />
      {specialty.faqs.length > 0 && <SEOStructuredData data={faqSchema} />}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#003B5C] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #00A3AD 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3AD]/20 text-[#00E0D2] text-xs font-bold uppercase tracking-widest mb-6">
              <specialty.icon size={14} /> Specialized Treatment
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {specialty.label}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              {specialty.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="px-8 py-4 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white font-black rounded-2xl transition-all shadow-xl text-sm flex items-center justify-center gap-2">
                <ClipboardList size={18} /> Get Free Quote
              </Link>
              <a href="tel:+918146654185" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <Phone size={18} /> Call Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Hospitals List */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-[#003B5C] mb-8">Top Accredited Hospitals</h2>
                <div className="grid gap-6">
                  {matchedHospitals.map((h) => (
                    <div key={h.id} className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:border-[#00A3AD]/30 transition-all">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden relative shrink-0">
                          <img src={h.img} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black text-[#003B5C] uppercase tracking-widest border border-slate-200">
                            {h.badge}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-xl font-black text-[#003B5C] mb-1">{h.name}</h3>
                              <p className="text-sm text-slate-500 flex items-center gap-1.5 font-bold">
                                <MapPin size={14} className="text-[#00A3AD]" /> {h.city}, {h.country}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                              <Star size={14} fill="#f6ad55" stroke="none" />
                              <span className="text-sm font-black text-[#003B5C]">{h.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                            {h.desc}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-auto">
                            <Link href={`/hospitals/${h.id}`} className="flex-1 md:flex-none px-6 py-3 bg-[#003B5C] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#00A3AD] transition-all text-center">
                              View Profile
                            </Link>
                            <Link href="/register" className="flex-1 md:flex-none px-6 py-3 border-2 border-slate-100 text-[#003B5C] font-bold rounded-xl text-xs uppercase tracking-widest hover:border-[#003B5C] transition-all text-center">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {specialty.faqs.length > 0 && (
                <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
                  <h2 className="text-3xl font-black text-[#003B5C] mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {specialty.faqs.map((faq, i) => (
                      <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-[#003B5C] mb-3 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-lg bg-[#00A3AD]/10 text-[#00A3AD] flex items-center justify-center shrink-0 text-xs">Q</span>
                          {faq.q}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed pl-9">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <aside className="space-y-6">
              <div className="bg-[#003B5C] rounded-3xl p-8 text-white sticky top-32">
                <ShieldCheck size={40} className="text-[#00E0D2] mb-6" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Expert Coordination</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Our team handles everything from visa processing to hospital coordination for your {specialty.label.toLowerCase()} journey.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Priority hospital appointments',
                    'Cost comparison of facilities',
                    'Complimentary visa assistance',
                    '24/7 on-ground support'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/90">
                      <CheckCircle2 size={16} className="text-[#00E0D2] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="w-full py-4 bg-[#00A3AD] hover:bg-[#00E0D2] hover:text-[#003B5C] text-white font-black rounded-2xl transition-all shadow-xl text-center block uppercase tracking-widest text-xs">
                  Request Free Quote
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Specialties */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#003B5C] mb-4">Other Specialized Treatments</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">Explore our range of world-class medical services across India, Thailand, and Turkey.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.filter(s => s.id !== specialty.id).slice(0, 4).map((s) => (
              <Link key={s.id} href={`/treatments/${s.id}`} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#00A3AD] hover:shadow-lg transition-all group">
                <s.icon size={32} className="text-[#003B5C] group-hover:text-[#00A3AD] mb-4 mx-auto" />
                <span className="font-bold text-[#003B5C] text-sm block">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
